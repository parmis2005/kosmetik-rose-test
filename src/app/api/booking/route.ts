import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type BookingPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
};

function missingSmtpConfig() {
  return (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_PORT ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS ||
    !process.env.BOOKING_RECEIVER_EMAIL
  );
}

export async function POST(request: Request) {
  const body = (await request.json()) as BookingPayload;
  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();
  const service = body.service?.trim();
  const preferredDate = body.preferredDate?.trim();
  const preferredTime = body.preferredTime?.trim();
  const message = body.message?.trim() ?? "";

  if (!name || !email || !phone || !service || !preferredDate || !preferredTime) {
    return NextResponse.json(
      { message: "Bitte füllen Sie alle Pflichtfelder aus." },
      { status: 400 },
    );
  }

  if (missingSmtpConfig()) {
    return NextResponse.json(
      {
        message:
          "Die Online-Terminbuchung ist noch nicht vollständig eingerichtet. Bitte hinterlegen Sie die SMTP-Zugangsdaten.",
      },
      { status: 500 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const recipient = process.env.BOOKING_RECEIVER_EMAIL as string;
    const fromAddress = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER;

    await transporter.sendMail({
      from: fromAddress,
      to: recipient,
      replyTo: email,
      subject: `Neue Terminanfrage von ${name}`,
      text: [
        "Neue Online-Terminanfrage",
        "",
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Telefon: ${phone}`,
        `Behandlung: ${service}`,
        `Wunschtermin: ${preferredDate}`,
        `Uhrzeit: ${preferredTime}`,
        "",
        "Nachricht:",
        message || "Keine weitere Nachricht.",
      ].join("\n"),
    });
  } catch {
    return NextResponse.json(
      { message: "Der Termin konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    message:
      "Ihre Terminanfrage wurde gesendet. Wir melden uns schnellstmöglich zurück.",
  });
}
