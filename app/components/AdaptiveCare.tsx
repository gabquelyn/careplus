"use client";
import Image from "next/image";
import { motion, useReducedMotion, type Transition } from "motion/react";

interface ServiceCardProps {
  variant: "light" | "dark";
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  className?: string;
  transition?: Transition;
  fadeInProps: Record<string, unknown>;
}

function ServiceCard({
  variant,
  icon,
  title,
  description,
  ctaLabel,
  href,
  className = "",
  transition,
  fadeInProps,
}: ServiceCardProps) {
  const isDark = variant === "dark";

  return (
    <motion.div
      transition={transition}
      className={`flex flex-col justify-between rounded-2xl p-6 shadow-xl border ${
        isDark
          ? "bg-charcoal text-off-white shadow-charcoal/10 border-transparent"
          : "bg-off-white shadow-charcoal/5 border-teal/5"
      } ${className}`}
    >
      <div>
        <div
          className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
            isDark ? "bg-off-white/10 text-peach" : "bg-teal/5 text-teal"
          }`}
        >
          {icon}
        </div>
        <h3
          className={`text-lg font-bold ${isDark ? "text-off-white" : "text-charcoal"}`}
        >
          {title}
        </h3>
        <p
          className={`mt-2 text-sm leading-relaxed ${isDark ? "text-off-white/80" : "text-warm-grey"}`}
        >
          {description}
        </p>
      </div>
      <div
        className={`mt-6 border-t pt-4 ${isDark ? "border-off-white/10" : "border-charcoal/5"}`}
      >
        {/* <a
          href={href}
          className={`inline-flex items-center gap-1 text-xs font-semibold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${
            isDark ? "text-peach" : "text-teal"
          }`}
        >
          {ctaLabel}
          <span aria-hidden="true">→</span>
        </a> */}
      </div>
    </motion.div>
  );
}

function Commitment({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="3"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <div>
        <h4 className="text-base font-bold text-charcoal">{title}</h4>
        <p className="mt-0.5 text-sm text-warm-grey">{description}</p>
      </div>
    </div>
  );
}

export default function AdaptiveCare() {
  const reduceMotion = useReducedMotion() ?? false;

  const fadeInProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.7, ease: "easeOut" },
      };

  return (
    <section className="relative overflow-hidden bg-soft-teal px-6 py-24 font-sans text-charcoal lg:px-8 lg:py-32">
      <div
        className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-off-white/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
          {/* Narrative column */}
          <motion.div className="lg:col-span-6">
            <h2 className="font-serif text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
              Care that flexes with a few hours a week — or around-the-clock
              support.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-warm-grey">
              Our dedicated team works directly alongside families to create
              holistic, fluid care solutions that adapt as your loved one&apos;s
              lifestyle and clinical needs evolve. We do not believe in rigid
              contracts — only responsive, compassionate partnership.
            </p>

            <div className="mt-8 space-y-4">
              <Commitment
                title="Collaborative family portal"
                description="Real-time scheduling updates and care notes shared directly with family members."
              />
              <Commitment
                title="Dynamic care matching"
                description="We pair caregivers based not just on clinical expertise, but on shared hobbies and personality."
              />
            </div>
          </motion.div>

          {/* Visual column */}
          <div className="relative lg:col-span-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <ServiceCard
                variant="light"
                fadeInProps={fadeInProps}
                className="sm:translate-y-8"
                icon={
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
                title="Flexible hourly care"
                description="Ideal for weekly errands, medication reminders, light housekeeping, or respite support for primary family caregivers."
                ctaLabel="Explore hourly options"
                href="/services/hourly-care"
              />

              <ServiceCard
                variant="dark"
                fadeInProps={fadeInProps}
                transition={{ delay: reduceMotion ? 0 : 0.1, duration: 0.7 }}
                icon={
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                }
                title="Around-the-clock support"
                description="Continuous monitoring and clinical supervision ensuring complete peace of mind, morning, noon, and night."
                ctaLabel="Learn about 24/7 coverage"
                href="/services/247-care"
              />
            </div>

            <motion.div
              transition={{ delay: reduceMotion ? 0 : 0.2, duration: 0.7 }}
              className="relative h-64 w-full overflow-hidden rounded-2xl border border-teal/5 shadow-lg sm:h-80 mt-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1200&q=80"
                alt="Caregiver reassuringly holding the hands of a senior in a warm domestic environment"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
                quality={85}
              />
              <div
                className="absolute inset-0 bg-linear-to-t from-charcoal/40 via-transparent to-transparent"
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
