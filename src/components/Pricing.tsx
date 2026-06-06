const konsultacje = [
  'Konsultacja specjalistyczna – 250 zł',
  'Konsultacja z planem zabiegu – 300 zł',
  'Wizyta kontrolna – 150 zł',
]

const rynoplastyka = [
  'Konsultacja do rynoplastyki – 300 zł',
  'Rynoplastyka estetyczna – od 18 000 zł',
  'Rynoplastyka funkcjonalna – od 16 000 zł',
  'Rynoseptoplastyka – od 20 000 zł',
  'Korekta czubka nosa – od 12 000 zł',
  'Korekta wtórna nosa – od 22 000 zł',
]

export default function Pricing() {
  return (
    <section id="cennik" className="bg-white px-6 py-16">
      <div className="mb-12 text-center">
        <h2
          className="mb-2 text-4xl font-bold"
        >
          Cennik
        </h2>
        <p className="text-sm text-[var(--color-text-muted)]">
          Jesteśmy do twojej dyspozycji
        </p>
      </div>

      <div className="mx-auto max-w-2xl space-y-10">
        <div>
         <h3 className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-dark)]">Konsultacje</h3>
          <ul className="space-y-3">
            {konsultacje.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm font-light text-[var(--color-text-mid)]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-text-mid)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
                   <h3 className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-dark)]">Rynoplastyka</h3>
          <ul className="space-y-3">
            {rynoplastyka.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm font-light text-[var(--color-text-mid)]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-text-mid)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a
          href="#kontakt"
          onClick={(e) => {
            e.preventDefault()
            document
              .querySelector('#kontakt')
              ?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="btn"
        >
          Umów wizytę
        </a>
      </div>
    </section>
  )
}