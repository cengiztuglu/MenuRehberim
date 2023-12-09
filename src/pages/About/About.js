import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/burger.jpg";

import AboutInfo from './AboutInfo/AboutInfo'
import Gallery from './Gallery/Gallery'

const About = () => {
  return (
    <div>
      <HeroImage
        bgImage={bgImage}
        heading={["about us ", <span className="ampersand"> & </span>, " photo gallery"]}
        text="Take a look at the place, the people and the food…"
      />
      <AboutInfo />
      <Gallery />
    </div>
  );
};

export default About;
