'use client'

export default function EcosolImpact() {
  return (
    <main>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; font-family: Arial, sans-serif; }
        main { background: #fff; color: #111; overflow-x: hidden; }
        a { color: inherit; text-decoration: none; }

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

        .logo {
          width: min(310px, 48vw);
          height: auto;
          display: block;
        }

        nav {
          display: flex;
          gap: 25px;
          font-size: 18px;
          font-weight: bold;
        }

        nav a { color: #111; text-decoration: none; }
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
        }

        .impact-hero {
          min-height: 720px;
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          gap: 46px;
          align-items: center;
          background-image: linear-gradient(rgba(3,21,43,0.58), rgba(3,21,43,0.5)), url('/ecosol-impact-hero.png');
          background-size: cover;
          background-position: center;
          color: #fff;
        }

        .impact-hero h1 {
          max-width: 860px;
          margin: 0 0 22px;
          font-size: 60px;
          line-height: 1.08;
        }

        .impact-hero p {
          max-width: 760px;
          color: #edf7fb;
          font-size: 21px;
          line-height: 1.7;
        }

        .impact-panel {
          padding: 32px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 22px;
        }

        .impact-panel strong,
        .impact-panel span {
          display: block;
        }

        .impact-panel strong {
          margin-bottom: 10px;
          font-size: 26px;
        }

        .impact-panel span {
          color: #d9edf6;
          line-height: 1.65;
        }

        .impact-actions {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .impact-card {
          padding: 34px;
          background: #fff;
          border: 1px solid #e8edf0;
          border-radius: 22px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
        }

        .impact-icon {
          display: grid;
          place-items: center;
          width: 70px;
          height: 70px;
          margin-bottom: 22px;
          background: #eef6e9;
          color: #2f8a25;
          border-radius: 20px;
          font-size: 34px;
          font-weight: 900;
        }

        .impact-card h3 {
          margin: 0 0 12px;
          color: #092753;
          font-size: 26px;
        }

        .impact-card p {
          margin: 0;
          color: #555;
          line-height: 1.7;
        }

        .impact-method {
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: 46px;
          align-items: center;
        }

        .impact-method img {
          width: 100%;
          display: block;
          border-radius: 22px;
          box-shadow: 0 12px 35px rgba(0,0,0,0.12);
        }

        .impact-steps {
          display: grid;
          gap: 16px;
          margin-top: 28px;
        }

        .impact-step {
          padding: 22px;
          background: #f7faf7;
          border: 1px solid #dcebdd;
          border-radius: 18px;
        }

        .impact-step strong,
        .impact-step span {
          display: block;
        }

        .impact-step strong {
          margin-bottom: 8px;
          color: #092753;
        }

        .impact-step span {
          color: #52605a;
          line-height: 1.6;
        }

        .proof-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          overflow: hidden;
          border: 1px solid #cfe4c9;
          border-radius: 18px;
        }

        .proof-grid div {
          padding: 26px;
          background: #f9fdf7;
        }

        .proof-grid strong,
        .proof-grid span {
          display: block;
        }

        .proof-grid strong {
          margin-bottom: 8px;
          color: #092753;
          font-size: 18px;
        }

        .proof-grid span {
          color: #52605a;
          line-height: 1.55;
        }

        .impact-cta {
          background: #092753;
          color: #fff;
          text-align: center;
        }

        .impact-cta p {
          max-width: 840px;
          margin: 0 auto;
          color: #d9edf6;
          font-size: 20px;
          line-height: 1.7;
        }

        footer {
          background: #000;
          color: #fff;
          text-align: center;
          padding: 50px 20px;
        }

        footer img {
          width: min(320px, 78vw);
          height: auto;
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

        @media (max-width: 980px) {
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

          .impact-hero,
          .impact-method,
          .impact-actions,
          .proof-grid {
            grid-template-columns: 1fr;
          }

          .impact-hero h1 {
            font-size: 40px;
          }

          .title {
            font-size: 34px;
          }
        }
      `}</style>

      <header>
        <a href="/"><img src="/logo.png" alt="ECOSOL Direct" className="logo" /></a>
        <nav>
          <a href="/#services">Services</a>
          <a href="/#simulateur">Simulateur</a>
          <a href="/#realisations">Réalisations</a>
          <a href="/ecosol-impact">Impact</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      <section className="impact-hero">
        <div>
          <p className="kicker">ECOSOL Impact</p>
          <h1>Votre installation solaire peut aussi financer des actions positives.</h1>
          <p>
            Avec ECOSOL Impact, le client n'achète pas seulement des panneaux solaires.
            Il participe à une histoire plus large : produire une énergie utile, soutenir
            des actions concrètes et mesurer l'impact associé à son projet.
          </p>
          <a href="/#contact" className="button">Demander une étude avec impact</a>
        </div>

        <div className="impact-panel">
          <strong>Le principe</strong>
          <span>
            Chaque installation solaire au sol finance un pack d'actions positives,
            vérifiables et expliquées au client après la mise en service.
          </span>
        </div>
      </section>

      <section>
        <h2 className="title">Chaque installation solaire finance trois actions positives</h2>
        <p className="subtitle">
          Une promesse simple à comprendre, concrète pour le client et facile à raconter.
        </p>

        <div className="impact-actions">
          <article className="impact-card">
            <div className="impact-icon">1</div>
            <h3>1 arbre planté</h3>
            <p>
              Une contribution symbolique et visible pour associer chaque projet solaire
              à une action de régénération.
            </p>
          </article>

          <article className="impact-card">
            <div className="impact-icon">10</div>
            <h3>10 kg de plastique retirés</h3>
            <p>
              Une action environnementale concrète pour contribuer au retrait de déchets
              plastiques de l'environnement.
            </p>
          </article>

          <article className="impact-card">
            <div className="impact-icon">OK</div>
            <h3>Une preuve transmise</h3>
            <p>
              Le client reçoit un justificatif ou un récapitulatif de l'action financée,
              afin que l'impact reste clair et vérifiable.
            </p>
          </article>
        </div>
      </section>

      <section className="light">
        <div className="impact-method">
          <div>
            <img src="/pilotage-consommation.png" alt="Client suivant sa production solaire et son impact" />
          </div>

          <div>
            <p className="kicker">Une démarche vérifiable</p>
            <h2>Pas une promesse vague, un engagement traçable.</h2>
            <p>
              Pour que l'idée ait du sens, l'impact doit être suivi. ECOSOL Impact peut
              s'appuyer sur des partenaires capables de confirmer les actions réalisées :
              plantation, collecte, retrait ou contribution environnementale.
            </p>

            <div className="impact-steps">
              <div className="impact-step">
                <strong>1. Installation réalisée</strong>
                <span>Le projet solaire est installé et mis en service chez le client.</span>
              </div>
              <div className="impact-step">
                <strong>2. Action financée</strong>
                <span>ECOSOL Direct déclenche la contribution associée à l'installation.</span>
              </div>
              <div className="impact-step">
                <strong>3. Preuve partagée</strong>
                <span>Le client reçoit un récapitulatif de son impact et peut le conserver.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="title">Pourquoi cela change la perception du projet</h2>
        <p className="subtitle">
          Le client devient acteur d'un projet plus large que sa seule facture d'électricité.
        </p>

        <div className="proof-grid">
          <div><strong>Une histoire</strong><span>Le projet solaire devient plus humain et plus mémorable.</span></div>
          <div><strong>Des valeurs</strong><span>Le client associe son achat à une démarche responsable.</span></div>
          <div><strong>Un impact concret</strong><span>Les actions sont simples à comprendre et à expliquer.</span></div>
          <div><strong>Une preuve</strong><span>Le client reçoit une trace de l'action financée.</span></div>
        </div>
      </section>

      <section className="impact-cta">
        <h2 className="title">Produire son énergie, et contribuer à plus grand.</h2>
        <p>
          Avec ECOSOL Impact, votre installation solaire au sol devient un geste utile
          pour votre maison, votre budget et l'environnement.
        </p>
        <a href="/#contact" className="button">Demander un devis</a>
      </section>

      <footer>
        <img src="/logo.png" alt="ECOSOL Direct" />
        <p>© 2026 ECOSOL Direct — Tous droits réservés</p>
        <div className="footer-links">
          <a href="/">Accueil</a>
          <a href="/ecosol-impact">ECOSOL Impact</a>
          <a href="/#contact">Contact</a>
        </div>
      </footer>
    </main>
  )
}
