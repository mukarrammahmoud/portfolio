import { useRef, useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { gsap, useGSAP } from '../lib/gsap'
import { useTranslation } from '../lib/i18n/I18nContext'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'
import type { TranslationKey } from '../lib/i18n/translations'

const navLinks = [
  { nameKey: 'nav.about' as TranslationKey, href: '#about' },
  { nameKey: 'nav.skills' as TranslationKey, href: '#skills' },
  { nameKey: 'nav.projects' as TranslationKey, href: '#projects' },
  { nameKey: 'nav.experience' as TranslationKey, href: '#experience' },
  { nameKey: 'nav.contact' as TranslationKey, href: '#contact' },
]

const Navbar = () => {
  const { t, language, setLanguage, isRtl } = useTranslation()
  const navRef = useRef<HTMLElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useGSAP(
    (_, contextSafe) => {
      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      if (!reduced) {
        gsap.from(navRef.current, {
          y: -80,
          opacity: 0,
          duration: 1,
          delay: 0.8,
          ease: 'power3.out',
        })
        gsap.from('.nav-link', {
          y: -20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          delay: 1.1,
          ease: 'power2.out',
        })
      }

      const handleScroll = () => setScrolled(window.scrollY > 50)
      window.addEventListener('scroll', handleScroll, { passive: true })

      const onNavClick = contextSafe?.((e: Event) => {
        const link = e.currentTarget as HTMLElement
        gsap.fromTo(
          link,
          { y: -2 },
          { y: 0, duration: 0.4, ease: 'back.out(2)' },
        )
        gsap.fromTo(
          link.querySelector('.nav-underline'),
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.35,
            ease: 'power2.out',
            transformOrigin: isRtl ? 'right center' : 'left center',
          },
        )
      })

      if (onNavClick) {
        navRef.current?.querySelectorAll('.nav-link').forEach((link) => {
          link.addEventListener('click', onNavClick)
        })
      }

      return () => {
        window.removeEventListener('scroll', handleScroll)
        if (onNavClick) {
          navRef.current?.querySelectorAll('.nav-link').forEach((link) => {
            link.removeEventListener('click', onNavClick)
          })
        }
      }
    },
    { scope: navRef, dependencies: [isRtl] },
  )

  useGSAP(
    () => {
      const menu = mobileMenuRef.current
      if (!menu) return

      if (isOpen) {
        gsap.fromTo(
          menu,
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.45, ease: 'power3.out' },
        )
        gsap.from('.mobile-nav-link', {
          x: isRtl ? 24 : -24,
          opacity: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: 'power2.out',
          delay: 0.1,
        })
      }
    },
    { scope: navRef, dependencies: [isOpen, isRtl] },
  )

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      // ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          <button
            type="button"
            className="nav-link flex items-center gap-2 font-bold text-xl group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Logo
              size={40}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-foreground tracking-tight">
              {t('nav.logo')}
            </span>
          </button>

          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <button
                key={link.nameKey}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="nav-link relative text-sm font-medium hover:text-primary transition-colors pb-1"
              >
                {t(link.nameKey)}
                <span className="nav-underline absolute bottom-0 left-0 right-0 h-px bg-primary origin-left rtl:origin-right scale-x-0" />
              </button>
            ))}
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="px-3.5 py-2 rounded-full bg-muted hover:bg-accent transition-all duration-300 text-xs font-bold flex items-center gap-1.5 text-foreground cursor-pointer border border-border/40 hover:border-primary/20 h-10"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4 text-foreground/75" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('#contact')}
              className="nav-link px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {t('nav.hire')}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="p-2.5 rounded-full bg-muted hover:bg-accent transition-all duration-300 text-foreground cursor-pointer flex items-center justify-center w-10 h-10 border border-border/40"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4 text-foreground/75" />
            </button>
            <button
              type="button"
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden overflow-hidden absolute top-20 left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 shadow-lg"
        >
          {navLinks.map((link) => (
            <button
              key={link.nameKey}
              type="button"
              onClick={() => scrollToSection(link.href)}
              className="mobile-nav-link text-start text-lg font-medium hover:text-primary transition-colors"
            >
              {t(link.nameKey)}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollToSection('#contact')}
            className="mobile-nav-link mt-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg text-center font-medium hover:opacity-90 transition-opacity"
          >
            {t('nav.hire')}
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
