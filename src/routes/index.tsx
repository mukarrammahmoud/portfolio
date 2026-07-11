import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import { useTranslation } from '../lib/i18n/I18nContext'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const { language } = useTranslation()
  return (
    <div key={language} className="flex flex-col gap-0">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}
