"use client";
import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface ComplexProfile {
  title: string;
  badge: string;
  description: string;
  points: string[];
}

const COMPLEX_PROFILES: ComplexProfile[] = [
  {
    title: "Physical Injury Recovery",
    badge: "Recovery-focused",
    description: "Support tailored to individuals rehabilitating after orthopedic surgeries or major accidents.",
    points: ["Physiotherapy plan compliance", "Safe transfers & range-of-motion support", "Surgical wound site observation"]
  },
  {
    title: "Stroke Recovery",
    badge: "Neurological rehab",
    description: "Dedicated assistance aimed at rebuilding cognitive paths, motor coordination, and self-confidence.",
    points: ["Speech & language exercises", "One-sided weakness safety support", "Daily physical therapy integration"]
  },
  {
    title: "Neurological Conditions",
    badge: "Progressive care",
    description: "Specialized handling of conditions like Parkinson's, ALS, and Multiple Sclerosis.",
    points: ["Gait & balance coordination", "Specialized adaptive dining support", "Cognitive stimulation exercises"]
  },
  {
    title: "Chronic Health Conditions",
    badge: "Long-term management",
    description: "Ongoing physiological monitoring to successfully manage chronic symptoms.",
    points: ["Vital sign tracking", "Dietary coordination & support", "Medication schedule adherence"]
  },
  {
    title: "Mobility Challenges",
    badge: "Safety & transfer",
    description: "Active fall-prevention strategies for clients managing profound physical limitations.",
    points: ["Safe transfers (Hoists, Slides)", "In-home safety assessments", "Joint-integrity wellness routines"]
  }
];

export default function ComplexCareMatrix() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="complex-matrix" className="bg-off-white/30 py-24 font-sans text-charcoal lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">Clinical Capabilities</span>
          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Complex Care
          </h2>
          <p className="mt-4 text-lg text-warm-grey">
            We deliver highly specialized support designed to safely manage chronic health conditions, assist mobility, and keep families together at home.
          </p>
        </div>

        {/* Dynamic Matrix Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {COMPLEX_PROFILES.map((profile, index) => (
            <motion.div
              key={profile.title}
              initial={reduceMotion ? {} : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              className="flex flex-col justify-between rounded-xl bg-soft-teal/40 p-6 border border-teal/5 shadow-xs hover:border-teal/20 hover:bg-soft-teal/70 transition-all duration-300"
            >
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-teal/10 text-teal mb-4">
                  {profile.badge}
                </span>
                <h3 className="text-lg font-bold text-charcoal">{profile.title}</h3>
                <p className="mt-2 text-sm text-warm-grey leading-relaxed">{profile.description}</p>
                
                {/* List within item */}
                <ul className="mt-6 space-y-2 border-t border-teal/10 pt-4">
                  {profile.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-xs text-charcoal/85">
                      <span className="h-1.5 w-1.5 rounded-full bg-coral shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}