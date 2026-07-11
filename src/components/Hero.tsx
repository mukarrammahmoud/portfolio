import { ArrowRight, Mail } from 'lucide-react'
import { useRef } from 'react'
import { gsap, useGSAP } from '../lib/gsap'
import { splitIntoChars, splitIntoWords } from '../lib/textSplit'
import { useTranslation } from '../lib/i18n/I18nContext'

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
      const headlineWords = headline ? splitIntoWords(headline) : []
      const sublineChars = subline ? splitIntoChars(subline) : []

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
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 pt-20 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="hero-orb-1 absolute top-1/4 -end-20 w-72 h-72 bg-primary/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="hero-orb-2 absolute bottom-1/4 -start-16 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center w-full">
        <div className="hero-content max-w-4xl">
          <h2 className="hero-greeting text-primary font-medium text-base sm:text-lg md:text-xl mb-3 sm:mb-4 tracking-wide">
            {t('hero.greeting', {
              name: language === 'en' ? 'Mukarram Mahmoud' : 'مكرم محمود',
            })}
          </h2>

          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2 sm:mb-3 leading-[1.05]"
          >
            {t('hero.title1')}
          </h1>
          <span
            ref={sublineRef}
            className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-muted-foreground mb-4 sm:mb-6 leading-[1.05]"
          >
            {t('hero.title2')}
          </span>

          <p className="hero-desc text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 sm:mb-10 leading-relaxed">
            {t('hero.desc')}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <button
              onClick={scrollToProjects}
              className="hero-btn group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full font-medium text-base sm:text-lg hover:opacity-90 transition-opacity cursor-pointer"
            >
              {t('hero.viewProjects')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
            </button>
            <button
              onClick={scrollToContact}
              className="hero-btn flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-border bg-background hover:bg-muted/50 rounded-full font-medium text-base sm:text-lg transition-colors cursor-pointer"
            >
              {t('hero.contactMe')}
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={imageRef}
          className="hero-image relative mx-auto lg:mx-0 w-56 sm:w-64 md:w-72 lg:w-80 shrink-0 will-change-transform"
        >
          <div className="hero-image-glow absolute -inset-8 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="hero-image-ring absolute -inset-3 border border-primary/30 rounded-3xl pointer-events-none" />
          <div className="hero-image-ring absolute -inset-6 border border-dashed border-primary/15 rounded-[2rem] pointer-events-none" />
          <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative shadow-2xl shadow-primary/10 ring-1 ring-border/50">
            <div className="hero-image-photo w-full h-full will-change-transform">
              <img
                src="/mukarram.jpg"
                alt="Mukarram Mahmoud"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-primary/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
