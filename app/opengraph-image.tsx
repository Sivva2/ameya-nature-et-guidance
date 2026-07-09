// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Ameya Nature & Guidance — Voyance & Accompagnement Bienveillant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#fbf8f3",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px",
        position: "relative",
      }}
    >
      {/* Bordure décorative */}
      <div
        style={{
          position: "absolute",
          inset: "24px",
          border: "1.5px solid rgba(44,40,35,0.15)",
          borderRadius: "16px",
        }}
      />

      {/* Accent top */}
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60px",
          height: "3px",
          background: "#c2784f",
          borderRadius: "2px",
        }}
      />

      {/* Eyebrow */}
      <p
        style={{
          fontFamily: "serif",
          fontSize: "14px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#c2784f",
          margin: "0 0 24px",
        }}
      >
        Voyance &amp; Accompagnement Bienveillant
      </p>

      {/* Titre */}
      <h1
        style={{
          fontFamily: "serif",
          fontSize: "72px",
          fontWeight: "700",
          color: "#2c2823",
          textAlign: "center",
          lineHeight: "1.1",
          margin: "0 0 20px",
          maxWidth: "900px",
        }}
      >
        Ameya Nature &amp; Guidance
      </h1>

      {/* Sous-titre */}
      <p
        style={{
          fontFamily: "serif",
          fontSize: "24px",
          color: "#7a7169",
          textAlign: "center",
          margin: "0 0 48px",
          maxWidth: "700px",
          lineHeight: "1.6",
        }}
      >
        Dalysé Larain — Voyante professionnelle en Essonne
      </p>

      {/* Séparateur */}
      <div
        style={{
          width: "80px",
          height: "2px",
          background: "#c2784f",
          borderRadius: "2px",
          marginBottom: "32px",
        }}
      />

      {/* Tags services */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {[
          "Voyance par téléphone",
          "Voyance à domicile",
          "Bains de déblocage",
          "Rituels de réussite",
        ].map((tag) => (
          <div
            key={tag}
            style={{
              border: "1px solid rgba(44,40,35,0.2)",
              borderRadius: "30px",
              padding: "6px 16px",
              fontFamily: "monospace",
              fontSize: "13px",
              letterSpacing: "0.06em",
              color: "#2c2823",
            }}
          >
            {tag}
          </div>
        ))}
      </div>

      {/* URL */}
      <p
        style={{
          position: "absolute",
          bottom: "40px",
          fontFamily: "monospace",
          fontSize: "13px",
          letterSpacing: "0.1em",
          color: "#7a7169",
          margin: "0",
        }}
      >
        ameya-nature-guidance.fr
      </p>
    </div>,
    { ...size },
  );
}
