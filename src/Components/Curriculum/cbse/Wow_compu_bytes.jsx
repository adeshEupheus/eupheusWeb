import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/cbse/wowComBytes/compubyte.png";
import logo from "../../../assets/curriculum/cbse/wowComBytes/wowComBytesIcon.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import img2 from "../../../assets/curriculum/cbse/wowComBytes/code2win.png";
import img8 from "../../../assets/curriculum/zoom/digital content.png";
import Card from "../../BookTemplate/Card";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import Section from "../../BookTemplate/Section";
import MainContent from "../../BookTemplate/MainContent";
import ResourceCard from "../../BookTemplate/ResourceCard";
import KeyPoints from "../../BookTemplate/KeyPoints";
import Banner from "../../BookTemplate/Banner";

const Wow_compu_bytes = () => {
  const keyFeatures = useRef(null);
  const Advantages = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner image={book1} bgColor={"rgb(162, 70, 179)"} Ncficon={true} />
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
            bgColor={"rgb(162, 70, 179)"}
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
            text={"Teacher's Resources"}
            size={"small"}
            bgColor={"rgb(162, 70, 179)"}
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
            bgColor={"rgb(162, 70, 179)"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              <span className="font-bold text-[#a246b3]">
                {" "}
                WOW! Compu-Bytes,{" "}
              </span>
              our series on computer science, adopts a child-centric approach to
              learning the subject. The series bases its instructions on Windows
              10 and MS Office 2016 and adopts an interactive approach, making
              learning enjoyable and enriching.
              <ul>
                <li className="list-disc px-1">
                  At the primary level (1-5), the series focuses on presenting
                  the basics of computers, Windows Typing, Scratch, and so on.
                </li>
                <li className="list-disc px-1">
                  At the middle level (6-8) the series focuses on Adobe Suite
                  solutions like Flash and Photoshop, apart from teaching
                  programming languages (HTML, CSS and Python), as well as
                  emerging technology topics like Artificial Intelligence, and
                  so on.
                </li>
              </ul>
            </span>
          }
          bgColor={"rgb(162, 70, 179)"}
          listOne={"Grades"}
          listTwo={"1-5"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#a246b3]">
        <div ref={keyFeatures} id="keyFeature" className="w-[60%]">
          <Section
            content={
              <KeyPoints
                headLine={"Key features"}
                points={[
                  "LEARNING OBJECTIVES: Goals to be achieved by the end of the chapter",
                  "QUIZ: Quick assessment of concepts",
                  "ENRICH YOURSELF: Alternative methods on the topics",
                  "INFO: Extra and useful information on the topics",
                  "FAST FORWARD: Keyboard shortcuts",
                  "KEYWORDS: Expanded form of abbreviations",
                  "MEMORIZE: Summarizes the chapter",
                  "EXERCISES: Evaluates understanding of the concept.",
                ]}
              />
            }
            bgColor={"rgb(162, 70, 179)"}
            img={img6}
          />
        </div>
      </div>
      <div className="bg-[#e5e7eb]">
        <div ref={Advantages} id="Advantages" className="w-[81%]">
          <Section
            content={
              <KeyPoints
                bgColor={"rgb(229 231 235)"}
                headLine={"KIDS CORNER"}
                points={[
                  "HANDS-ON ACTIVITY: Word search, crossword",
                  "LAB ACTIVITY: Practical activities",
                  "PROJECT WORK: Apply the concepts learnt",
                  "GROUP DISCUSSION: Helps create interactivity",
                  "ONLINE LINKS: Links for exploring the topic further",
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
              Digital Platform + Code2Win
            </span>
          </div>
          <br />

          <div className="flex flex-col sm:flex-row gap-4 px-5 justify-center items-center">
            <ResourceCard
              headLine={"TEACHERS’ RESOURCES"}
              points={[
                "E-book",
                "Lesson Plans",
                "Answer Keys",
                "Animations",
                "Worksheets",
                "Test Generator",
              ]}
            />
            <ResourceCard
              headLine={"STUDENTS’ RESOURCES"}
              points={["Chapter PDFs", "Animations"]}
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
              headLine={"Code2Win"}
              para={"NATIONAL CODING COMPETITION"}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"rgb(162, 70, 179)"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Wow_compu_bytes;
