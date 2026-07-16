"use client";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What is the minimum hourly requirement for flexible home care?",
    answer: "We offer complete flexibility. Our hourly services start with visits as short as 2 to 3 hours a day, allowing us to assist with basic routines like morning transition safety or evening meal preparations without locking you into extensive packages."
  },
  {
    question: "How do you screen and match caregivers with families?",
    answer: "Every caregiver undergoes rigorous background checks, qualification vetting, and emotional intelligence evaluations. We match providers to clients based not only on clinical requirements but also on complementary personalities, languages spoken, and mutual hobbies."
  },
  {
    question: "How quickly can CarePlus start delivering support?",
    answer: "Following your initial assessment conversation and home safety walk-through, we can typically coordinate matches and schedule care visits within 24 to 48 hours."
  },
  {
    question: "What happens if a scheduled caregiver is unwell or unable to make a visit?",
    answer: "Your family's safety is our primary focus. We maintain a reliable backup registry of vetted local professionals, meaning a qualified coordinator will step in to cover any unexpected scheduling gaps immediately."
  },
  {
    question: "Can we adjust or pause our care schedule if circumstances change?",
    answer: "Absolutely. We do not lock families into rigid, long-term care contracts. You have the total freedom to scale hourly visits up, down, or pause care dynamically with a 24-hour notice period."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-soft-teal py-24 font-sans text-charcoal lg:py-32" id = "#faq">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* FAQ Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal">Questions & Answers</span>
          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-warm-grey">
            Everything you need to know about setting up home care, coordination, and pricing structures.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-white border border-teal/5 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-bold text-charcoal hover:text-teal focus:outline-none transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <span className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/5 text-teal transform transition-transform duration-200 ${isOpen ? "rotate-180 bg-teal text-off-white" : ""}`}>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                
                {/* Expandable Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-75 opacity-100 border-t border-charcoal/5" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="px-6 py-5 text-sm sm:text-base text-warm-grey leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}