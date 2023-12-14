import React from "react";
import HeroImagePlaceEdit from "../../../components/HeroImage/HeroImage";
import bgImagePE from "../../../assets/coffee.jpg";

const placeedit = () => {
  return (
    <div>
      
      <HeroImagePlaceEdit
        bgImage={bgImagePE}
        heading={["Örnek Restoran Adı "]}
        text="Örnek restoran açıklaması."
        textadress="Örnek restoran adresi."
      />

    </div>
  );
};

export default placeedit;
