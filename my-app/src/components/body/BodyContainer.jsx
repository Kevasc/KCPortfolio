import React from "react";
import IntroductionSection from "./IntroductionSection";
import ConfettiFormProject from "./ConfettiFormProject";
import StarSeekerProject from "./StarSeekerProject";
import Languages from "./Languages";

const BodyContainer = () => {
  return (
    <div>
      <IntroductionSection />
      <ConfettiFormProject />
      <StarSeekerProject />
      <Languages />
    </div>
  );
};
export default BodyContainer;
