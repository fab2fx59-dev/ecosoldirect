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
      Demandez votre devis
    </h2>

    <p
      style={{
        color: "#ccc",
        marginBottom: "40px",
      }}
    >
      Remplissez le formulaire ci-dessous pour être recontacté.
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
        name="Nom"
        placeholder="Nom"
        required
        style={{
          padding: "18px",
          borderRadius: "10px",
          border: "none",
          fontSize: "16px",
        }}
      />

      <input
        type="text"
        name="Prénom"
        placeholder="Prénom"
        required
        style={{
          padding: "18px",
          borderRadius: "10px",
          border: "none",
          fontSize: "16px",
        }}
      />

      <input
        type="text"
        name="Adresse"
        placeholder="Adresse"
        required
        style={{
          padding: "18px",
          borderRadius: "10px",
          border: "none",
          fontSize: "16px",
        }}
      />

      <input
        type="email"
        name="Email"
        placeholder="Adresse email"
        required
        style={{
          padding: "18px",
          borderRadius: "10px",
          border: "none",
          fontSize: "16px",
        }}
      />

      <input
        type="tel"
        name="Téléphone"
        placeholder="Numéro de téléphone"
        required
        style={{
          padding: "18px",
          borderRadius: "10px",
          border: "none",
          fontSize: "16px",
        }}
      />

      <input
        type="date"
        name="Date souhaitée"
        required
        style={{
          padding: "18px",
          borderRadius: "10px",
          border: "none",
          fontSize: "16px",
        }}
      />

      <button
        type="submit"
        style={{
          padding: "20px",
          background: "#00a8e8",
          color: "#fff",
          border: "none",
          borderRadius: "12px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Demander un devis
      </button>
    </form>
  </div>
</section>
