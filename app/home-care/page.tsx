import React from "react";
import HomeCareHero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import ComfortPromise from "./components/ComfortPromise";

export default function page() {
  return (
    <main>
      <HomeCareHero />
      <ServicesGrid/>
      <ComfortPromise/>
    </main>
  );
}
