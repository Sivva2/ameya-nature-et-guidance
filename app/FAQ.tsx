// components/FAQ.tsx
"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Comment se déroule une consultation ?",
    answer:
      "Chaque consultation commence par un temps d'écoute bienveillant. Dalysé prend connaissance de votre situation avant de se connecter à vos énergies. Elle vous livre ensuite ses ressentis avec clarté et douceur, en répondant à vos questions au fil de la séance.",
  },
  {
    id: 2,
    question: "Combien de temps dure une séance ?",
    answer:
      "Une séance dure en moyenne 45 minutes à 1 heure. Ce temps peut varier selon vos besoins et la profondeur des échanges. Dalysé prend le temps qu'il faut pour que vous repartiez avec des réponses claires et apaisées.",
  },
  {
    id: 3,
    question: "Mes informations sont-elles confidentielles ?",
    answer:
      "La confidentialité est au cœur de la démarche de Dalysé. Tout ce qui est partagé lors d'une consultation reste strictement privé. Aucune information personnelle n'est transmise à des tiers, sous aucune forme.",
  },
  {
    id: 4,
    question: "Quels sont les moyens de paiement acceptés ?",
    answer:
      "Les consultations peuvent être réglées par virement bancaire, espèces ou chèque. Pour les séances par téléphone, le paiement s'effectue avant la consultation. N'hésitez pas à en discuter lors de votre prise de contact.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="section section--tinted">
      <div className="container">
        {/* En-tête */}
        <div className="text-center mb-12 flex flex-col items-center gap-3">
          <p className="eyebrow">FAQ</p>
          <h2 className="display-l max-w-xl">Vos questions, nos réponses</h2>
        </div>

        {/* Accordéon */}
        <div className="mx-auto flex flex-col" style={{ maxWidth: "780px" }}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="faq-item"
                style={{ borderBottom: "1.5px solid var(--border)" }}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer bg-transparent border-none"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-lg)",
                    color: "var(--color-ink)",
                  }}
                >
                  <span>{faq.question}</span>
                  <span
                    className="shrink-0 transition-transform duration-200"
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: "1.125rem",
                      color: "var(--color-accent)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {/* Réponse */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p
                    className="text-muted pb-5"
                    style={{ fontSize: "var(--text-base)", lineHeight: "1.8" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
