import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionWrapper from './SectionWrapper';
import { Github, ExternalLink } from 'lucide-react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    title: 'React Assets Generator',
    description: 'Production-ready React Assets Code Generator - Type-safe asset imports for React projects. Published on NPM with 2 stars.',
    tech: ['TypeScript', 'Node.js', 'CLI', 'NPM'],
    github: 'https://github.com/mukarrammahmoud/react-assets-generator',
    live: 'https://www.npmjs.com/package/react-assets-gen',
    image: 'bg-gradient-to-br from-blue-500/20 to-purple-500/20',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce app with Firebase authentication, real-time cart management, and secure payment integration.',
    tech: ['Flutter', 'Firebase', 'Authentication', 'Dart'],
    github: 'https://github.com/mukarrammahmoud/ecommerce_app',
    live: 'https://github.com/mukarrammahmoud/ecommerce_app',
    image: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'WhatsApp Clone',
    description: 'A fully functional WhatsApp clone with real-time messaging, built with Flutter. Features authentic UI/UX design.',
    tech: ['Flutter', 'Firebase', 'Real-time DB', 'Material UI'],
    github: 'https://github.com/mukarrammahmoud/whatsapp',
    live: 'https://github.com/mukarrammahmoud/whatsapp',
    image: 'bg-gradient-to-br from-orange-500/20 to-red-500/20',
  },
  {
    title: 'News App',
    description: 'News application built with Flutter and Hive for local storage. Clean architecture with offline-first approach.',
    tech: ['Flutter', 'Hive', 'REST API', 'Offline Storage'],
    github: 'https://github.com/mukarrammahmoud/news-app',
    live: 'https://github.com/mukarrammahmoud/news-app',
    image: 'bg-gradient-to-br from-indigo-500/20 to-cyan-500/20',
  },
  {
    title: 'Course Management System',
    description: 'Simple project to add, view and register students into courses. Built with Django for backend management.',
    tech: ['Django', 'Python', 'SQLite', 'Bootstrap'],
    github: 'https://github.com/mukarrammahmoud/course_web_by-django',
    live: 'https://github.com/mukarrammahmoud/course_web_by-django',
    image: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'University Management System',
    description: 'Comprehensive university system built with C# and SQL Server for managing students, courses, and academic records.',
    tech: ['C#', 'SQL Server', '.NET', 'Windows Forms'],
    github: 'https://github.com/mukarrammahmoud/University-System-by-C-sharp-with-sqlserver',
    live: 'https://github.com/mukarrammahmoud/University-System-by-C-sharp-with-sqlserver',
    image: 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20',
  },
];

const Projects: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });
    },
    { scope: container }
  );

  return (
    <SectionWrapper id="projects">
      <div ref={container}>
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Featured Projects</h3>
          </div>
          <div className="hidden md:block text-muted-foreground text-sm">
            Scroll to explore →
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card min-w-[90vw] sm:min-w-[400px] md:min-w-[450px] snap-center bg-card border border-border rounded-2xl overflow-hidden flex flex-col group hover:border-primary/50 transition-colors duration-300"
            >
              {/* Image Placeholder */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a 
                    href={project.live} 
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
