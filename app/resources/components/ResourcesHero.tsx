"use client";
import React, { useState } from "react";

const CATEGORIES = ["All", "Caregiving Guides", "Dementia Support", "Financial & Legal", "Wellness"];

export default function ResourcesHero() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    // onCategoryChange(category);
  };

  return (
    <section className="bg-white pt-20 pb-12 font-sans text-charcoal lg:pt-28">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-wider text-teal">
          Knowledge Base
        </span>
        <h1 className="mt-2 font-serif text-4xl font-bold leading-tight text-charcoal sm:text-5xl lg:text-6xl">
          Guides, Insights & Answers
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-warm-grey">
          Find expert advice on navigating home care transitions, cognitive health, and daily wellness strategies for your family.
        </p>

        {/* Dynamic Search Input */}
        <div className="mx-auto mt-10 max-w-md relative">
          <input
            type="text"
            placeholder="Search articles, FAQs, and guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-charcoal/15 bg-white px-6 py-4 pl-12 text-sm text-charcoal placeholder:text-warm-grey/60 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal shadow-md shadow-charcoal/5"
          />
          <svg className="absolute left-4 top-4.5 h-5 w-5 text-war-grey" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`rounded-full px-5 py-2 text-xs font-bold border transition-all ${
                activeCategory === cat
                  ? "bg-teal border-teal text-off-white shadow-md shadow-teal/15"
                  : "bg-white border-charcoal/10 text-charcoal hover:bg-soft-teal hover:border-teal/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}