export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#ffffff",
        color: "#111",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px 60px",
          borderBottom: "1px solid #eee",
        }}
      >
        <h1
          style={{
            color: "#00a0d6",
            fontSize: "36px",
            margin: 0,
          }}
        >
          ECOSOL DIRECT
        </h1>

        <nav style={{ display: "flex", gap: "25px" }}>
          <a href="#" style={{ textDecoration: "none", color: "#111" }}>
            Services
          </a>
          <a href="#" style={{ textDecoration: "none", color: "#111" }}>
            À propos
          </a>
          <a href="#" style={{ textDecoration: "none", color: "#111" }}>
            Contact
          </a>
        </nav>
      </header>

      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 60px",
          gap: "60px",
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          <h2
            style={{
              fontSize: "60px",
              lineHeight: "1.1",
              marginBottom: "30px",
            }}
          >
            L’énergie solaire
            <br />
            pour votre avenir
          </h2>

          <p
            style={{
              fontSize: "22px",
              color: "#555",
              lineHeight: "1.7",
              marginBottom: "35px",
            }}
          >
            ECOSOL DIRECT accompagne les particuliers et professionnels avec
            des solutions photovoltaïques performantes, économiques et durables.
          </p>

          <button
            style={{
              backgroundColor: "#00a0d6",
              color: "#fff",
              border: "none",
              padding: "18px 30px",
              borderRadius: "12px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Demander un devis
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200"
          alt="Panneaux solaires"
          style={{
            width: "700px",
            borderRadius: "24px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
          }}
        />
      </section>
    </main>
  );
}
