"use client";
import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SERVICES_LIST: ServiceItem[] = [
  {
    title: "Personal Care",
    description: "Dignified assistance with grooming, bathing, dressing, and daily personal routines to keep you feeling your absolute best.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: "Companionship",
    description: "Warm, authentic social engagement through shared hobbies, conversations, and outings to prevent isolation and nurture mental well-being.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.757a2 2 0 110 4h-1.32l-2.244 4a.8.8 0 01-.7.4H10.51a.8.8 0 01-.7-.4L6.894 14H4.757a2 2 0 110-4H14z" />
      </svg>
    )
  },
  {
    title: "Meal Preparation",
    description: "Coordinating grocery shopping and preparing delicious, nutritious meals tailored specifically to your dietary needs and tastes.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    )
  },
  {
    title: "Light Housekeeping",
    description: "Maintaining a safe, clean, and organized environment with tidy-ups, laundry support, and basic organization to ensure complete safety at home.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: "Medication Reminders",
    description: "Proactive prompting to take the right doses at the right times, giving families complete peace of mind.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Transportation & Appointments",
    description: "Escorting you safely to medical check-ups, grocery stores, social meetups, and local community events with reliable support.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  },
  {
    title: "Hospital Discharge Support",
    description: "A smooth transition back home with dedicated care coordination, settling-in support, and immediate medication reviews.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function ServicesGrid() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="services" className="bg-soft-teal py-24 font-sans text-charcoal lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">
            What We Do
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Customizable care to meet your unique lifestyle
          </h2>
          <p className="mt-4 text-lg text-war-grey">
            Every plan is uniquely designed alongside your family and adapts dynamically as your preferences or health requirements change.
          </p>
        </div>

        {/* Grid Container */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {SERVICES_LIST.map((service, index) => (
            <motion.div
              key={service.title}
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              className="group flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm border border-teal/5 hover:shadow-xl hover:shadow-charcoal/5 transition-all duration-300"
            >
              <div>
                {/* Icon Circle */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/5 text-teal group-hover:bg-teal group-hover:text-off-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-war-grey leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}