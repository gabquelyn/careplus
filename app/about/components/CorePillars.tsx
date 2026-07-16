"use client";
import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface PillarItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PILLARS_LIST: PillarItem[] = [
  {
    title: "Familiar Surroundings",
    description: "Remaining in the environment that holds your memories, treasures, and comforts is vital to emotional well-being.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: "Independence",
    description: "Our caregivers assist with essential daily tasks while actively empowering your loved one to retain control over their routines.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Dignity",
    description: "Every physical, clinical, or social intervention we make is handled with complete privacy, empathy, and absolute respect.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Community Connections",
    description: "We help keep your loved ones active, healthy, and deeply integrated within their neighborhood and social circles.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

export default function AboutPillars() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section className="bg-soft-teal py-24 font-sans text-charcoal lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">Our Values</span>
          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Thoughtful care that makes a true difference
          </h2>
          <p className="mt-4 text-lg text-warm-grey">
            We focus on maintaining routines and preserving meaningful physical and social bonds.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS_LIST.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={reduceMotion ? {} : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 border border-teal/5 shadow-sm hover:shadow-xl hover:shadow-charcoal/5 transition-all duration-300 group"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/5 text-teal group-hover:bg-teal group-hover:text-off-white transition-all duration-300">
                  {pillar.icon}
                </div>
                <h3 className="mt-6 text-lg font-bold text-charcoal">{pillar.title}</h3>
                <p className="mt-2 text-sm text-warm-grey leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}