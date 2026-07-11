import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import { splitIntoWords } from '../lib/textSplit'

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

const SectionHeading = ({
  label,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeadingProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useGSAP(
    () => {
      const container = containerRef.current
      const titleEl = titleRef.current
      if (!container || !titleEl) return

      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      if (reduced) return

      const words = splitIntoWords(titleEl)

      gsap.set(words, { yPercent: 110 })
      gsap.set('.section-label-line', {
        scaleX: 0,
        transformOrigin: 'left center',
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })

      tl.from('.section-label', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
        .to(
          '.section-label-line',
          { scaleX: 1, duration: 0.6, ease: 'power2.inOut' },
          '-=0.2',
        )
        .to(
          words,
          { yPercent: 0, duration: 0.7, stagger: 0.06, ease: 'power4.out' },
          '-=0.3',
        )

      if (subtitle) {
        tl.from(
          '.section-subtitle',
          { y: 24, opacity: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.4',
        )
      }
    },
    { scope: containerRef, dependencies: [title, subtitle] },
  )

  const alignClass =
    align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div
      ref={containerRef}
      className={`mb-12 flex flex-col ${alignClass} ${className}`}
    >
      <div className="section-label flex flex-col gap-2 mb-4">
        <span className="text-sm font-bold text-primary tracking-widest uppercase">
          {label}
        </span>
        <span className="section-label-line block h-px w-12 bg-primary" />
      </div>
      <h3
        ref={titleRef}
        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
      >
        {title}
      </h3>
      {subtitle && (
        <p className="section-subtitle text-muted-foreground max-w-2xl mt-4 text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
