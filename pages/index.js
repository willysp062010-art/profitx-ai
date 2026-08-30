import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>PROFITX — IA • Solana • Web3</title>
        <meta
          name="description"
          content="PROFITX construit un écosystème combinant intelligence artificielle, automatisation et blockchain Solana."
        />
      </Head>

      <main>
        {/* NAVIGATION */}
        <nav className="navbar">
          <div className="logo">PROFITX</div>

          <div className="nav-links">
            <a href="#projet">Projet</a>
            <a href="#pfx">PFX</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#ecosysteme">Écosystème</a>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="badge">IA • SOLANA • WEB3</div>

          <h1>
            L’IA au service
            <br />
            de l’écosystème
            <br />
            crypto.
          </h1>

          <p className="hero-text">
            PROFITX construit un écosystème combinant intelligence
            artificielle, automatisation et blockchain Solana.
          </p>

          <div className="buttons">
            <a href="#projet" className="button primary">
              Découvrir PROFITX
            </a>

            <a href="#pfx" className="button secondary">
              Découvrir PFX
            </a>
          </div>
        </section>

        {/* PROJET */}
        <section id="projet" className="section">
          <div className="section-label">01 — LE PROJET</div>

          <h2>Un projet construit pour évoluer.</h2>

          <p>
            PROFITX développe des outils et services autour de
            l’intelligence artificielle et de la technologie blockchain.
          </p>

          <div className="cards">
            <div className="card">
              <span>01</span>
              <h3>Intelligence artificielle</h3>
              <p>
                Exploiter l’IA pour créer des outils capables
                d’automatiser et d’améliorer les processus.
              </p>
            </div>

            <div className="card">
              <span>02</span>
              <h3>Automatisation</h3>
              <p>
                Développer des solutions permettant de simplifier
                les interactions avec l’écosystème Web3.
              </p>
            </div>

            <div className="card">
              <span>03</span>
              <h3>Blockchain Solana</h3>
              <p>
                Construire sur une infrastructure blockchain rapide
                et adaptée aux applications Web3.
              </p>
            </div>
          </div>
        </section>

        {/* TOKEN */}
        <section id="pfx" className="section token-section">
          <div className="section-label">02 — TOKEN PFX</div>

          <h2>PFX — Le token de l’écosystème.</h2>

          <p>
            PFX est le token associé à l’écosystème PROFITX sur
            la blockchain Solana.
          </p>

          <div className="token-box">
            <div>
              <span>NETWORK</span>
              <strong>Solana</strong>
            </div>

            <div>
              <span>SYMBOL</span>
              <strong>PFX</strong>
            </div>

            <div>
              <span>ECOSYSTEM</span>
              <strong>PROFITX</strong>
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="section">
          <div className="section-label">03 — ROADMAP 2026</div>

          <h2>Construire. Tester. Développer.</h2>

          <div className="roadmap">
            <div className="roadmap-item">
              <span>PHASE 01</span>
              <h3>Fondations</h3>
              <p>
                Identité, infrastructure, développement du site
                et mise en place de l’écosystème.
              </p>
            </div>

            <div className="roadmap-item">
              <span>PHASE 02</span>
              <h3>Développement</h3>
              <p>
                Développement des premiers outils IA et Web3.
              </p>
            </div>

            <div className="roadmap-item">
              <span>PHASE 03</span>
              <h3>Écosystème</h3>
              <p>
                Déploiement progressif des services et intégrations.
              </p>
            </div>

            <div className="roadmap-item">
              <span>PHASE 04</span>
              <h3>Expansion</h3>
              <p>
                Développement des partenariats et évolution
                de l’écosystème PROFITX.
              </p>
            </div>
          </div>
        </section>

        {/* ECOSYSTEME */}
        <section id="ecosysteme" className="section">
          <div className="section-label">04 — ÉCOSYSTÈME</div>

          <h2>Une vision Web3 orientée technologie.</h2>

          <div className="ecosystem-grid">
            <div>IA</div>
            <div>WEB3</div>
            <div>SOLANA</div>
            <div>AUTOMATISATION</div>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="logo">PROFITX</div>

          <p>
            IA • Solana • Web3
          </p>

          <small>© PROFITX 2026 — Tous droits réservés.</small>
        </footer>
      </main>
    </>
  );
}
