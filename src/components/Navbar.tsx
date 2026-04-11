import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'

const links = [
  { label: 'Strona Główna', href: '#hero' },
  { label: 'O nas', href: '#doctor' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Kontakt', href: '#kontakt' },
  { label: 'Cennik', href: '#cennik' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleLinkClick = (href: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 350)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between px-6',
          'border-b border-[var(--color-gold)]/10 bg-white/90 backdrop-blur-md',
          'transition-shadow duration-300',
          scrolled && 'shadow-md'
        )}
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick('#hero')
          }}
          className="flex items-center gap-2 text-[var(--color-gold)] no-underline"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M12 2v20M2 12h20" />
            <circle cx="12" cy="12" r="10" />
          </svg>

          <span
            className="text-xl font-semibold uppercase tracking-[0.12em]"
            style={{ fontFamily: 'var(--font-logo)' }}
          >
            Klinika VitaCare
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleLinkClick(link.href)
              }}
              className={cn(
                'text-sm font-light tracking-wide no-underline',
                'text-[var(--color-gold)] transition-all duration-200',
                'hover:tracking-wider hover:text-[var(--color-gold-dark)]'
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          className="p-1 text-[var(--color-gold)] transition-opacity hover:opacity-70 md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div
        onClick={() => setMenuOpen(false)}
        className={cn(
          'fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 md:hidden',
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        )}
      />

      <aside
        aria-hidden={!menuOpen}
        className={cn(
          'fixed top-0 right-0 z-50 h-dvh w-[min(80vw,320px)] md:hidden',
          'flex flex-col items-end bg-white px-9 pt-6',
          'transition-transform duration-[450ms]',
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Zamknij menu"
          className="mb-10 p-1 text-[var(--color-gold)] transition-opacity hover:opacity-70"
        >
          <X size={22} />
        </button>

        <nav className="flex w-full flex-col items-end">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleLinkClick(link.href)
              }}
              className={cn(
                'w-full border-b border-[var(--color-gold)]/15 py-4 text-right text-xl no-underline last:border-none',
                'font-light text-[var(--color-gold)]',
                'transition-all duration-200 hover:tracking-wider hover:text-[var(--color-gold-dark)]'
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  )
}