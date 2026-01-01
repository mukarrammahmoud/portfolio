import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionWrapper from './SectionWrapper';
import { Code, Smartphone, Server, Wrench } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const skillsData = [
  {
    category: 'Frontend',
    icon: <Code className="w-6 h-6" />,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Next.js', 'Vite'],
  },
  {
    category: 'Mobile',
    icon: <Smartphone className="w-6 h-6" />,
    skills: ['Flutter', 'Dart', 'Riverpod', 'Android', 'iOS'],
  },
  {
    category: 'Backend',
    icon: <Server className="w-6 h-6" />,
    skills: ['Django', 'FastAPI', 'Python', 'PostgreSQL', 'Node.js'],
  },
  {
    category: 'Tools',
    icon: <Wrench className="w-6 h-6" />,
    skills: ['Git', 'Docker', 'Supabase', 'Firebase', 'Figma'],
  },
];

const Skills: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.skill-card', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      });
    },
    { scope: container }
  );

  return (
    <SectionWrapper id="skills" className="bg-muted/20">
      <div ref={container}>
        <div className="mb-12">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">My Arsenal</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="skill-card bg-card border border-border p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{category.category}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
