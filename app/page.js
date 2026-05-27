export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#ffffff",
        color: "#111",
        margin: 0,
        padding: 0,
      }}
    >
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
          zIndex: 1000,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img
            src="/logo.png"
            alt="ECOSOL Direct"
            style={{ height: "70px" }}
          />

          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "32px",
                color: "#0099cc",
              }}
            >
              ECOSOL DIRECT
            </h1>

            <p
              style={{
                margin: 0,
                color: "#666",
                fontSize: "14px",
              }}
            >
              Énergie solaire & autonomie énergétique
            </p>
          </div>
        </div>

        <nav style={{ display: "flex", gap: "25px" }}>
          <a href="#services">Services</a>
          <a href="#about">À propos</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          position: "relative",
          height: "700px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          padding: "0 80px",
          color: "#fff",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.55)",
            padding: "50px",
            maxWidth: "700px",
            borderRadius: "20px",
          }}
        >
          <h2
            style={{
              fontSize: "60px",
              marginBottom: "20px",
            }}
          >
            L’énergie solaire pour votre avenir
          </h2>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.6",
            }}
          >
            ECOSOL Direct accompagne particuliers et professionnels
            dans leurs projets photovoltaïques avec des solutions
            performantes et durables.
          </p>

          <a
            href="#contact"
            style={{
              display: "inline-block",
              marginTop: "30px",
              padding: "18px 35px",
              background: "#00a8e8",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "18px",
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
          padding: "100px 60px",
          background: "#f7f7f7",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "60px",
          }}
        >
          Nos Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            "Installation photovoltaïque",
            "Kits solaires autonomes",
            "Batteries & stockage",
            "Maintenance & dépannage",
            "Études de rentabilité",
            "Accompagnement administratif",
          ].map((service, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "40px",
                borderRadius: "20px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
              }}
            >
              <h3>{service}</h3>

              <p style={{ color: "#666", lineHeight: "1.7" }}>
                Solution professionnelle adaptée à vos besoins
                énergétiques avec accompagnement complet.
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
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "30px",
            }}
          >
            À propos d’ECOSOL Direct
          </h2>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.8",
              color: "#555",
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
          padding: "100px 60px",
          background: "#111",
          color: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "20px",
            }}
          >
            Contact
          </h2>

          <p
            style={{
              color: "#ccc",
              marginBottom: "40px",
            }}
          >
            Demandez votre étude solaire gratuitement.
          </p>

          <a
            href="mailto:ecosoldirect.solaire@gmail.com"
            style={{
              display: "inline-block",
              padding: "18px 40px",
              background: "#00a8e8",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Envoyer un email
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "40px",
          textAlign: "center",
          background: "#000",
          color: "#fff",
        }}
      >
        <img
          src="/logo.png"
          alt="ECOSOL Direct"
          style={{
            height: "80px",
            marginBottom: "20px",
          }}
        />

        <p>
          © 2026 ECOSOL Direct — Tous droits réservés
        </p>
      </footer>
    </main>
  );
}

