import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionWrapper from './SectionWrapper';
import { Briefcase, GraduationCap } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const experienceData = [
  {
    type: 'work',
    role: 'Mid junior Frontend Engineer',
    company: 'Sofa for Digital Solutions',
    period: '2024 - Present',
    description: 'Building scalable web applications. Implemented a new design system and improved site performance .',
  },
  {
    type: 'work',
    role: 'Mobile Developer',
    company: 'Freelancer',
    period: '2022 - 2024',
    description: 'Building scalable mobile applications By using Flutter.',
  },
  {
    type: 'education',
    role: 'B.Sc. in Computer Science',
    company: 'Azal University',
    period: '2021 - 2024',
    description: 'Focused on software engineering and algorithms. Graduated with honors.',
  },
];

const Experience: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray('.timeline-item');
      items.forEach((item: any) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        });
      });
    },
    { scope: container }
  );

  return (
    <SectionWrapper id="experience">
      <div ref={container} className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">My Journey</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Experience & Education</h3>
        </div>

        <div className="relative border-l-2 border-border ml-4 md:ml-12 space-y-12">
          {experienceData.map((item, index) => (
            <div key={index} className="timeline-item relative pl-8 md:pl-12">
              {/* Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>

              {/* Icon */}
              <div className="absolute -left-12 md:-left-16 top-0 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground">
                {item.type === 'work' ? <Briefcase className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="text-xl font-bold">{item.role}</h4>
                <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                  {item.period}
                </span>
              </div>
              
              <h5 className="text-lg font-medium text-primary mb-4">{item.company}</h5>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
