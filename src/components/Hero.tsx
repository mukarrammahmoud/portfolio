import { ArrowRight, Mail } from 'lucide-react'
import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import { useTranslation } from '../lib/i18n/I18nContext'
import { splitIntoChars, splitIntoWords } from '../lib/textSplit'

const Hero = () => {
  const { t, language, isRtl } = useTranslation()
  const container = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const sublineRef = useRef<HTMLSpanElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useGSAP(
    (_, contextSafe) => {
      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      if (reduced) return

      const headline = headlineRef.current
      const subline = sublineRef.current
      const headlineWords =
        headline && language == 'en' ? splitIntoWords(headline) : []
      const sublineChars =
        subline && language == 'en' ? splitIntoChars(subline) : []

      gsap.set(headlineWords, { yPercent: 120, rotate: isRtl ? -3 : 3 })
      gsap.set(sublineChars, { opacity: 0, y: 20 })

      const tl = gsap.timeline({
        delay: 0.15,
        defaults: { ease: 'power4.out' },
      })

      tl.from('.hero-greeting', { y: 30, opacity: 0, duration: 0.8 })
        .to(
          headlineWords,
          { yPercent: 0, rotate: 0, duration: 1, stagger: 0.08 },
          '-=0.4',
        )
        .to(
          sublineChars,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.02,
            ease: 'back.out(1.4)',
          },
          '-=0.5',
        )
        .from('.hero-desc', { y: 40, opacity: 0, duration: 0.9 }, '-=0.3')
        .from(
          '.hero-btn',
          {
            y: 24,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'back.out(1.5)',
          },
          '-=0.5',
        )
        .from(
          '.hero-scroll-hint',
          { opacity: 0, y: -10, duration: 0.6 },
          '-=0.2',
        )
        .from(
          imageRef.current,
          {
            scale: 0.8,
            opacity: 0,
            rotation: isRtl ? 6 : -6,
            duration: 1.2,
            ease: 'power3.out',
          },
          '-=0.9',
        )
        .from(
          '.hero-image-ring',
          {
            scale: 0.6,
            opacity: 0,
            rotation: isRtl ? 90 : -90,
            duration: 1.4,
            ease: 'power2.out',
          },
          '-=1.1',
        )

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      })

      scrollTl
        .to(
          imageRef.current,
          {
            y: -140,
            x: isRtl ? -60 : 60,
            rotation: isRtl ? -12 : 12,
            scale: 0.82,
            ease: 'none',
          },
          0,
        )
        .to('.hero-image-photo', { y: -30, scale: 1.08, ease: 'none' }, 0)
        .to(
          '.hero-image-ring',
          {
            rotation: isRtl ? -45 : 45,
            scale: 1.15,
            opacity: 0.4,
            ease: 'none',
          },
          0,
        )
        .to(
          '.hero-image-glow',
          { y: 80, scale: 1.4, opacity: 0, ease: 'none' },
          0,
        )
        .to('.hero-content', { y: -60, opacity: 0.3, ease: 'none' }, 0)

      gsap.to('.hero-orb-1', {
        x: isRtl ? -30 : 30,
        y: -40,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to('.hero-orb-2', {
        x: isRtl ? 25 : -25,
        y: 35,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to('.hero-scroll-hint', {
        y: 8,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      if (!contextSafe) return

      const onButtonClick = contextSafe((e: Event) => {
        const btn = e.currentTarget as HTMLElement
        gsap.fromTo(
          btn,
          { scale: 0.92 },
          { scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.4)' },
        )
      })

      container.current?.querySelectorAll('.hero-btn').forEach((btn) => {
        btn.addEventListener('click', onButtonClick)
      })

      return () => {
        container.current?.querySelectorAll('.hero-btn').forEach((btn) => {
          btn.removeEventListener('click', onButtonClick)
        })
      }
    },
    { scope: container, dependencies: [isRtl] },
  )

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={container}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="absolute inset-x-6 top-28 h-px bg-border pointer-events-none" />
      <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center w-full">
        <div className="hero-content max-w-4xl">
          <h2 className="hero-greeting !font-sans text-primary font-semibold text-sm mb-5 tracking-[0.16em] uppercase">
            {t('hero.greeting', {
              name: language === 'en' ? 'Mukarram Mahmoud' : 'مكرم محمود',
            })}
          </h2>

          <h1
            ref={headlineRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] mb-1 leading-[1.02]"
          >
            {t('hero.title1')}
          </h1>
          <span
            ref={sublineRef}
            className="block font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] text-muted-foreground mb-6 leading-[1.02]"
          >
            {t('hero.title2')}
          </span>

          <p className="hero-desc text-lg md:text-xl text-muted-foreground max-w-xl mb-9 leading-relaxed">
            {t('hero.desc')}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <button
              onClick={scrollToProjects}
              className="hero-btn group flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:brightness-90 transition-colors cursor-pointer"
            >
              {t('hero.viewProjects')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
            </button>
            <button
              onClick={scrollToContact}
              className="hero-btn flex items-center justify-center gap-2 px-6 py-3 border border-border bg-card hover:bg-muted rounded-lg font-medium transition-colors cursor-pointer"
            >
              {t('hero.contactMe')}
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={imageRef}
          className="hero-image relative mx-auto lg:mx-0 w-60 sm:w-72 lg:w-80 shrink-0 will-change-transform"
        >
          <div className="hero-image-ring absolute -start-4 -top-4 w-full h-full border border-primary pointer-events-none" />
          <div className="aspect-[4/5] rounded-sm overflow-hidden bg-muted relative border border-border shadow-[0_18px_45px_rgba(45,40,34,0.12)]">
            <div className="hero-image-photo w-full h-full will-change-transform">
              <img
                src="/mukarram.jpg"
                alt="Mukarram Mahmoud"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-[#8f684f]/10 mix-blend-color pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
