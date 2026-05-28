'use client'

import { useMemo, useState } from 'react'

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

  { id: 'pompe', name: 'Pompe à eau', power: 1500, hours: 3 },
]

const offers = [
  {
    name: 'Offre 3 kW',
    powerKw: 3,
    panels: 6,
    maxKwh: 12,
    surface: '18 à 25 m²',
  },
  {
    name: 'Offre 6 kW',
    powerKw: 6,
    panels: 12,
    maxKwh: 24,
    surface: '36 à 50 m²',
  },
  {
    name: 'Offre 9 kW',
    powerKw: 9,
    panels: 18,
    maxKwh: 999,
    surface: '54 à 75 m²',
  },
]

export default function Simulateur() {
  const [selected, setSelected] = useState([
    'frigo',
    'congelateur',
    'eclairage',
  ])

  const toggle = (id) => {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    )
  }

  const result = useMemo(() => {
    const selectedItems = appliances.filter((item) =>
      selected.includes(item.id)
    )

    const total = selectedItems.reduce((sum, item) => {
      return sum + (item.power * item.hours) / 1000
    }, 0)

    const offer =
      offers.find((o) => total <= o.maxKwh) || offers[2]

    return {
      total,
      offer,
    }
  }, [selected])

  return (
    <main className="wrapper">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

        .wrapper {
          min-height: 100vh;
          background: #f5f7f8;
          padding: 80px 20px;
        }

        .container {
          max-width: 1200px;
          margin: auto;
        }

        h1 {
          text-align: center;
          font-size: 48px;
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

        .layout {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 30px;
        }

        .card {
          background: white;
          border-radius: 24px;
          padding: 30px;
          box-shadow: 0 10px 35px rgba(0,0,0,0.08);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .appliance {
          display: flex;
          gap: 12px;
          align-items: center;
          padding: 16px;
          border-radius: 16px;
          border: 1px solid #e2e8ea;
          cursor: pointer;
        }

        .appliance strong {
          display: block;
        }

        .appliance span {
          color: #666;
          font-size: 14px;
        }

        .result {
          background: linear-gradient(135deg, #08753c, #0ab154);
          color: white;
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
          background: white;
          border-radius: 16px;
          padding: 18px;
          color: #111;
        }

        .stat span {
          display: block;
          color: #666;
          margin-bottom: 8px;
        }

        .stat strong {
          font-size: 24px;
          color: #0b7a3b;
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

        .button {
          display: inline-block;
          margin-top: 25px;
          padding: 18px 30px;
          background: #00a8e8;
          color: white;
          text-decoration: none;
          border-radius: 14px;
          font-weight: bold;
        }

        @media (max-width: 900px) {
          .layout {
            grid-template-columns: 1fr;
          }

          .grid,
          .stats {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 36px;
          }
        }
      `}</style>

      <div className="container">
        <h1>Simulateur technique solaire</h1>

        <p className="subtitle">
          Sélectionnez les équipements à alimenter afin
          d’estimer vos besoins électriques et l’offre
          photovoltaïque la plus adaptée.
        </p>

        <div className="layout">
          <div className="card">
            <h2>Vos équipements</h2>

            <div className="grid">
              {appliances.map((item) => (
                <label className="appliance" key={item.id}>
                  <input
                    type="checkbox"
                    checked={selected.includes(item.id)}
                    onChange={() => toggle(item.id)}
                  />

                  <div>
                    <strong>{item.name}</strong>

                    <span>
                      {item.power} W · {item.hours} h/jour
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="result">
              <h2>{result.offer.name}</h2>

              <p>
                Offre recommandée selon vos besoins
                électriques estimés.
              </p>
            </div>

            <div className="stats">
              <div className="stat">
                <span>Besoin estimé</span>

                <strong>
                  {result.total.toFixed(1)} kWh/jour
                </strong>
              </div>

              <div className="stat">
                <span>Puissance solaire</span>

                <strong>
                  {result.offer.powerKw} kW
                </strong>
              </div>

              <div className="stat">
                <span>Panneaux 500 W</span>

                <strong>
                  {result.offer.panels} panneaux
                </strong>
              </div>

              <div className="stat">
                <span>Surface au sol</span>

                <strong>
                  {result.offer.surface}
                </strong>
              </div>
            </div>

            <div className="included">
              <strong>Inclus dans l’offre :</strong>

              <ul>
                <li>Panneaux solaires 500 W</li>
                <li>Onduleur</li>
                <li>Disjoncteurs</li>
                <li>Supports au sol</li>
              </ul>
            </div>

            <a href="/#contact" className="button">
              Demander une étude technique
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
