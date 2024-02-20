import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/icse/Grammar and Com/icse grammar.png";
import logo from "../../../assets/curriculum/icse/Grammar and Com/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import img8 from "../../../assets/curriculum/zoom/digital content.png";
import CardSecond from "../../BookTemplate/CardSecond";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import img2 from "../../../assets/curriculum/cbse/english_weaves/toeflprimary.png";
import img3 from "../../../assets/curriculum/cbse/english_weaves/toefljunior.png";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import Banner2 from "../../BookTemplate/Banner2";
import SectionTwo from "../../BookTemplate/SectionTwo";
import MainContent from "../../BookTemplate/MainContent";
import CardOne from "../../BookTemplate/CardOne";
import Content from "../../BookTemplate/Content";

const Icse_wow_grammer_com = () => {
  const keyFeatures = useRef(null);
  // const Advantages = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner2 image={book1} bgColor={"rgb(37, 148, 207)"} />
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
            bgColor={"rgb(37, 148, 207)"}
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
            bgColor={"rgb(100, 201, 97)"}
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
            bgColor={"rgb(37, 148, 207)"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              Written according to the latest ICSE curriculum,
              <span className="font-bold text-[#2594cf]">
                {" "}
                ICSE WOW! Grammar & Composition{" "}
              </span>
              is based on the 3 Ps of learning language–Presentation, Practice,
              and Production.
              <br />
              The series brings together the meaning and form of grammar
              together through systematic practice and fun activities. Ideal for
              young learners in the early stages of English language learning,
              the series is based on a unique curriculum design which recycles
              grammar points at every level and builds on previous
              understanding. This spiraling curriculum eases the learning curve
              and helps students negotiate new grammar topics from familiar
              premises. The material has been thoroughly class tested and
              piloted by some of the best curriculum teachers. Comprehensive and
              curriculum-faithful, ICSE WOW! Grammar & Composition makes
              learning grammar unusually engaging.
            </span>
          }
          bgColor={"rgb(37, 148, 207)"}
          listOne={"Grades"}
          listTwo={"1-8"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#2594cf]">
        <div ref={keyFeatures} id="keyFeature" className="w-[60%]">
          <SectionTwo
            content={
              <Content
                headLine={"Key features"}
                points={[
                  "Spiralling curriculum design",
                  "Lots of practice and revision through engagingly varied task types",
                  "Each topic is presented through real-life contexts",
                  "Colourful boxes and tables make remembering grammar forms, rules, and exceptions easier",
                  "Contextualized grammar practice for communicative purposes",
                  "Highly illustrated games along with oral and writing activities",
                  "Practice in reading comprehension and guided writing tasks",
                ]}
              />
            }
            bgColor={"rgb(37, 148, 207)"}
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
              Digital Platform + TOEFL* + Fiction Express
            </span>
          </div>
          <br />

          <div className="flex flex-col sm:flex-row gap-4 px-5 justify-center items-center">
            <CardOne
              headLine={"TEACHERS’ RESOURCES"}
              points={[
                "E-book",
                "Animations",
                "Lesson Plans",
                "Answer Keys",
                "Worksheets",
                "Test Generators",
              ]}
            />
            <CardOne
              headLine={"STUDENTS’ RESOURCES"}
              points={["Chapter PDFs", "Animations"]}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center py-6 md:p-4">
            <CardSecond
              image={img8}
              headLine={"Digital Content"}
              para={
                "It includes e-books, animations, interactive e-worksheets, and e-activities."
              }
            />
            <CardSecond
              image={img2}
              headLine={"TEST FOR AGES 8+"}
              para={
                "The tests are designed to: assess the general English-language proficiency of young students"
              }
            />
            <CardSecond
              image={img3}
              headLine={"TEST FOR AGES 11+"}
              para={
                "The TOEFL Junior tests are an accurate and reliable measure of your students’ communicative skills in English."
              }
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"rgb(37, 148, 207)"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Icse_wow_grammer_com;
