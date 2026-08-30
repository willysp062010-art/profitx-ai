import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>PROFITX — IA • Solana • Web3</title>

        <meta
          name="description"
          content="PROFITX — Écosystème IA, automatisation et infrastructure Web3 construit sur Solana."
        />

        <meta
          name="keywords"
          content="PROFITX, PFX, Solana, AI, IA, Web3, blockchain, automation"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="PROFITX — IA • Solana • Web3" />
        <meta
          property="og:description"
          content="L'IA au service de l'écosystème crypto."
        />
        <meta property="og:type" content="website" />
      </Head>

      <main>
        {/* =========================
            NAVIGATION
        ========================== */}

        <nav className="navbar">
          <div className="nav-logo">PROFITX</div>

          <div className="nav-links">
            <a href="#projet">Projet</a>
            <a href="#pfx">PFX</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#ecosysteme">Écosystème</a>
          </div>

          <a
            className="nav-button"
            href="https://x.com/profitx_ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </nav>

        {/* =========================
            HERO
        ========================== */}

        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">IA • SOLANA • WEB3</div>

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

            <div className="hero-buttons">
              <a href="#projet" className="button primary">
                Découvrir PROFITX
              </a>

              <a href="#pfx" className="button secondary">
                Découvrir PFX
              </a>
            </div>
          </div>

          <div className="hero-glow"></div>
        </section>

        {/* =========================
            PROJET
        ========================== */}

        <section id="projet" className="section">
          <div className="section-label">01 — LE PROJET</div>

          <h2>
            Un projet construit pour
            <br />
            évoluer.
          </h2>

          <p className="section-intro">
            PROFITX développe des outils et services autour de l’intelligence
            artificielle et de la technologie blockchain.
          </p>

          <div className="cards">
            <article className="card">
              <span className="card-number">01</span>

              <h3>Intelligence artificielle</h3>

              <p>
                Explorer l’IA pour créer des outils capables d’automatiser et
                d’améliorer les processus.
              </p>
            </article>

            <article className="card">
              <span className="card-number">02</span>

              <h3>Automatisation</h3>

              <p>
                Développer des solutions permettant de simplifier les
                interactions avec l’écosystème Web3.
              </p>
            </article>

            <article className="card">
              <span className="card-number">03</span>

              <h3>Blockchain Solana</h3>

              <p>
                Construire sur une infrastructure blockchain rapide et adaptée
                aux applications Web3.
              </p>
            </article>
          </div>
        </section>

        {/* =========================
            PFX
        ========================== */}

        <section id="pfx" className="section token-section">
          <div className="section-label">02 — TOKEN PFX</div>

          <h2>
            PFX — Le token de
            <br />
            l’écosystème.
          </h2>

          <p className="section-intro">
            PFX est le token associé à l’écosystème PROFITX sur la blockchain
            Solana.
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

          <div className="token-note">
            <span className="token-symbol">PFX</span>

            <div>
              <h3>Built on Solana.</h3>

              <p>
                Une vision orientée vers l’intelligence artificielle,
                l’automatisation et les infrastructures autonomes.
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            ROADMAP
        ========================== */}

        <section id="roadmap" className="section">
          <div className="section-label">03 — ROADMAP 2026</div>

          <h2>
            Construire. Tester.
            <br />
            Développer.
          </h2>

          <div className="roadmap">
            <article className="roadmap-item">
              <span>PHASE 01</span>

              <h3>Fondations</h3>

              <p>
                Identité, infrastructure, développement du site et mise en
                place de l’écosystème.
              </p>
            </article>

            <article className="roadmap-item">
              <span>PHASE 02</span>

              <h3>Développement</h3>

              <p>
                Développement des premiers outils IA et Web3.
              </p>
            </article>

            <article className="roadmap-item">
              <span>PHASE 03</span>

              <h3>Écosystème</h3>

              <p>
                Déploiement progressif des services et intégrations.
              </p>
            </article>

            <article className="roadmap-item">
              <span>PHASE 04</span>

              <h3>Expansion</h3>

              <p>
                Développement des partenariats et évolution de l’écosystème
                PROFITX.
              </p>
            </article>
          </div>
        </section>

        {/* =========================
            ECOSYSTEME
        ========================== */}

        <section id="ecosysteme" className="section ecosystem-section">
          <div className="section-label">04 — ÉCOSYSTÈME</div>

          <h2>
            Une vision Web3 orientée
            <br />
            technologie.
          </h2>

          <div className="ecosystem-grid">
            <div>IA</div>
            <div>WEB3</div>
            <div>SOLANA</div>
            <div>AUTOMATISATION</div>
          </div>

          <div className="vision-box">
            <div className="vision-title">THE FUTURE IS AUTONOMOUS.</div>

            <p>
              PROFITX explore la convergence entre intelligence artificielle,
              blockchain et systèmes autonomes.
            </p>
          </div>
        </section>

        {/* =========================
            SOCIAL
        ========================== */}

        <section className="social-section">
          <div className="section-label">JOIN THE ECOSYSTEM</div>

          <h2>Suivez PROFITX.</h2>

          <p>
            Retrouvez l’écosystème PROFITX sur les principales plateformes.
          </p>

          <div className="social-links">

            <a
              href="https://x.com/profitx_ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-icon">𝕏</span>

              <div>
                <strong>X / TWITTER</strong>
                <small>@profitx_ai</small>
              </div>
            </a>

            <a
              href="https://www.tiktok.com/@pfx_profitx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-icon">♪</span>

              <div>
                <strong>TIKTOK</strong>
                <small>@pfx_profitx</small>
              </div>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61591572038365"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-icon">f</span>

              <div>
                <strong>FACEBOOK</strong>
                <small>Profitx Pfx</small>
              </div>
            </a>

          </div>
        </section>

        {/* =========================
            FOOTER
        ========================== */}

        <footer>
          <div className="footer-logo">PROFITX</div>

          <p>IA • Solana • Web3</p>

          <div className="footer-links">
            <a href="#projet">Projet</a>
            <a href="#pfx">PFX</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#ecosysteme">Écosystème</a>
          </div>

          <small>© PROFITX 2026 — Tous droits réservés.</small>
        </footer>
      </main>

      {/* =========================
          DESIGN
      ========================== */}

      <style jsx>{`
        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
          background: #050505;
          color: #ffffff;
          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        :global(*) {
          box-sizing: border-box;
        }

        :global(a) {
          color: inherit;
          text-decoration: none;
        }

        main {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 85% 5%,
              rgba(50, 255, 100, 0.08),
              transparent 28%
            ),
            #050505;
        }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;

          height: 76px;
          padding: 0 6%;

          display: flex;
          align-items: center;
          justify-content: space-between;

          background: rgba(5, 5, 5, 0.88);
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(16px);
        }

        .nav-logo {
          font-size: 22px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .nav-logo::after {
          content: "X";
          color: #32ff7e;
        }

        .nav-links {
          display: flex;
          gap: 34px;
          font-size: 13px;
          color: #a6a6a6;
        }

        .nav-links a:hover {
          color: #32ff7e;
        }

        .nav-button {
          padding: 10px 18px;
          border: 1px solid #32ff7e;
          border-radius: 5px;
          color: #32ff7e;
          font-weight: 700;
          font-size: 13px;
        }

        .hero {
          position: relative;
          min-height: 760px;

          display: flex;
          align-items: center;

          padding: 100px 10%;

          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
        }

        .hero-glow {
          position: absolute;
          right: -180px;
          top: 80px;

          width: 600px;
          height: 600px;

          border-radius: 50%;

          background: rgba(50, 255, 126, 0.08);
          filter: blur(90px);
        }

        .eyebrow,
        .section-label {
          margin-bottom: 24px;

          color: #32ff7e;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 4px;
        }

        h1 {
          margin: 0;

          font-size: clamp(55px, 8vw, 108px);
          line-height: 0.94;
          letter-spacing: -5px;
          font-weight: 900;
        }

        .hero-text {
          max-width: 650px;
          margin-top: 38px;

          color: #8e8e8e;
          font-size: 17px;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          gap: 12px;
          margin-top: 36px;
        }

        .button {
          padding: 15px 25px;
          border-radius: 5px;
          font-size: 13px;
          font-weight: 800;
        }

        .button.primary {
          background: #32ff7e;
          color: #000;
        }

        .button.primary:hover {
          box-shadow: 0 0 30px rgba(50, 255, 126, 0.25);
        }

        .button.secondary {
          border: 1px solid #2a2a2a;
          background: #0b0b0b;
        }

        .button.secondary:hover {
          border-color: #32ff7e;
          color: #32ff7e;
        }

        .section {
          max-width: 1100px;
          margin: auto;
          padding: 150px 30px;
        }

        h2 {
          margin: 0;

          font-size: clamp(42px, 5vw, 68px);
          line-height: 1;
          letter-spacing: -3px;
        }

        .section-intro {
          max-width: 720px;
          margin-top: 30px;

          color: #888;
          font-size: 15px;
          line-height: 1.7;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;

          margin-top: 60px;
        }

        .card {
          min-height: 230px;
          padding: 28px;

          background: #0a0a0a;
          border: 1px solid #171717;
          transition: 0.25s;
        }

        .card:hover {
          border-color: rgba(50, 255, 126, 0.5);
          transform: translateY(-4px);
        }

        .card-number {
          color: #32ff7e;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        h3 {
          margin: 28px 0 12px;
          font-size: 19px;
        }

        .card p,
        .roadmap-item p,
        .vision-box p {
          margin: 0;
          color: #777;
          font-size: 13px;
          line-height: 1.7;
        }

        .token-section {
          background:
            linear-gradient(
              180deg,
              transparent,
              rgba(50, 255, 126, 0.025),
              transparent
            );
        }

        .token-box {
          display: grid;
          grid-template-columns: repeat(3, 1fr);

          margin-top: 60px;

          border: 1px solid #1b1b1b;
        }

        .token-box > div {
          padding: 30px;
          border-right: 1px solid #1b1b1b;
        }

        .token-box > div:last-child {
          border-right: none;
        }

        .token-box span {
          display: block;
          margin-bottom: 12px;

          color: #555;
          font-size: 9px;
          letter-spacing: 3px;
        }

        .token-box strong {
          font-size: 17px;
        }

        .token-note {
          display: flex;
          align-items: center;
          gap: 30px;

          margin-top: 35px;
          padding: 30px;

          border: 1px solid #151515;
          background: #080808;
        }

        .token-symbol {
          display: grid;
          place-items: center;

          width: 80px;
          height: 80px;

          flex-shrink: 0;

          border: 1px solid #32ff7e;
          border-radius: 50%;

          color: #32ff7e;
          font-weight: 900;
          font-size: 20px;

          box-shadow: 0 0 30px rgba(50, 255, 126, 0.1);
        }

        .token-note h3 {
          margin: 0 0 8px;
        }

        .token-note p {
          margin: 0;
          color: #777;
          line-height: 1.6;
        }

        .roadmap {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;

          margin-top: 60px;
        }

        .roadmap-item {
          min-height: 190px;
          padding: 30px;

          border-left: 2px solid #32ff7e;
          background: #090909;
        }

        .roadmap-item > span {
          color: #32ff7e;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .roadmap-item h3 {
          margin-top: 25px;
        }

        .ecosystem-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);

          margin-top: 60px;

          border: 1px solid #171717;
        }

        .ecosystem-grid div {
          padding: 28px 20px;

          color: #888;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-align: center;

          border-right: 1px solid #171717;
        }

        .ecosystem-grid div:last-child {
          border-right: none;
        }

        .ecosystem-grid div:hover {
          color: #32ff7e;
        }

        .vision-box {
          margin-top: 25px;
          padding: 55px;

          border: 1px solid #171717;
          background:
            radial-gradient(
              circle at 90% 50%,
              rgba(50, 255, 126, 0.08),
              transparent 35%
            ),
            #080808;
        }

        .vision-title {
          margin-bottom: 18px;

          font-size: 32px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .social-section {
          max-width: 1100px;
          margin: auto;
          padding: 80px 30px 150px;
        }

        .social-section > p {
          color: #777;
        }

        .social-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;

          margin-top: 40px;
        }

        .social-links a {
          display: flex;
          align-items: center;
          gap: 18px;

          padding: 22px;

          background: #090909;
          border: 1px solid #181818;

          transition: 0.2s;
        }

        .social-links a:hover {
          border-color: #32ff7e;
          transform: translateY(-3px);
        }

        .social-icon {
          display: grid;
          place-items: center;

          width: 42px;
          height: 42px;

          border: 1px solid #333;
          border-radius: 50%;

          font-size: 18px;
          font-weight: 900;
        }

        .social-links strong {
          display: block;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .social-links small {
          display: block;
          margin-top: 6px;
          color: #777;
        }

        footer {
          padding: 60px 6% 35px;

          border-top: 1px solid #151515;

          display: grid;
          grid-template-columns: 1fr auto;
          gap: 15px;
          align-items: center;
        }

        .footer-logo {
          font-size: 22px;
          font-weight: 900;
        }

        footer p {
          margin: 0;
          color: #555;
          font-size: 12px;
        }

        .footer-links {
          display: flex;
          gap: 25px;
          color: #777;
          font-size: 12px;
        }

        .footer-links a:hover {
          color: #32ff7e;
        }

        footer small {
          grid-column: 1 / -1;
          margin-top: 35px;
          color: #444;
        }

        @media (max-width: 800px) {
          .nav-links {
            display: none;
          }

          .hero {
            min-height: 650px;
            padding: 80px 25px;
          }

          h1 {
            font-size: 58px;
            letter-spacing: -3px;
          }

          .section {
            padding: 100px 22px;
          }

          .cards,
          .social-links,
          .ecosystem-grid {
            grid-template-columns: 1fr;
          }

          .roadmap {
            grid-template-columns: 1fr;
          }

          .token-box {
            grid-template-columns: 1fr;
          }

          .token-box > div {
            border-right: none;
            border-bottom: 1px solid #1b1b1b;
          }

          .token-box > div:last-child {
            border-bottom: none;
          }

          .vision-box {
            padding: 35px 25px;
          }

          footer {
            grid-template-columns: 1fr;
          }

          .footer-links {
            flex-wrap: wrap;
          }
        }
      `}
      </style>
    </>
  );
}
