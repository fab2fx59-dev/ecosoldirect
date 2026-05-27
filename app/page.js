export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff",
        color: "#10233f",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px 7%",
          borderBottom: "1px solid #eaeaea",
          background: "#fff",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <img
          src="/logo.png"
          alt="ECOSOL DIRECT"
          style={{ height: "80px" }}
        />

        <nav style={{ display: "flex", gap: "30px" }}>
          <a href="#services" style={linkStyle}>
            Services
          </a>
          <a href="#about" style={linkStyle}>
            À propos
          </a>
          <a href="#contact" style={linkStyle}>
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          minHeight: "85vh",
          padding: "80px 7%",
          gap: "60px",
          background:
            "linear-gradient(to right,#ffffff 30%,#edf9ff 100%)",
        }}
      >
        <div>
          <p
            style={{
              color: "#00a0d6",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            ÉNERGIE RENOUVELABLE
          </p>

          <h1
            style={{
              fontSize: "68px",
              lineHeight: "1.05",
              margin: "20px 0",
            }}
          >
            Adoptez
            <br />
            l’énergie solaire
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.7",
              color: "#5b6675",
              marginBottom: "35px",
            }}
          >
            Installation de panneaux photovoltaïques au sol,
            autoconsommation, batteries et solutions énergétiques
            intelligentes pour particuliers et professionnels.
          </p>

          <a
            href="#contact"
            style={{
              background: "#00a0d6",
              color: "#fff",
              padding: "18px 34px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
              display: "inline-block",
            }}
          >
            Demander un devis
          </a>
        </div>

        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1400"
          alt="Panneaux solaires"
          style={{
            width: "100%",
            borderRadius: "24px",
            boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
          }}
        />
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          padding: "100px 7%",
        }}
      >
        <h2
          style={{
            fontSize: "50px",
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          Nos services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "30px",
          }}
        >
          {[
            "Installation solaire",
            "Batteries de stockage",
            "Autoconsommation",
            "Maintenance & SAV",
          ].map((service) => (
            <div
              key={service}
              style={{
                background: "#f8fbfd",
                padding: "40px",
                borderRadius: "20px",
                border: "1px solid #e6f2f7",
              }}
            >
              <h3 style={{ fontSize: "28px" }}>{service}</h3>

              <p
                style={{
                  color: "#5b6675",
                  lineHeight: "1.8",
                }}
              >
                Solutions professionnelles performantes et durables adaptées à
                vos besoins énergétiques.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          background: "#f4fbff",
          padding: "100px 7%",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "50px",
              marginBottom: "30px",
            }}
          >
            Pourquoi choisir ECOSOL DIRECT ?
          </h2>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.9",
              color: "#5b6675",
            }}
          >
            Nous accompagnons les particuliers et entreprises dans leur
            transition énergétique grâce à des solutions fiables,
            modernes et rentables.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "100px 7%",
          background: "#10233f",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "auto",
          }}
        >
          <h2
            style={{
              fontSize: "50px",
              marginBottom: "25px",
              textAlign: "center",
            }}
          >
            Contactez-nous
          </h2>

          <p
            style={{
              textAlign: "center",
              marginBottom: "50px",
              color: "#d7e1ea",
              fontSize: "20px",
            }}
          >
            Obtenez votre étude solaire gratuite
          </p>

          <form
            action="mailto:ecosoldirect.solaire@gmail.com"
            method="POST"
            encType="text/plain"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Nom"
              required
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Email"
              required
              style={inputStyle}
            />

            <input
              type="tel"
              placeholder="Téléphone"
              style={inputStyle}
            />

            <textarea
              placeholder="Votre message"
              rows="6"
              required
              style={inputStyle}
            ></textarea>

            <button
              type="submit"
              style={{
                background: "#00a0d6",
                color: "#fff",
                border: "none",
                padding: "18px",
                borderRadius: "12px",
                fontSize: "18px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "30px",
          textAlign: "center",
          background: "#0b1b31",
          color: "#cfd7df",
        }}
      >
        © 2026 ECOSOL DIRECT — Tous droits réservés
      </footer>
    </main>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#10233f",
  fontWeight: "600",
};

const inputStyle = {
  padding: "18px",
  borderRadius: "12px",
  border: "none",
  fontSize: "16px",
};

