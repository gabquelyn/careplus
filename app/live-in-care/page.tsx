import React from "react";
import LiveInCareHero from "./components/Hero";
import CareSuitability from "./components/CareSustanability";
import LiveInPromise from "./components/LiveInPromise";

export default function page() {
  return (
    <main>
      <LiveInCareHero />
      <CareSuitability/>
      <LiveInPromise/>
    </main>
  );
}
