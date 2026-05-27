'use client'

import emailjs from '@emailjs/browser'
import { useState } from 'react'

export default function Home() {
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    setStatus('Envoi en cours...')

    emailjs
      .sendForm(
        'service_omff8d4',
        'template_5z169cq',
        e.target,
        'WYga_xEvWDRSsyJk1'
      )
      .then(() => {
        setStatus('Votre demande a bien été envoyée.')
        e.target.reset()
      })
      .catch(() => {
        setStatus("Erreur lors de l'envoi.")
      })
  }

  return (
    <main
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#ffffff',
        color: '#111',
        margin: 0,
        padding: 0,
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 60px',
          borderBottom: '1px solid #eee',
          position: 'sticky',
          top: 0,
          background: '#fff',
          zIndex: 1000,
        }}
      >
        <div>
          <img
            src="/logo.png"
            alt="ECOSOL Direct"
            style={{ height: '85px' }}
          />
        </div>

        <nav
          style={{
            display: 'flex',
            gap: '25px',
            fontSize: '18px',
          }}
        >
          <a href="#services">Services</a>
          <a href="#avantages">Avantages</a>
          <a href="#realisations">Réalisations</a>
          <a href="#about">À propos</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO DESKTOP */}
      <section
        className="desktop-image"
        style={{
          position: 'relative',
          height: '750px',
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          padding: '0 80px',
          color: '#fff',
        }}
      >
        <div
          style={{
            background: 'rgba(0,0,0,0.55)',
            padding: '50px',
            maxWidth: '700px',
            borderRadius: '20px',
          }}
        >
          <h2
            style={{
              fontSize: '60px',
              marginBottom: '20px',
            }}
          >
            L’énergie solaire pour votre avenir
          </h2>

          <p
            style={{
              fontSize: '22px',
              lineHeight: '1.6',
            }}
          >
            ECOSOL Direct accompagne particuliers et professionnels
            dans leurs projets photovoltaïques avec des solutions
            performantes et durables.
          </p>

          <a
            href="#contact"
            style={{
              display: 'inline-block',
              marginTop: '30px',
              padding: '18px 35px',
              background: '#00a8e8',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '10px',
              fontWeight: 'bold',
              fontSize: '18px',
            }}
          >
            Demander un devis
          </a>
        </div>
      </section>

      {/* HERO MOBILE */}
      <section
        className="mobile-image"
        style={{
          display: 'none',
          position: 'relative',
          height: '650px',
          backgroundImage: "url('/hero-mobile.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
        }}
      >
        <div
          style={{
            background: 'rgba(0,0,0,0.55)',
            padding: '30px',
            borderRadius: '20px',
            position: 'absolute',
            bottom: '40px',
            left: '20px',
            right: '20px',
          }}
        >
          <h2
            style={{
              fontSize: '38px',
              marginBottom: '20px',
            }}
          >
            L’énergie solaire pour votre avenir
          </h2>

          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
            }}
          >
            Solutions photovoltaïques performantes et durables.
          </p>
        </div>
      </section>

      {/* AVANTAGES FINANCIERS DESKTOP */}
      <section
        className="desktop-image"
        style={{
          width: '100%',
          marginTop: '120px',
          marginBottom: '120px',
        }}
      >
        <img
          src="/avantages-financiers.png"
          alt="Avantages financiers"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </section>

      {/* AVANTAGES FINANCIERS MOBILE */}
      <section
        className="mobile-image"
        style={{
          display: 'none',
          width: '100%',
          marginTop: '80px',
          marginBottom: '80px',
        }}
      >
        <img
          src="/avantages-financiers-mobile.png"
          alt="Avantages financiers mobile"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          padding: '100px 60px',
          background: '#f7f7f7',
          marginBottom: '120px',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '42px',
            marginBottom: '60px',
          }}
        >
          Nos Services
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
          }}
        >
          {[
            'Installation photovoltaïque',
            'Kits solaires autonomes',
            'Maintenance & dépannage',
            'Études de rentabilité',
            'Accompagnement administratif',
          ].map((service, index) => (
            <div
              key={index}
              style={{
                background: '#fff',
                padding: '40px',
                borderRadius: '20px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
              }}
            >
              <h3>{service}</h3>

              <p style={{ color: '#666', lineHeight: '1.7' }}>
                Solution professionnelle adaptée à vos besoins.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
