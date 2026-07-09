// components/Nav.tsx
"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "À propos", href: "#apropos" },
  { label: "Prestations", href: "#prestations" },
  { label: "Avis", href: "#avis" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer le menu burger au clic sur un lien
  const handleLinkClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper shadow-sm border-b border-(--border)"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span
            className="text-[1.625rem] font-semibold tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ameya
          </span>
          <span
            className="text-[0.5rem] tracking-[0.18em] opacity-60 uppercase mt-[-2px]"
            style={{ fontFamily: "var(--font-ui)" }}
          >
            Nature &amp; Guidance
          </span>
        </a>

        {/* Liens desktop */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-ink hover:text-accent transition-colors duration-150"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-base)",
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a href="#contact" className="btn hidden md:inline-flex">
          Me contacter
        </a>

        {/* Burger mobile */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-none"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          <span
            className={`block h-[2px] w-6 bg-ink transition-all duration-300 origin-center ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink transition-all duration-300 origin-center ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-paper border-b border-(--border) ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="container flex flex-col gap-1 py-4 list-none m-0 p-0 px-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={handleLinkClick}
                className="block py-3 text-ink hover:text-accent border-b border-(--border) transition-colors duration-150"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-lg)",
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="#contact"
              className="btn btn--full"
              onClick={handleLinkClick}
            >
              Me contacter
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
