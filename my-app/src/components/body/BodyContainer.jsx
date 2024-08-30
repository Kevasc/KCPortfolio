import React from "react";

import IntroductionSection from "./IntroductionSection";
import ConfettiFormProject from "./ConfettiFormProject";
import StarSeekerProject from "./StarSeekerProject";
import Certifications from "./Certifications";

const BodyContainer = () => {
  return (
    <div>
      <IntroductionSection />
      <ConfettiFormProject />
      <StarSeekerProject />
      <Certifications />
    </div>
  );
};
export default BodyContainer;
