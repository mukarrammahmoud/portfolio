import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Mail } from 'lucide-react';

gsap.registerPlugin(useGSAP);

const Hero: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>(null);

  useGSAP(
    () => {
      tl.current = gsap.timeline()
        .from('.hero-text-reveal', {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power4.out',
        })
        .from('.hero-btn', {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
        }, '-=0.5');
    },
    { scope: container }
  );

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={container} className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 pt-20 max-w-7xl mx-auto">
      <div className="max-w-4xl">
        <h2 className="hero-text-reveal text-primary font-medium text-base sm:text-lg md:text-xl mb-3 sm:mb-4 tracking-wide">
          Hello, I'm a Full-Stack Developer
        </h2>
        <h1 className="hero-text-reveal text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
          Building digital <br />
          <span className="text-muted-foreground">experiences that matter.</span>
        </h1>
        <p className="hero-text-reveal text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 sm:mb-10 leading-relaxed">
          I craft minimal, fast, and scalable applications using React, Flutter, and Python. 
          Focused on solving real problems with clean code.
        </p>
        
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
          <button 
            onClick={scrollToProjects}
            className="hero-btn group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full font-medium text-base sm:text-lg hover:opacity-90 transition-all hover:scale-105 active:scale-95"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={scrollToContact}
            className="hero-btn flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-border bg-background hover:bg-muted/50 rounded-full font-medium text-base sm:text-lg transition-all hover:scale-105 active:scale-95"
          >
            Contact Me
            <Mail className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 -z-10 opacity-10 blur-3xl pointer-events-none overflow-hidden">
        <div className="w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      </div>
    </section>
  );
};

export default Hero;
