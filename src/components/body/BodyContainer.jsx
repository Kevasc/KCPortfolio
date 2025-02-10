import React from "react";
import IntroductionSection from "./IntroductionSection";
import ConfettiFormProject from "./ConfettiFormProject";
import StarSeekerProject from "./StarSeekerProject";
import Languages from "./Languages";
import ProvenPizzaProject from "./ProvenPizza";
import BeautyDecoderProject from "./BeautyDecoder";
import ChristmasCocktailsProject from "./ChristmasCocktails";

const BodyContainer = () => {
  return (
    <div>
      <IntroductionSection />
      <Languages />
      <BeautyDecoderProject />
      <ProvenPizzaProject />
      <StarSeekerProject />
      <ConfettiFormProject />
      <ChristmasCocktailsProject />
    </div>
  );
};
export default BodyContainer;
