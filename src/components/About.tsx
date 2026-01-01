import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionWrapper from './SectionWrapper';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.about-text', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
    },
    { scope: container }
  );

  return (
    <SectionWrapper id="about" className="min-h-[80vh] flex items-center">
      <div ref={container} className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="about-text text-sm font-bold text-primary tracking-widest uppercase mb-4">About Me</h2>
          <h3 className="about-text text-3xl md:text-4xl font-bold mb-6 leading-tight">
            More than just code. <br />
            <span className="text-muted-foreground">I build solutions.</span>
          </h3>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p className="about-text">
              My journey started with a curiosity for how things work on the web. 
              Over the years, I've evolved from tweaking CSS to architecting full-stack applications 
              that serve thousands of users.
            </p>
            <p className="about-text">
              I don't just write code; I focus on the "why" behind every feature. 
              Whether it's optimizing a React dashboard for performance or structuring a 
              Django API for scalability, my goal is always the same: 
              <span className="text-foreground font-medium"> create value through technology.</span>
            </p>
            <p className="about-text">
              When I'm not coding, I'm exploring new tech stacks, contributing to open source, 
              or refining my mobile development skills with Flutter.
            </p>
          </div>
        </div>
        
        <div className="relative about-text">
          <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative group">
             {/* Placeholder for profile image - using a gradient/pattern for now */}
             <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-105 transition-transform duration-700"></div>
             <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 font-mono text-sm">
               [Profile Image Placeholder]
             </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
