"use client";
import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function SpecializedCareHero() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section className="relative overflow-hidden bg-white py-20 font-sans text-charcoal lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          
          {/* Left Block */}
          <div className="lg:col-span-7">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-teal">
              Expert Clinical & Cognitive Support
            </span>
            <h1 className="font-serif text-4xl font-bold leading-tight text-charcoal sm:text-5xl lg:text-6xl">
              Specialized Care
            </h1>
            <p className="mt-4 font-serif text-xl italic text-teal sm:text-2xl">
              Some situations require additional experience, training, and understanding.
            </p>
            <p className="mt-6 text-lg text-warm-grey leading-relaxed max-w-2xl">
              Our dedicated care teams are specifically trained to support individuals living with complex health conditions, assisting your family as we navigate evolving health and lifestyle requirements together.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="#core-programs" 
                className="rounded-lg bg-coral px-6 py-3.5 text-center text-sm font-semibold text-off-white shadow-lg shadow-coral/20 hover:bg-coral/95 transition-all"
              >
                View Specialized Programs
              </a>
              <a 
                href="#complex-matrix" 
                className="rounded-lg border border-charcoal/20 px-6 py-3.5 text-center text-sm font-semibold text-charcoal hover:bg-soft-teal hover:text-teal transition-all"
              >
                Explore Complex Care
              </a>
            </div>
          </div>

          {/* Right Block */}
          <motion.div 
            initial={reduceMotion ? {} : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-95 w-full overflow-hidden rounded-2xl border border-teal/5 shadow-2xl shadow-charcoal/10 sm:h- lg:col-span-5"
          >
            <Image
              src="/assets/special.jpg"
              alt="Experienced CarePlus specialist delivering empathetic, dignified support with a high level of technical and emotional training."
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-linear-to-t from-charcoal/45 via-transparent to-transparent" aria-hidden="true" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}