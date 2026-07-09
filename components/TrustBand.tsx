// components/TrustBand.tsx

const stats = [
  { value: "15+", label: "ans d'expérience" },
  { value: "Écoute", label: "sans jugement" },
  { value: "100%", label: "confidentiel" },
  { value: "Téléphone", label: "& domicile" },
];

export default function TrustBand() {
  return (
    <section className="section--dark py-14">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center gap-2"
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-3xl)",
                  color: "var(--color-accent)",
                  fontWeight: "600",
                  lineHeight: "1",
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "var(--text-eyebrow)",
                  letterSpacing: "0.12em",
                  color: "var(--dark-muted)",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
