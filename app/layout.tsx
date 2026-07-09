// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ameya Nature & Guidance — Voyance & Accompagnement Bienveillant",
  description:
    "Dalysé Larain, voyante professionnelle en Essonne. Voyance par téléphone, à domicile, bains de déblocage et rituels de réussite. Consultation confidentielle.",
  keywords: [
    "voyante",
    "voyance",
    "voyante Essonne",
    "voyance par téléphone",
    "bains de déblocage",
    "rituels de réussite",
    "accompagnement spirituel",
    "Varennes-Jarcy",
  ],
  authors: [{ name: "Ameya Nature & Guidance" }],
  metadataBase: new URL("https://ameya-nature-guidance.fr"), // à remplacer par le vrai domaine
  openGraph: {
    title: "Ameya Nature & Guidance — Voyance & Accompagnement Bienveillant",
    description:
      "Dalysé Larain, voyante professionnelle en Essonne. Consultations confidentielles par téléphone ou à domicile.",
    url: "https://ameya-nature-guidance.fr",
    siteName: "Ameya Nature & Guidance",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
