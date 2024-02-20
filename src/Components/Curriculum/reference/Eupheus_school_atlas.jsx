import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/Reference/eupheus_school_atals/eupheus atlas.png";
import logo from "../../../assets/curriculum/Reference/eupheus_school_atals/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner2 from "../../BookTemplate/Banner2";
import SectionTwo from "../../BookTemplate/SectionTwo";
import MainContent from "../../BookTemplate/MainContent";
import Content from "../../BookTemplate/Content";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import CardOne from "../../BookTemplate/CardOne";

const Eupheus_school_atlas = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200  ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner2 image={book1} bgColor={"#c9474b"} />
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
            bgColor={"#c9474b"}
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
              <span className="font-bold text-[#c9474b]">
                Eupheus School Atlas{" "}
              </span>
              (CBSE) is duly certified by the Survey of India, Dehradun and
              updated to include the latest boundaries between Jammu and Kashmir
              (UT) and Ladakh (UT). All the latest name changes of all features
              in India have been incorporated in it. All demographic figures are
              based on the Census of India, 2011 and State Gazetteers have been
              utilised to extract relevant state information. Spatial and
              geographic information has been vetted against authentic sources,
              such as IMD, CSMIR, SSI, and various government portals.
            </span>
          }
        />
      </div>
      <div className="flex flex-col justify-center items-center sm:flex-row p-4 px-4">
        <div className="flex border-white rounded-3xl text-base font-semibold justify-center place-items-center bg-[#c9474b] py-2 border-2 items-center drop-shadow-lg">
          <span className="w-full p-5">
            Atlas map practice companion based on CBSE board syllabi
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#c9474b]">
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
                  "Contour-based maps as required by the CBSE Board",
                  "Provides the latest demographic and socio-economic data",
                  "Contains recent geo-political, socio-economic, and environmental developments",
                  "Includes thematic maps in Geography and History aligned to syllabus of Grades 4 to12",
                  "Coverage of information as per NCERT/CBSE/ICSE/State curriculum",
                  "Simple informative details included with maps",
                  "A 20-page free atlas companion for map practice (based on CBSE Board syllabi)",
                  "Two wall maps (political maps of India and the world) included that can be pulled out and used for reference",
                  "Comprehensive index included",
                  "Accompanied by an interactive digital atlas",
                ]}
              />
            }
            bgColor={"rgb(201, 71, 75)"}
            img={img6}
          />
        </div>
      </div>
      <div ref={UniqueAdvantages} id="UniqueAdvantages">
        <div className="bg-gray-700">
          <div className="flex flex-col place-items-center justify-center">
            <img
              src={img4}
              className="w-40 h-auto border-2 flex gap-3 p-1 bg-white rounded-b-lg"
              alt=""
            />
            <span className="lg:text-lg font-extrabold flex items-center justify-center text-white text-base">
              21st Century School OS Lite
            </span>
            <span className="flex grid-col items-center justify-center text-white p-4 text-base lg:text-xl">
              Digital Platform
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 px-10 sm:px-4 justify-center items-center p-4">
            <CardOne
              headLine={"TEACHERS’ RESOURCES"}
              points={["Animations", "Interactive Digital Atlas"]}
            />
            <CardOne
              headLine={"STUDENTS’ RESOURCES"}
              points={["Animations", "Map PDFs"]}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#c9474b"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Eupheus_school_atlas;
