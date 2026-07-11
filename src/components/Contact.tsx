import { useRef } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { gsap, useGSAP } from '../lib/gsap'
import { useTranslation } from '../lib/i18n/I18nContext'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'

const Contact = () => {
  const { t } = useTranslation()
  const container = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useGSAP(
    (_, contextSafe) => {
      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      if (reduced) return

      gsap.from('.contact-info-item', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        x: -30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
      })

      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })

      if (!contextSafe) return

      const onFocus = contextSafe((e: Event) => {
        const input = e.currentTarget as HTMLElement
        gsap.to(input, {
          scale: 1.01,
          duration: 0.3,
          ease: 'power2.out',
        })
      })

      const onBlur = contextSafe((e: Event) => {
        const input = e.currentTarget as HTMLElement
        gsap.to(input, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        })
      })

      formRef.current?.querySelectorAll('input, textarea').forEach((field) => {
        field.addEventListener('focus', onFocus)
        field.addEventListener('blur', onBlur)
      })

      return () => {
        formRef.current
          ?.querySelectorAll('input, textarea')
          .forEach((field) => {
            field.removeEventListener('focus', onFocus)
            field.removeEventListener('blur', onBlur)
          })
      }
    },
    { scope: container },
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const btn = formRef.current?.querySelector('button[type="submit"]')
    if (btn) {
      gsap.fromTo(
        btn,
        { scale: 0.9 },
        {
          scale: 1,
          duration: 0.6,
          ease: 'elastic.out(1, 0.4)',
          onComplete: () => alert(t('contact.success')),
        },
      )
    } else {
      alert(t('contact.success'))
    }
  }

  return (
    <SectionWrapper id="contact" className="mb-20">
      <div ref={container} className="grid md:grid-cols-2 gap-12 lg:gap-24">
        <div>
          <SectionHeading
            label={t('contact.label')}
            title={t('contact.title')}
          />
          <p className="text-muted-foreground text-lg mb-8 -mt-6">
            {t('contact.desc')}
          </p>

          <div className="space-y-6">
            <div className="contact-info-item flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {t('contact.email')}
                </p>
                <a
                  href="mailto:mukarramalmatiany@gmail.com"
                  className="font-medium hover:text-primary transition-colors"
                >
                  mukarramalmatiany@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {t('contact.location')}
                </p>
                <p className="font-medium">{t('contact.locationVal')}</p>
              </div>
            </div>

            <div className="contact-info-item flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-primary">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {t('contact.phone')}
                </p>
                <a
                  href="tel:+967779629928"
                  className="font-medium hover:text-primary transition-colors"
                >
                  +967779629928
                </a>
              </div>
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-card border border-border p-8 rounded-2xl shadow-sm space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {t('contact.nameLabel')}
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder={t('contact.namePlaceholder')}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              {t('contact.emailLabel')}
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder={t('contact.emailPlaceholder')}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              {t('contact.messageLabel')}
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              placeholder={t('contact.messagePlaceholder')}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
          >
            {t('contact.send')}
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </SectionWrapper>
  )
}

export default Contact
