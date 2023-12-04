import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/burger.jpg";

import AboutInfo from './AboutInfo/AboutInfo'
import OurData from './OurData/OurData'
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
      <OurData />
      <Gallery />
    </div>
  );
};

export default About;
