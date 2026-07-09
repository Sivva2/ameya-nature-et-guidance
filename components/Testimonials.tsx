// components/Testimonials.tsx

const testimonials = [
  {
    id: 1,
    name: "Marie L.",
    location: "Essonne",
    text: "À compléter — contenu fourni ultérieurement par la cliente.",
  },
  {
    id: 2,
    name: "Sophie R.",
    location: "Paris",
    text: "À compléter — contenu fourni ultérieurement par la cliente.",
  },
  {
    id: 3,
    name: "Christine M.",
    location: "Val-de-Marne",
    text: "À compléter — contenu fourni ultérieurement par la cliente.",
  },
];

export default function Testimonials() {
  return (
    <section id="avis" className="section">
      <div className="container">
        {/* En-tête */}
        <div className="text-center mb-12 flex flex-col items-center gap-3">
          <p className="eyebrow">Témoignages</p>
          <h2 className="display-l max-w-xl">Ce qu'elles disent de Dalysé</h2>
        </div>

        {/* Grille 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--gap)]">
          {testimonials.map((t) => (
            <div key={t.id} className="card card--thin flex flex-col gap-5">
              {/* Guillemet décoratif */}
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "3.5rem",
                  color: "var(--color-accent)",
                  lineHeight: "1",
                  opacity: 0.4,
                  display: "block",
                  marginBottom: "-1rem",
                }}
                aria-hidden="true"
              >
                "
              </span>

              {/* Citation */}
              <p
                className="text-muted flex-1"
                style={{
                  fontSize: "var(--text-lg)",
                  lineHeight: "1.8",
                  fontStyle: "italic",
                }}
              >
                {t.text}
              </p>

              {/* Auteur */}
              <div
                className="flex flex-col gap-0.5 pt-4"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-base)",
                    fontWeight: "600",
                    color: "var(--color-ink)",
                  }}
                >
                  {t.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "var(--text-eyebrow)",
                    color: "var(--color-ink-muted)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {t.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note placeholder */}
        <p
          className="text-center text-muted mt-8"
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "var(--text-eyebrow)",
            letterSpacing: "0.08em",
          }}
        >
          — Témoignages réels à intégrer à la livraison —
        </p>
      </div>
    </section>
  );
}
