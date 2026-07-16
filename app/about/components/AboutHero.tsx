"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function AboutHero() {

  return (
    <section className="relative overflow-hidden bg-white py-20 font-sans text-charcoal lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          
          {/* Left Column: Mission Statement */}
          <div className="lg:col-span-7">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-teal">
              About Us
            </span>
            <h1 className="font-serif text-4xl font-bold leading-tight text-charcoal sm:text-5xl lg:text-6xl">
              Why Families Choose Care+
            </h1>
            <p className="mt-4 font-serif text-xl italic text-teal sm:text-2xl">
              Because care is about more than tasks.
            </p>
            <p className="mt-6 text-lg text-warm-grey leading-relaxed max-w-2xl">
              It&apos;s about helping people continue living life on their terms. With the right support, individuals can maintain their routines, preserve meaningful connections, and continue enjoying the comfort of home with confidence.
            </p>
            <p className="mt-4 text-lg font-semibold text-teal">
              Familiar surroundings. Independence. Dignity. Community. Home.
            </p>
            <p className="mt-2 text-md text-warm-grey">
              That&apos;s the difference thoughtful care can make.
            </p>
          </div>

          {/* Right Column: Empathy Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-87.5 w-full overflow-hidden rounded-2xl border border-teal/5 shadow-2xl shadow-charcoal/10 sm:h-[450px] lg:col-span-5"
          >
            <Image
              src="/assets/1.jpg" 
              alt="Comfortable, supportive home care relationship emphasizing companionship and dignity"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-linear-to-t from-charcoal/30 via-transparent to-transparent" aria-hidden="true" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}