"use client";
import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function MultidisciplinaryCoordination() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section className="relative overflow-hidden bg-white py-24 font-sans text-charcoal lg:py-32 border-t border-charcoal/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
          
          {/* Left Column: Context Narrative */}
          <div className="lg:col-span-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-teal">
              Our Collaborative Ecosystem
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl">
              Working alongside your existing medical team.
            </h2>
            <p className="mt-6 text-base text-warm-grey leading-relaxed sm:text-lg">
              Specialized care does not happen in a vacuum. We serve as the daily eyes and ears of your family’s preferred physical therapists, clinical nurses, primary physicians, and hospital discharge coordinators.
            </p>
            <p className="mt-4 text-base text-warm-grey leading-relaxed sm:text-lg">
              Our real-time family portal maintains clean, accurate logs of daily health metrics, symptom patterns, physical exercise completions, and recovery milestones—ensuring smooth, continuous care adjustments.
            </p>

            {/* Quick Metrics of Trust */}
            <div className="mt-8 grid grid-cols-2 gap-6 pt-6 border-t border-charcoal/10">
              <div>
                <h4 className="text-xl font-bold text-teal">Continuous</h4>
                <p className="text-xs text-warm-grey mt-0.5">Integration with clinical plans</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-teal">Real-Time</h4>
                <p className="text-xs text-warm-grey mt-0.5">Family and clinician portals</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Overlapping Photos */}
          <div className="relative h-100 w-full sm:h-125 lg:col-span-6">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-teal/5 shadow-2xl">
              <Image
                src="/assets/2.jpg"
                alt="A supportive assistant helping an active adult happily prepare a meal in their kitchen."
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
                quality={85}
              />
            </div>
            {/* Interactive floating credential box */}
            <motion.div
              initial={reduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute bottom-6 left-6 rounded-xl bg-charcoal p-5 text-off-white shadow-xl max-w-xs border border-teal/10 hidden sm:block"
            >
              <div className="flex items-center gap-2 text-peach font-semibold text-sm mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-peach" /> Specialized Placement
              </div>
              <p className="text-xs text-off-white/80 leading-relaxed">
                Our care matching program aligns your family with professionals trained in your loved one&apos;s specific health condition.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}