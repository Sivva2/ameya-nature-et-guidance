// components/About.tsx

export default function About() {
  const badges = [
    "15 ans d'expérience",
    "Confidentialité absolue",
    "Déontologie",
  ];

  return (
    <section id="apropos" className="section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Portrait — placeholder */}
          <div className="relative">
            <div
              className="w-full aspect-[4/5] rounded-[var(--radius-card)] flex items-center justify-center overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.64 0.105 45 / 0.12) 0%, oklch(0.64 0.105 45 / 0.04) 100%)",
                border: "2px solid var(--border)",
              }}
            >
              <span
                className="text-muted"
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "var(--text-eyebrow)",
                }}
              >
                PORTRAIT — À COMPLÉTER
              </span>
            </div>

            {/* Badge décoratif flottant */}
            <div
              className="tag absolute -bottom-4 -right-4 bg-paper shadow-sm"
              style={{ fontSize: "var(--text-sm)" }}
            >
              ✦ Depuis 2009
            </div>
          </div>

          {/* Texte */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="eyebrow">À propos</p>
              <h2 className="display-l">
                Une guide bienveillante sur votre chemin
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <p style={{ fontSize: "var(--text-lg)", lineHeight: "1.8" }}>
                Dalysé Larain accompagne depuis plus de 15 ans des personnes en
                quête de clarté et de sérénité. Grâce à ses dons de voyance et à
                une approche profondément humaine, elle vous aide à mieux
                comprendre votre chemin de vie.
              </p>
              <p
                className="text-muted"
                style={{ fontSize: "var(--text-base)", lineHeight: "1.8" }}
              >
                Chaque consultation est un espace de confiance, d'écoute et de
                bienveillance. Qu'il s'agisse d'amour, de travail ou de
                questions existentielles, Dalysé vous accompagne avec respect et
                sans jugement.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-2">
              {badges.map((badge) => (
                <span key={badge} className="tag">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
