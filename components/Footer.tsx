// components/Footer.tsx

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section--dark py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none">
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "var(--color-paper)",
                letterSpacing: "0.02em",
              }}
            >
              Ameya
            </span>
            <span
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "0.5rem",
                letterSpacing: "0.18em",
                color: "var(--dark-muted)",
                textTransform: "uppercase",
                marginTop: "-2px",
              }}
            >
              Nature &amp; Guidance
            </span>
          </a>

          {/* Mentions légales */}
          {/* Mentions légales */}
          <div
            className="flex flex-col items-center md:items-end gap-1 text-center md:text-right"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "var(--text-eyebrow)",
              letterSpacing: "0.08em",
              color: "var(--dark-muted)",
            }}
          >
            <span>© {year} Ameya Nature &amp; Guidance — Dalysé Larain</span>
            <span>SIRET 105 693 964 00014</span>
            <div className="flex items-center gap-4 mt-1">
              <a
                href="#"
                className="hover:text-paper transition-colors duration-150"
                style={{ color: "var(--dark-muted)" }}
              >
                Mentions légales
              </a>
              <span aria-hidden="true">·</span>
              <span>
                Site réalisé par{" "}
                <a
                  href="https://solvantis.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--color-accent)" }}
                >
                  Solvantis
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Mention voyance */}
        <div
          className="mt-8 pt-6 text-center"
          style={{ borderTop: "1px solid rgba(251,248,243,0.1)" }}
        >
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "var(--text-eyebrow)",
              letterSpacing: "0.06em",
              color: "var(--dark-muted)",
              lineHeight: "1.7",
            }}
          >
            Les consultations proposées sont à titre de divertissement
            uniquement. Elles ne remplacent en aucun cas un avis médical,
            juridique ou financier professionnel.
          </p>
        </div>
      </div>
    </footer>
  );
}
