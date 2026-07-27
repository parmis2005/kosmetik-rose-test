"use client";

import { FormEvent, useState } from "react";

const services = [
  "Gesichtsbehandlung",
  "Elektrolyse & Haarentfernung",
  "Hand & Fuß",
  "Bio-Lifting",
  "Haut- & Faltenbehandlung",
  "Permanent Make-up",
  "PigmentOff Remover",
  "Lippenbehandlung",
];

type Status =
  | { type: "idle" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export default function BookingSection() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const minDate = new Date().toISOString().split("T")[0];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      preferredDate: String(formData.get("preferredDate") ?? "").trim(),
      preferredTime: String(formData.get("preferredTime") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus({
          type: "error",
          message: data.message ?? "Die Anfrage konnte nicht gesendet werden.",
        });
        return;
      }

      form.reset();
      setStatus({
        type: "success",
        message:
          data.message ??
          "Ihre Terminanfrage wurde gesendet. Wir melden uns schnellstmöglich zurück.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "Die Verbindung ist fehlgeschlagen. Bitte versuchen Sie es erneut oder rufen Sie uns an.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="termin-buchen" className="bg-white py-24 px-6 scroll-mt-32 md:scroll-mt-36">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
        <div>
          <p className="text-xs tracking-[4px] uppercase text-rose mb-4">
            Online-Terminbuchung
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-charcoal mb-6">
            Termin direkt
            <span className="block italic text-rose-dark">online anfragen</span>
          </h2>
          <div className="section-divider mb-8 ml-0" />

          <p className="text-charcoal-light leading-relaxed mb-6">
            Senden Sie uns Ihren Wunschtermin bequem über die Website. Wir
            prüfen die Verfügbarkeit und bestätigen Ihren Termin per E-Mail
            oder Telefon.
          </p>

          <div className="space-y-4 text-sm text-charcoal-light">
            <div className="border border-rose/15 bg-cream p-5">
              Bitte nennen Sie die gewünschte Behandlung, Ihren Wunschtag und
              die passende Uhrzeit.
            </div>
            <div className="border border-rose/15 bg-cream p-5">
              Termine außerhalb der regulären Öffnungszeiten sind nach
              Absprache möglich.
            </div>
            <div className="border border-rose/15 bg-cream p-5">
              Bei kurzfristigen Änderungen bitten wir um Absage mindestens 24
              Stunden vorher.
            </div>
          </div>
        </div>

        <div className="bg-cream p-8 md:p-10 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <label className="block">
                <span className="block text-xs tracking-[2px] uppercase text-charcoal-light mb-2">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-rose/20 bg-white px-4 py-3 text-sm outline-none focus:border-rose"
                />
              </label>

              <label className="block">
                <span className="block text-xs tracking-[2px] uppercase text-charcoal-light mb-2">
                  Telefon
                </span>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full border border-rose/20 bg-white px-4 py-3 text-sm outline-none focus:border-rose"
                />
              </label>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <label className="block">
                <span className="block text-xs tracking-[2px] uppercase text-charcoal-light mb-2">
                  E-Mail
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-rose/20 bg-white px-4 py-3 text-sm outline-none focus:border-rose"
                />
              </label>

              <label className="block">
                <span className="block text-xs tracking-[2px] uppercase text-charcoal-light mb-2">
                  Behandlung
                </span>
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="w-full border border-rose/20 bg-white px-4 py-3 text-sm outline-none focus:border-rose"
                >
                  <option value="" disabled>
                    Bitte auswählen
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <label className="block">
                <span className="block text-xs tracking-[2px] uppercase text-charcoal-light mb-2">
                  Wunschtermin
                </span>
                <input
                  type="date"
                  name="preferredDate"
                  required
                  min={minDate}
                  className="w-full border border-rose/20 bg-white px-4 py-3 text-sm outline-none focus:border-rose"
                />
              </label>

              <label className="block">
                <span className="block text-xs tracking-[2px] uppercase text-charcoal-light mb-2">
                  Uhrzeit
                </span>
                <input
                  type="time"
                  name="preferredTime"
                  required
                  className="w-full border border-rose/20 bg-white px-4 py-3 text-sm outline-none focus:border-rose"
                />
              </label>
            </div>

            <label className="block">
              <span className="block text-xs tracking-[2px] uppercase text-charcoal-light mb-2">
                Nachricht
              </span>
              <textarea
                name="message"
                rows={5}
                placeholder="Weitere Hinweise, Alternativtermine oder Rückfragen"
                className="w-full border border-rose/20 bg-white px-4 py-3 text-sm outline-none focus:border-rose resize-y"
              />
            </label>

            <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
              {isSubmitting ? "Anfrage wird gesendet..." : "Termin online anfragen"}
            </button>

            {status.type !== "idle" && (
              <p
                className={`text-sm ${
                  status.type === "success" ? "text-green-700" : "text-red-700"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
