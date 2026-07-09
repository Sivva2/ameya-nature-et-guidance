// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section relative pt-32 pb-0 text-center overflow-hidden">
      <div className="container flex flex-col items-center">
        {/* Eyebrow */}
        <p className="eyebrow mb-6">
          Voyance &amp; accompagnement bienveillant
        </p>

        {/* Titre H1 */}
        <h1 className="display-hero max-w-3xl">
          Retrouvez votre lumière intérieure
        </h1>

        {/* Scribble SVG sous le titre */}
        <svg
          className="scribble mt-4 mb-6"
          viewBox="0 0 120 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M2 6.5 C20 2, 40 8, 60 4.5 S100 2, 118 5"
            stroke="var(--color-accent)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Sous-titre */}
        <p
          className="text-muted max-w-xl mb-10"
          style={{ fontSize: "var(--text-xl)", lineHeight: "1.7" }}
        >
          Un regard bienveillant sur votre chemin de vie. Ensemble, éclairons
          vos questions et retrouvons votre équilibre intérieur.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href="#contact" className="btn">
            Prendre rendez-vous
          </a>
          <a href="#prestations" className="btn btn--ghost">
            Voir les prestations
          </a>
        </div>
      </div>

      {/* Image d'ambiance pleine largeur */}
      <div className="w-full h-[300px] relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, var(--color-paper) 0%, transparent 15%, transparent 85%, var(--color-paper) 100%)`,
            zIndex: 1,
          }}
        />
        {/* Placeholder — à remplacer par l'image réelle */}
        <div
          className="w-full h-full flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, oklch(0.64 0.105 45 / 0.15) 0%, oklch(0.64 0.105 45 / 0.05) 100%)`,
          }}
        >
          <span
            className="text-muted"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "var(--text-eyebrow)",
            }}
          >
            IMAGE D'AMBIANCE — À COMPLÉTER
          </span>
        </div>
        {/* Décommenter quand l'image est disponible :
        <Image
          src="/images/hero-ambiance.jpg"
          alt="Ambiance bienveillante et apaisante"
          fill
          className="object-cover"
          priority
        />
        */}
      </div>
    </section>
  );
}
