'use client'

import emailjs from '@emailjs/browser'
import { useEffect, useMemo, useState } from 'react'

const appliances = [
  { id: 'frigo', name: 'Réfrigérateur', power: 150, hours: 10 },
  { id: 'congelateur', name: 'Congélateur', power: 180, hours: 10 },
  { id: 'eclairage', name: 'Éclairage maison', power: 300, hours: 5 },
  { id: 'tv', name: 'Télévision', power: 120, hours: 4 },
  { id: 'internet', name: 'Box internet / routeur', power: 30, hours: 24 },
  { id: 'ordinateur', name: 'Ordinateur', power: 150, hours: 5 },
  { id: 'machine', name: 'Machine à laver', power: 1000, hours: 1 },
  { id: 'lavevaisselle', name: 'Lave-vaisselle', power: 1200, hours: 1 },
  { id: 'four', name: 'Four électrique', power: 2000, hours: 1 },
  { id: 'microondes', name: 'Micro-ondes', power: 1000, hours: 0.5 },
  { id: 'chauffeeau', name: 'Chauffe-eau électrique', power: 2000, hours: 2 },
  { id: 'ventilation', name: 'Ventilation centralisée', power: 400, hours: 10 },
  { id: 'radiateurs', name: 'Radiateurs électriques', power: 3000, hours: 6 },
  { id: 'vehicule', name: 'Recharge véhicule électrique', power: 3500, hours: 4 },
  { id: 'pellet', name: 'Poêle à pellets', power: 500, hours: 8 },
  { id: 'climatisation', name: 'Climatisation', power: 1500, hours: 5 },
]

const offers = [
  { name: 'Offre 3 kW', powerKw: 3, panels: 6, maxKwh: 12, surface: '18 à 25 m²' },
  { name: 'Offre 6 kW', powerKw: 6, panels: 12, maxKwh: 24, surface: '36 à 50 m²' },
  { name: 'Offre 9 kW', powerKw: 9, panels: 18, maxKwh: 999, surface: '54 à 75 m²' },
]

export default function Home() {
  const [status, setStatus] = useState('')
  const [selected, setSelected] = useState(['frigo', 'congelateur', 'eclairage'])
  const [valuePulse, setValuePulse] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('main > section')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.16 })

    sections.forEach((section) => {
      section.classList.add('reveal')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setValuePulse(false)
    const frame = requestAnimationFrame(() => {
      setValuePulse(true)
      window.setTimeout(() => setValuePulse(false), 220)
    })

    return () => cancelAnimationFrame(frame)
  }, [selected])

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

  const toggle = (id) => {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    )
  }

  const result = useMemo(() => {
    const selectedItems = appliances.filter((item) => selected.includes(item.id))
    const total = selectedItems.reduce((sum, item) => {
      return sum + (item.power * item.hours) / 1000
    }, 0)
    const offer = offers.find((o) => total <= o.maxKwh) || offers[2]

    return { total, offer }
  }, [selected])

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

        @keyframes softPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.035);
          }
        }

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        section { padding: 100px 60px; }
        .light { background: #f7f7f7; }

        .kicker {
          margin: 0 0 14px;
          color: #00a8e8;
          font-size: 15px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .title {
          text-align: center;
          font-size: 42px;
          margin-bottom: 20px;
        }

        .subtitle {
          text-align: center;
          max-width: 850px;
          margin: 0 auto 60px;
          color: #555;
          font-size: 19px;
          line-height: 1.7;
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
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .button:hover,
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(0,168,232,0.24);
        }

        .specialiste {
          min-height: 720px;
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 44px;
          align-items: center;
          background-image: linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.62)), url('/panneaux-sol-finis.png');
          background-size: cover;
          background-position: center;
          color: #fff;
        }

        .specialiste h1 {
          max-width: 760px;
          margin: 0 0 20px;
          font-size: 60px;
          line-height: 1.1;
        }

        .specialiste p {
          max-width: 720px;
          font-size: 22px;
          line-height: 1.6;
        }

        .specialiste-cards {
          display: grid;
          gap: 18px;
        }

        .specialiste-cards div {
          padding: 28px;
          background: rgba(0,0,0,0.58);
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 22px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .specialiste-cards div:hover,
        .service-card:hover,
        .question-card:hover,
        .offer-card:hover,
        .sim-card:hover,
        .options-grid article:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 42px rgba(0,0,0,0.13);
        }

        .specialiste-cards strong,
        .specialiste-cards span {
          display: block;
        }

        .specialiste-cards strong {
          margin-bottom: 8px;
          font-size: 22px;
        }

        .specialiste-cards span {
          color: #e6e6e6;
          line-height: 1.6;
        }

        .methode,
        .chantier {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 45px;
          align-items: center;
        }

        .methode {
          background: #111;
          color: #fff;
        }

        .methode h2,
        .chantier h2 {
          font-size: 42px;
          margin: 0 0 20px;
        }

        .methode p,
        .chantier p {
          color: #ddd;
          font-size: 19px;
          line-height: 1.7;
        }

        .chantier p { color: #555; }

        .methode img,
        .chantier-photos img {
          width: 100%;
          display: block;
          border-radius: 22px;
        }

        .chantier-photos {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .chantier-photos img {
          height: 430px;
          object-fit: cover;
          box-shadow: 0 12px 35px rgba(0,0,0,0.11);
        }

        .steps {
          display: grid;
          gap: 16px;
          margin-top: 30px;
        }

        .step {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 18px;
          padding: 22px;
        }

        .step strong {
          display: block;
          margin-bottom: 8px;
          font-size: 18px;
        }

        .step span {
          color: #ddd;
          line-height: 1.6;
        }

        .services-grid,
        .questions-grid {
          display: grid;
          gap: 22px;
        }

        .services-grid {
          grid-template-columns: repeat(5, minmax(0, 1fr));
        }

        .questions-grid {
          grid-template-columns: repeat(4, 1fr);
        }

        .service-card,
        .question-card {
          background: #fff;
          padding: 28px;
          border-radius: 22px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
        }

        .service-card {
          min-height: 310px;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
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

        .question-card h3 {
          font-size: 21px;
          margin: 0 0 12px;
        }

        .service-card p,
        .question-card p {
          color: #666;
          line-height: 1.7;
          margin: 0;
        }

        .realisations {
          background: #fff;
        }

        .impact-home-banner {
          padding: 0;
          background: #fff;
        }

        .impact-home-banner a {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          overflow: hidden;
          background: #001f2d;
        }

        .impact-home-banner img {
          width: auto;
          max-width: 100%;
          height: auto;
          max-height: 350px;
          display: block;
          object-fit: contain;
          object-position: center;
        }

        .impact-home-button {
          position: absolute;
          left: 50%;
          top: 43%;
          transform: translate(-50%, -50%);
          padding: 12px 24px;
          background: #00a8e8;
          color: #fff;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          box-shadow: 0 10px 28px rgba(0,0,0,0.28);
          white-space: nowrap;
        }

        .gallery-scroll {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: minmax(360px, 42%);
          gap: 22px;
          overflow-x: auto;
          padding: 6px 4px 22px;
          scroll-snap-type: x mandatory;
          scrollbar-color: #00a8e8 #eef4f6;
        }

        .realisation-card {
          overflow: hidden;
          background: #fff;
          border: 1px solid #e8edf0;
          border-radius: 22px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          scroll-snap-align: start;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .realisation-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 42px rgba(0,0,0,0.14);
        }

        .realisation-card img {
          width: 100%;
          height: 280px;
          display: block;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .realisation-card:hover img {
          transform: scale(1.045);
        }

        .realisation-card div {
          padding: 24px;
        }

        .offer-pill {
          display: inline-block;
          margin-bottom: 14px;
          padding: 8px 12px;
          background: #eef6e9;
          color: #2f8a25;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .realisation-card h3 {
          margin: 0 0 10px;
          color: #092753;
          font-size: 22px;
        }

        .realisation-card p {
          margin: 0;
          color: #555;
          line-height: 1.7;
        }

        .offres {
          background: #fff;
        }

        .offer-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .offer-card {
          position: relative;
          padding: 30px;
          background: #fff;
          border: 1px solid #e8edf0;
          border-radius: 22px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .offer-card.featured {
          border: 2px solid #00a8e8;
          transform: translateY(-8px);
        }

        .offer-label {
          display: inline-block;
          padding: 8px 14px;
          background: #2f8a25;
          color: #fff;
          border-radius: 8px;
          font-weight: 900;
          text-transform: uppercase;
          font-size: 13px;
        }

        .popular {
          position: absolute;
          top: 18px;
          right: -42px;
          transform: rotate(42deg);
          width: 160px;
          padding: 8px 0;
          background: #f7c600;
          color: #092753;
          text-align: center;
          font-weight: 900;
          font-size: 12px;
        }

        .offer-card h3 {
          margin: 22px 0 4px;
          color: #0b2b5c;
          font-size: 34px;
        }

        .offer-card h3 strong {
          color: #2f8a25;
          font-size: 70px;
          line-height: 1;
        }

        .offer-name {
          margin: 0 0 22px;
          color: #2f8a25;
          font-size: 20px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .panel-count {
          margin-bottom: 22px;
          padding: 18px;
          background: #eef6e9;
          border-radius: 16px;
          color: #07305f;
          font-size: 20px;
          font-weight: 900;
        }

        .panel-count span {
          display: block;
          margin-top: 5px;
          color: #222;
          font-size: 15px;
          font-weight: 700;
        }

        .offer-card ul {
          display: grid;
          gap: 12px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .offer-card li {
          position: relative;
          padding-left: 28px;
          color: #0b2148;
          line-height: 1.45;
          font-weight: 700;
        }

        .offer-card li::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: 0;
          color: #2f8a25;
          font-weight: 900;
        }

        .benefit-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          margin-top: 36px;
          border: 1px solid #cfe4c9;
          border-radius: 18px;
          overflow: hidden;
        }

        .benefit-strip div {
          padding: 24px;
          background: #f9fdf7;
        }

        .benefit-strip strong,
        .benefit-strip span {
          display: block;
        }

        .benefit-strip strong {
          margin-bottom: 8px;
          color: #092753;
          font-size: 17px;
        }

        .benefit-strip span {
          color: #52605a;
          line-height: 1.55;
        }

        .monitoring-banner {
          position: relative;
          min-height: 390px;
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          align-items: center;
          gap: 34px;
          margin-top: 44px;
          overflow: hidden;
          background: #092753;
          border-radius: 22px;
          color: #fff;
        }

        .monitoring-banner img {
          width: 100%;
          height: 100%;
          min-height: 390px;
          display: block;
          object-fit: cover;
          animation: softPulse 12s ease-in-out infinite;
        }

        .monitoring-banner div {
          padding: 38px 42px 38px 0;
        }

        .monitoring-banner h3 {
          margin: 0 0 16px;
          font-size: 38px;
          line-height: 1.08;
        }

        .monitoring-banner p {
          color: #d9edf6;
          font-size: 18px;
          line-height: 1.7;
        }

        .options {
          margin-top: 44px;
          padding: 34px;
          background: #f5f7f8;
          border-radius: 22px;
        }

        .section-heading {
          max-width: 760px;
          margin-bottom: 26px;
        }

        .section-heading h3 {
          margin: 0;
          font-size: 34px;
        }

        .options-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .options-grid article {
          padding: 28px;
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .options-grid h4 {
          margin: 0 0 12px;
          font-size: 24px;
        }

        .options-grid p {
          margin: 0;
          color: #555;
          line-height: 1.7;
        }

        .about { text-align: center; }

        .about p {
          max-width: 900px;
          margin: auto;
          font-size: 20px;
          line-height: 1.8;
          color: #555;
        }

        .simulateur {
          background: #f5f7f8;
        }

        .sim-layout {
          max-width: 1320px;
          margin: auto;
          display: grid;
          grid-template-columns: minmax(0, 1.28fr) minmax(360px, 0.72fr);
          gap: 34px;
        }

        .sim-card {
          background: #fff;
          border-radius: 24px;
          padding: 34px;
          box-shadow: 0 10px 35px rgba(0,0,0,0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .appliance-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .appliance {
          display: grid;
          grid-template-columns: 22px minmax(0, 1fr);
          gap: 14px;
          align-items: start;
          min-height: 86px;
          padding: 18px;
          border-radius: 16px;
          border: 1px solid #e2e8ea;
          cursor: pointer;
          background: #fff;
        }

        .appliance input {
          width: 18px;
          height: 18px;
          margin: 3px 0 0;
          padding: 0;
        }

        .appliance strong,
        .appliance span {
          display: block;
        }

        .appliance strong {
          font-size: 16px;
          line-height: 1.35;
        }

        .appliance span {
          color: #666;
          margin-top: 7px;
          line-height: 1.35;
          font-size: 14px;
        }

        .result {
          background: linear-gradient(135deg, #08753c, #0ab154);
          color: #fff;
          border-radius: 24px;
          padding: 30px;
          margin-bottom: 20px;
        }

        .result h2 {
          margin-top: 0;
          font-size: 38px;
        }

        .stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .stat {
          background: #fff;
          border-radius: 16px;
          padding: 18px;
          color: #111;
          border: 1px solid #e8ece8;
        }

        .stat span {
          display: block;
          color: #666;
          margin-bottom: 8px;
        }

        .stat strong {
          font-size: 24px;
          color: #0b7a3b;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .stat strong.value-pop {
          display: inline-block;
          color: #00a8e8;
          transform: scale(1.06);
        }

        .included {
          margin-top: 20px;
          background: #f8faf9;
          padding: 20px;
          border-radius: 18px;
        }

        .included ul {
          line-height: 1.9;
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
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.001ms !important;
          }

          .reveal {
            opacity: 1;
            transform: none;
          }
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

        @media (max-width: 1180px) {
          .services-grid,
          .questions-grid,
          .offer-grid,
          .benefit-strip {
            grid-template-columns: repeat(2, 1fr);
          }

          .sim-layout {
            grid-template-columns: 1fr;
          }

          nav {
            gap: 15px;
            font-size: 16px;
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

          section { padding: 70px 20px; }

          .specialiste,
          .methode,
          .chantier {
            grid-template-columns: 1fr;
          }

          .specialiste {
            min-height: 650px;
            padding: 70px 20px;
          }

          .specialiste h1 { font-size: 38px; }
          .specialiste p { font-size: 18px; }

          .chantier-photos,
          .appliance-grid,
          .stats,
          .form-row,
          .options-grid,
          .monitoring-banner {
            grid-template-columns: 1fr;
          }

          .chantier-photos img {
            height: auto;
          }

          .gallery-scroll {
            grid-auto-columns: minmax(300px, 82%);
          }

          .monitoring-banner div {
            padding: 30px;
          }

          .monitoring-banner img,
          .monitoring-banner {
            min-height: auto;
          }
        }

        @media (max-width: 650px) {
          .services-grid,
          .questions-grid,
          .offer-grid,
          .benefit-strip {
            grid-template-columns: 1fr;
          }

          .offer-card.featured {
            transform: none;
          }

          .options {
            padding: 24px;
          }

          .service-card { min-height: auto; }
          .service-card h3 { min-height: auto; }
          .title { font-size: 34px; }
        }
      `}</style>

      <header>
        <img src="/logo.png" alt="ECOSOL Direct" className="logo" />

        <nav>
          <a href="#services">Services</a>
          <a href="/simulateur">Simulateur</a>
          <a href="#avantages">Avantages</a>
          <a href="#realisations">Réalisations</a>
          <a href="/ecosol-impact">Impact</a>
          <a href="#about">À propos</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="specialiste" className="specialiste">
        <div>
          <p className="kicker">Spécialiste de la pose au sol</p>
          <h1>Panneaux solaires au sol pour produire votre propre énergie.</h1>
          <p>
            ECOSOL Direct accompagne les particuliers, agriculteurs et professionnels
            qui souhaitent installer des panneaux photovoltaïques sur un terrain,
            sans intervenir sur la toiture.
          </p>
          <a href="#contact" className="button">Demander un devis</a>
        </div>

        <div className="specialiste-cards">
          <div>
            <strong>Sans toucher à la toiture</strong>
            <span>Une installation sur structure au sol, pratique lorsque le toit n'est pas adapté.</span>
          </div>
          <div>
            <strong>Terrain étudié</strong>
            <span>Surface, orientation, ombrage et accès sont vérifiés avant la proposition.</span>
          </div>
          <div>
            <strong>Projet dimensionné</strong>
            <span>La puissance est adaptée à vos besoins et à l'espace disponible.</span>
          </div>
        </div>
      </section>

      <section id="methode" className="methode">
        <div>
          <img src="/panneaux-sol-finis.png" alt="Panneaux solaires installés au sol" />
        </div>

        <div>
          <p className="kicker">La méthode</p>
          <h2>Un accompagnement clair, de l'étude à la mise en service.</h2>
          <p>
            Un projet solaire au sol doit être simple à comprendre, bien dimensionné
            et correctement préparé. Chaque étape permet de sécuriser votre installation.
          </p>

          <div className="steps">
            <div className="step">
              <strong>1. Analyse du terrain</strong>
              <span>Surface disponible, orientation, ombrage, accès et contraintes locales.</span>
            </div>
            <div className="step">
              <strong>2. Dimensionnement</strong>
              <span>Choix de la puissance adaptée selon vos besoins électriques et votre budget.</span>
            </div>
            <div className="step">
              <strong>3. Pose au sol</strong>
              <span>Installation des supports, panneaux, protections électriques et raccordement.</span>
            </div>
            <div className="step">
              <strong>4. Mise en service</strong>
              <span>Contrôle final, conseils d'utilisation et suivi de production.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="avantages" className="light">
        <h2 className="title">Pourquoi la pose au sol ?</h2>
        <p className="subtitle">
          Une solution idéale si vous disposez d'un espace extérieur exploitable
          ou si votre toiture n'est pas adaptée à une installation photovoltaïque.
        </p>

        <div className="services-grid">
          {[
            ['Pas de modification de toiture', "Les panneaux sont installés au sol, sur une structure dédiée."],
            ['Orientation optimisée', "L'installation peut être placée selon le meilleur ensoleillement disponible."],
            ['Entretien facilité', "L'accès au sol simplifie les contrôles, nettoyages et interventions."],
            ['Adapté aux grands espaces', "Jardins, parcelles, terrains agricoles ou zones techniques peuvent être valorisés."],
            ['Projet évolutif', "La surface au sol permet d'anticiper de nouveaux besoins électriques."],
          ].map(([title, text], index) => (
            <div className="service-card" key={title}>
              <span className="service-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="impact-home-banner" aria-label="ECOSOL Impact">
        <a href="/ecosol-impact">
          <img
            src="/banniere-impact-ecosol.png"
            alt="ECOSOL Impact - votre installation solaire finance 1 arbre planté et 100 kg de plastique retirés"
          />
          <span className="impact-home-button">En savoir plus</span>
        </a>
      </section>

      <section id="realisations" className="realisations">
        <h2 className="title">Réalisations de chantiers</h2>
        <p className="subtitle">
          Découvrez différents exemples de poses au sol selon la puissance choisie,
          le terrain disponible et les besoins du client.
        </p>

        <div className="gallery-scroll" aria-label="Galerie de réalisations">
          <article className="realisation-card">
            <img src="/realisation-3kw-photo.png" alt="Chantier solaire au sol offre 3 kW avec 6 panneaux" />
            <div>
              <span className="offer-pill">Offre 3 kW</span>
              <h3>Maison individuelle - besoins essentiels</h3>
              <p>6 panneaux au sol pour couvrir les usages du quotidien : éclairage, électroménager, TV et internet.</p>
            </div>
          </article>

          <article className="realisation-card">
            <img src="/realisation-6kw-photo.png" alt="Installation solaire au sol offre 6 kW avec 12 panneaux" />
            <div>
              <span className="offer-pill">Offre 6 kW</span>
              <h3>Terrain familial - autoconsommation confort</h3>
              <p>12 panneaux installés sur structure au sol pour accompagner une grande partie des besoins de la maison.</p>
            </div>
          </article>

          <article className="realisation-card">
            <img src="/realisation-9kw-photo.png" alt="Installation solaire au sol offre 9 kW avec 18 panneaux" />
            <div>
              <span className="offer-pill">Offre 9 kW</span>
              <h3>Grand terrain - usages renforcés</h3>
              <p>18 panneaux pour un foyer avec besoins plus importants : atelier, climatisation, piscine ou véhicule électrique.</p>
            </div>
          </article>

          <article className="realisation-card">
            <img src="/realisation-options-photo.png" alt="Installation solaire au sol avec batterie et prises connectées" />
            <div>
              <span className="offer-pill">Option stockage</span>
              <h3>Projet évolutif avec pilotage</h3>
              <p>Installation pensée pour ajouter une batterie de stockage ou piloter certains équipements connectés.</p>
            </div>
          </article>
        </div>
      </section>

      <section id="offres" className="offres">
        <h2 className="title">3 offres en autoconsommation directe</h2>
        <p className="subtitle">
          Choisissez la puissance qui correspond à vos besoins. Les offres sont pensées
          pour produire et consommer votre électricité immédiatement, simplement, sans batterie
          obligatoire et sans revente à Enedis.
        </p>

        <div className="offer-grid">
          <article className="offer-card">
            <span className="offer-label">Installation au sol</span>
            <h3><strong>3</strong> kW</h3>
            <p className="offer-name">L'offre essentielle</p>
            <div className="panel-count">6 panneaux <span>6 x 500 Wc = 3 000 Wc</span></div>
            <ul>
              <li>Puissance installée : 3 kWc</li>
              <li>Production estimée : 3 600 à 4 200 kWh/an</li>
              <li>Couvre les besoins essentiels : électroménager, éclairage, TV, internet</li>
              <li>Installation au sol optimisée</li>
              <li>Autoconsommation directe sans batterie</li>
              <li>Aucune revente à Enedis</li>
            </ul>
          </article>

          <article className="offer-card featured">
            <span className="offer-label">Installation au sol</span>
            <span className="popular">Le plus choisi</span>
            <h3><strong>6</strong> kW</h3>
            <p className="offer-name">L'offre confort</p>
            <div className="panel-count">12 panneaux <span>12 x 500 Wc = 6 000 Wc</span></div>
            <ul>
              <li>Puissance installée : 6 kWc</li>
              <li>Production estimée : 7 200 à 8 400 kWh/an</li>
              <li>Couvre une grande partie des besoins d'une maison</li>
              <li>Chauffage, eau chaude, électroménager selon votre profil</li>
              <li>Installation au sol optimisée</li>
              <li>Autoconsommation directe sans batterie</li>
            </ul>
          </article>

          <article className="offer-card">
            <span className="offer-label">Installation au sol</span>
            <h3><strong>9</strong> kW</h3>
            <p className="offer-name">L'offre performance</p>
            <div className="panel-count">18 panneaux <span>18 x 500 Wc = 9 000 Wc</span></div>
            <ul>
              <li>Puissance installée : 9 kWc</li>
              <li>Production estimée : 10 800 à 12 600 kWh/an</li>
              <li>Couvre la majorité des besoins énergétiques d'un foyer</li>
              <li>Adaptée aux usages renforcés : climatisation, piscine, atelier</li>
              <li>Installation au sol optimisée</li>
              <li>Aucune revente à Enedis</li>
            </ul>
          </article>
        </div>

        <div className="benefit-strip">
          <div><strong>Économies immédiates</strong><span>Réduisez votre facture dès la mise en service.</span></div>
          <div><strong>Solution simple</strong><span>Installation au sol rapide et lisible.</span></div>
          <div><strong>Zéro complexité administrative</strong><span>Pas de contrat de revente avec Enedis.</span></div>
          <div><strong>Plus d'indépendance</strong><span>Vous produisez et consommez votre énergie.</span></div>
        </div>

        <div className="monitoring-banner">
          <img src="/pilotage-consommation.png" alt="Suivi de la consommation solaire sur téléphone" />
          <div>
            <p className="kicker">Suivi de production</p>
            <h3>Pilotez votre consommation au bon moment.</h3>
            <p>
              Visualisez votre production solaire, identifiez les meilleurs moments pour utiliser vos équipements
              et profitez davantage de l'énergie produite sur votre terrain.
            </p>
          </div>
        </div>

        <div className="options">
          <div className="section-heading">
            <p className="kicker">Options possibles</p>
            <h3>Complétez votre installation selon vos usages.</h3>
          </div>

          <div className="options-grid">
            <article>
              <h4>Batteries de stockage</h4>
              <p>
                Stockez une partie de votre production solaire pour l'utiliser plus tard,
                notamment le soir ou lors des pics de consommation.
              </p>
            </article>
            <article>
              <h4>Prises électriques connectées</h4>
              <p>
                Pilotez certains équipements à distance et programmez leur fonctionnement
                pendant les heures de production solaire.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="chantier" className="chantier">
        <div>
          <p className="kicker">Chantier de pose</p>
          <h2>Une installation au sol propre, préparée et maîtrisée.</h2>
          <p>
            Chaque projet commence par l'étude du terrain, puis la mise en place
            des supports, des panneaux et des protections électriques. Vous gardez
            une installation accessible, claire à entretenir et pensée pour produire durablement.
          </p>
        </div>

        <div className="chantier-photos">
          <img src="/chantier-pose-sol.png" alt="Chantier de pose de panneaux solaires au sol" />
          <img src="/panneaux-sol-finis.png" alt="Panneaux solaires posés au sol" />
        </div>
      </section>

      <section id="preuves" className="light">
        <h2 className="title">Votre projet solaire au sol, en clair</h2>
        <p className="subtitle">
          Avant de vous engager, vous devez savoir si votre terrain est adapté,
          quelle surface prévoir et ce qui est inclus dans votre installation.
        </p>

        <div className="questions-grid">
          <div className="question-card">
            <h3>Mon terrain convient-il ?</h3>
            <p>Nous vérifions la surface disponible, l'exposition, les zones d'ombre et l'accès avant de vous conseiller une solution.</p>
          </div>
          <div className="question-card">
            <h3>Quelle surface prévoir ?</h3>
            <p>Comptez environ 18 à 25 m² pour 3 kW, 36 à 50 m² pour 6 kW et 54 à 75 m² pour 9 kW.</p>
          </div>
          <div className="question-card">
            <h3>Que comprend l'offre ?</h3>
            <p>Votre offre peut inclure les panneaux 500 W, l'onduleur, les protections, les supports au sol et la mise en service.</p>
          </div>
          <div className="question-card">
            <h3>Pour quels profils ?</h3>
            <p>La pose au sol convient aux particuliers, agriculteurs et professionnels disposant d'un espace exploitable.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2 className="title">À propos d'ECOSOL Direct</h2>
        <p>
          Nous accompagnons les particuliers, agriculteurs et professionnels dans leur
          transition énergétique grâce à des solutions photovoltaïques modernes,
          durables et adaptées aux contraintes du terrain.
        </p>
      </section>

      <section id="simulateur" className="simulateur light">
        <h2 className="title">Simulateur technique solaire</h2>
        <p className="subtitle">
          Sélectionnez les équipements à alimenter afin d'estimer vos besoins électriques
          et l'offre photovoltaïque la plus adaptée.
        </p>

        <div className="sim-layout">
          <div className="sim-card">
            <h3>Vos équipements</h3>
            <div className="appliance-grid">
              {appliances.map((item) => (
                <label className="appliance" key={item.id}>
                  <input
                    type="checkbox"
                    checked={selected.includes(item.id)}
                    onChange={() => toggle(item.id)}
                  />

                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.power} W · {item.hours} h/jour</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="sim-card">
            <div className="result">
              <h2>{result.offer.name}</h2>
              <p>Offre recommandée selon vos besoins électriques estimés.</p>
            </div>

            <div className="stats">
              <div className="stat">
                <span>Besoin estimé</span>
                <strong className={valuePulse ? 'value-pop' : ''}>{result.total.toFixed(1)} kWh/jour</strong>
              </div>
              <div className="stat">
                <span>Puissance solaire</span>
                <strong className={valuePulse ? 'value-pop' : ''}>{result.offer.powerKw} kW</strong>
              </div>
              <div className="stat">
                <span>Panneaux 500 W</span>
                <strong className={valuePulse ? 'value-pop' : ''}>{result.offer.panels} panneaux</strong>
              </div>
              <div className="stat">
                <span>Surface au sol</span>
                <strong className={valuePulse ? 'value-pop' : ''}>{result.offer.surface}</strong>
              </div>
            </div>

            <div className="included">
              <strong>Inclus dans l'offre :</strong>
              <ul>
                <li>Panneaux solaires 500 W</li>
                <li>Onduleur</li>
                <li>Disjoncteurs</li>
                <li>Supports au sol</li>
              </ul>
            </div>

            <a href="#contact" className="button">Demander une étude technique</a>
          </div>
        </div>
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

      <section id="services" className="light">
        <h2 className="title">Nos Services</h2>
        <p className="subtitle">
          Des solutions solaires pensées pour vous accompagner de l'étude du projet jusqu'à la mise en service.
        </p>

        <div className="services-grid">
          {[
            ['Installation photovoltaïque', 'Pose de panneaux solaires pour produire votre propre électricité et réduire vos factures.'],
            ['Kits solaires autonomes', "Solutions solaires adaptées aux besoins d'autonomie énergétique et aux sites isolés."],
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

      <footer>
        <img src="/logo.png" alt="ECOSOL Direct" />
        <p>© 2026 ECOSOL Direct — Tous droits réservés</p>

        <div className="footer-links">
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/politique-confidentialite">Politique de confidentialité</a>
          <a href="/ecosol-impact">ECOSOL Impact</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </main>
  )
}
