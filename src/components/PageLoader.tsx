import { useRef, useState } from 'react'
import { gsap, useGSAP } from '../lib/gsap'

const PageLoader = () => {
  const overlayRef = useRef<HTMLDivElement>(null)
  const [done, setDone] = useState(false)

  useGSAP(
    () => {
      const overlay = overlayRef.current
      if (!overlay) return

      const reduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      if (reduced) {
        setDone(true)
        return
      }

      const tl = gsap.timeline({
        defaults: { ease: 'power3.inOut' },
        onComplete: () => setDone(true),
      })

      tl.from('.loader-bar', {
        scaleX: 0,
        duration: 1.2,
        transformOrigin: 'left center',
      })
        .from(
          '.loader-char',
          {
            y: 40,
            opacity: 0,
            rotateX: -90,
            duration: 0.6,
            stagger: 0.08,
            ease: 'back.out(2)',
          },
          '-=0.6',
        )
        .to('.loader-tagline', { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
        .to('.loader-bar', { scaleX: 1, duration: 0.4 }, '+=0.3')
        .to('.loader-content', { opacity: 0, y: -20, duration: 0.4 })
        .to(
          overlay,
          {
            clipPath: 'inset(0 0 100% 0)',
            duration: 0.9,
            ease: 'power4.inOut',
          },
          '-=0.1',
        )
    },
    { scope: overlayRef },
  )

  if (done) return null

  return (
    <div
      ref={overlayRef}
      className="loader-overlay fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      style={{ clipPath: 'inset(0 0 0 0)' }}
      aria-hidden={done}
    >
      <div className="loader-content flex flex-col items-center gap-6">
        <div className="flex gap-1 text-5xl sm:text-7xl font-bold tracking-tighter">
          {['M', 'M'].map((char, i) => (
            <span key={i} className="loader-char inline-block text-foreground">
              {char}
            </span>
          ))}
        </div>
        <p className="loader-tagline text-sm uppercase tracking-[0.4em] text-muted-foreground opacity-0 translate-y-2">
          Portfolio
        </p>
        <div className="loader-bar h-0.5 w-48 bg-primary origin-left scale-x-0" />
      </div>
    </div>
  )
}

export default PageLoader
