"use client";

import { FormEvent, useMemo, useState } from "react";
import { CalendarDays, Clock, Mail, MessageSquare, Phone, User } from "lucide-react";

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

// Montag & Sonntag geschlossen, siehe Öffnungszeiten in der ContactSection.
const openingHours: Record<number, { start: number; end: number } | null> = {
  0: null,
  1: null,
  2: { start: 12, end: 18 },
  3: { start: 12, end: 18 },
  4: { start: 12, end: 18 },
  5: { start: 12, end: 18 },
  6: { start: 9, end: 14 },
};

const WEEKDAY_SHORT = ["SO", "MO", "DI", "MI", "DO", "FR", "SA"];
const SLOT_STEP_MINUTES = 45;

type DayOption = {
  date: Date;
  iso: string;
  weekday: string;
  dayNum: number;
  closed: boolean;
};

function buildDayOptions(count: number): DayOption[] {
  const options: DayOption[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 0; i < count; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    const hours = openingHours[date.getDay()];
    options.push({
      date,
      iso: date.toISOString().split("T")[0],
      weekday: WEEKDAY_SHORT[date.getDay()],
      dayNum: date.getDate(),
      closed: !hours,
    });
  }
  return options;
}

function buildTimeSlots(date: Date | undefined): string[] {
  if (!date) return [];
  const hours = openingHours[date.getDay()];
  if (!hours) return [];

  const slots: string[] = [];
  let minutes = hours.start * 60;
  const endMinutes = hours.end * 60;

  while (minutes < endMinutes) {
    const h = Math.floor(minutes / 60)
      .toString()
      .padStart(2, "0");
    const m = (minutes % 60).toString().padStart(2, "0");
    slots.push(`${h}:${m}`);
    minutes += SLOT_STEP_MINUTES;
  }
  return slots;
}

function formatSummaryDate(date: Date | undefined): string {
  if (!date) return "";
  return date.toLocaleDateString("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
  });
}

type Status =
  | { type: "idle" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export default function BookingSection() {
  const dayOptions = useMemo(() => buildDayOptions(21), []);
  const firstOpenDay = dayOptions.find((d) => !d.closed);

  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedDay, setSelectedDay] = useState<DayOption | undefined>(firstOpenDay);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = useMemo(() => buildTimeSlots(selectedDay?.date), [selectedDay]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedDay || !selectedTime) {
      setStatus({ type: "error", message: "Bitte wählen Sie Tag und Uhrzeit aus." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      service: selectedService,
      preferredDate: selectedDay.iso,
      preferredTime: selectedTime,
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
      setSelectedTime(null);
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

  const canSubmit = Boolean(selectedDay && selectedTime);

  return (
    <section id="termin-buchen" className="bg-white py-16 md:py-24 px-6 scroll-mt-32 md:scroll-mt-36">
      <div className="max-w-4xl mx-auto text-center mb-8 md:mb-14">
        <p className="text-xs tracking-[4px] uppercase text-rose mb-4">
          Online-Terminbuchung
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-charcoal mb-6">
          Termin direkt
          <span className="italic text-rose-dark"> online anfragen</span>
        </h2>
        <div className="section-divider mb-6" />
        <p className="text-charcoal-light max-w-xl mx-auto text-sm leading-relaxed">
          Wählen Sie Behandlung, Wunschtag und Uhrzeit. Wir prüfen die
          Verfügbarkeit und bestätigen Ihren Termin per E-Mail oder Telefon.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-cream border border-rose/15 p-4 md:p-10 shadow-sm"
        >
          {/* Step 1: Service */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs tracking-[2px] uppercase text-charcoal font-semibold">
              1. Behandlung wählen
            </span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 mb-6 -mx-1 px-1">
            {services.map((service) => (
              <button
                key={service}
                type="button"
                onClick={() => setSelectedService(service)}
                className={`shrink-0 px-5 py-3 text-sm whitespace-nowrap border transition-colors ${
                  selectedService === service
                    ? "bg-rose text-white border-rose"
                    : "bg-white text-charcoal border-rose/20 hover:border-rose"
                }`}
              >
                {service}
              </button>
            ))}
          </div>

          {/* Step 2: Day */}
          <div className="flex items-center gap-2 mb-3">
            <CalendarDays size={16} className="text-rose" />
            <span className="text-xs tracking-[2px] uppercase text-charcoal font-semibold">
              2. Tag wählen
            </span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6 -mx-1 px-1">
            {dayOptions.map((day) => (
              <button
                key={day.iso}
                type="button"
                disabled={day.closed}
                onClick={() => {
                  setSelectedDay(day);
                  setSelectedTime(null);
                }}
                className={`shrink-0 w-16 py-3 text-center border transition-colors ${
                  day.closed
                    ? "border-rose/10 text-charcoal-light/40 cursor-not-allowed"
                    : selectedDay?.iso === day.iso
                      ? "bg-rose text-white border-rose"
                      : "bg-white text-charcoal border-rose/20 hover:border-rose"
                }`}
              >
                <span className="block text-[10px] tracking-[1px] uppercase opacity-80">
                  {day.weekday}
                </span>
                <span className="block font-heading text-lg mt-0.5">{day.dayNum}</span>
              </button>
            ))}
          </div>

          {/* Step 3: Time */}
          <div className="flex items-center gap-2 mb-3">
            <Clock size={16} className="text-rose" />
            <span className="text-xs tracking-[2px] uppercase text-charcoal font-semibold">
              3. Uhrzeit wählen
            </span>
          </div>
          {timeSlots.length > 0 ? (
            <div className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-3 mb-6">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`py-2.5 md:py-3 text-sm border transition-colors ${
                    selectedTime === time
                      ? "bg-rose text-white border-rose"
                      : "bg-white text-charcoal border-rose/20 hover:border-rose"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-sm text-charcoal-light mb-6">
              An diesem Tag sind wir geschlossen. Bitte wählen Sie einen anderen Tag.
            </p>
          )}

          {/* Step 4: Contact */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs tracking-[2px] uppercase text-charcoal font-semibold">
              4. Ihre Kontaktdaten
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-3 mb-3">
            <label className="flex items-center gap-3 border border-rose/20 bg-white px-4 py-2.5 md:py-3">
              <User size={16} className="text-rose shrink-0" />
              <input
                type="text"
                name="name"
                required
                placeholder="Ihr Name*"
                className="w-full text-sm outline-none placeholder:text-charcoal-light"
              />
            </label>

            <label className="flex items-center gap-3 border border-rose/20 bg-white px-4 py-2.5 md:py-3">
              <Mail size={16} className="text-rose shrink-0" />
              <input
                type="email"
                name="email"
                required
                placeholder="Ihre E-Mail*"
                className="w-full text-sm outline-none placeholder:text-charcoal-light"
              />
            </label>
          </div>

          <label className="flex items-center gap-3 border border-rose/20 bg-white px-4 py-2.5 md:py-3 mb-3">
            <Phone size={16} className="text-rose shrink-0" />
            <input
              type="tel"
              name="phone"
              required
              placeholder="Telefon"
              className="w-full text-sm outline-none placeholder:text-charcoal-light"
            />
          </label>

          <label className="flex items-start gap-3 border border-rose/20 bg-white px-4 py-2.5 md:py-3 mb-6">
            <MessageSquare size={16} className="text-rose shrink-0 mt-0.5" />
            <textarea
              name="message"
              rows={2}
              placeholder="Anmerkungen (optional)"
              className="w-full text-sm outline-none resize-y placeholder:text-charcoal-light"
            />
          </label>

          {/* Summary + submit */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-rose/15">
            <p className="text-sm text-charcoal-light">
              {selectedService}
              {selectedDay && !selectedDay.closed && (
                <>
                  {" "}
                  · {formatSummaryDate(selectedDay.date)}
                  {selectedTime ? `, ${selectedTime}` : ""}
                </>
              )}
            </p>
            <button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className="btn-primary w-full sm:w-auto disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Wird gesendet..." : "Termin anfragen"}
            </button>
          </div>

          {status.type !== "idle" && (
            <p
              className={`text-sm mt-4 ${
                status.type === "success" ? "text-green-700" : "text-red-700"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>

        <div className="grid sm:grid-cols-3 gap-3 mt-6 text-xs md:text-sm text-charcoal-light">
          <div className="border border-rose/15 bg-cream p-4">
            Bitte nennen Sie die gewünschte Behandlung, Ihren Wunschtag und
            die passende Uhrzeit.
          </div>
          <div className="border border-rose/15 bg-cream p-4">
            Termine außerhalb der regulären Öffnungszeiten sind nach
            Absprache möglich.
          </div>
          <div className="border border-rose/15 bg-cream p-4">
            Bei kurzfristigen Änderungen bitten wir um Absage mindestens 24
            Stunden vorher.
          </div>
        </div>
      </div>
    </section>
  );
}
