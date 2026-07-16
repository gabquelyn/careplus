"use client";
import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface CriteriaItem {
  title: string;
  description: string;
}

const CRITERIA_LIST: CriteriaItem[] = [
  {
    title: "Require ongoing assistance",
    description: "Ideal for individuals needing regular physical or cognitive prompts through the day and night to keep routines stable and safe."
  },
  {
    title: "Experiencing increased mobility challenges",
    description: "Provides hands-on support for transfers, safe ambulation, and fall prevention directly within existing home layouts."
  },
  {
    title: "Recovering from illness or injury",
    description: "Ensures transitional safety following hospital stays, maximizing physical rehabilitation in relaxed, stress-free environments."
  },
  {
    title: "Wish to avoid institutional care where appropriate",
    description: "Preserves the comforts, routines, and memory triggers of home, completely replacing the need for residential facility transitions."
  },
  {
    title: "Benefit from companionship and consistent support",
    description: "Reduces social isolation by pairing your loved one with a familiar, trusted caregiver who gets to know their authentic personality."
  }
];

export default function CareSuitability() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="suitability" className="bg-soft-teal py-24 font-sans text-charcoal lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          
          {/* Left Block: Editorial context sticky panel */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-teal">
              Assessing Your Options
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Understanding when live-in support fits.
            </h2>
            <p className="mt-6 text-lg text-warm-grey leading-relaxed">
              Deciding on 24-hour care can feel overwhelming. Our live-in support infrastructure is intentionally designed as an alternative path—keeping daily routines seamlessly intact.
            </p>
          </div>

          {/* Right Block: Structured cards replacing lists */}
          <div className="lg:col-span-7 space-y-4">
            {CRITERIA_LIST.map((criteria, index) => (
              <motion.div
                key={criteria.title}
                initial={reduceMotion ? {} : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="flex items-start gap-4 rounded-xl bg-white p-6 border border-teal/5 shadow-xs hover:border-teal/20 transition-all duration-200"
              >
                {/* Checkmark custom element */}
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-charcoal">{criteria.title}</h3>
                  <p className="mt-1 text-sm text-warm-grey leading-relaxed">{criteria.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}