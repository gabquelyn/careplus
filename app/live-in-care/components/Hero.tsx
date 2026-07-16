"use client";
import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

export default function LiveInCareHero() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section className="relative overflow-hidden bg-white py-20 font-sans text-charcoal lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left Column: Context & Core Narrative */}
          <div className="lg:col-span-7">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-teal">
              24-Hour Specialized Care
            </span>
            <h1 className="font-serif text-4xl font-bold leading-tight text-charcoal sm:text-5xl lg:text-6xl">
              Live-In Care
            </h1>
            <p className="mt-4 font-serif text-xl italic text-teal sm:text-2xl">
              Dedicated support for individuals who require ongoing assistance
              and wish to remain at home.
            </p>
            <p className="mt-6 text-lg text-warm-grey leading-relaxed max-w-2xl">
              Live-In Care provides families with absolute peace of mind while
              allowing loved ones to continue living in familiar surroundings
              with personalized, dedicated support available throughout the day.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#suitability"
                className="rounded-lg bg-coral px-6 py-3.5 text-center text-sm font-semibold text-off-white shadow-lg shadow-coral/20 hover:bg-coral/95 transition-all"
              >
                Is Live-In Care Right For Us?
              </a>
              <Link
                href="/contact"
                className="rounded-lg border border-charcoal/20 px-6 py-3.5 text-center text-sm font-semibold text-charcoal hover:bg-soft-teal hover:text-teal transition-all"
              >
                Speak with an Advisor
              </Link>
            </div>
          </div>

          {/* Right Column: Grounding Visual Asset */}
          <motion.div
            initial={reduceMotion ? {} : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-95 w-full overflow-hidden rounded-2xl border border-teal/5 shadow-2xl shadow-charcoal/10 sm:h-120 lg:col-span-5"
          >
            <Image
              src="/assets/homecare.jpg"
              alt="A compassionate caregiver sharing a respectful, warm smile with a senior in their home environment."
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority
              quality={85}
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-charcoal/40 via-transparent to-transparent"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
