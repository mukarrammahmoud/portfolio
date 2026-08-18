import { useRef } from 'react'
import { Briefcase, GraduationCap } from 'lucide-react'
import { ScrollTrigger, gsap, useGSAP } from '../lib/gsap'
import { useTranslation } from '../lib/i18n/I18nContext'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'

const experienceData = [
  {
    type: 'work',
    role: 'Mid junior Frontend Engineer',
    company: 'Sofa for Digital Solutions',
    period: '2024 - Present',
    description:
      'Building scalable web applications. Implemented a new design system and improved site performance.',
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
    description:
      'Focused on software engineering and algorithms. Graduated with honors.',
  },
]

const Experience = () => {
  const { t, isRtl } = useTranslation()
  const container = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      if (reduced) return

      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: 1,
        },
        scaleY: 0,
        transformOrigin: 'top center',
        ease: 'none',
      })

      ScrollTrigger.batch('.timeline-item', {
        start: 'top 88%',
        once: true,
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { x: isRtl ? 40 : -40, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.2,
              ease: 'power3.out',
              overwrite: true,
            },
          )
          gsap.fromTo(
            batch.map((el) => el.querySelector('.timeline-dot')),
            { scale: 0 },
            {
              scale: 1,
              duration: 0.5,
              stagger: 0.2,
              ease: 'back.out(2)',
              overwrite: true,
            },
          )
        },
      })
    },
    { scope: container, dependencies: [isRtl] },
  )

  return (
    <SectionWrapper id="experience">
      <div ref={container} className="max-w-4xl mx-auto">
        <SectionHeading
          label={t('experience.label')}
          title={t('experience.title')}
          align="center"
          className="mx-auto"
        />

        <div className="relative ms-4 md:ms-12 space-y-12">
          <div
            ref={lineRef}
            className="absolute start-0 top-0 bottom-0 w-0.5 bg-border origin-top"
          />

          {experienceData.map((item, index) => (
            <div key={index} className="timeline-item relative ps-8 md:ps-12">
              <div className="timeline-dot absolute -start-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="absolute -start-12 md:-start-16 top-0 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground">
                {item.type === 'work' ? (
                  <Briefcase className="w-5 h-5" />
                ) : (
                  <GraduationCap className="w-5 h-5" />
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="text-xl font-bold">
                  {t(`experience.${index}.role` as any)}
                </h4>
                <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-sm border border-border w-fit mt-2 sm:mt-0">
                  {t(`experience.${index}.period` as any)}
                </span>
              </div>

              <h5 className="text-lg font-medium text-primary mb-4">
                {t(`experience.${index}.company` as any)}
              </h5>
              <p className="text-muted-foreground leading-relaxed">
                {t(`experience.${index}.desc` as any)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Experience
