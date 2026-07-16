"use client";
import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

export default function HomeCareHero() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section className="relative overflow-hidden bg-white py-20 font-sans text-charcoal lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          
          {/* Left Column: Context & Title */}
          <div className="lg:col-span-6">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-teal">
              Our Core Services
            </span>
            <h1 className="font-serif text-4xl font-bold leading-tight text-charcoal sm:text-5xl lg:text-6xl">
              Home Care
            </h1>
            <p className="mt-4 font-serif text-xl italic text-teal sm:text-2xl">
              Support that fits around everyday life.
            </p>
            <p className="mt-6 text-lg text-war-grey leading-relaxed">
              Whether it&apos;s a few hours each week or more regular assistance, our compassionate caregivers help individuals maintain independence while continuing to enjoy the comfort of home.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="rounded-lg bg-coral px-6 py-3.5 text-center text-sm font-semibold text-off-white shadow-lg shadow-coral/20 hover:bg-coral/95 transition-all"
              >
                Explore Services Below
              </a>
              <Link 
                href="/contact" 
                className="rounded-lg border border-charcoal/20 px-6 py-3.5 text-center text-sm font-semibold text-charcoal hover:bg-soft-teal hover:text-teal transition-all"
              >
                Request a Consultation
              </Link>
            </div>
          </div>

          {/* Right Column: Grounding Image */}
          <motion.div 
            initial={reduceMotion ? {} : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-87.5 w-full overflow-hidden rounded-2xl border border-teal/5 shadow-2xl shadow-charcoal/10 sm:h-112.5 lg:col-span-6"
          >
            <Image
              src="/assets/caregiver.jpg"
              alt="Caregiver reassuringly offering support to an individual in a bright, comfortable kitchen environment"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-charcoal/30 via-transparent to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}