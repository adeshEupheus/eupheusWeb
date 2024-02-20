import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/cbse/VibesSocial/sst vibes.png";
import logo from "../../../assets/curriculum/cbse/VibesSocial/logo.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner2 from "../../BookTemplate/Banner2";
import MainContent from "../../BookTemplate/MainContent";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import CardOne from "../../BookTemplate/CardOne";
import SectionTwo from "../../BookTemplate/SectionTwo";
import Content from "../../BookTemplate/Content";
import img6 from "../../../assets/curriculum/zoom/key features.png";

const VibesSocial = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200  ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner2 image={book1} bgColor={"#ab8a26"} />
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
            text={"KEY FEATURES"}
            bgColor={"#ab8a26"}
            textColor={"black"}
            size={"small"}
          />
        </div>
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
            bgColor={"#ab8a26"}
            textColor={"black"}
          />
        </div>{" "}
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-4 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              <span className="font-bold text-[#ab8a26]">
                Vibes! Social Studies{" "}
              </span>
              for classes 3 to 5 build upon prior knowledge of Social Studies
              concepts introduced in Grades 1 and 2. It also seeks to develop
              different 21st century skills such as problemsolving, ethical
              reasoning, and behaving in socially responsible manner. Vibes!
              Social Studies helps comprehend the journey of the humankind and
              our nation, develops a scientific understanding of different
              physical phenomenon, and helps to appreciate the various roles the
              government plays and imbibe the values enshrined in our
              Constitution
            </span>
          }
          bgColor={"#ab8a26"}
          listOne={"Grades"}
          listTwo={"1-5"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#ab8a26]">
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
                  "Spiral gradation of content in simple language",
                  "Get, Set, Go creates a meaningful context to the concepts",
                  "Quick Scan are short, revision questions for comprehension and retention",
                  "Do and Learn is learning new concepts through text-based activities",
                  "Let’s Reflect are in-text questions encouraging critical thinking",
                  " Know More imparts interesting snippets of information and trivia",
                  "Think! Think! includes in-text HOTS questions to build scientific temper",
                  "And More… includes engaging activities and projects, life-skill questions to instill 21st century skills, and HOTS section",
                  "Attractive layout with colourful illustrations makes learning a joyful experience",
                ]}
              />
            }
            bgColor={"rgb(171, 138, 38)"}
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
              points={["E-book", "Answer Keys", "Lesson Plans"]}
            />
            <CardOne
              headLine={"STUDENTS’ RESOURCES"}
              points={["Chapter PDFs"]}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#ab8a26"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default VibesSocial;
