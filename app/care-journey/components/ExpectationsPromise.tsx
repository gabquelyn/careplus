"use client";
import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function ExpectationsPromise() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section className="relative overflow-hidden bg-white py-24 font-sans text-charcoal lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
          
          {/* Left: Beautifully balanced image with floating text badge */}
          <div className="relative h-100 w-full sm:h-125 lg:col-span-6">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-teal/5 shadow-2xl">
              <Image
                src="/assets/2.jpg"
                alt="A daughter comfortably sharing a relaxed laugh with her father, feeling confident about his personalized care plan."
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
                quality={85}
              />
            </div>
            
            <motion.div
              initial={reduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute bottom-6 left-6 rounded-xl bg-charcoal p-5 text-off-white shadow-xl max-w-xs border border-teal/10 hidden sm:block"
            >
              <div className="flex items-center gap-2 text-peach font-semibold text-sm mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-peach" /> Perfect Match Promise
              </div>
              <p className="text-xs text-off-white/80 leading-relaxed">
                If the caregiver connection doesn&apos;t feel absolutely right, we will make adjustments at zero additional cost to your family.
              </p>
            </motion.div>
          </div>

          {/* Right: Editorial Content Grid */}
          <div className="lg:col-span-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-teal">
              Our Core Commitments
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl">
              Transparency at every step.
            </h2>
            <p className="mt-6 text-base text-warm-grey leading-relaxed sm:text-lg">
              We know that introducing support into your home is a deeply emotional step. Because of this, we build complete structural transparency into every single point of our interaction.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">No Locked-In Contracts</h4>
                  <p className="text-sm text-warm-grey mt-0.5">We maintain the flexibility to scale hourly support up, down, or pause care dynamically with short notice periods.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">Comprehensive Vetting</h4>
                  <p className="text-sm text-warm-grey mt-0.5">Every single caregiver undergoes thorough background checks, professional qualification matching, and emotional-intelligence reviews.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}