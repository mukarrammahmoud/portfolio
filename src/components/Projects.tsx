import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionWrapper from './SectionWrapper';
import { Github, ExternalLink, Package } from 'lucide-react';

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
              className="project-card min-w-[90vw] sm:min-w-[400px] md:min-w-[450px] snap-center bg-card border border-border rounded-2xl overflow-hidden flex flex-col group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Enhanced Image with Icon Overlay */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 group-hover:from-black/10 group-hover:to-black/30 transition-all duration-300" />
                
                {/* Floating decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {index === 0 && <Package className="w-10 h-10 text-white/80" />}
                  {index === 1 && <svg className="w-10 h-10 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                  {index === 2 && <svg className="w-10 h-10 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>}
                  {index === 3 && <svg className="w-10 h-10 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>}
                  {index === 4 && <svg className="w-10 h-10 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
                  {index === 5 && <svg className="w-10 h-10 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                </div>
                
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> View Project
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
