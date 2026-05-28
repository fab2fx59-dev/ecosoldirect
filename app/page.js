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
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </main>
  )
}
