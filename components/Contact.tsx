// components/Contact.tsx
"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    typeConsultation: "",
    dateNaissance: "",
    creneau: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setState("success");
      setForm({
        nom: "",
        email: "",
        telephone: "",
        typeConsultation: "",
        dateNaissance: "",
        creneau: "",
        message: "",
      });
    } catch {
      setState("error");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Colonne gauche — intro */}
          <div className="flex flex-col gap-8 md:pt-4">
            <div className="flex flex-col gap-3">
              <p className="eyebrow">Contact</p>
              <h2 className="display-l">Réservez votre moment</h2>
              <p
                className="text-muted"
                style={{ fontSize: "var(--text-lg)", lineHeight: "1.8" }}
              >
                Prenez contact avec Dalysé pour convenir d'une consultation.
                Elle vous répondra dans les meilleurs délais pour trouver
                ensemble le créneau qui vous convient.
              </p>
            </div>

            {/* Badges info */}
            <div className="flex flex-col gap-3">
              <div
                className="flex items-center gap-3 py-4 px-5"
                style={{
                  border: "1.5px solid var(--border)",
                  borderRadius: "var(--radius-card)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 shrink-0"
                  style={{ color: "var(--color-accent)" }}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 5.55 5.55l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div className="flex flex-col gap-0.5">
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-sm)",
                      fontWeight: "600",
                    }}
                  >
                    Par téléphone
                  </span>
                  <span
                    className="text-muted"
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "var(--text-eyebrow)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    06 35 16 81 62
                  </span>
                </div>
              </div>

              <div
                className="flex items-center gap-3 py-4 px-5"
                style={{
                  border: "1.5px solid var(--border)",
                  borderRadius: "var(--radius-card)",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 shrink-0"
                  style={{ color: "var(--color-accent)" }}
                >
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="flex flex-col gap-0.5">
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-sm)",
                      fontWeight: "600",
                    }}
                  >
                    Essonne & environs
                  </span>
                  <span
                    className="text-muted"
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "var(--text-eyebrow)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Varennes-Jarcy, 91480
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite — formulaire */}
          <div className="card" style={{ background: "var(--color-paper)" }}>
            {state === "success" ? (
              <div className="flex flex-col items-center text-center gap-4 py-8">
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "var(--accent-bg)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                    style={{ color: "var(--color-accent)" }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="display-m">Message envoyé</h3>
                <p
                  className="text-muted"
                  style={{ fontSize: "var(--text-base)", lineHeight: "1.7" }}
                >
                  Merci pour votre message. Dalysé vous contactera dans les
                  meilleurs délais pour convenir d'un rendez-vous.
                </p>
                <button
                  className="btn btn--ghost mt-2"
                  onClick={() => setState("idle")}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="text-center mb-2">
                  <p className="eyebrow">Formulaire de contact</p>
                  <h3 className="display-m mt-2">Parlons de vous</h3>
                </div>

                {/* Grille champs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="field">
                    <label htmlFor="nom" className="field__label">
                      Nom{" "}
                      <span style={{ color: "var(--color-accent)" }}>*</span>
                    </label>
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      className="field__input"
                      placeholder="Votre nom"
                      value={form.nom}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="email" className="field__label">
                      Email{" "}
                      <span style={{ color: "var(--color-accent)" }}>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="field__input"
                      placeholder="votre@email.fr"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="telephone" className="field__label">
                      Téléphone{" "}
                      <span style={{ color: "var(--color-accent)" }}>*</span>
                    </label>
                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      className="field__input"
                      placeholder="06 00 00 00 00"
                      value={form.telephone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="typeConsultation" className="field__label">
                      Type de consultation
                    </label>
                    <select
                      id="typeConsultation"
                      name="typeConsultation"
                      className="field__input"
                      value={form.typeConsultation}
                      onChange={handleChange}
                    >
                      <option value="">Choisir…</option>
                      <option value="telephone">Voyance par téléphone</option>
                      <option value="domicile">Voyance à domicile</option>
                      <option value="bains">Bains de déblocage</option>
                      <option value="rituels">Rituels de réussite</option>
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="dateNaissance" className="field__label">
                      Date de naissance
                    </label>
                    <input
                      id="dateNaissance"
                      name="dateNaissance"
                      type="date"
                      className="field__input"
                      value={form.dateNaissance}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="field sm:col-span-2">
                    <label htmlFor="creneau" className="field__label">
                      Créneau préféré
                    </label>
                    <select
                      id="creneau"
                      name="creneau"
                      className="field__input"
                      value={form.creneau}
                      onChange={handleChange}
                    >
                      <option value="">Choisir…</option>
                      <option value="matin">Matin</option>
                      <option value="apres-midi">Après-midi</option>
                      <option value="soir">Soir</option>
                    </select>
                  </div>

                  <div className="field sm:col-span-2">
                    <label htmlFor="message" className="field__label">
                      Votre question / message{" "}
                      <span style={{ color: "var(--color-accent)" }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="field__input field__input--textarea"
                      placeholder="Décrivez votre situation ou votre question…"
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Erreur */}
                {state === "error" && (
                  <p
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "var(--text-eyebrow)",
                      color: "#c0392b",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Une erreur est survenue. Veuillez réessayer ou nous
                    contacter par téléphone.
                  </p>
                )}

                {/* Submit */}
                <button
                  className="btn btn--full mt-2"
                  onClick={handleSubmit}
                  disabled={state === "loading"}
                >
                  {state === "loading"
                    ? "Envoi en cours…"
                    : "Envoyer ma demande"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
