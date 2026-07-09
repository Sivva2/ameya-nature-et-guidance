// components/CookieBanner.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem("cookie-consent", "refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6"
      role="dialog"
      aria-label="Gestion des cookies"
    >
      <div className="container" style={{ maxWidth: "780px" }}>
        <div
          className="card flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 shadow-lg"
          style={{ background: "var(--color-paper)" }}
        >
          {/* Texte */}
          <p
            className="flex-1 text-muted"
            style={{ fontSize: "var(--text-sm)", lineHeight: "1.7" }}
          >
            Ce site utilise uniquement un cookie fonctionnel pour mémoriser vos
            préférences. Aucun tracking ni publicité.{" "}
            <Link
              href="/mentions-legales"
              style={{
                color: "var(--color-accent)",
                textDecoration: "underline",
              }}
            >
              En savoir plus
            </Link>
          </p>

          {/* Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={refuse}
              className="btn btn--ghost"
              style={{ padding: "0.5rem 1rem", fontSize: "var(--text-sm)" }}
            >
              Refuser
            </button>
            <button
              onClick={accept}
              className="btn"
              style={{ padding: "0.5rem 1rem", fontSize: "var(--text-sm)" }}
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
