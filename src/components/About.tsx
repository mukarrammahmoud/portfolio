import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'

const About = () => {
  const container = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduced) return

      gsap.from('.about-paragraph', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
      })

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        scale: 0.85,
        opacity: 0,
        rotate: -4,
        duration: 1.1,
        ease: 'power3.out',
      })

      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: -40,
        ease: 'none',
      })
    },
    { scope: container },
  )

  return (
    <SectionWrapper id="about" className="min-h-[80vh] flex items-center">
      <div ref={container} className="grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <SectionHeading
            label="About Me"
            title="More than just code. I build solutions."
          />
          <div className="space-y-6 text-lg text-muted-foreground -mt-6">
            <p className="about-paragraph">
              My journey started with a curiosity for how things work on the web.
              Over the years, I&apos;ve evolved from tweaking CSS to architecting full-stack applications
              that serve thousands of users.
            </p>
            <p className="about-paragraph">
              I don&apos;t just write code; I focus on the &quot;why&quot; behind every feature.
              Whether it&apos;s optimizing a React dashboard for performance or structuring a
              Django API for scalability, my goal is always the same:{' '}
              <span className="text-foreground font-medium">create value through technology.</span>
            </p>
            <p className="about-paragraph">
              When I&apos;m not coding, I&apos;m exploring new tech stacks, contributing to open source,
              or refining my mobile development skills with Flutter.
            </p>
          </div>
        </div>

        <div ref={imageRef} className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-105 transition-transform duration-700" />
            <img
              src="/mukarram.jpg"
              alt="Mukarram"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl pointer-events-none" />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default About
