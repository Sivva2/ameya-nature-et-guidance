// app/api/contact/route.ts
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      nom,
      email,
      telephone,
      typeConsultation,
      dateNaissance,
      creneau,
      message,
    } = await req.json();

    // Validation basique
    if (!nom || !email || !telephone || !message) {
      return NextResponse.json(
        { error: "Champs requis manquants." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const consultationLabel: Record<string, string> = {
      telephone: "Voyance par téléphone",
      domicile: "Voyance à domicile",
      bains: "Bains de déblocage",
      rituels: "Rituels de réussite",
    };

    const creneauLabel: Record<string, string> = {
      matin: "Matin",
      "apres-midi": "Après-midi",
      soir: "Soir",
    };

    // ── Mail 1 : notification à Dalysé ──────────────────────────
    await transporter.sendMail({
      from: `"Ameya — Site web" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_PRO,
      subject: `Nouvelle demande de consultation — ${nom}`,
      html: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#2c2823;">
          <h2 style="font-size:1.4rem;border-bottom:2px solid #c2784f;padding-bottom:8px;margin-bottom:20px;">
            Nouvelle demande de consultation
          </h2>
          <table style="width:100%;border-collapse:collapse;font-size:0.95rem;">
            <tr><td style="padding:8px 0;color:#7a7169;width:40%;">Nom</td><td style="padding:8px 0;font-weight:600;">${nom}</td></tr>
            <tr><td style="padding:8px 0;color:#7a7169;">Téléphone</td><td style="padding:8px 0;font-weight:600;">${telephone}</td></tr>
            <tr><td style="padding:8px 0;color:#7a7169;">Type de consultation</td><td style="padding:8px 0;">${consultationLabel[typeConsultation] || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#7a7169;">Date de naissance</td><td style="padding:8px 0;">${dateNaissance || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#7a7169;">Créneau préféré</td><td style="padding:8px 0;">${creneauLabel[creneau] || "—"}</td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#fbf8f3;border-left:3px solid #c2784f;border-radius:4px;">
            <p style="margin:0;color:#7a7169;font-size:0.85rem;margin-bottom:6px;">Message</p>
            <p style="margin:0;line-height:1.7;">${message.replace(/\n/g, "<br/>")}</p>
          </div>
          <p style="margin-top:24px;font-size:0.8rem;color:#7a7169;">
            Message reçu via le formulaire de contact du site ameya-nature-guidance.fr
          </p>
        </div>
      `,
    });

    // ── Mail 2 : confirmation au client ─────────────────────────
    await transporter.sendMail({
      from: `"Dalysé — Ameya Nature & Guidance" <${process.env.SMTP_USER}>`,
      to: email,
      replyTo: process.env.MAIL_PRO,
      subject: "Votre demande de consultation a bien été reçue",
      html: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#2c2823;">
          <h2 style="font-size:1.4rem;color:#c2784f;margin-bottom:8px;">
            Ameya Nature &amp; Guidance
          </h2>
          <p style="color:#7a7169;font-size:0.85rem;margin-top:0;margin-bottom:24px;letter-spacing:0.1em;text-transform:uppercase;">
            Voyance &amp; Accompagnement Bienveillant
          </p>
          <p style="line-height:1.8;">Bonjour <strong>${nom}</strong>,</p>
          <p style="line-height:1.8;">
            Merci pour votre message. Dalysé a bien reçu votre demande de consultation
            et vous contactera dans les meilleurs délais au <strong>${telephone}</strong>
            pour convenir d'un rendez-vous.
          </p>
          <p style="line-height:1.8;">
            En attendant, n'hésitez pas à la contacter directement par téléphone
            au <strong>06 35 16 81 62</strong>.
          </p>
          <p style="line-height:1.8;margin-top:24px;">
            À très bientôt,<br/>
            <strong>Dalysé Larain</strong><br/>
            <span style="color:#7a7169;font-size:0.9rem;">Ameya Nature &amp; Guidance</span>
          </p>
          <hr style="border:none;border-top:1px solid #e8e2d9;margin:24px 0;"/>
          <p style="font-size:0.75rem;color:#7a7169;line-height:1.6;">
            Les consultations proposées sont à titre de divertissement uniquement.
            Elles ne remplacent en aucun cas un avis médical, juridique ou financier professionnel.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[API /contact]", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
