"use client";
import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

interface Option {
  value: string;
  label: string;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  recipient: string;
  careNeeded: string;
  message: string;
  bestTimeToCall: string;
}

type Status = "idle" | "submitting" | "success" | "error";

const LOCATIONS: Option[] = [
  { value: "Toronto", label: "Toronto & GTA" },
  { value: "Mississauga", label: "Mississauga & Peel" },
  { value: "Hamilton", label: "Hamilton & Halton" },
  { value: "London", label: "London & Middlesex" },
  { value: "Kitchener", label: "Kitchener & Waterloo" },
  { value: "Barrie", label: "Barrie & Simcoe County" },
  { value: "Peterborough", label: "Peterborough & Kawarthas" },
  { value: "Ottawa", label: "Ottawa & National Capital Region" },
  { value: "Niagara", label: "Niagara Falls & Region" },
];

const RECIPIENT_OPTIONS: Option[] = ["Parent", "Spouse", "Myself", "Other"].map(
  (label) => ({ value: label.toLowerCase(), label })
);

const CARE_OPTIONS: Option[] = [
  { value: "hourly", label: "Flexible Hourly" },
  { value: "livein", label: "24-Hour Live-In" },
  { value: "specialized", label: "Specialized / Complex" },
];

const TIME_OPTIONS: Option[] = [
  { value: "morning", label: "Morning (8:00 AM - 12:00 PM)" },
  { value: "afternoon", label: "Afternoon (12:00 PM - 5:00 PM)" },
  { value: "evening", label: "Evening (5:00 PM - 8:00 PM)" },
];

const inputClasses =
  "mt-2 block w-full rounded-lg border border-charcoal/15 bg-off-white/40 px-4 py-3 text-sm text-charcoal focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal";

function TextInput({
  id,
  label,
  type = "text",
  required,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-charcoal">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClasses}
      />
    </div>
  );
}

function SelectField({
  id,
  label,
  required,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-charcoal">
        {label} {required && "*"}
      </label>
      <select
        id={id}
        name={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClasses}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function RadioPillGroup({
  legend,
  name,
  options,
  selected,
  onChange,
  columns,
  stacked = false,
}: {
  legend: string;
  name: string;
  options: Option[];
  selected: string;
  onChange: (value: string) => void;
  columns: string;
  stacked?: boolean;
}) {
  return (
    <fieldset>
      <legend className="block text-sm font-semibold text-charcoal">{legend}</legend>
      <div className={`mt-3 grid gap-3 ${columns}`}>
        {options.map((opt) => (
          <label key={opt.value} className="block cursor-pointer">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={selected === opt.value}
              onChange={() => onChange(opt.value)}
              className="peer sr-only"
            />
            <span
              className={`flex h-full items-center justify-center rounded-lg border text-center text-xs font-semibold text-charcoal transition-all border-charcoal/10 bg-off-white/40 hover:bg-soft-teal hover:border-teal/20 peer-checked:border-teal peer-checked:bg-teal peer-checked:text-off-white peer-checked:shadow-md peer-checked:shadow-teal/15 peer-focus-visible:ring-2 peer-focus-visible:ring-teal peer-focus-visible:ring-offset-2 ${
                stacked ? "flex-col gap-1 p-3 font-bold" : "py-2.5"
              }`}
            >
              {opt.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function ConsultationPage() {
  const reduceMotion = useReducedMotion() ?? false;
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    location: "Toronto",
    recipient: "parent",
    careNeeded: "hourly",
    message: "",
    bestTimeToCall: "morning",
  });

  const setField = (field: keyof FormState, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const fadeInProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 25 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" as const },
      };

  return (
    <main className="min-h-screen bg-off-white py-16 font-sans text-charcoal lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Added items-start to prevent the left grid cell from stretching layout-wise */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24 lg:items-start">
          
          {/* Sticky Sidebar (5 Cols) */}
          <div className="flex flex-col justify-center lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-sm font-semibold uppercase tracking-wider text-teal">
              Free assessment
            </span>
            <h1 className="mt-2 font-serif text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
              Let&apos;s talk about your care needs.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-warm-grey">
              We understand that seeking care is a deeply personal process.
              Our care team is here to listen, answer your questions, and
              help coordinate a plan that fits beautifully around your
              family&apos;s life.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-teal/10 bg-soft-teal text-teal">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-charcoal">What to expect next</h3>
                  <p className="mt-1 text-sm text-warm-grey">
                    A local care coordinator will contact you within 24
                    business hours. We&apos;ll have a relaxed, 15-minute
                    conversation to learn about your situation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-teal/10 bg-soft-teal text-teal">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-charcoal">100% confidentiality</h3>
                  <p className="mt-1 text-sm text-warm-grey">
                    Your information is protected and will only be shared
                    with CarePlus health professionals to outline your care
                    matching recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling Form card (7 Cols) */}
          <motion.div
            {...fadeInProps}
            className="rounded-2xl border border-teal/5 bg-white p-8 shadow-xl shadow-charcoal/5 lg:col-span-7 lg:p-12"
            aria-live="polite"
          >
            {status === "success" ? (
              <div className="py-16 text-center" role="status">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-soft-teal text-teal">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-serif text-2xl font-bold text-charcoal">
                  Thank you, we&apos;ve received your request.
                </h2>
                <p className="mx-auto mt-3 max-w-md text-warm-grey">
                  One of our dedicated Ontario care specialists will reach out
                  to you shortly at the phone number provided.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
                <div>
                  <h2 className="font-serif text-2xl font-bold text-charcoal">
                    Request a free consultation
                  </h2>
                  <p className="mt-1 text-sm text-warm-grey">
                    Fields marked with an asterisk are required.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <TextInput
                    id="fullName"
                    label="Your full name"
                    required
                    value={formData.fullName}
                    onChange={(v) => setField("fullName", v)}
                  />
                  <TextInput
                    id="phone"
                    label="Your phone number"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(v) => setField("phone", v)}
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <TextInput
                    id="email"
                    label="Email address"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(v) => setField("email", v)}
                  />
                  <SelectField
                    id="location"
                    label="Nearest Ontario region"
                    required
                    value={formData.location}
                    onChange={(v) => setField("location", v)}
                    options={LOCATIONS}
                  />
                </div>

                <RadioPillGroup
                  legend="Who is this care for?"
                  name="recipient"
                  options={RECIPIENT_OPTIONS}
                  selected={formData.recipient}
                  onChange={(v) => setField("recipient", v)}
                  columns="grid-cols-2 sm:grid-cols-4"
                />

                <RadioPillGroup
                  legend="What type of support are you seeking?"
                  name="careNeeded"
                  options={CARE_OPTIONS}
                  selected={formData.careNeeded}
                  onChange={(v) => setField("careNeeded", v)}
                  columns="grid-cols-1 sm:grid-cols-3"
                  stacked
                />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <SelectField
                    id="bestTime"
                    label="Best time to call"
                    value={formData.bestTimeToCall}
                    onChange={(v) => setField("bestTimeToCall", v)}
                    options={TIME_OPTIONS}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-charcoal">
                    Can you briefly describe your circumstances or care requirements?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setField("message", e.target.value)}
                    className={`${inputClasses} placeholder:text-warm-grey/60`}
                    placeholder="e.g., Mom lives alone in Mississauga and requires help with transfers and cooking meals..."
                  />
                </div>

                {status === "error" && (
                  <div
                    role="alert"
                    className="rounded-lg border border-coral/30 bg-coral/5 px-4 py-3 text-sm text-coral"
                  >
                    Something went wrong sending your request. Please try
                    again, or call us directly if the problem continues.
                  </div>
                )}

                <div className="border-t border-charcoal/10 pt-4">
                  <p className="mb-4 text-xs text-warm-grey">
                    By submitting this form, you authorize CarePlus to place
                    a call or text message to the number provided to
                    coordinate your support consultation.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    aria-busy={status === "submitting"}
                    className="w-full rounded-lg bg-coral py-4 text-center text-sm font-bold text-off-white shadow-lg shadow-coral/20 transition-all hover:bg-coral/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "submitting" ? "Sending…" : "Request Free Consultation"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}