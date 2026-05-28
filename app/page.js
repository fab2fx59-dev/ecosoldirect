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
        setStatus('Votre demande a bien été envoyée. Nous vous recontacterons rapidement.')
        e.target.reset()
      })
      .catch(() => {
        setStatus("Erreur lors de l'envoi. Veuillez réessayer ou nous contacter directement.")
      })
  }

  return (
    <main className="site-wrapper">
      <style>{styles}</style>

      <header className="header">
        <a href="#top" aria-label="Retour à l'accueil ECOSOL Direct">
          <img src="/logo.png" alt="ECOSOL Direct - Installation photovoltaïque" className="logo" />
        </a>

        <nav className="nav" aria-label="Navigation principale">
          <a href="#services">Services</a>
          <a href="#avantages">Avantages</a>
          <a href="#realisations">Réalisations</a>
          <a href="#about">À propos</a>
          <a href="#contact" className="nav-cta">Devis</a>
        </nav>
      </header>

      <section id="top" className="hero desktop-image">
        <div className="hero-card">
          <p className="eyebrow">Installation photovoltaïque · Particuliers · Professionnels · Agricole</p>
          <h1>L’énergie solaire pour votre avenir</h1>
          <p>
            ECOSOL Direct accompagne particuliers, agriculteurs et professionnels
            dans leurs projets photovoltaïques avec des solutions performantes,
            durables et adaptées à leur consommation.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="primary-button">Demander un devis gratuit</a>
            <a href="#services" className="secondary-button">Découvrir nos services</a>
          </div>
        </div>
      </section>

      <section className="hero-mobile mobile-image">
        <div className="hero-card mobile-card">
          <p className="eyebrow">Photovoltaïque clé en main</p>
          <h1>L’énergie solaire pour votre avenir</h1>
          <p>Solutions photovoltaïques performantes et durables.</p>
          <a href="#contact" className="primary-button">Demander un devis</a>
        </div>
      </section>

      <section className="intro-section">
        <div className="section-container intro-grid">
          <div>
            <p className="section-tag">ECOSOL Direct</p>
            <h2>Votre partenaire solaire pour réduire vos factures d’énergie</h2>
          </div>
          <p>
            Nous vous aidons à étudier, dimensionner et installer une solution solaire
            adaptée à votre logement, bâtiment professionnel ou exploitation agricole.
            Notre objectif : un projet clair, rentable et durable.
          </p>
        </div>
      </section>

      <section className="image-section desktop-image">
        <img src="/avantages-financiers.png" alt="Avantages financiers des panneaux solaires ECOSOL Direct" />
      </section>

      <section className="image-section mobile-image">
        <img src="/avantages-financiers-mobile.png" alt="Avantages financiers solaire mobile" />
      </section>

      <section id="services" className="section light-section">
        <div className="section-container">
          <p className="section-tag center">Nos expertises</p>
          <h2 className="section-title">Nos Services</h2>
          <p className="section-subtitle">
            Des solutions solaires pensées pour vous accompagner de l’étude du projet jusqu’à la mise en service.
          </p>

          <div className="services-grid">
            {[
              {
                title: 'Installation photovoltaïque',
                text: 'Pose de panneaux solaires pour produire votre propre électricité et réduire vos factures.',
              },
              {
                title: 'Kits solaires autonomes',
                text: 'Solutions solaires adaptées aux besoins d’autonomie énergétique et aux sites isolés.',
              },
              {
                title: 'Maintenance & dépannage',
                text: 'Contrôle, entretien et intervention pour préserver les performances de votre installation.',
              },
              {
                title: 'Études de rentabilité',
                text: 'Analyse de votre consommation, estimation de production et projection des économies possibles.',
              },
              {
                title: 'Accompagnement administratif',
                text: 'Aide dans les démarches liées à votre projet solaire et à sa mise en conformité.',
              },
            ].map((service, index) => (
              <article key={index} className="service-card">
                <span className="service-number">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="image-section desktop-image">
        <img src="/offre_solaire.png" alt="Offre solaire ECOSOL Direct" />
      </section>

      <section className="image-section mobile-image">
        <img src="/offre_solaire_mobile.png" alt="Offre solaire mobile ECOSOL Direct" />
      </section>

      <section className="image-section desktop-image">
        <img src="/installation-sol.png" alt="Installation solaire au sol" />
      </section>

      <section className="image-section mobile-image">
        <img src="/mobile-installation-sol.png" alt="Installation solaire au sol mobile" />
      </section>

      <section id="avantages" className="section advantages-text-section">
        <div className="section-container">
          <p className="section-tag center">Pourquoi passer au solaire ?</p>
          <h2 className="section-title">Les avantages du photovoltaïque</h2>

          <div className="benefits-grid">
            <article>
              <h3>Réduction des factures</h3>
              <p>Produisez une partie de votre électricité et limitez votre dépendance aux hausses du prix de l’énergie.</p>
            </article>
            <article>
              <h3>Valorisation du bâtiment</h3>
              <p>Une installation solaire bien dimensionnée peut renforcer l’attractivité de votre maison ou de vos locaux.</p>
            </article>
            <article>
              <h3>Énergie durable</h3>
              <p>Le solaire permet de produire localement une énergie propre et silencieuse.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="image-section contained desktop-image">
        <img src="/avantages.png" alt="Avantages des panneaux solaires" />
      </section>

      <section className="image-section contained mobile-image">
        <img src="/avantage-mobile.png" alt="Avantages panneaux solaires mobile" />
      </section>

      <section id="realisations" className="image-section contained desktop-image">
        <img src="/realisations.png" alt="Réalisations photovoltaïques ECOSOL Direct" />
      </section>

      <section className="image-section contained mobile-image">
        <img src="/mobile-realisations.png" alt="Réalisations photovoltaïques mobile" />
      </section>

      <section id="about" className="section light-section about-section">
        <div className="section-container narrow center-text">
          <p className="section-tag center">À propos</p>
          <h2>À propos d’ECOSOL Direct</h2>
          <p>
            Nous accompagnons les particuliers, agriculteurs et professionnels dans leur
            transition énergétique grâce à des solutions photovoltaïques modernes.
          </p>
          <p>
            Notre approche repose sur l’écoute, l’étude précise du besoin et la proposition
            d’une solution claire, compréhensible et adaptée à chaque projet.
          </p>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-intro">
            <p className="section-tag">Étude gratuite</p>
            <h2>Demandez votre devis</h2>
            <p>
              Laissez vos coordonnées. Nous vous recontactons pour comprendre votre besoin,
              évaluer votre projet solaire et vous orienter vers la solution adaptée.
            </p>
          </div>

          <form onSubmit={sendEmail} className="contact-form">
            <div className="form-row">
              <input type="text" name="nom" placeholder="Nom" required />
              <input type="text" name="prenom" placeholder="Prénom" required />
            </div>

            <input type="text" name="adresse" placeholder="Adresse complète" required />

            <div className="form-row">
              <input type="email" name="email" placeholder="Adresse email" required />
              <input type="tel" name="telephone" placeholder="Numéro de téléphone" required />
            </div>

            <div className="form-row">
              <select name="type_projet" required defaultValue="">
                <option value="" disabled>Type de projet</option>
                <option value="Particulier">Particulier</option>
                <option value="Professionnel">Professionnel</option>
                <option value="Agricole">Agricole</option>
                <option value="Autre">Autre</option>
              </select>
              <input type="date" name="date" required />
            </div>

            <textarea
              name="message"
              placeholder="Décrivez brièvement votre projet : toiture, terrain, facture d’électricité, puissance souhaitée..."
              rows="5"
            />

            <label className="consent-label">
              <input type="checkbox" name="consentement" required />
              <span>J’accepte d’être recontacté au sujet de ma demande de devis.</span>
            </label>

            <button type="submit">Demander un devis gratuit</button>

            <p className="form-status" aria-live="polite">{status}</p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <img src="/logo.png" alt="ECOSOL Direct" className="footer-logo" />

        <p>© 2026 ECOSOL Direct — Tous droits réservés</p>

        <div className="footer-links">
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/politique-confidentialite">Politique de confidentialité</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="legal-note">
          Les informations présentes sur ce site sont fournies à titre indicatif. Chaque projet photovoltaïque
          nécessite une étude personnalisée selon le bâtiment, l’exposition, la consommation et les règles applicables.
        </p>
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
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  a {
    color: inherit;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    padding: 16px 60px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    position: sticky;
    top: 0;
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: blur(12px);
    z-index: 1000;
  }

  .logo {
    height: 78px;
    display: block;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 24px;
    font-size: 16px;
    font-weight: 700;
  }

  .nav a {
    text-decoration: none;
    color: #1f2937;
  }

  .nav a:hover {
    color: #00a8e8;
  }

  .nav-cta {
    background: #00a8e8;
    color: #ffffff !important;
    padding: 12px 20px;
    border-radius: 999px;
  }

  .hero {
    position: relative;
    min-height: 760px;
    background-image: linear-gradient(90deg, rgba(0,0,0,0.55), rgba(0,0,0,0.12)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    padding: 0 80px;
    color: #fff;
  }

  .hero-card {
    background: rgba(0, 0, 0, 0.56);
    padding: 48px;
    max-width: 760px;
    border-radius: 28px;
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.3);
  }

  .eyebrow,
  .section-tag {
    margin: 0 0 14px;
    color: #00a8e8;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .hero-card h1 {
    font-size: clamp(44px, 6vw, 70px);
    line-height: 1.02;
    margin: 0 0 22px;
  }

  .hero-card p {
    font-size: 21px;
    line-height: 1.65;
    margin: 0;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 34px;
  }

  .primary-button,
  .secondary-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 17px 28px;
    border-radius: 14px;
    font-size: 17px;
    font-weight: 800;
    text-decoration: none;
  }

  .primary-button {
    background: #00a8e8;
    color: #ffffff;
    box-shadow: 0 14px 30px rgba(0, 168, 232, 0.3);
  }

  .secondary-button {
    border: 1px solid rgba(255, 255, 255, 0.55);
    color: #ffffff;
  }

  .hero-mobile {
    display: none;
    position: relative;
    min-height: 650px;
    background-image: linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.7)), url('/hero-mobile.png');
    background-size: cover;
    background-position: center;
    color: #ffffff;
    padding: 24px;
    align-items: flex-end;
  }

  .section,
  .intro-section {
    padding: 96px 60px;
  }

  .section-container {
    width: min(1180px, 100%);
    margin: 0 auto;
  }

  .narrow {
    width: min(900px, 100%);
  }

  .center-text,
  .center {
    text-align: center;
  }

  .intro-grid {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 48px;
    align-items: center;
  }

  .intro-grid h2,
  .section-title,
  .about-section h2,
  .contact-intro h2 {
    font-size: clamp(34px, 4vw, 48px);
    line-height: 1.12;
    margin: 0 0 18px;
  }

  .intro-grid p,
  .section-subtitle,
  .about-section p,
  .contact-intro p {
    color: #4b5563;
    font-size: 19px;
    line-height: 1.8;
  }

  .light-section {
    background: #f5f8fa;
  }

  .section-title {
    text-align: center;
  }

  .section-subtitle {
    max-width: 760px;
    margin: 0 auto 56px;
    text-align: center;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 22px;
    align-items: stretch;
  }

  .service-card,
  .benefits-grid article {
    background: #ffffff;
    padding: 28px;
    border-radius: 24px;
    box-shadow: 0 16px 50px rgba(15, 23, 42, 0.08);
    border: 1px solid rgba(15, 23, 42, 0.06);
  }

  .service-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 320px;
    height: 100%;
  }

  .service-number {
    display: inline-flex;
    margin-bottom: 18px;
    color: #00a8e8;
    font-size: 14px;
    font-weight: 900;
  }

  .service-card h3,
  .benefits-grid h3 {
    font-size: 21px;
    margin: 0 0 14px;
  }

  .service-card h3 {
    min-height: 70px;
    display: flex;
    align-items: center;
  }

  .service-card p,
  .benefits-grid p {
    color: #5b6472;
    line-height: 1.7;
    margin: 0;
  }

  .image-section {
    width: 100%;
    margin: 96px 0;
  }

  .image-section img {
    width: 100%;
    height: auto;
    display: block;
  }

  .image-section.contained {
    padding: 0 60px;
  }

  .image-section.contained img {
    border-radius: 26px;
    box-shadow: 0 20px 60px rgba(15, 23, 42, 0.12);
  }

  .advantages-text-section {
    padding-top: 20px;
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 26px;
    margin-top: 46px;
  }

  .about-section {
    margin-top: 96px;
  }

  .contact-section {
    padding: 100px 60px;
    background: radial-gradient(circle at top left, #10384a, #0b1117 55%, #020617);
    color: #ffffff;
  }

  .contact-container {
    width: min(1180px, 100%);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 52px;
    align-items: start;
  }

  .contact-intro p {
    color: #d1d5db;
  }

  .contact-form {
    background: #ffffff;
    color: #111827;
    padding: 34px;
    border-radius: 28px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.25);
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .contact-form input,
  .contact-form select,
  .contact-form textarea {
    width: 100%;
    padding: 17px 16px;
    border-radius: 14px;
    border: 1px solid #d1d5db;
    font-size: 16px;
    font-family: inherit;
    outline: none;
    background: #ffffff;
  }

  .contact-form input:focus,
  .contact-form select:focus,
  .contact-form textarea:focus {
    border-color: #00a8e8;
    box-shadow: 0 0 0 4px rgba(0, 168, 232, 0.12);
  }

  .consent-label {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    color: #4b5563;
    font-size: 14px;
    line-height: 1.5;
  }

  .consent-label input {
    width: auto;
    margin-top: 4px;
  }

  .contact-form button {
    padding: 19px;
    background: #00a8e8;
    color: #fff;
    border: none;
    border-radius: 16px;
    font-size: 18px;
    font-weight: 900;
    cursor: pointer;
    box-shadow: 0 14px 30px rgba(0, 168, 232, 0.25);
  }

  .contact-form button:hover,
  .primary-button:hover,
  .nav-cta:hover {
    filter: brightness(0.95);
  }

  .form-status {
    min-height: 24px;
    margin: 0;
    color: #008f5a;
    font-weight: 800;
    text-align: center;
  }

  .footer {
    padding: 54px 24px;
    text-align: center;
    background: #000000;
    color: #ffffff;
  }

  .footer-logo {
    height: 84px;
    margin-bottom: 18px;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 18px;
    margin: 22px 0;
  }

  .footer-links a {
    color: #ffffff;
    text-decoration: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.35);
  }

  .legal-note {
    max-width: 900px;
    margin: 0 auto;
    color: #9ca3af;
    font-size: 13px;
    line-height: 1.7;
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
    .header {
      padding: 14px 20px;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      position: relative;
    }

    .logo {
      height: 70px;
    }

    .nav {
      width: 100%;
      overflow-x: auto;
      justify-content: flex-start;
      gap: 16px;
      padding-bottom: 6px;
      font-size: 14px;
      white-space: nowrap;
    }

    .desktop-image {
      display: none !important;
    }

    .mobile-image {
      display: block;
    }

    .hero-mobile {
      display: flex !important;
    }

    .mobile-card {
      padding: 28px;
      border-radius: 22px;
      width: 100%;
    }

    .hero-card h1 {
      font-size: 38px;
    }

    .hero-card p {
      font-size: 17px;
    }

    .section,
    .intro-section,
    .contact-section {
      padding: 72px 20px;
    }

    .intro-grid,
    .contact-container,
    .benefits-grid {
      grid-template-columns: 1fr;
    }

    .image-section {
      margin: 72px 0;
    }

    .image-section.contained {
      padding: 0 20px;
    }

    .form-row {
      grid-template-columns: 1fr;
    }

    .contact-form {
      padding: 24px;
      border-radius: 22px;
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
  }

  @media (max-width: 520px) {
    .nav-cta {
      padding: 10px 16px;
    }

    .section-title,
    .intro-grid h2,
    .about-section h2,
    .contact-intro h2 {
      font-size: 32px;
    }

    .service-card,
    .benefits-grid article {
      padding: 26px;
    }

    .footer-links {
      flex-direction: column;
      align-items: center;
    }
  }
`
```
