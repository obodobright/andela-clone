import React from "react";
import FirstComp from "./FirstComp";
import ThirdComp from "./ThirdComp";
import FourthComp from "./FourthComp";
import FifthComp from "./FifthComp";
import SixthComp from "./SixthComp";
import SeventhComp from "./SeventhComp";
import EightComp from "./EightComp";
import SecondComp from "./SecondComp";
import SliderMain from "./Slider/SliderMain";

const Company = () => {
  return (
    <div>
      <FirstComp />
      <SliderMain />
      <SecondComp />
      <ThirdComp />
      <FourthComp />
      <FifthComp />
      <SixthComp />
      <SeventhComp />
      <EightComp />
    </div>
  );
};

export default Company;
