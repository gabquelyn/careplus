"use client";
import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function ComfortPromise() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section className="relative overflow-hidden bg-white py-24 font-sans text-charcoal lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
          
          {/* Left Column: Overlapping Visual Layout */}
          <div className="relative h-100 w-full sm:h-125 lg:col-span-6">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-teal/5 shadow-xl">
              <Image
                src="/assets/comfort.jpg"
                alt="Sunlit, cozy living room providing warmth and psychological security"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            {/* Small floating inset detail card */}
            <motion.div
              initial={reduceMotion ? {} : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-6 -right-4 rounded-xl bg-charcoal p-6 text-off-white shadow-2xl max-w-xs border border-teal/10 hidden sm:block"
            >
              <p className="font-serif text-lg italic text-peach">
                &ldquo;There is no comfort like your own armchair, your own kitchen, and your own memories.&rdquo;
              </p>
            </motion.div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-teal">
              Why We Stay
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl">
              Preserving what matters most.
            </h2>
            <p className="mt-6 text-base text-war-grey leading-relaxed sm:text-lg">
              Clinical environments can often feel isolating. Remaining in familiar surroundings helps preserve mental acuity, encourages organic physical routine, and preserves a sense of continuous self-identity.
            </p>
            <p className="mt-4 text-base text-war-grey leading-relaxed sm:text-lg">
              Our team doesn&apos;t arrive to take over. We arrive to support, coordinate with your family circle, and make daily life simple, safe, and rich with connection once again.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}