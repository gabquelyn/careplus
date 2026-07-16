import React from "react";
import AboutHero from "./components/AboutHero";
import AboutPillars from "./components/CorePillars";
import AreasWeServe from "./components/AreasWeServe";
import AboutCTA from "./components/CTA";

export default function page() {
  return (
    <main>
      <AboutHero />
      <AboutPillars/>
      <AboutCTA/>
      <AreasWeServe/>
    </main>
  );
}
