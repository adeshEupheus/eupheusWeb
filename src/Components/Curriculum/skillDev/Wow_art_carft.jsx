import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/skillDev/Art/itl.png";
import logo from "../../../assets/curriculum/skillDev/Art/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner2 from "../../BookTemplate/Banner2";
import SectionTwo from "../../BookTemplate/SectionTwo";
import MainContent from "../../BookTemplate/MainContent";
import Content from "../../BookTemplate/Content";

const Wow_art_carft = () => {
  const keyFeatures = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200  ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner2 image={book1} bgColor={"#757575"} />
      <div className="flex flex-col sm:flex-row bg-o justify-center items-center gap-3 p-4">
        <div
          onClick={() => {
            const ele = document.getElementById("keyFeature");
            ele.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <BasicButton
            text={"KEY FEATURES"}
            bgColor={"#757575"}
            textColor={"black"}
            size={"small"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              <span className="font-bold text-[#757575]">
                It’s Time to Learn ART{" "}
              </span>
              is a unique series that makes a sincere effort to ‘teach art’ and
              not just ‘do art’. It is being increasingly felt by educationists
              that ART not only promotes an aesthetic sense but also broadens
              knowledge. It has been proven that learning of art develops a
              number of life skills like patience, perseverance, creativity,
              problem-solving, anger management, tolerance, peace, etc.
            </span>
          }
          bgColor={"#757575"}
          listOne={"Grades"}
          listTwo={"1-8"}
          listThree={"A-C"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#878787]">
        <div
          ref={keyFeatures}
          id="keyFeature"
          className="flex flex-col justify-center items-center w-[60%]"
        >
          <SectionTwo
            content={
              <Content
                headLine={"Key Features"}
                points={[
                  "Focus on innovation and creativity",
                  "Introduction of folk art and craft under the aegis of heritage education",
                  "Encourages children to explore their own ideas and concepts—this builds self-esteem and self-worth in children",
                  "Ideas for application of concepts taught have been given so that children may use them in projects they are required to make in various subjects",
                  "Activities that require adult supervision or guidance have been marked",
                  "Waste material or easily available material has been used; what is not easily available has been provided",
                  "Care taken to not use materials that are potentially hazardous to children",
                ]}
              />
            }
            bgColor={"rgb(135, 135, 135)"}
            img={img6}
          />
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#757575"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Wow_art_carft;
