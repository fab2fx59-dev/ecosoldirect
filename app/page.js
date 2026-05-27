export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#fff", color: "#111" }}>
      
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 60px",
          borderBottom: "1px solid #eee",
          position: "sticky",
          top: 0,
          background: "#fff",
          zIndex: 10,
        }}
      >
        <div style={{ fontSize: "32px", fontWeight: "bold", color: "#0099cc" }}>
          ECOSOL DIRECT
        </div>

        <nav style={{ display: "flex", gap: "30px", fontSize: "16px" }}>
          <a href="#services" style={{ textDecoration: "none", color: "#111" }}>
            Services
          </a>
          <a href="#about" style={{ textDecoration: "none", color: "#111" }}>
            À propos
          </a>
          <a href="#contact" style={{ textDecoration: "none", color: "#111" }}>
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 60px",
          background:
            "linear-gradient(to right, #ffffff 40%, #eaf8ff 100%)",
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          <h1
            style={{
              fontSize: "64px",
              lineHeight: 1.1,
              marginBottom: "30px",
            }}
          >
            L’énergie solaire
            <br />
            nouvelle génération
          </h1>

          <p
            style={{
              fontSize: "22px",
              color: "#555",
              lineHeight: 1.6,
              marginBottom: "40px",
            }}
          >
            Installation de panneaux solaires, batteries et solutions
            énergétiques intelligentes pour particuliers et professionnels.
          </p>

          <div style={{ display: "flex", gap: "20px" }}>
            <a
              href="#contact"
              style={{
                background: "#0099cc",
                color: "#fff",
                padding: "18px 32px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Demander un devis
            </a>

            <a
              href="#services"
              style={{
                border: "2px solid #0099cc",
                color: "#0099cc",
                padding: "18px 32px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Nos services
            </a>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200"
            alt="Panneaux solaires"
            style={{
              width: "650px",
              borderRadius: "24px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            }}
          />
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          padding: "100px 60px",
          background: "#fff",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          Nos services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {[
            "Installation solaire",
            "Batteries de stockage",
            "Autoconsommation",
            "Maintenance & SAV",
          ].map((service, index) => (
            <div
              key={index}
              style={{
                background: "#f8fbfd",
                padding: "40px",
                borderRadius: "20px",
                border: "1px solid #e5f2f7",
              }}
            >
              <h3 style={{ fontSize: "28px", marginBottom: "20px" }}>
                {service}
              </h3>

              <p style={{ color: "#666", lineHeight: 1.7 }}>
                Solutions professionnelles haut de gamme adaptées à vos besoins
                énergétiques et à votre budget.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          padding: "100px 60px",
          background: "#f5fbff",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "48px", marginBottom: "30px" }}>
            Pourquoi ECOSOL DIRECT ?
          </h2>

          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.8,
              color: "#555",
            }}
          >
            Nous accompagnons les particuliers et entreprises dans leur
            transition énergétique avec des solutions fiables, modernes et
            rentables.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "100px 60px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "48px", marginBottom: "30px" }}>
          Contactez-nous
        </h2>

        <p style={{ fontSize: "22px", color: "#666", marginBottom: "20px" }}>
          ecosoldirecct.solaire@gmail.com
        </p>

        <p style={{ fontSize: "20px", color: "#0099cc" }}>
          www.ecosoldirect.fr
        </p>
      </section>
    </main>
  );
}

