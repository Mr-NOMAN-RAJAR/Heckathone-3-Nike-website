import React from "react";
import Hero from "./components/Hero/page";
import Best from "./components/Best/page";
import GearUp from "./components/GearUp/page";
import Featured from "./components/Featured/page";
import Navigation from "./components/Navigation/page";
import Essentials from "./components/EssentialsSection/page";
import DontMissSection from "./components/DontMiss/page";

function page() {
  return (
    <div>
      <Hero />
      <Best />
      <Featured />
      <GearUp />
      <DontMissSection />
      <Essentials />
      <Navigation />
    </div>
  );
}

export default page;
