"use client";
import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface JourneyStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    number: "01",
    title: "Initial Conversation",
    subtitle: "We begin by listening.",
    description:
      "Our team takes time to understand your circumstances, answer questions, and learn about the specific support you are looking for.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Personalized Care Plan",
    subtitle: "Every care journey is unique.",
    description:
      "Together, we develop a care plan tailored to individual needs, goals, preferences, and routines—ensuring nothing is overlooked.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Matching & Scheduling",
    subtitle: "A relationship built on trust.",
    description:
      "We carefully match individuals with caregivers who align with their needs and personality, while creating a schedule that works for everyone involved.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Ongoing Support",
    subtitle: "Adapting alongside you.",
    description:
      "Care needs can change over time. We remain involved, adjusting support when needed and providing ongoing communication to help ensure continuity and peace of mind.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

export default function CareJourneyTimeline() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="journey-timeline"
      className="bg-soft-teal py-24 font-sans text-charcoal lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            Our Process
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Four simple steps to peace of mind
          </h2>
          <p className="mt-4 text-lg text-warm-grey">
            We walk alongside you at every step of the process, ensuring your
            loved one remains comfortably anchored at home.
          </p>
        </div>

        {/* Step Grid Cards */}
        <div className="relative mx-auto max-w-7xl">
          {/* 
    The Connection Tracks
    - Desktop: Horizontal dashed line running behind the icon row (top-12)
    - Mobile: Vertical dashed line running down the left margin (left-[2.25rem])
  */}
          <div
            className="absolute top-12 left-[10%] right-[10%] hidden h-0.5 border-t-2 border-dashed border-teal/25 md:block"
            aria-hidden="true"
          />
          <div
            className="absolute left-9 top-12 bottom-12 w-0.5 border-l-2 border-dashed border-teal/25 md:hidden"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 relative z-10">
            {JOURNEY_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="relative flex flex-col justify-between rounded-2xl bg-white p-8 border border-teal/10 shadow-sm hover:shadow-xl hover:shadow-charcoal/5 hover:border-teal/30 transition-all duration-300 group"
              >
                <div>
                  {/* Numeric Indicator & Icon (Acts as the timeline node) */}
                  <div className="flex items-center justify-between">
                    {/* 
              By wrapping the icon/number in a solid bg-off-white container with relative z-index,
              we cleanly "mask" the dashed background connector line.
            */}
                    <span className="relative font-serif text-3.5xl font-bold text-teal/20 group-hover:text-teal/40 transition-colors">
                      {step.number}
                    </span>

                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft-teal text-teal border border-teal/10 group-hover:bg-teal group-hover:text-off-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                      {step.icon}
                    </div>
                  </div>

                  {/* Editorial Details */}
                  <h3 className="mt-8 text-xl font-bold text-charcoal group-hover:text-teal transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-serif text-xs italic text-teal/80">
                    {step.subtitle}
                  </p>
                  <p className="mt-4 text-sm text-warm-grey leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Small decorative corner connector node indicating progress flow */}
                <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-teal/10 group-hover:bg-coral transition-colors duration-300 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
