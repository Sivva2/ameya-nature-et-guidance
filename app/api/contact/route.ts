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
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Nouvelle demande de consultation</title>
</head>
<body style="margin:0;padding:0;background:#f0ece6;font-family:Georgia,serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0ece6;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#2c2823;border-radius:12px 8px 14px 6px / 8px 12px 6px 14px;padding:28px 48px;text-align:center;">
              <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:22px;font-weight:700;color:#fbf8f3;letter-spacing:0.02em;">
                Ameya — Site web
              </p>
              <p style="margin:0;font-family:monospace;font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(251,248,243,0.55);">
                Nouvelle demande reçue
              </p>
              <div style="width:40px;height:2px;background:#c2784f;border-radius:2px;margin:12px auto 0;"></div>
            </td>
          </tr>

          <!-- Spacer -->
          <tr><td style="height:20px;"></td></tr>

          <!-- Alerte -->
          <tr>
            <td style="background:#c2784f;border-radius:8px;padding:14px 24px;text-align:center;">
              <p style="margin:0;font-family:monospace;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#fff;font-weight:600;">
                Nouvelle demande de consultation — À traiter
              </p>
            </td>
          </tr>

          <!-- Spacer -->
          <tr><td style="height:20px;"></td></tr>

          <!-- Corps -->
          <tr>
            <td style="background:#fbf8f3;border-radius:12px 8px 14px 6px / 8px 12px 6px 14px;padding:40px 48px;border:1.5px solid rgba(44,40,35,0.1);">

              <p style="margin:0 0 24px;font-size:16px;color:#2c2823;line-height:1.8;">
                Bonjour Dalysé,<br/>
                Une nouvelle demande de consultation a été soumise via votre site.
              </p>

              <!-- Fiche client -->
              <div style="background:#f5f1eb;border-radius:8px;padding:24px 28px;margin-bottom:28px;border-left:3px solid #c2784f;">
                <p style="margin:0 0 16px;font-family:monospace;font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#7a7169;">
                  Informations client
                </p>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:7px 0;font-size:14px;color:#7a7169;width:42%;">Nom</td>
                    <td style="padding:7px 0;font-size:15px;color:#2c2823;font-weight:700;">${nom}</td>
                  </tr>
                  <tr>
                    <td style="padding:7px 0;font-size:14px;color:#7a7169;">Email</td>
                    <td style="padding:7px 0;font-size:15px;color:#2c2823;font-weight:600;">
                      <a href="mailto:${email}" style="color:#c2784f;text-decoration:none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:7px 0;font-size:14px;color:#7a7169;">Téléphone</td>
                    <td style="padding:7px 0;font-size:15px;color:#2c2823;font-weight:700;">
                      <a href="tel:${telephone}" style="color:#c2784f;text-decoration:none;">${telephone}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:7px 0;font-size:14px;color:#7a7169;">Date de naissance</td>
                    <td style="padding:7px 0;font-size:14px;color:#2c2823;">${dateNaissance || "—"}</td>
                  </tr>
                </table>
              </div>

              <!-- Détails consultation -->
              <div style="background:#f5f1eb;border-radius:8px;padding:24px 28px;margin-bottom:28px;border-left:3px solid #2c2823;">
                <p style="margin:0 0 16px;font-family:monospace;font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#7a7169;">
                  Détails de la demande
                </p>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:7px 0;font-size:14px;color:#7a7169;width:42%;">Type de consultation</td>
                    <td style="padding:7px 0;font-size:14px;color:#2c2823;font-weight:600;">${consultationLabel[typeConsultation] || "—"}</td>
                  </tr>
                  <tr>
                    <td style="padding:7px 0;font-size:14px;color:#7a7169;">Créneau préféré</td>
                    <td style="padding:7px 0;font-size:14px;color:#2c2823;font-weight:600;">${creneauLabel[creneau] || "—"}</td>
                  </tr>
                </table>
              </div>

              <!-- Message -->
              <div style="background:#fbf8f3;border:1.5px solid rgba(44,40,35,0.12);border-radius:8px;padding:20px 24px;margin-bottom:32px;">
                <p style="margin:0 0 10px;font-family:monospace;font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#7a7169;">
                  Message
                </p>
                <p style="margin:0;font-size:15px;color:#2c2823;line-height:1.8;">
                  ${message.replace(/\n/g, "<br/>")}
                </p>
              </div>

              <!-- CTA rappel -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    
                     <a href="tel:${telephone}"
                      style="display:inline-block;background:#c2784f;color:#ffffff;font-family:Georgia,serif;font-size:16px;font-weight:500;padding:12px 32px;border-radius:20px 11px 22px 9px / 11px 20px 9px 22px;text-decoration:none;border:2px solid #2c2823;"
                    >
                      Appeler ${nom}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Spacer -->
          <tr><td style="height:20px;"></td></tr>

          <!-- Footer -->
          <tr>
            <td style="text-align:center;padding:0 20px;">
              <p style="margin:0;font-family:monospace;font-size:10px;letter-spacing:0.08em;color:#7a7169;">
                Message reçu via le formulaire de contact — ameya-nature-guidance.fr
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
`,
    });

    // ── Mail 2 : confirmation au client ─────────────────────────
    await transporter.sendMail({
      from: `"Dalysé — Ameya Nature & Guidance" <${process.env.SMTP_USER}>`,
      to: email,
      replyTo: process.env.MAIL_PRO,
      subject: "Votre demande de consultation a bien été reçue",
      html: `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Votre demande de consultation</title>
</head>
<body style="margin:0;padding:0;background:#f0ece6;font-family:Georgia,serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0ece6;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#2c2823;border-radius:12px 8px 14px 6px / 8px 12px 6px 14px;padding:36px 48px;text-align:center;">
              <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:28px;font-weight:700;color:#fbf8f3;letter-spacing:0.02em;">
                Ameya
              </p>
              <p style="margin:0;font-family:monospace;font-size:9px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(251,248,243,0.55);">
                Nature &amp; Guidance
              </p>
              <div style="width:40px;height:2px;background:#c2784f;border-radius:2px;margin:16px auto 0;"></div>
            </td>
          </tr>

          <!-- Spacer -->
          <tr><td style="height:24px;"></td></tr>

          <!-- Corps -->
          <tr>
            <td style="background:#fbf8f3;border-radius:12px 8px 14px 6px / 8px 12px 6px 14px;padding:48px;border:1.5px solid rgba(44,40,35,0.1);">

              <!-- Eyebrow -->
              <p style="margin:0 0 12px;font-family:monospace;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#c2784f;">
                Confirmation de demande
              </p>

              <!-- Titre -->
              <h1 style="margin:0 0 24px;font-family:Georgia,serif;font-size:26px;font-weight:700;color:#2c2823;line-height:1.2;">
                Bonjour ${nom},
              </h1>

              <!-- Intro -->
              <p style="margin:0 0 16px;font-size:16px;color:#2c2823;line-height:1.8;">
                Merci pour votre message. Dalysé a bien reçu votre demande de consultation et vous contactera dans les meilleurs délais au
                <strong style="color:#2c2823;">${telephone}</strong>
                pour convenir d'un rendez-vous.
                </p>

              <p style="margin:0 0 32px;font-size:16px;color:#7a7169;line-height:1.8;">
                En attendant, n'hésitez pas à la contacter directement par téléphone.
              </p>

              <!-- Récapitulatif -->
              <div style="background:#f5f1eb;border-radius:8px 5px 9px 4px / 5px 8px 4px 9px;padding:24px 28px;margin-bottom:32px;border-left:3px solid #c2784f;">
                <p style="margin:0 0 14px;font-family:monospace;font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#7a7169;">
                  Récapitulatif de votre demande
                </p>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:6px 0;font-size:14px;color:#7a7169;width:45%;">Type de consultation</td>
                    <td style="padding:6px 0;font-size:14px;color:#2c2823;font-weight:600;">${consultationLabel[typeConsultation] || "—"}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;font-size:14px;color:#7a7169;">Créneau préféré</td>
                    <td style="padding:6px 0;font-size:14px;color:#2c2823;font-weight:600;">${creneauLabel[creneau] || "—"}</td>
                  </tr>
                </table>
              </div>

              <!-- CTA téléphone -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td align="center">
                    
                     <a href="tel:+33635168162"
                      style="display:inline-block;background:#c2784f;color:#ffffff;font-family:Georgia,serif;font-size:16px;font-weight:500;padding:12px 32px;border-radius:20px 11px 22px 9px / 11px 20px 9px 22px;text-decoration:none;border:2px solid #2c2823;"
                    >
                      06 35 16 81 62
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Signature -->
              <div style="border-top:1px solid rgba(44,40,35,0.12);padding-top:24px;">
                <p style="margin:0 0 4px;font-size:15px;color:#2c2823;line-height:1.6;">
                  À très bientôt,
                </p>
                <p style="margin:0;font-family:Georgia,serif;font-size:16px;font-weight:700;color:#2c2823;">
                  Dalysé Larain
                </p>
                <p style="margin:2px 0 0;font-family:monospace;font-size:11px;letter-spacing:0.08em;color:#7a7169;">
                  Ameya Nature &amp; Guidance
                </p>
              </div>

            </td>
          </tr>

          <!-- Spacer -->
          <tr><td style="height:24px;"></td></tr>

          <!-- Footer -->
          <tr>
            <td style="text-align:center;padding:0 20px;">
              <p style="margin:0 0 8px;font-family:monospace;font-size:10px;letter-spacing:0.08em;color:#7a7169;">
                ameya-nature-guidance.fr
              </p>
              <p style="margin:0;font-family:monospace;font-size:10px;color:#a09890;line-height:1.6;">
                Les consultations proposées sont à titre de divertissement uniquement.<br/>
                Elles ne remplacent en aucun cas un avis médical, juridique ou financier professionnel.
              </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[API /contact]", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
