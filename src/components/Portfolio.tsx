import { useState, useRef } from 'react'
import { cn } from '../lib/utils'

const slides = [
  { src: '/result.webp', alt: 'Rynoplastyka przed i po – przypadek 1' },
  { src: '/result2.webp', alt: 'Rynoplastyka przed i po – przypadek 2' },
]

export default function Portfolio() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(0)
  const mouseStartX = useRef(0)
  const isDragging = useRef(false)

  const goTo = (idx: number) => {
    setCurrent(Math.max(0, Math.min(idx, slides.length - 1)))
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 50) {
      goTo(dx < 0 ? current + 1 : current - 1)
    }
  }

  const onMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX
    isDragging.current = true
  }

  const onMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    isDragging.current = false

    const dx = e.clientX - mouseStartX.current
    if (Math.abs(dx) > 50) {
      goTo(dx < 0 ? current + 1 : current - 1)
    }
  }

  const onMouseLeave = () => {
    isDragging.current = false
  }

  return (
    <section id="portfolio" className="bg-[var(--color-cream)] py-16">
      <div className="mb-10 px-6 text-center">
        <h2
          className="mb-2 text-4xl font-bold"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Portfolio
        </h2>
        <p className="text-sm text-[var(--color-text-muted)]">
          Efekty rynoplastyki "przed i po"
        </p>
      </div>

      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.src} className="min-w-full px-6 md:px-24 lg:px-48">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full rounded-sm object-cover"
                style={{ aspectRatio: '4/3' }}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slajd ${i + 1}`}
            className={cn(
              'h-2.5 w-2.5 rounded-full border border-[var(--color-gold)] transition-all duration-300',
              i === current ? 'bg-[var(--color-gold)]' : 'bg-transparent'
            )}
          />
        ))}
      </div>

      <div className="mt-10 px-6 text-center">
        <a
          href="#kontakt"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="btn"
        >
          Umów wizytę
        </a>
      </div>
    </section>
  )
}