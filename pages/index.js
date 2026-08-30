import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>PROFITX – IA & Solana</title>
        <meta
          name="description"
          content="PROFITX – Écosystème d’IA autonome et Solana"
        />
      </Head>

      <main>
        <nav>
          <b>PROFITX</b>
          <a href="#about">À propos</a>
        </nav>

        <section className="hero">
          <p>IA • SOLANA • WEB3</p>

          <h1>L’IA au service de l’écosystème crypto.</h1>

          <p>
            PROFITX construit un écosystème combinant intelligence
            artificielle, automatisation et blockchain Solana.
          </p>
        </section>

        <section id="about">
          <h2>Un projet construit pour évoluer</h2>

          <p>
            PROFITX développe des outils et services autour de
            l’intelligence artificielle et de la technologie blockchain.
          </p>
        </section>

        <footer>
          © PROFITX 2026 – IA & Solana
        </footer>
      </main>
    </>
  );
}
