import { useRef } from 'react'
import { Code, Server, Smartphone, Wrench } from 'lucide-react'
import { ScrollTrigger, gsap, useGSAP } from '../lib/gsap'
import { useTranslation } from '../lib/i18n/I18nContext'
import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import type { TranslationKey } from '../lib/i18n/translations'

const skillsData = [
  {
    categoryKey: 'skills.frontend' as TranslationKey,
    icon: <Code className="w-6 h-6" />,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Next.js', 'Vite'],
  },
  {
    categoryKey: 'skills.mobile' as TranslationKey,
    icon: <Smartphone className="w-6 h-6" />,
    skills: ['Flutter', 'Dart', 'Riverpod', 'Android', 'iOS'],
  },
  {
    categoryKey: 'skills.backend' as TranslationKey,
    icon: <Server className="w-6 h-6" />,
    skills: ['Django', 'FastAPI', 'Python', 'PostgreSQL', 'Node.js'],
  },
  {
    categoryKey: 'skills.tools' as TranslationKey,
    icon: <Wrench className="w-6 h-6" />,
    skills: ['Git', 'Docker', 'Supabase', 'Firebase', 'Figma'],
  },
]

const Skills = () => {
  const { t } = useTranslation()
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    (_, contextSafe) => {
      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      if (reduced) return

      ScrollTrigger.batch('.skill-card', {
        start: 'top 88%',
        once: true,
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { y: 60, opacity: 0, rotateX: -12 },
            {
              y: 0,
              opacity: 1,
              rotateX: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: 'back.out(1.2)',
              overwrite: true,
            },
          )
        },
      })

      if (!contextSafe) return

      const onTagClick = contextSafe((e: Event) => {
        const tag = e.currentTarget as HTMLElement
        gsap.fromTo(
          tag,
          { scale: 0.85 },
          { scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.5)' },
        )
      })

      container.current?.querySelectorAll('.skill-tag').forEach((tag) => {
        tag.addEventListener('click', onTagClick)
      })

      return () => {
        container.current?.querySelectorAll('.skill-tag').forEach((tag) => {
          tag.removeEventListener('click', onTagClick)
        })
      }
    },
    { scope: container },
  )

  return (
    <SectionWrapper id="skills" className="bg-muted/20">
      <div ref={container}>
        <SectionHeading label={t('skills.label')} title={t('skills.title')} />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="skill-card bg-card border border-border p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">
                {t(category.categoryKey)}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="skill-tag px-3 py-1 bg-muted text-muted-foreground text-sm rounded-lg border border-border/50 hover:border-primary/40 hover:text-primary transition-colors cursor-pointer"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Skills
