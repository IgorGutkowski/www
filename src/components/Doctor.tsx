export default function Doctor() {
  return (
    <section id="doctor" className="bg-white">
      {/* Mobile: układ kolumnowy / Desktop: siatka 2-kolumnowa */}
      <div className="grid md:grid-cols-2">

        {/* Zdjęcie */}
        <div className="overflow-hidden" style={{ aspectRatio: '6/7' }}>
          <img
            src="/doctor.png"
            alt="Dr Jan Kowalski"
            className=" object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Treść */}
        <div className="flex flex-col justify-center px-8 py-14 md:px-12">
          <h2
            className="text-4xl font-bold mb-1"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Dr Jan Kowalski
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] mb-6 tracking-wide">
            Specjalista chirurgii plastycznej twarzy i nosa
          </p>
          <p className="text-[15px] leading-relaxed text-[var(--color-text-mid)] mb-10">
            Ekspert w zakresie operacji nosa, skupiony na naturalnych
            rezultatach, bezpieczeństwie i indywidualnym podejściu do
            każdego pacjenta.
          </p>
          <div className="text-center md:text-left">
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
              }}
              
            className="btn"
            >
              Portfolio
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}