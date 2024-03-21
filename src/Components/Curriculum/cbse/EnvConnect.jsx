import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/cbse/EnvConnect/environmental connect.png";
import logo from "../../../assets/curriculum/cbse/EnvConnect/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import Banner from "../../BookTemplate/Banner";
import Section from "../../BookTemplate/Section";
import MainContent from "../../BookTemplate/MainContent";
import ResourceCard from "../../BookTemplate/ResourceCard";
import KeyPoints from "../../BookTemplate/KeyPoints";
import img5 from "../../../assets/curriculum/zoom/ncf.png";

const EnvConnect = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <div className="bg-[#f0b835]">
        <img src={img5} alt="" className="w-16 h-16 -mb-5" />
        <Banner
          image={book1}
          bgColor={"rgb(240, 184, 53)"}
          Ncficon={false}
          flexprop={"flex flex-col justify-center items-center pt-3"}
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 p-4">
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
            text={"Key Features"}
            bgColor={"rgb(240, 184, 53)"}
            textColor={"black"}
            size={"small"}
          />
        </div>
        {/* <div
          onClick={() => {
            const ele = document.getElementById("Advantages");
            ele.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <BasicButton
            text={"ADVANTAGES"}
            size={"small"}
            bgColor={"rgb(253, 70, 98)"}
            textColor={"black"}
          />
        </div> */}
        <div
          onClick={() => {
            const ele = document.getElementById("UniqueAdvantages");
            ele.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <BasicButton
            text={"UNIQUE ADVANTAGES"}
            size={"small"}
            bgColor={"rgb(240, 184, 53)"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              Aligned to the National Curriculum Framework documents of 2022 and
              2023, Environmental Connect is a course that proposes to make the
              study of Environmental Science action-oriented with a solid
              understanding of how individual, societal, national, and global
              actions can help us restore the balance between humans and their
              social and natural environment and thereby save our planet and
              ourselves. <br />
              <span className="font-bold text-[#ad8528]">
                Environmental Education
              </span>{" "}
              is best imparted through a combination of in-class and
              experiential learning. The key curricular goals to which this
              course is aligned are: Foundational Stage: Children develop a
              positive regard for the natural environment around them
              Preparatory Stage: Students develop sensitivity towards their
              social and natural environment
            </span>
          }
          bgColor={"rgb(240, 184, 53)"}
          listOne={"Grades"}
          listTwo={"1-8"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#f0b835]">
        <div ref={keyFeatures} id="keyFeature" className="w-[60%]">
          <Section
            content={
              <KeyPoints
                bgColor={"rgb(240, 184, 53)"}
                headLine={"Key Features"}
                points={[
                  "Warm Up: Chapter-opening exercises to encourage active student participation and create opportunities for interaction and discussion",
                  "Fact Nugget: Interesting snippets of information to correct common misconceptions",
                  "Revise: Summarises the main points and helps in recapitulation",
                  "Time to Check: In-text exercises to test knowledge and understanding",
                  "Keywords: Help to build vocabulary related to the topic at hand",
                  "Values and Life Skills: Help students develop sensitivity towards the environment, people,and plant and animal life around them",
                  "Fieldwork: Ideas to gather information about people, places, and landscapes, and generate formal knowledge",
                  "Mindmap: Summary of the chapter presented as a flowchart",
                  "Evaluate: Chapter-end exercises to test knowledge, understanding, and application of concepts",
                  "Activity: Hand-on experiments and activities to help students learn by doing",
                  "Explore: Discovery-based learning to allow out of the book learning and develop critical thinking skills",
                  "Sustainable Development Goals (SDGs): A framework of global goals, for achieving a sustainable future for all",
                ]}
              />
            }
            bgColor={"rgb(240, 184, 53)"}
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
          <br />

          <div className="flex flex-col sm:flex-row gap-4 p-5 justify-center items-center">
            <ResourceCard
              headLine={"TEACHERS’ RESOURCES"}
              points={[
                "E-book",
                "Animations",
                "Answer Keys",
                "Lesson Plans",
                "Worksheets",
                "Test Generator",
              ]}
            />
            <ResourceCard
              headLine={"STUDENTS’ RESOURCES"}
              points={["Chapter PDFs", "Animations"]}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"rgb(240, 184, 53)"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default EnvConnect;
