import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/icse/Wow Maths/icse math.png";
import logo from "../../../assets/curriculum/icse/Wow Maths/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import img2 from "../../../assets/curriculum/cbse/Maths_weaves/mathbuddy.png";
import img8 from "../../../assets/curriculum/zoom/digital content.png";
import Card from "../../BookTemplate/Card";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import Banner from "../../BookTemplate/Banner";
import Section from "../../BookTemplate/Section";
import MainContent from "../../BookTemplate/MainContent";
import ResourceCard from "../../BookTemplate/ResourceCard";
import KeyPoints from "../../BookTemplate/KeyPoints";

const WowIcseMaths = () => {
  const keyFeatures = useRef(null);
  const Advantages = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner
        image={book1}
        bgColor={"rgb(227, 123, 48)"}
        Ncficon={false}
        flexprop={"flex flex-col justify-center items-center pt-3"}
      />
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
            bgColor={"rgb(227, 123, 48)"}
            textColor={"black"}
            size={"small"}
          />
        </div>
        <div
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
            bgColor={"rgb(227, 123, 48)"}
            textColor={"black"}
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
            bgColor={"rgb(227, 123, 48)"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              <span className="font-bold text-[#e37b30]"> WOW! Maths </span>
              for ICSE is a comprehensive programme for Grades 1 to 8 learners
              based on the innovative and effective teaching and learning
              practices of Singapore. The programme incorporates the Singapore
              Bar Model Method (a pedagogical strategy recognized globally and
              ranked the highest in TIMSS) and heuristics (problem-solving
              strategies) intricately woven with the guidelines of the latest
              ICSE Curriculum.
            </span>
          }
          bgColor={"rgb(227, 123, 48)"}
          listOne={"Grades"}
          listTwo={"1-8"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#e37b30]">
        <div ref={keyFeatures} id="keyFeature" className="w-[60%]">
          <Section
            content={
              <KeyPoints
                bgColor={"rgb(227, 123, 48)"}
                headLine={"Key features"}
                subHead={"Coursebooks:"}
                points={[
                  "Based on the CPA approach, they are enriched with 15 unique features like real-life examples, creative concept visualizations, critical thinking questions and other support activities that make learning of Maths an enjoyable and engaging learning experience.",
                ]}
              />
            }
            bgColor={"rgb(227, 123, 48)"}
            img={img6}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-200">
        <div ref={Advantages} id="Advantages" className="w-[60%]">
          <Section
            content={
              <KeyPoints
                headLine={"TEACHER SUPPORT"}
                points={[
                  "Teacher Manuals: Provide teachers with a one-step solution for delivering effective curriculum. Include suggested hands-on classroom and Maths lab activities, lesson plans and extensions to develop lateral thinking of concepts.",
                  "Solved solutions for books 1 to 8",
                ]}
              />
            }
            bgColor={"rgb(229 231 235)"}
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
              Digital Platform + Math Buddy*
            </span>
          </div>
          <br />

          <div className="flex flex-col sm:flex-row gap-4 px-5 justify-center items-center">
            <ResourceCard
              headLine={"TEACHERS’ RESOURCES"}
              points={[
                "E-book",
                "Animations**",
                "Lesson Plans",
                "Answer Keys",
                "Test Generators",
              ]}
            />
            <ResourceCard
              headLine={"STUDENTS’ RESOURCES"}
              points={["Chapter PDFs", "Animations**"]}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center py-6 md:p-4 text-sm">
            <Card
              image={img8}
              headLine={"Digital Content"}
              para={
                "It includes e-books, animations, interactive e-worksheets, and e-activities."
              }
            />
            <Card
              image={img2}
              headLine={"MathBuddy"}
              para={
                "CPA model delivering hands-on exploratory learning, interactive tools to teach in the classroom cloud-based home access for students."
              }
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"rgb(227, 123, 48)"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default WowIcseMaths;
