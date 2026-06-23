import { useRef } from 'react'
import { Github, ExternalLink, Package, ArrowUpRight } from 'lucide-react'
import { gsap, ScrollTrigger, useGSAP } from '../lib/gsap'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'

const projects = [
  {
    title: 'React Assets Generator',
    description:
      'Production-ready React Assets Code Generator - Type-safe asset imports for React projects. Published on NPM with 2 stars.',
    tech: ['TypeScript', 'Node.js', 'CLI', 'NPM'],
    github: 'https://github.com/mukarrammahmoud/react-assets-generator',
    live: 'https://www.npmjs.com/package/react-assets-gen',
    accent: 'from-blue-500 via-indigo-500 to-violet-600',
    glow: 'bg-blue-500/25',
    featured: true,
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Full-featured e-commerce app with Firebase authentication, real-time cart management, and secure payment integration.',
    tech: ['Flutter', 'Firebase', 'Authentication', 'Dart'],
    github: 'https://github.com/mukarrammahmoud/ecommerce_app',
    live: 'https://github.com/mukarrammahmoud/ecommerce_app',
    accent: 'from-emerald-500 via-green-500 to-teal-600',
    glow: 'bg-emerald-500/25',
  },
  {
    title: 'WhatsApp Clone',
    description:
      'A fully functional WhatsApp clone with real-time messaging, built with Flutter. Features authentic UI/UX design.',
    tech: ['Flutter', 'Firebase', 'Real-time DB', 'Material UI'],
    github: 'https://github.com/mukarrammahmoud/whatsapp',
    live: 'https://github.com/mukarrammahmoud/whatsapp',
    accent: 'from-orange-500 via-amber-500 to-red-500',
    glow: 'bg-orange-500/25',
  },
  {
    title: 'News App',
    description:
      'News application built with Flutter and Hive for local storage. Clean architecture with offline-first approach.',
    tech: ['Flutter', 'Hive', 'REST API', 'Offline Storage'],
    github: 'https://github.com/mukarrammahmoud/news-app',
    live: 'https://github.com/mukarrammahmoud/news-app',
    accent: 'from-cyan-500 via-sky-500 to-indigo-500',
    glow: 'bg-cyan-500/25',
  },
  {
    title: 'Course Management System',
    description:
      'Simple project to add, view and register students into courses. Built with Django for backend management.',
    tech: ['Django', 'Python', 'SQLite', 'Bootstrap'],
    github: 'https://github.com/mukarrammahmoud/course_web_by-django',
    live: 'https://github.com/mukarrammahmoud/course_web_by-django',
    accent: 'from-fuchsia-500 via-purple-500 to-pink-500',
    glow: 'bg-fuchsia-500/25',
  },
  {
    title: 'University Management System',
    description:
      'Comprehensive university system built with C# and SQL Server for managing students, courses, and academic records.',
    tech: ['C#', 'SQL Server', '.NET', 'Windows Forms'],
    github: 'https://github.com/mukarrammahmoud/University-System-by-C-sharp-with-sqlserver',
    live: 'https://github.com/mukarrammahmoud/University-System-by-C-sharp-with-sqlserver',
    accent: 'from-yellow-500 via-amber-500 to-orange-600',
    glow: 'bg-amber-500/25',
  },
]

const projectIcons = [
  <Package key="pkg" className="w-7 h-7" />,
  <svg key="cart" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  <svg key="chat" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
  <svg key="news" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>,
  <svg key="book" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  <svg key="uni" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
]

const Projects = () => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    (_, contextSafe) => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduced) return

      ScrollTrigger.batch('.project-card', {
        interval: 0.1,
        batchMax: 2,
        start: 'top 90%',
        once: true,
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { y: 70, opacity: 0, rotateX: 14 },
            {
              y: 0,
              opacity: 1,
              rotateX: 0,
              duration: 0.9,
              stagger: 0.1,
              ease: 'power3.out',
              overwrite: true,
            },
          )
        },
      })

      if (!contextSafe) return

      const cleanups: (() => void)[] = []

      container.current?.querySelectorAll('.project-card').forEach((card) => {
        const inner = card.querySelector('.project-card-inner')
        const spotlight = card.querySelector('.project-card-spotlight')
        const visual = card.querySelector('.project-card-visual')
        if (!inner || !spotlight) return

        gsap.set(spotlight, { opacity: 0 })

        const onMove = contextSafe((e: Event) => {
          const mouse = e as MouseEvent
          const rect = card.getBoundingClientRect()
          const x = mouse.clientX - rect.left
          const y = mouse.clientY - rect.top
          const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -7
          const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 7

          gsap.to(inner, {
            rotateX,
            rotateY,
            y: -6,
            duration: 0.45,
            ease: 'power2.out',
            overwrite: true,
          })
          gsap.to(spotlight, {
            x: x - 128,
            y: y - 128,
            opacity: 0.9,
            duration: 0.35,
            ease: 'power2.out',
            overwrite: true,
          })
          if (visual) {
            gsap.to(visual, {
              scale: 1.04,
              duration: 0.5,
              ease: 'power2.out',
              overwrite: true,
            })
          }
        })

        const onLeave = contextSafe(() => {
          gsap.to(inner, {
            rotateX: 0,
            rotateY: 0,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            overwrite: true,
          })
          gsap.to(spotlight, {
            opacity: 0,
            duration: 0.4,
            overwrite: true,
          })
          if (visual) {
            gsap.to(visual, {
              scale: 1,
              duration: 0.6,
              ease: 'power3.out',
              overwrite: true,
            })
          }
        })

        card.addEventListener('mousemove', onMove)
        card.addEventListener('mouseleave', onLeave)
        cleanups.push(() => {
          card.removeEventListener('mousemove', onMove)
          card.removeEventListener('mouseleave', onLeave)
        })
      })

      const onLinkClick = contextSafe((e: Event) => {
        const link = e.currentTarget as HTMLElement
        gsap.fromTo(
          link,
          { scale: 0.9 },
          { scale: 1, duration: 0.45, ease: 'elastic.out(1, 0.45)' },
        )
      })

      container.current?.querySelectorAll('.project-link').forEach((link) => {
        link.addEventListener('click', onLinkClick)
      })

      return () => {
        cleanups.forEach((fn) => fn())
        container.current?.querySelectorAll('.project-link').forEach((link) => {
          link.removeEventListener('click', onLinkClick)
        })
      }
    },
    { scope: container },
  )

  return (
    <SectionWrapper id="projects" className="min-h-screen">
      <div ref={container} className="[perspective:1200px]">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          subtitle="A showcase of my recent work across web and mobile development"
          align="center"
          className="mx-auto"
        />
        <p className="text-sm text-primary font-semibold text-center -mt-8 mb-10">
          Showing all {projects.length} projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-card group relative ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div className="project-card-inner relative h-full [transform-style:preserve-3d] will-change-transform">
                <div
                  className={`project-card-spotlight pointer-events-none absolute w-64 h-64 rounded-full blur-3xl opacity-0 z-0 ${project.glow}`}
                />

                <div
                  className={`relative h-full overflow-hidden rounded-3xl border border-border/80 bg-card/60 backdrop-blur-sm transition-colors duration-500 group-hover:border-primary/40 ${
                    project.featured ? 'md:grid md:grid-cols-[1.1fr_1fr] md:min-h-[280px]' : ''
                  }`}
                >
                  <div
                    className={`project-card-visual relative overflow-hidden ${
                      project.featured ? 'min-h-[200px] md:min-h-full' : 'h-44 sm:h-48'
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${project.accent} opacity-90`}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(0,0,0,0.35))]" />

                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size-[24px_24px]" />

                    <span className="absolute -bottom-4 -right-2 text-[7rem] sm:text-[8rem] font-black leading-none text-white/10 select-none pointer-events-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="absolute top-5 left-5 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg">
                        {projectIcons[index]}
                      </div>
                      {project.featured && (
                        <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-white/15 text-white/90 border border-white/20 backdrop-blur-sm">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="relative p-6 sm:p-7 flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h4 className="text-xl sm:text-2xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h4>
                      <span className="shrink-0 text-xs font-mono text-muted-foreground/60 mt-1">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm sm:text-[0.95rem] leading-relaxed mb-5 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-muted/80 text-muted-foreground border border-border/60 group-hover:border-primary/20 group-hover:text-foreground transition-colors duration-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl border border-border bg-background/80 hover:bg-muted/60 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Projects
