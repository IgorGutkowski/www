export default function Contact() {
  return (
    <section id="kontakt" className="bg-[var(--color-cream)] px-6 py-16">
      <div className="mb-12 text-center">
        <h2
          className="mb-2 text-4xl font-bold"
        >
          Kontakt
        </h2>
        <p className="text-sm text-[var(--color-text-muted)]">
          Jesteśmy do twojej dyspozycji
        </p>
      </div>

      <div className="mx-auto max-w-sm space-y-8 text-center">
        <div>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em]">
            Godziny Otwarcia
          </h3>
          <p className="text-sm font-light text-[var(--color-text-muted)]">
            Poniedziałek – Piątek 12:00 – 20:00
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em]">
            Adres
          </h3>
          <p className="text-sm font-light text-[var(--color-text-muted)]">
            ul. Wileńska 34/2, 70-870 Gdańsk
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em]">
            Telefon
          </h3>
          <a
            href="tel:+48501385472"
            className="text-sm font-light text-[var(--color-text-muted)] no-underline transition-colors duration-200 hover:text-[var(--color-gold)]"
          >
            +48 501 385 472
          </a>
        </div>

        <div>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em]">
            Email
          </h3>
          <a
            href="mailto:info@vitacare.pl"
            className="text-sm font-light text-[var(--color-text-muted)] no-underline transition-colors duration-200 hover:text-[var(--color-gold)]"
          >
            info@vitacare.pl
          </a>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em]">
            Social Media
          </h3>

          <div className="flex justify-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-gold)] text-[var(--color-gold)] no-underline transition-all duration-200 hover:bg-[var(--color-gold)] hover:text-white"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-gold)] text-[var(--color-gold)] no-underline transition-all duration-200 hover:bg-[var(--color-gold)] hover:text-white"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-gold)] text-[var(--color-gold)] no-underline transition-all duration-200 hover:bg-[var(--color-gold)] hover:text-white"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}