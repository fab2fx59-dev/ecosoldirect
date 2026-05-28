```javascript
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
        setStatus(
          'Votre demande a bien été envoyée. Nous vous recontacterons rapidement.'
        )
        e.target.reset()
      })
      .catch(() => {
        setStatus(
          "Erreur lors de l'envoi. Veuillez réessayer ou nous contacter directement."
        )
      })
  }

  return (
    <main className="site-wrapper">
      <style>{styles}</style>

      <header className="header">
        <img
          src="/logo.png"
          alt="ECOSOL Direct"
          className="logo"
        />

        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#avantages">Avantages</a>
          <a href="#realisations">Réalisations</a>
          <a href="#about">À propos</a>
          <a href="#contact" className="nav-cta">
            Devis
          </a>
        </nav>
      </header>

      <section className="hero desktop-image">
        <div className="hero-card">
          <p className="eyebrow">
            Installation photovoltaïque · Particuliers · Professionnels
          </p>

          <h1>L’énergie solaire pour votre avenir</h1>

          <p>
            ECOSOL Direct accompagne particuliers et professionnels
            dans leurs projets photovoltaïques avec des solutions
            performantes et durables.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="primary-button">
              Demander un devis
            </a>

            <a href="#services" className="secondary-button">
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>

      <section className="hero-mobile mobile-image">
        <div className="hero-card mobile-card">
          <p className="eyebrow">Photovoltaïque clé en main</p>

          <h1>L’énergie solaire pour votre avenir</h1>

          <p>Solutions photovoltaïques performantes et durables.</p>

          <a href="#contact" className="primary-button">
            Demander un devis
          </a>
        </div>
      </section>

      <section className="image-section desktop-image">
        <img
          src="/avantages-financiers.png"
          alt="Avantages financiers"
        />
      </section>

      <section className="image-section mobile-image">
        <img
          src="/avantages-financiers-mobile.png"
          alt="Avantages financiers mobile"
        />
      </section>

      <section id="services" className="section light-section">
        <div className="section-container">
          <p className="section-tag center">Nos expertises</p>

          <h2 className="section-title">Nos Services</h2>

          <p className="section-subtitle">
            Des solutions solaires pensées pour vous accompagner.
          </p>

          <div className="services-grid">
            {[
              {
                title: 'Installation photovoltaïque',
                text:
                  'Pose de panneaux solaires pour produire votre propre électricité.',
              },
              {
                title: 'Kits solaires autonomes',
                text:
                  'Solutions solaires adaptées aux besoins d’autonomie énergétique.',
              },
              {
                title: 'Maintenance & dépannage',
                text:
                  'Contrôle, entretien et intervention pour préserver les performances.',
              },
              {
                title: 'Études de rentabilité',
                text:
                  'Analyse de votre consommation et projection des économies.',
              },
              {
                title: 'Accompagnement administratif',
                text:
                  'Aide dans les démarches liées à votre projet solaire.',
              },
            ].map((service, index) => (
              <article key={index} className="service-card">
                <span className="service-number">
                  0{index + 1}
                </span>

                <h3>{service.title}</h3>

                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="image-section desktop-image">
        <img
          src="/offre_solaire.png"
          alt="Offre solaire"
        />
      </section>

      <section className="image-section mobile-image">
        <img
          src="/offre_solaire_mobile.png"
          alt="Offre solaire mobile"
        />
      </section>

      <section className="image-section desktop-image">
        <img
          src="/installation-sol.png"
          alt="Installation solaire"
        />
      </section>

      <section className="image-section mobile-image">
        <img
          src="/mobile-installation-sol.png"
          alt="Installation solaire mobile"
        />
      </section>

      <section
        className="image-section contained desktop-image"
        id="avantages"
      >
        <img
          src="/avantages.png"
          alt="Avantages solaire"
        />
      </section>

      <section className="image-section contained mobile-image">
        <img
          src="/avantage-mobile.png"
          alt="Avantages solaire mobile"
        />
      </section>

      <section
        className="image-section contained desktop-image"
        id="realisations"
      >
        <img
          src="/realisations.png"
          alt="Réalisations"
        />
      </section>

      <section className="image-section contained mobile-image">
        <img
          src="/mobile-realisations.png"
          alt="Réalisations mobile"
        />
      </section>

      <section id="about" className="section light-section">
        <div className="section-container center-text">
          <p className="section-tag center">À propos</p>

          <h2 className="section-title">
            À propos d’ECOSOL Direct
          </h2>

          <p className="section-subtitle">
            Nous accompagnons les particuliers, agriculteurs et
            professionnels dans leur transition énergétique grâce à
            des solutions photovoltaïques modernes.
          </p>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-intro">
            <p className="section-tag">Étude gratuite</p>

            <h2>Demandez votre devis</h2>

            <p>
              Laissez vos coordonnées. Nous vous recontactons
              rapidement.
            </p>
          </div>

          <form onSubmit={sendEmail} className="contact-form">
            <div className="form-row">
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                required
              />

              <input
                type="text"
                name="prenom"
                placeholder="Prénom"
                required
              />
            </div>

            <input
              type="text"
              name="adresse"
              placeholder="Adresse complète"
              required
            />

            <div className="form-row">
              <input
                type="email"
                name="email"
                placeholder="Adresse email"
                required
              />

              <input
                type="tel"
                name="telephone"
                placeholder="Téléphone"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Décrivez votre projet..."
              rows="5"
            />

            <button type="submit">
              Demander un devis gratuit
            </button>

            <p className="form-status">{status}</p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <img
          src="/logo.png"
          alt="ECOSOL Direct"
          className="footer-logo"
        />

        <p>
          © 2026 ECOSOL Direct — Tous droits réservés
        </p>

        <div className="footer-links">
          <a href="/mentions-legales">
            Mentions légales
          </a>

          <a href="/politique-confidentialite">
            Politique de confidentialité
          </a>

          <a href="#contact">Contact</a>
        </div>
      </footer>
    </main>
  )
}

const styles = `
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

.site-wrapper {
  font-family: Arial, Helvetica, sans-serif;
  background: #ffffff;
  color: #111827;
  overflow-x: hidden;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 60px;
  background: #ffffff;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid #eee;
}

.logo {
  height: 78px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav a {
  text-decoration: none;
  color: #111827;
  font-weight: 700;
}

.nav-cta {
  background: #00a8e8;
  color: #ffffff !important;
  padding: 12px 20px;
  border-radius: 999px;
}

.hero {
  min-height: 760px;
  background-image:
    linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 0 80px;
  color: white;
}

.hero-card {
  background: rgba(0,0,0,0.55);
  padding: 48px;
  border-radius: 24px;
  max-width: 720px;
}

.hero-card h1 {
  font-size: 64px;
  line-height: 1.1;
}

.hero-card p {
  font-size: 20px;
  line-height: 1.7;
}

.eyebrow,
.section-tag {
  color: #00a8e8;
  font-weight: bold;
  text-transform: uppercase;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-top: 32px;
}

.primary-button,
.secondary-button {
  padding: 16px 26px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: bold;
}

.primary-button {
  background: #00a8e8;
  color: white;
}

.secondary-button {
  border: 1px solid white;
  color: white;
}

.hero-mobile {
  display: none;
}

.section {
  padding: 100px 60px;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
}

.center {
  text-align: center;
}

.center-text {
  text-align: center;
}

.section-title {
  font-size: 46px;
}

.section-subtitle {
  color: #666;
  line-height: 1.8;
}

.light-section {
  background: #f7f7f7;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 22px;
  align-items: stretch;
}

.service-card {
  background: #ffffff;
  padding: 28px;
  border-radius: 24px;
  box-shadow: 0 16px 50px rgba(15, 23, 42, 0.08);
  border: 1px solid rgba(15, 23, 42, 0.06);
  display: flex;
  flex-direction: column;
  min-height: 320px;
}

.service-number {
  color: #00a8e8;
  font-weight: bold;
  margin-bottom: 16px;
}

.service-card h3 {
  min-height: 70px;
  display: flex;
  align-items: center;
}

.service-card p {
  color: #666;
  line-height: 1.7;
}

.image-section {
  margin: 90px 0;
}

.image-section img {
  width: 100%;
  display: block;
}

.contained {
  padding: 0 60px;
}

.contained img {
  border-radius: 24px;
}

.contact-section {
  background: #111;
  color: white;
  padding: 100px 60px;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-form {
  background: white;
  padding: 32px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.contact-form input,
.contact-form textarea {
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #ddd;
}

.contact-form button {
  background: #00a8e8;
  color: white;
  border: none;
  padding: 18px;
  border-radius: 14px;
  font-weight: bold;
  cursor: pointer;
}

.form-status {
  color: #00d084;
  font-weight: bold;
}

.footer {
  background: #000;
  color: white;
  text-align: center;
  padding: 50px 20px;
}

.footer-logo {
  height: 84px;
  margin-bottom: 20px;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.footer-links a {
  color: white;
  text-decoration: none;
}

.mobile-image {
  display: none;
}

@media (max-width: 1100px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 900px) {
  .desktop-image {
    display: none !important;
  }

  .mobile-image {
    display: block;
  }

  .hero-mobile {
    display: flex;
    min-height: 650px;
    background-image:
      linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)),
      url('/hero-mobile.png');
    background-size: cover;
    background-position: center;
    padding: 20px;
    align-items: flex-end;
  }

  .mobile-card {
    width: 100%;
  }

  .header {
    flex-direction: column;
    padding: 20px;
  }

  .nav {
    flex-wrap: wrap;
    justify-content: center;
  }

  .section,
  .contact-section {
    padding: 70px 20px;
  }

  .contact-container {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .contained {
    padding: 0 20px;
  }
}

@media (max-width: 650px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    min-height: auto;
  }

  .service-card h3 {
    min-height: auto;
  }

  .hero-card h1 {
    font-size: 42px;
  }

  .footer-links {
    flex-direction: column;
  }
}
`
```
