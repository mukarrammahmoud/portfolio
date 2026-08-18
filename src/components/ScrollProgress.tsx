import { useEffect, useState } from 'react'

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-1 bg-transparent pointer-events-none" aria-hidden="true">
      <div className="h-full bg-primary origin-left transition-[width] duration-100 ease-out" style={{ width: `${progress}%` }} />
    </div>
  )
}

export default ScrollProgress
