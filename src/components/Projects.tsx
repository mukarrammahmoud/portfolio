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

  // Removed GSAP animation to fix visibility issues
  // Projects will now be always visible without animation conflicts

  return (
    <SectionWrapper id="projects" className="min-h-screen">
      <div ref={container}>
        <div className="mb-12 text-center">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-2">
            A showcase of my recent work across web and mobile development
          </p>
          <p className="text-sm text-primary font-semibold">
            Showing all {projects.length} projects
          </p>
        </div>

        {/* Grid Container - All Projects Visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-card border border-border rounded-2xl overflow-hidden flex flex-col group hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
            >
              {/* Enhanced Image with Icon Overlay */}
              <div className={`h-56 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-black/40 group-hover:from-black/20 group-hover:to-black/30 transition-all duration-500" />
                
                {/* Floating decorative elements */}
                <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  {index === 0 && <Package className="w-8 h-8 text-white drop-shadow-lg" />}
                  {index === 1 && <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                  {index === 2 && <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>}
                  {index === 3 && <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>}
                  {index === 4 && <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
                  {index === 5 && <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                </div>

                {/* Animated dots pattern */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card/80 to-transparent backdrop-blur-sm" />
                
                {/* Project number badge */}
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-sm">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-1">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs font-medium px-3 py-1.5 bg-muted text-muted-foreground rounded-full">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-secondary hover:bg-secondary/80 rounded-lg transition-all hover:scale-105"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 rounded-lg transition-all hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" /> View
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
