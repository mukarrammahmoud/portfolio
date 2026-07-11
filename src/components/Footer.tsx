import { useRef } from 'react'
import { Github, Linkedin, Mail, Package } from 'lucide-react'
import { gsap, useGSAP } from '../lib/gsap'
import { useTranslation } from '../lib/i18n/I18nContext'

const Footer = () => {
  const { t, language } = useTranslation()
  const footerRef = useRef<HTMLElement>(null)

  useGSAP(
    (_, contextSafe) => {
      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      if (reduced) return

      gsap.from('.footer-content > *', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 95%',
          toggleActions: 'play none none reverse',
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
      })

      if (!contextSafe) return

      const onSocialClick = contextSafe((e: Event) => {
        const link = e.currentTarget as HTMLElement
        gsap.fromTo(
          link,
          { y: -4, scale: 0.85 },
          { y: 0, scale: 1, duration: 0.5, ease: 'back.out(2)' },
        )
      })

      footerRef.current?.querySelectorAll('.footer-social').forEach((link) => {
        link.addEventListener('click', onSocialClick)
      })

      return () => {
        footerRef.current
          ?.querySelectorAll('.footer-social')
          .forEach((link) => {
            link.removeEventListener('click', onSocialClick)
          })
      }
    },
    { scope: footerRef },
  )

  return (
    <footer
      ref={footerRef}
      className="bg-muted/30 py-12 border-t border-border"
    >
      <div className="footer-content max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-start">
          <h3 className="text-2xl font-bold mb-2 text-foreground tracking-tight">
            {language === 'en' ? 'Mukarram Mahmoud' : 'مكرم محمود'}
          </h3>
          <p className="text-muted-foreground text-sm">{t('footer.desc')}</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/mukarrammahmoud"
            className="footer-social text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mukarram-mahmoud-95a82b280"
            className="footer-social text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.npmjs.com/~mukarrammahmoud"
            className="footer-social text-muted-foreground hover:text-primary transition-colors"
          >
            <Package className="w-5 h-5" />
          </a>
          <a
            href="mailto:mukarrammahmoud@gmail.com"
            className="footer-social text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}

export default Footer
