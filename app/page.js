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
    <main>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: Arial, sans-serif; }
        main { background: #fff; color: #111; overflow-x: hidden; }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 60px;
          border-bottom: 1px solid #eee;
          background: #fff;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .logo { height: 85px; }

        nav {
          display: flex;
          gap: 25px;
          font-size: 18px;
          font-weight: bold;
        }

        nav a {
          color: #111;
          text-decoration: none;
        }

        .hero {
          min-height: 750px;
          background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          padding: 0 80px;
          color: #fff;
        }

        .hero-box {
          background: rgba(0,0,0,0.58);
          padding: 50px;
          max-width: 720px;
          border-radius: 22px;
        }

        .hero h1 {
          font-size: 60px;
          margin: 0 0 20px;
          line-height: 1.1;
        }

        .hero p {
          font-size: 22px;
          line-height: 1.6;
        }

        .button {
          display: inline-block;
          margin-top: 30px;
          padding: 18px 35px;
          background: #00a8e8;
          color: #fff;
          text-decoration: none;
          border-radius: 12px;
          font-weight: bold;
          font-size: 18px;
        }

        section { padding: 100px 60px; }

        .image-section {
          padding: 0;
          margin: 100px 0;
        }

        .image-section img {
          width: 100%;
          display: block;
        }

        .contained { padding: 0 60px; }
        .contained img { border-radius: 22px; }

        .light { background: #f7f7f7; }

        .title {
          text-align: center;
          font-size: 42px;
          margin-bottom: 20px;
        }

        .subtitle {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
          color: #555;
          font-size: 19px;
          line-height: 1.7;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 22px;
        }

        .service-card {
          background: #fff;
          padding: 28px;
          border-radius: 22px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          min-height: 310px;
          display: flex;
          flex-direction: column;
        }

        .service-number {
          color: #00a8e8;
          font-weight: bold;
          margin-bottom: 18px;
        }

        .service-card h3 {
          font-size: 21px;
          min-height: 70px;
          display: flex;
          align-items: center;
          margin: 0 0 15px;
        }

        .service-card p {
          color: #666;
          line-height: 1.7;
          margin: 0;
        }

        .about { text-align: center; }

        .about p {
          max-width: 900px;
          margin: auto;
          font-size: 20px;
          line-height: 1.8;
          color: #555;
        }

        .contact {
          background: #111;
          color: #fff;
        }

        .contact-wrapper {
          max-width: 900px;
          margin: auto;
          text-align: center;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-top: 40px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        input, select, textarea {
          padding: 18px;
          border-radius: 12px;
          border: none;
          font-size: 16px;
          font-family: Arial, sans-serif;
        }

        button {
          padding: 20px;
          background: #00a8e8;
          color: #fff;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
        }

        .status {
          margin-top: 20px;
          color: #00d084;
          font-weight: bold;
        }

        footer {
          background: #000;
          color: #fff;
          text-align: center;
          padding: 50px 20px;
        }

        footer img {
          height: 90px;
          margin-bottom: 20px;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 25px;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .footer-links a {
          color: #fff;
          text-decoration: none;
        }

        .mobile-only { display: none; }

        @media (max-width: 1100px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          header {
            flex-direction: column;
            padding: 20px;
          }

          nav {
            flex-wrap: wrap;
            justify-content: center;
            font-size: 15px;
            gap: 15px;
          }

          .desktop-only { display: none; }
          .mobile-only { display: block; }

          .hero {
            min-height: 650px;
            padding: 20px;
            align-items: flex-end;
            background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.65)), url('/hero-mobile.png');
          }

          .hero-box { padding: 30px; }
          .hero h1 { font-size: 38px; }
          .hero p { font-size: 18px; }

          section { padding: 70px 20px; }
          .contained { padding: 0 20px; }

          .form-row {
            grid-template-columns: 1fr;
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
      `}</style>

      <header>
        <img src="/logo.png" alt="ECOSOL Direct" className="logo" />

        <nav>
          <a href="#services">Services</a>
          <a href="/simulateur">Simulateur</a>
          <a href="#avantages">Avantages</a>
          <a href="#realisations">Réalisations</a>
          <a href="#about">À propos</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-box">
          <h1>L’énergie solaire pour votre avenir</h1>
          <p>
            ECOSOL Direct accompagne particuliers et professionnels dans leurs projets photovoltaïques avec des solutions performantes et durables.
          </p>
          <a href="#contact" className="button">Demander un devis</a>
        </div>
      </section>

      <div className="image-section desktop-only">
        <img src="/avantages-financiers.png" alt="Avantages financiers" />
      </div>

      <div className="image-section mobile-only">
        <img src="/avantages-financiers-mobile.png" alt="Avantages financiers mobile" />
      </div>

      <section id="services" className="light">
        <h2 className="title">Nos Services</h2>
        <p className="subtitle">
          Des solutions solaires pensées pour vous accompagner de l’étude du projet jusqu’à la mise en service.
        </p>

        <div className="services-grid">
          {[
            ['Installation photovoltaïque', 'Pose de panneaux solaires pour produire votre propre électricité et réduire vos factures.'],
            ['Kits solaires autonomes', 'Solutions solaires adaptées aux besoins d’autonomie énergétique et aux sites isolés.'],
            ['Maintenance & dépannage', 'Contrôle, entretien et intervention pour préserver les performances de votre installation.'],
            ['Études de rentabilité', 'Analyse de votre consommation, estimation de production et projection des économies possibles.'],
            ['Accompagnement administratif', 'Aide dans les démarches liées à votre projet solaire et à sa mise en conformité.'],
          ].map(([title, text], index) => (
            <div className="service-card" key={title}>
              <span className="service-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="image-section desktop-only">
        <img src="/offre_solaire.png" alt="Offre solaire" />
      </div>

      <div className="image-section mobile-only">
        <img src="/offre_solaire_mobile.png" alt="Offre solaire mobile" />
      </div>

      <div className="image-section desktop-only">
        <img src="/installation-sol.png" alt="Installation solaire" />
      </div>

      <div className="image-section mobile-only">
        <img src="/mobile-installation-sol.png" alt="Installation solaire mobile" />
      </div>

      <div id="avantages">
        <div className="image-section contained desktop-only">
          <img src="/avantages.png" alt="Avantages solaire" />
        </div>

        <div className="image-section contained mobile-only">
          <img src="/avantage-mobile.png" alt="Avantages solaire mobile" />
        </div>
      </div>

      <div id="realisations">
        <div className="image-section contained desktop-only">
          <img src="/realisations.png" alt="Réalisations" />
        </div>

        <div className="image-section contained mobile-only">
          <img src="/mobile-realisations.png" alt="Réalisations mobile" />
        </div>
      </div>

      <section id="about" className="about light">
        <h2 className="title">À propos d’ECOSOL Direct</h2>
        <p>
          Nous accompagnons les particuliers, agriculteurs et professionnels dans leur transition énergétique grâce à des solutions photovoltaïques modernes.
        </p>
      </section>

      <section id="contact" className="contact">
        <div className="contact-wrapper">
          <h2 className="title">Demandez votre devis</h2>
          <p>Laissez vos coordonnées. Nous vous recontactons rapidement.</p>

          <form onSubmit={sendEmail}>
            <div className="form-row">
              <input type="text" name="nom" placeholder="Nom" required />
              <input type="text" name="prenom" placeholder="Prénom" required />
            </div>

            <input type="text" name="adresse" placeholder="Adresse" required />

            <div className="form-row">
              <input type="email" name="email" placeholder="Adresse email" required />
              <input type="tel" name="telephone" placeholder="Numéro de téléphone" required />
            </div>

            <select name="type_projet" defaultValue="">
              <option value="" disabled>Type de projet</option>
              <option value="Particulier">Particulier</option>
              <option value="Professionnel">Professionnel</option>
              <option value="Agricole">Agricole</option>
            </select>

            <textarea name="message" placeholder="Décrivez votre projet..." rows="5" />

            <button type="submit">Demander un devis gratuit</button>
          </form>

          <p className="status">{status}</p>
        </div>
      </section>

      <footer>
        <img src="/logo.png" alt="ECOSOL Direct" />
        <p>© 2026 ECOSOL Direct — Tous droits réservés</p>

        <div className="footer-links">
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/politique-confidentialite">Politique de confidentialité</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </main>
  )
}
