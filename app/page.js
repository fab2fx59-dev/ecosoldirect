export default function Home() {
  const img = {
    hero: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop",
    field: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1600&auto=format&fit=crop",
    panels: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1600&auto=format&fit=crop",
  };

  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#10233f", background: "#fff" }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 7%", borderBottom: "1px solid #e8eef4" }}>
        <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: 1 }}>
          <span style={{ color: "#12234a" }}>ECO</span><span style={{ color: "#0aa0c8" }}>SOL</span>
          <div style={{ fontSize: 18, letterSpacing: 10, color: "#0aa0c8" }}>DIRECT</div>
        </div>
        <nav style={{ display: "flex", gap: 28 }}>
          <a href="#solutions">Passer au solaire</a>
          <a href="#about">À propos</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", alignItems: "center", minHeight: 650 }}>
        <div style={{ padding: "70px 7%" }}>
          <p style={{ color: "#0aa0c8", fontWeight: 700 }}>Meilleur pour l'environnement</p>
          <h1 style={{ fontSize: 62, lineHeight: 1.05, margin: "20px 0" }}>
            Adoptez l'énergie solaire dès aujourd'hui
          </h1>
          <p style={{ fontSize: 20, lineHeight: 1.7, color: "#4d5b6b" }}>
            Installez des panneaux solaires au sol pour produire et consommer votre propre énergie.
            Contribuez à un avenir durable tout en réduisant considérablement vos factures d'électricité.
          </p>
          <a href="#solutions" style={{ display: "inline-block", marginTop: 35, background: "#0aa0c8", color: "#fff", padding: "17px 30px", borderRadius: 8, textDecoration: "none", fontWeight: 700 }}>
            Découvrez nos solutions
          </a>
        </div>
        <img src={img.hero} alt="Panneaux solaires" style={{ width: "100%", height: 650, objectFit: "cover" }} />
      </section>

      <section id="solutions" style={{ padding: "90px 7%" }}>
        <h2 style={{ fontSize: 44 }}>Pourquoi opter pour l'énergie solaire ?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", marginTop: 50 }}>
          <img src={img.field} alt="Installation solaire" style={{ width: "100%", borderRadius: 20 }} />
          <div>
            <h3 style={{ fontSize: 34 }}>Une énergie propre et renouvelable</h3>
            <p style={{ fontSize: 19, lineHeight: 1.8, color: "#4d5b6b" }}>
              Investir dans l'énergie solaire, c'est faire un choix intelligent pour votre portefeuille
              et pour l'environnement. L'énergie solaire est une ressource inépuisable, et son utilisation
              vous permet de contribuer à la protection de notre planète.
            </p>
            <a href="#about" style={{ display: "inline-block", marginTop: 25, color: "#0aa0c8", fontWeight: 700 }}>
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      <section id="about" style={{ background: "#f3f9fc", padding: "90px 7%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
          <div>
            <h2 style={{ fontSize: 42 }}>Pourquoi une installation au sol ?</h2>
            <p style={{ fontSize: 18, lineHeight: 1.8 }}>
              Nous rendons la transition vers l'énergie solaire simple et accessible, garantissant qualité et satisfaction.
            </p>
            <ul style={{ fontSize: 18, lineHeight: 2 }}>
              <li><strong>Entretien facilité :</strong> nettoyage et accès à hauteur d'homme.</li>
              <li><strong>Rendement optimisé :</strong> orientation et inclinaison parfaites.</li>
              <li><strong>Préservation de votre toiture :</strong> aucun risque de fuite.</li>
            </ul>
          </div>
          <img src={img.panels} alt="Panneaux photovoltaïques" style={{ width: "100%", borderRadius: 20 }} />
        </div>
      </section>

      <section style={{ padding: "80px 7%", textAlign: "center" }}>
        <h2 style={{ fontSize: 42 }}>Comment fonctionne l'énergie solaire</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 30, marginTop: 50 }}>
          {[
            ["300 000", "Clients satisfaits"],
            ["5 milliards", "KwH d'énergie propre générée"],
            ["4 millions", "Tonnes de CO2 évitées chaque année"],
          ].map(([n, t]) => (
            <div key={n} style={{ padding: 35, border: "1px solid #dcecf3", borderRadius: 18 }}>
              <div style={{ fontSize: 42, color: "#0aa0c8", fontWeight: 800 }}>{n}</div>
              <p>{t}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "90px 7%", background: "#f8fbfd" }}>
        <h2 style={{ fontSize: 42 }}>Découvrez nos réalisations</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginTop: 40 }}>
          {[img.hero, img.field, img.panels].map((src, i) => (
            <img key={i} src={src} alt="Réalisation solaire" style={{ width: "100%", height: 260, objectFit: "cover", borderRadius: 18 }} />
          ))}
        </div>
      </section>

      <section style={{ padding: "90px 7%", textAlign: "center" }}>
        <h2 style={{ fontSize: 42 }}>Témoignages de nos clients satisfaits !</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 25, marginTop: 45 }}>
          {[
            "Excellent service, je recommande vivement !",
            "Une équipe professionnelle et réactive. Très satisfait de l'installation.",
            "Un investissement rentable et une équipe de confiance. Merci à Ecosol Direct !",
          ].map((t) => (
            <blockquote key={t} style={{ padding: 30, background: "#f3f9fc", borderRadius: 18, fontSize: 18 }}>
              « {t} »
            </blockquote>
          ))}
        </div>
      </section>

      <section id="contact" style={{ padding: "90px 7%", background: "#10233f", color: "#fff" }}>
        <h2 style={{ fontSize: 42 }}>Contact</h2>
        <p>Notre équipe est là pour répondre à toutes vos questions.</p>
        <p style={{ fontSize: 22, marginTop: 25 }}>ecosoldirecct.solaire@gmail.com</p>
        <p>29 rue Tronchet<br />75008 Paris</p>
      </section>

      <footer style={{ padding: 30, textAlign: "center", color: "#6a7480" }}>
        © 2026 ECOSOL DIRECT — Politique de cookies — Mentions légales — Politique de confidentialité
      </footer>
    </main>
  );
}
