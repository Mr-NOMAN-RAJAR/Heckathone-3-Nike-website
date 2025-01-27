import React from "react";
import Hero  from "./components/Hero/page";
import Best   from "./components/Best/page";
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";
import GearUp from "./components/GearUp/page";
import Featured from "./components/Featured/page";
import Navigation from "./components/Navigation/page";
import Essentials from "./components/EssentialsSection/page";
import DontMissSection from "./components/DontMiss/page";

function page() {
  return (
    <div>
      <Header />
      <Hero />
      <Best />
      <Featured />
      <GearUp />
      <DontMissSection /> 
      <Essentials />
      <Navigation />
      <Footer />
    </div>
  );
}

export default page;
