"use client";
import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function LiveInPromise() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section className="relative overflow-hidden bg-white py-24 font-sans text-charcoal lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
          
          {/* Left Column: Overlapping Parallax Aesthetic */}
          <div className="relative h-100 w-full sm:h-125 lg:col-span-6">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-teal/5 shadow-2xl">
              <Image
                src="/assets/1.jpg"
                alt="A cozy, sunlit living room showing a safe, familiar home environment where individuals remain comfortable."
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
                quality={85}
              />
            </div>
            {/* Context callout overlay badge */}
            <motion.div
              initial={reduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute bottom-6 left-6 rounded-xl bg-charcoal p-5 text-off-white shadow-xl max-w-xs border border-teal/10 hidden sm:block"
            >
              <div className="flex items-center gap-2 text-peach font-semibold text-sm mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-peach" /> Full-Time Match
              </div>
              <p className="text-xs text-off-white/80 leading-relaxed">
                We coordinate a consistent rotation of professional care matches so your loved one always greets a familiar face.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Explanatory Content */}
          <div className="lg:col-span-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-teal">
              The CarePlus Commitment
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl">
              Familiar surroundings. Tailored routines.
            </h2>
            <p className="mt-6 text-base text-warm-grey leading-relaxed sm:text-lg">
              Transitions to clinical facilities can often disrupt long-standing habits and exacerbate cognitive fog or disorientation. By keeping your loved one at home, their memories, personal schedules, and favorite items serve as daily comfort points.
            </p>
            <p className="mt-4 text-base text-warm-grey leading-relaxed sm:text-lg">
              Our live-in care professionals maintain standard routines, assist gently with tasks, coordinate dietary meal plans, and preserve the delicate dignity of independence right inside the home.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}