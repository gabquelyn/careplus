"use client";
import React from "react";
import { motion, useReducedMotion } from "motion/react";

export default function CoreSpecializedPrograms() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="core-programs" className="bg-soft-teal py-24 font-sans text-charcoal lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">Focused Core Services</span>
          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Nurturing stability through transitions
          </h2>
          <p className="mt-4 text-lg text-warm-grey">
            Whether managing long-term cognitive changes or coordinating temporary relief, we provide structured support built on dignity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          
          {/* Card 1: Dementia Care */}
          <motion.div 
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-xl shadow-charcoal/5 border border-teal/5 lg:p-10"
          >
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/5 text-teal mb-6">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-charcoal font-serif">Dementia Care</h3>
              <p className="mt-4 text-base text-warm-grey leading-relaxed">
                Compassionate support focused on safety, routine, dignity, and quality of life. Our dementia specialists utilize sensory triggers, personalized memories, and tailored calming techniques to maintain familiar daily rhythms and minimize agitation.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-charcoal/5 flex items-center justify-between">
              <span className="text-sm font-semibold text-teal hover:underline cursor-pointer">Learn about our cognitive approaches →</span>
            </div>
          </motion.div>

          {/* Card 2: Respite Care */}
          <motion.div 
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between rounded-2xl bg-charcoal p-8 shadow-xl shadow-charcoal/10 text-off-white lg:p-10"
          >
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-off-white/10 text-peach mb-6">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-off-white font-serif">Respite Care</h3>
              <p className="mt-4 text-base text-off-white/80 leading-relaxed">
                Short-term support that allows family caregivers time to rest, recharge, or attend to personal responsibilities with confidence. We step in with identical protocols so your family member experiences zero gaps in safety, routine, or companion care.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-off-white/10 flex items-center justify-between">
              <span className="text-sm font-semibold text-peach hover:underline cursor-pointer">Explore scheduled respite plans →</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}