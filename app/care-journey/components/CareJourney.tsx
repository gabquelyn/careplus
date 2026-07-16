"use client";
import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

export default function CareJourneyHero() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section className="relative overflow-hidden bg-white py-20 font-sans text-charcoal lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left Block */}
          <div className="lg:col-span-7">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-teal">
              How We Help
            </span>
            <h1 className="font-serif text-4xl font-bold leading-tight text-charcoal sm:text-5xl lg:text-6xl">
              Our Care Journey
            </h1>
            <p className="mt-4 font-serif text-xl italic text-teal sm:text-2xl">
              A Simple Path To The Right Care.
            </p>
            <p className="mt-6 text-lg text-warm-grey leading-relaxed max-w-2xl">
              We believe accessing support should feel straightforward,
              personal, and reassuring. Our structured journey is designed to
              keep your family informed, supported, and in complete control at
              every single milestone.
            </p>
            <div className="mt-8">
              <Link
                href="#contact"
                className="rounded-lg bg-coral px-6 py-3 text-sm font-semibold text-off-white shadow-md shadow-coral/20 hover:bg-coral/95 transition-all duration-200 whitespace-nowrap"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>

          {/* Right Block */}
          <motion.div
            initial={reduceMotion ? {} : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-87.5 w-full overflow-hidden rounded-2xl border border-teal/5 shadow-2xl shadow-charcoal/10 sm:h-112.5 lg:col-span-5"
          >
            <Image
              src="/assets/carejourney.jpg"
              alt="A warm, comfortable domestic environment where families can peacefully discuss and transition into care."
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
