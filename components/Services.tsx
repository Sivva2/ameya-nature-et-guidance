// components/Services.tsx

const services = [
  {
    id: "telephone",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 5.55 5.55l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Voyance par téléphone",
    description:
      "Consultez depuis chez vous, en toute sérénité. Une connexion directe et bienveillante, où que vous soyez.",
  },
  {
    id: "domicile",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
    title: "Voyance à domicile",
    description:
      "Dalysé se déplace à votre domicile pour une consultation intime et personnalisée dans votre espace.",
  },
  {
    id: "bains",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M12 2v4M4.93 4.93l2.83 2.83M2 12h4M4.93 19.07l2.83-2.83M12 22v-4M19.07 19.07l-2.83-2.83M22 12h-4M19.07 4.93l-2.83 2.83" />
      </svg>
    ),
    title: "Bains de déblocage",
    description:
      "Un rituel purificateur pour libérer les énergies négatives et retrouver fluidité et légèreté.",
  },
  {
    id: "rituels",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
      </svg>
    ),
    title: "Rituels de réussite",
    description:
      "Des cérémonies énergétiques ciblées pour attirer abondance, clarté et succès dans votre vie.",
  },
];

export default function Services() {
  return (
    <section id="prestations" className="section section--tinted">
      <div className="container">
        {/* En-tête */}
        <div className="text-center mb-12 flex flex-col items-center gap-3">
          <p className="eyebrow">Prestations</p>
          <h2 className="display-l max-w-xl">Des accompagnements sur mesure</h2>
        </div>

        {/* Grille 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-(--gap)">
          {services.map((s) => (
            <div key={s.id} className="card card--thin flex flex-col gap-4">
              {/* Icône */}
              <div
                className="flex items-center justify-center rounded-full shrink-0"
                style={{
                  width: "70px",
                  height: "70px",
                  background: "var(--accent-bg)",
                  color: "var(--color-accent)",
                }}
              >
                {s.icon}
              </div>

              {/* Texte */}
              <div className="flex flex-col gap-2">
                <h3 className="display-m">{s.title}</h3>
                <p
                  className="text-muted"
                  style={{ fontSize: "var(--text-base)", lineHeight: "1.7" }}
                >
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
