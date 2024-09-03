import React from "react";
import IntroductionSection from "./IntroductionSection";
import ConfettiFormProject from "./ConfettiFormProject";
import StarSeekerProject from "./StarSeekerProject";
import Languages from "./Languages";
import Footer from "../Footer";

const BodyContainer = () => {
  return (
    <div>
      <IntroductionSection />
      <Languages />
      <ConfettiFormProject />
      <StarSeekerProject />
      <Footer />
    </div>
  );
};
export default BodyContainer;
