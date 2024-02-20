import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/skillDev/wow_within_worlds/wow gk.png";
import logo from "../../../assets/curriculum/skillDev/wow_within_worlds/logo.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner from "../../BookTemplate/Banner";
import MainContent from "../../BookTemplate/MainContent";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import CardOne from "../../BookTemplate/CardOne";
import SectionTwo from "../../BookTemplate/SectionTwo";
import Content from "../../BookTemplate/Content";
import img6 from "../../../assets/curriculum/zoom/key features.png";

const Wow_within_worlds = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200  ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner image={book1} bgColor={"#ed008c"} />
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
            bgColor={"#ed008c"}
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
            bgColor={"#ed008c"}
            textColor={"black"}
          />
        </div>{" "}
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-4 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              <span className="font-bold text-[#e3369c]">
                Wow! World Within Worlds{" "}
              </span>
              is an outstanding series of General Knowledge textbooks for Grades
              1 to 8. The series demonstrates a cross curricula approach of
              worlds within a world, where each topic is linked to various
              subjects like literature, mathematics, history, geography, life
              skills, value education, art & culture etc., moving from global to
              India-specific content.
            </span>
          }
          bgColor={"#ed008c"}
          listOne={"Grades"}
          listTwo={"1-8"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#e3369c]">
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
                  "The series has the latest and up-to-date information.",
                  "Infographics are presented for understanding content.",
                  "At a glance provides a bird's-eye view of the subjects covered in each chapter.",
                  "Did You Know? provides unusual and interesting bits of information.",
                  "Train your Brain exercises help in sharpening the numerical and linguistic abilities.",
                  " Let’s Think! contains quotes or questions related to life skills and value education.",
                  "Just for Fun has humorous anecdotes or riddles.",
                  "Infochutes are current affairs of what is happening and updated periodically.",
                  "Do-it-yourself activities for Grades 1 to 4 that are fun, engaging, and creative.",
                  "Guided projects for Grades 5 to 8 to encourage and inculcate researching capabilities.",
                  "Test papers at the end of each book to help reinforce learning.",
                  "The teacher resource pack contains answer keys, and worksheets, and additional questions.",
                  "Unique NCF 2022–23 mandated feature pages with India-centric content has been added.",
                  "Inserts on Sustainable Development Goals (SDGs) to promote environmental awareness.",
                  "21st Century learning skills have been highlighted along the content to make teachers cognizant of the specific learning skills.",
                  "Art Integration has been done.",
                ]}
              />
            }
            bgColor={"rgb(227, 54, 156)"}
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
              points={["E-book", "Answer Keys", "Animations", "Worksheets"]}
            />
            <CardOne
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
            bgColor={"#ed008c"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Wow_within_worlds;
