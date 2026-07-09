// app/mentions-legales/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — Ameya Nature & Guidance",
  description:
    "Mentions légales du site Ameya Nature & Guidance — Dalysé Larain.",
  robots: { index: false, follow: false },
};

export default function MentionsLegales() {
  return (
    <main
      style={{
        background: "var(--color-paper)",
        minHeight: "100vh",
        paddingTop: "7rem",
        paddingBottom: "4rem",
      }}
    >
      <div className="container" style={{ maxWidth: "780px" }}>
        {/* Retour */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-10 transition-colors duration-150"
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "var(--text-eyebrow)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Retour au site
        </Link>

        <p className="eyebrow mb-3">Informations légales</p>
        <h1 className="display-l mb-12">Mentions légales</h1>

        <div
          className="flex flex-col gap-10"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-base)",
            lineHeight: "1.8",
          }}
        >
          {/* Éditeur */}
          <section className="flex flex-col gap-3">
            <h2 className="display-m" style={{ fontSize: "var(--text-xl)" }}>
              Éditeur du site
            </h2>
            <hr className="divider-dashed" />
            <p>
              <strong>Dalysé Larain</strong>
              <br />
              Entrepreneur individuel — Ameya Nature &amp; Guidance
              <br />
              38 Sentier de la Provode, 91480 Varennes-Jarcy
              <br />
              Téléphone : 06 35 16 81 62
              <br />
              Email : contact@ameya-nature-guidance.fr
              <br />
              SIRET : 105 693 964 00014
              <br />
              Code APE : 9609Z — Autres services personnels n.c.a.
            </p>
          </section>

          {/* Hébergement */}
          <section className="flex flex-col gap-3">
            <h2 className="display-m" style={{ fontSize: "var(--text-xl)" }}>
              Hébergement
            </h2>
            <hr className="divider-dashed" />
            <p>
              Ce site est hébergé par :<br />
              <strong>Vercel Inc.</strong>
              <br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
              <br />
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-accent)" }}
              >
                vercel.com
              </a>
            </p>
          </section>

          {/* Conception */}
          <section className="flex flex-col gap-3">
            <h2 className="display-m" style={{ fontSize: "var(--text-xl)" }}>
              Conception &amp; développement
            </h2>
            <hr className="divider-dashed" />
            <p>
              Site conçu et développé par <strong>Solvantis</strong> — Kevin
              Abaskaran
              <br />
              SIRET : 990 331 324 00014
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-accent)" }}
              >
                solvantis.fr
              </a>
            </p>
          </section>

          {/* Propriété intellectuelle */}
          <section className="flex flex-col gap-3">
            <h2 className="display-m" style={{ fontSize: "var(--text-xl)" }}>
              Propriété intellectuelle
            </h2>
            <hr className="divider-dashed" />
            <p>
              L'ensemble des contenus présents sur ce site (textes, images,
              graphismes, logo) sont la propriété exclusive de Dalysé Larain,
              sauf mentions contraires. Toute reproduction, distribution ou
              utilisation sans autorisation écrite préalable est strictement
              interdite.
            </p>
          </section>

          {/* Données personnelles */}
          <section className="flex flex-col gap-3">
            <h2 className="display-m" style={{ fontSize: "var(--text-xl)" }}>
              Données personnelles
            </h2>
            <hr className="divider-dashed" />
            <p>
              Les informations collectées via le formulaire de contact (nom,
              email, téléphone) sont utilisées uniquement pour répondre à vos
              demandes de consultation. Elles ne sont ni vendues, ni transmises
              à des tiers.
            </p>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez d'un droit d'accès, de rectification et de
              suppression de vos données personnelles. Pour exercer ce droit,
              contactez :
              <a
                href="mailto:contact@ameya-nature-guidance.fr"
                style={{ color: "var(--color-accent)" }}
              >
                {" "}
                contact@ameya-nature-guidance.fr
              </a>
            </p>
          </section>

          {/* Cookies */}
          <section className="flex flex-col gap-3">
            <h2 className="display-m" style={{ fontSize: "var(--text-xl)" }}>
              Cookies
            </h2>
            <hr className="divider-dashed" />
            <p>
              Ce site utilise uniquement un cookie fonctionnel pour mémoriser
              votre choix concernant les cookies. Aucun cookie de tracking,
              publicitaire ou analytique n'est déposé sur votre appareil.
            </p>
          </section>

          {/* Disclaimer voyance */}
          <section className="flex flex-col gap-3">
            <h2 className="display-m" style={{ fontSize: "var(--text-xl)" }}>
              Avertissement
            </h2>
            <hr className="divider-dashed" />
            <p>
              Les consultations proposées par Ameya Nature &amp; Guidance sont à
              titre de divertissement uniquement. Elles ne constituent en aucun
              cas un avis médical, psychologique, juridique ou financier
              professionnel et ne sauraient s'y substituer.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
