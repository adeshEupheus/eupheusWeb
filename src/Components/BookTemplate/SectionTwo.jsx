import React from "react";
import Content from "./Content";
import img6 from "../../assets/curriculum/zoom/key features.png";

const SectionTwo = ({}) => {
  return (
    <div className="flex gap-2 w-[100%] justify-center items-center bg-yellow-400">
      <div className="flex flex-col justify-center p-0">
        <Content
          bgColor={"rgb(250 204 21)"}
          headLine={"Key Features"}
          subHead={"Areas of focus:"}
          points={[
            "Physical and motor development",
            "Cognitive development",
            "Socio-emotional-ethical development",
            "Cultural/artistic development",
            "Development of communication and early language, literacy, and numeracy",
            "Observation-based teacher assessment",
          ]}
        />
        <Content
          bgColor={"rgb(250 204 21)"}
          subHead={"Ethos of the curriculum:"}
          points={[
            "Physical and motor development",
            "Cognitive development",
            "Socio-emotional-ethical development",
            "Cultural/artistic development",
            "Development of communication and early language, literacy, and numeracy",
            "Observation-based teacher assessment",
          ]}
        />
      </div>
      <img src={img6} className="w-auto object-cover h-[9rem]" />
    </div>
  );
};

export default SectionTwo;
