```jsx id="pf2x6k"
```jsx
<header>
  <img
    src="/logo.png"
    alt="ECOSOL Direct"
    className="logo"
  />

  <nav>
    <a href="#services">Services</a>

    <a href="/simulateur">
      Simulateur
    </a>

    <a href="#avantages">
      Avantages
    </a>

    <a href="#realisations">
      Réalisations
    </a>

    <a href="#about">
      À propos
    </a>

    <a href="#contact">
      Contact
    </a>
  </nav>
</header>
```


<section className="hero">
  <div className="hero-box">
    <h1>L’énergie solaire pour votre avenir</h1>

    <p>
      ECOSOL Direct accompagne particuliers et
      professionnels dans leurs projets photovoltaïques
      avec des solutions performantes et durables.
    </p>

    <a href="#contact" className="button">
      Demander un devis
    </a>
  </div>
</section>

<div className="image-section desktop-only">
  <img
    src="/avantages-financiers.png"
    alt="Avantages financiers"
  />
</div>

<div className="image-section mobile-only">
  <img
    src="/avantages-financiers-mobile.png"
    alt="Avantages financiers mobile"
  />
</div>

<section id="services" className="light">
  <h2 className="title">Nos Services</h2>

  <p className="subtitle">
    Des solutions solaires pensées pour vous accompagner
    de l’étude du projet jusqu’à la mise en service.
  </p>

  <div className="services-grid">
    {[
      [
        'Installation photovoltaïque',
        'Pose de panneaux solaires pour produire votre propre électricité et réduire vos factures.',
      ],

      [
        'Kits solaires autonomes',
        'Solutions solaires adaptées aux besoins d’autonomie énergétique et aux sites isolés.',
      ],

      [
        'Maintenance & dépannage',
        'Contrôle, entretien et intervention pour préserver les performances de votre installation.',
      ],

      [
        'Études de rentabilité',
        'Analyse de votre consommation, estimation de production et projection des économies possibles.',
      ],

      [
        'Accompagnement administratif',
        'Aide dans les démarches liées à votre projet solaire et à sa mise en conformité.',
      ],
    ].map(([title, text], index) => (
      <div className="service-card" key={title}>
        <span className="service-number">
          0{index + 1}
        </span>

        <h3>{title}</h3>

        <p>{text}</p>
      </div>
    ))}
  </div>
</section>

<div className="image-section desktop-only">
  <img
    src="/offre_solaire.png"
    alt="Offre solaire"
  />
</div>

<div className="image-section mobile-only">
  <img
    src="/offre_solaire_mobile.png"
    alt="Offre solaire mobile"
  />
</div>

<div className="image-section desktop-only">
  <img
    src="/installation-sol.png"
    alt="Installation solaire"
  />
</div>

<div className="image-section mobile-only">
  <img
    src="/mobile-installation-sol.png"
    alt="Installation solaire mobile"
  />
</div>

<div id="avantages">
  <div className="image-section contained desktop-only">
    <img
      src="/avantages.png"
      alt="Avantages solaire"
    />
  </div>

  <div className="image-section contained mobile-only">
    <img
      src="/avantage-mobile.png"
      alt="Avantages solaire mobile"
    />
  </div>
</div>

<div id="realisations">
  <div className="image-section contained desktop-only">
    <img
      src="/realisations.png"
      alt="Réalisations"
    />
  </div>

  <div className="image-section contained mobile-only">
    <img
      src="/mobile-realisations.png"
      alt="Réalisations mobile"
    />
  </div>
</div>

<section id="about" className="about light">
  <h2 className="title">
    À propos d’ECOSOL Direct
  </h2>

  <p>
    Nous accompagnons les particuliers,
    agriculteurs et professionnels dans leur
    transition énergétique grâce à des solutions
    photovoltaïques modernes.
  </p>
</section>

<section id="contact" className="contact">
  <div className="contact-wrapper">
    <h2 className="title">
      Demandez votre devis
    </h2>

    <p>
      Laissez vos coordonnées.
      Nous vous recontactons rapidement.
    </p>

    <form onSubmit={sendEmail}>
      <div className="form-row">
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          required
        />

        <input
          type="text"
          name="prenom"
          placeholder="Prénom"
          required
        />
      </div>

      <input
        type="text"
        name="adresse"
        placeholder="Adresse"
        required
      />

      <div className="form-row">
        <input
          type="email"
          name="email"
          placeholder="Adresse email"
          required
        />

        <input
          type="tel"
          name="telephone"
          placeholder="Numéro de téléphone"
          required
        />
      </div>

      <select
        name="type_projet"
        defaultValue=""
      >
        <option value="" disabled>
          Type de projet
        </option>

        <option value="Particulier">
          Particulier
        </option>

        <option value="Professionnel">
          Professionnel
        </option>

        <option value="Agricole">
          Agricole
        </option>
      </select>

      <textarea
        name="message"
        placeholder="Décrivez votre projet..."
        rows="5"
      />

      <button type="submit">
        Demander un devis gratuit
      </button>
    </form>

    <p className="status">{status}</p>
  </div>
</section>

<footer>
  <img
    src="/logo.png"
    alt="ECOSOL Direct"
  />

  <p>
    © 2026 ECOSOL Direct —
    Tous droits réservés
  </p>

  <div className="footer-links">
    <a href="/mentions-legales">
      Mentions légales
    </a>

    <a href="/politique-confidentialite">
      Politique de confidentialité
    </a>

    <a href="#contact">
      Contact
    </a>
  </div>
</footer>
```
