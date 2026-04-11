export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center overflow-hidden"
      style={{ minHeight: '100dvh' }}
    >
      {/* Tło */}
      <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/hero.png')",
            filter: 'blur(2px) brightness(0.75)',
  }}
      />

      {/* Gradient na dole dla czytelności tekstu */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
        }}
      />

      {/* Treść - wyrównana do dołu */}
      <div className="relative flex flex-col items-center px-7 pb-16 pt-32 text-center">
        <h1
          className="mb-5 text-white font-bold leading-[1.15]"
          style={{
            fontSize: 'clamp(34px, 10vw, 52px)',
          }}
        >
          Naturalne piękno
          <br />
          zaczyna się od
          <br />
          harmonii twarzy.
        </h1>

        <p className="mb-9 max-w-[300px] text-[18px] font-light leading-relaxed text-white/85">
          Specjalistyczna chirurgia nosa i precyzyjna korekta kształtu,
          dopasowana do Twoich rysów, potrzeb i komfortu.
        </p>

        <a
          href="#kontakt"
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })
          }}
        className="btn">
  Umów wizytę
</a>
      </div>
    </section>
  )
}