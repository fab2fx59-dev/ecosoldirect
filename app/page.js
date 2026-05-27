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

      {/* HERO */}
      <section
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
          marginBottom: '120px',
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
                Solution professionnelle adaptée à vos besoins
                énergétiques avec accompagnement complet.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE AJOUTEE */}
      <section
        style={{
          width: '100%',
          marginBottom: '120px',
        }}
      >
        <img
          src="/installation-sol.png"
          alt="Installation solaire au sol"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </section>

      {/* AVANTAGES */}
      <section
        id="avantages"
        style={{
          padding: '0 60px',
          marginBottom: '120px',
        }}
      >
        <img
          src="/avantages.png"
          alt="Pourquoi opter pour l'énergie solaire"
          style={{
            width: '100%',
            borderRadius: '20px',
          }}
        />
      </section>

      {/* REALISATIONS */}
      <section
        id="realisations"
        style={{
          padding: '0 60px',
          marginBottom: '120px',
        }}
      >
        <img
          src="/realisations.png"
          alt="Découvrez nos réalisations"
          style={{
            width: '100%',
            borderRadius: '20px',
          }}
        />
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          padding: '100px 60px',
          background: '#f7f7f7',
          marginBottom: '120px',
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '42px',
              marginBottom: '30px',
            }}
          >
            À propos d’ECOSOL Direct
          </h2>

          <p
            style={{
              fontSize: '20px',
              lineHeight: '1.8',
              color: '#555',
            }}
          >
            Nous accompagnons les particuliers, agriculteurs et
            professionnels dans leur transition énergétique grâce à
            des solutions photovoltaïques modernes, économiques et
            performantes.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: '100px 60px',
          background: '#111',
          color: '#fff',
        }}
      >
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '42px',
              marginBottom: '20px',
            }}
          >
            Demandez votre devis
          </h2>

          <p
            style={{
              color: '#ccc',
              marginBottom: '40px',
            }}
          >
            Remplissez le formulaire ci-dessous pour être recontacté.
          </p>

          <form
            onSubmit={sendEmail}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              required
              style={inputStyle}
            />

            <input
              type="text"
              name="prenom"
              placeholder="Prénom"
              required
              style={inputStyle}
            />

            <input
              type="text"
              name="adresse"
              placeholder="Adresse"
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Adresse email"
              required
              style={inputStyle}
            />

            <input
              type="tel"
              name="telephone"
              placeholder="Numéro de téléphone"
              required
              style={inputStyle}
            />

            <input
              type="date"
              name="date"
              required
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                padding: '20px',
                background: '#00a8e8',
                color: '#fff',
                border: 'none',
                borderRadius: '12px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Demander un devis
            </button>
          </form>

          <p
            style={{
              marginTop: '25px',
              color: '#00d084',
              fontWeight: 'bold',
            }}
          >
            {status}
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: '50px',
          textAlign: 'center',
          background: '#000',
          color: '#fff',
        }}
      >
        <img
          src="/logo.png"
          alt="ECOSOL Direct"
          style={{
            height: '90px',
            marginBottom: '20px',
          }}
        />

        <p>
          © 2026 ECOSOL Direct — Tous droits réservés
        </p>
      </footer>
    </main>
  )
}

const inputStyle = {
  padding: '18px',
  borderRadius: '10px',
  border: 'none',
  fontSize: '16px',
}
