import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import { useTranslation } from '../lib/i18n/I18nContext'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'

const About = () => {
  const { t, isRtl } = useTranslation()
  const container = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
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
        rotate: isRtl ? 4 : -4,
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
    { scope: container, dependencies: [isRtl] },
  )

  return (
    <SectionWrapper id="about" className="min-h-[80vh] flex items-center">
      <div
        ref={container}
        className="grid md:grid-cols-2 gap-12 items-center w-full"
      >
        <div>
          <SectionHeading label={t('about.label')} title={t('about.title')} />
          <div className="space-y-6 text-lg text-muted-foreground -mt-6">
            <p className="about-paragraph">{t('about.p1')}</p>
            <p className="about-paragraph">
              {t('about.p2', { highlight: '' })}
              <span className="text-foreground font-medium">
                {t('about.p2.highlight')}
              </span>
            </p>
            <p className="about-paragraph">{t('about.p3')}</p>
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
          <div className="absolute -bottom-6 -end-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -top-6 -start-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl pointer-events-none" />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default About
