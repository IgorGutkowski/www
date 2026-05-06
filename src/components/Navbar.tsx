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
  className="h-6 w-6"
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#clip0_navbar)">
    <path
      d="M44.2878 23.6478C42.9319 22.7463 41.2947 22.3679 39.6807 22.583C38.0667 22.798 36.5858 23.5918 35.5131 24.8169L31.2131 29.7216C30.8369 28.6895 30.1536 27.7976 29.255 27.1657C28.3565 26.5339 27.2859 26.1925 26.1875 26.1875H24.9378C24.263 26.1864 23.6037 25.9853 23.0431 25.6097C20.6209 23.9986 17.716 23.2749 14.821 23.5615C11.9261 23.848 9.21936 25.1271 7.16001 27.1819L2.38969 31.9522C2.13666 32.2052 1.99451 32.5484 1.99451 32.9062C1.99451 33.2641 2.13666 33.6073 2.38969 33.8603C2.64273 34.1133 2.98591 34.2555 3.34376 34.2555C3.7016 34.2555 4.04478 34.1133 4.29782 33.8603L9.06813 29.09C10.6837 27.4699 12.8116 26.461 15.0884 26.2355C17.3652 26.01 19.6496 26.582 21.5516 27.8537C22.554 28.5225 23.7328 28.878 24.9378 28.875H26.1875C26.9003 28.875 27.5839 29.1581 28.0879 29.6621C28.5919 30.1661 28.875 30.8497 28.875 31.5625H19.4688C19.1124 31.5625 18.7706 31.7041 18.5186 31.9561C18.2666 32.2081 18.125 32.5499 18.125 32.9062C18.125 33.2626 18.2666 33.6044 18.5186 33.8564C18.7706 34.1084 19.1124 34.25 19.4688 34.25H30.2188C30.4083 34.2462 30.5949 34.2023 30.7663 34.1212C30.9377 34.0402 31.0899 33.9238 31.2131 33.7797L37.5153 26.5772C38.0077 26.0191 38.6449 25.6082 39.3564 25.39C40.068 25.1718 40.826 25.1548 41.5466 25.3409L32.1 38.0125C31.7245 38.5132 31.2376 38.9195 30.6778 39.1994C30.1181 39.4793 29.5008 39.625 28.875 39.625H17.6681C16.7852 39.6234 15.9107 39.7959 15.0944 40.1325C14.2782 40.4691 13.5364 40.9633 12.9113 41.5869L11.7959 42.7022C11.67 42.8271 11.57 42.9757 11.5018 43.1395C11.4336 43.3032 11.3985 43.4788 11.3985 43.6562C11.3985 43.8336 11.4336 44.0093 11.5018 44.173C11.57 44.3368 11.67 44.4854 11.7959 44.6103C11.9209 44.7362 12.0695 44.8362 12.2332 44.9044C12.397 44.9727 12.5726 45.0078 12.75 45.0078C12.9274 45.0078 13.103 44.9727 13.2668 44.9044C13.4305 44.8362 13.5791 44.7362 13.7041 44.6103L14.8194 43.495C15.5747 42.7388 16.5993 42.3134 17.6681 42.3125H28.875C29.9181 42.3125 30.9468 42.0696 31.8797 41.6032C32.8127 41.1367 33.6242 40.4594 34.25 39.625L44.7313 25.65C44.9334 25.3306 45.0056 24.9459 44.9328 24.575C44.8413 24.1962 44.6112 23.8654 44.2878 23.6478Z"
      fill="currentColor"
    />
    <path
      d="M31.5625 20.8125H26.1875C25.8311 20.8125 25.4893 20.6709 25.2373 20.4189C24.9853 20.1669 24.8438 19.8251 24.8438 19.4688V15.4375H20.8125C20.4561 15.4375 20.1143 15.2959 19.8623 15.0439C19.6103 14.7919 19.4688 14.4501 19.4688 14.0938V8.71875C19.4688 8.36237 19.6103 8.02058 19.8623 7.76858C20.1143 7.51657 20.4561 7.375 20.8125 7.375H24.8438V3.34375C24.8438 2.98737 24.9853 2.64558 25.2373 2.39358C25.4893 2.14157 25.8311 2 26.1875 2H31.5625C31.9189 2 32.2607 2.14157 32.5127 2.39358C32.7647 2.64558 32.9062 2.98737 32.9062 3.34375V7.375H36.9375C37.2939 7.375 37.6357 7.51657 37.8877 7.76858C38.1397 8.02058 38.2812 8.36237 38.2812 8.71875V14.0938C38.2812 14.4501 38.1397 14.7919 37.8877 15.0439C37.6357 15.2959 37.2939 15.4375 36.9375 15.4375H32.9062V19.4688C32.9062 19.8251 32.7647 20.1669 32.5127 20.4189C32.2607 20.6709 31.9189 20.8125 31.5625 20.8125ZM27.5312 18.125H30.2188V14.0938C30.2188 13.7374 30.3603 13.3956 30.6123 13.1436C30.8643 12.8916 31.2061 12.75 31.5625 12.75H35.5938V10.0625H31.5625C31.2061 10.0625 30.8643 9.92093 30.6123 9.66892C30.3603 9.41692 30.2188 9.07513 30.2188 8.71875V4.6875H27.5312V8.71875C27.5312 9.07513 27.3897 9.41692 27.1377 9.66892C26.8857 9.92093 26.5439 10.0625 26.1875 10.0625H22.1562V12.75H26.1875C26.5439 12.75 26.8857 12.8916 27.1377 13.1436C27.3897 13.3956 27.5312 13.7374 27.5312 14.0938V18.125Z"
      fill="currentColor"
    />
  </g>
  <defs>
    <clipPath id="clip0_navbar">
      <rect width="43" height="43" fill="white" transform="translate(2 2)" />
    </clipPath>
  </defs>
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