
export default function Home() {
  const services = [
    {
      title: 'Installation photovoltaïque',
      desc: 'Solutions solaires performantes pour particuliers et professionnels.',
    },
    {
      title: 'Étude énergétique',
      desc: 'Analyse de consommation et optimisation énergétique.',
    },
    {
      title: 'Maintenance & suivi',
      desc: 'Entretien et accompagnement de vos installations solaires.',
    },
  ]

  const projects = [
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">
            ECOSOLL <span className="text-blue-600">DIRECT</span>
          </h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#about" className="hover:text-blue-600 transition">À propos</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </nav>

          <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-xl font-semibold transition">
            Demander un devis
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm mb-8">
              Entreprise spécialisée en énergie solaire
            </span>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              L’énergie solaire
              <span className="text-blue-600 block">pour votre avenir</span>
            </h2>

            <p className="text-slate-600 text-lg mt-8 leading-relaxed max-w-xl">
              ECOSOLL Direct accompagne les particuliers et professionnels avec des solutions photovoltaïques performantes, économiques et durables.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1400&auto=format&fit=crop"
              alt="Panneaux solaires"
              className="rounded-[32px] shadow-2xl object-cover h-[560px] w-full"
            />
          </div>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-[28px] p-8 shadow-sm">
              <h4 className="text-2xl font-semibold mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="overflow-hidden rounded-[32px] border border-slate-200 shadow-sm">
              <img src={project} alt="Projet solaire" className="w-full h-[320px] object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <h3 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
            Contact
          </h3>

          <p className="text-slate-600 mt-8 text-lg leading-relaxed max-w-xl">
            ecosoldirect.solaire@gmail.com
          </p>
        </div>
      </section>

      <footer className="py-10 text-center text-slate-500 text-sm border-t border-slate-200">
        © 2026 ECOSOL Direct — Tous droits réservés.
      </footer>
    </main>
  )
}
