export default function App() {
  return (
    <main style={{ fontFamily: "system-ui, Arial, sans-serif", lineHeight: 1.5 }}>
      <header style={{ padding: "48px 24px", background: "#e6f6f4" }}>
        <h1 style={{ margin: 0, fontSize: 36, color: "#0b6b63" }}>
          AMO JURIS
        </h1>
        <p style={{ marginTop: 8, fontSize: 18, color: "#134e4a" }}>
          Votre juriste spécialisé·e en marchés publics.
        </p>
      </header>

      <section style={{ padding: "32px 24px", maxWidth: 900 }}>
        <h2>Ce que nous faisons</h2>
        <ul>
          <li>Conseil et accompagnement des acheteurs publics</li>
          <li>Sécurisation des procédures et des documents</li>
          <li>Analyse des risques de la rédaction à la publication</li>
        </ul>
      </section>

      <section style={{ padding: "0 24px 48px", maxWidth: 900 }}>
        <h2>Contact</h2>
        <p>
          Écrivez-nous à <a href="mailto:contact@amojuris.com">contact@amojuris.com</a>.
        </p>
      </section>

      <footer style={{ padding: 16, background: "#f3f4f6", fontSize: 14 }}>
        © {new Date().getFullYear()} AMO JURIS — Tous droits réservés.
      </footer>
    </main>
  );
}
