import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/icse/chemistry_9_10/Chemistry 10.png";
import logo from "../../../assets/curriculum/icse/chemistry_9_10/logo3.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner from "../../BookTemplate/Banner";
import Section from "../../BookTemplate/Section";
import MainContent from "../../BookTemplate/MainContent";
import KeyPoints from "../../BookTemplate/KeyPoints";
import ResourceCard from "../../BookTemplate/ResourceCard";
import Circle from "../../BookTemplate/Circle";

const Chemistry10QuestionBank = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner
        image={book1}
        bgColor={"#4464c4"}
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
            text={"KEY FEATURES"}
            bgColor={"#4464c4"}
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
            bgColor={"#4464c4"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              <span className="font-bold text-[#4464c4]">
                Dr. Dalal’s Simplified ICSE Chemistry Solvable Question Bank &
                25 Test Papers{" "}
              </span>
              for class 10 has been created in accordance with the latest
              syllabus prescribed by The Council for the Indian School
              Certificate Examinations, New Delhi for The Indian Certificate of
              Secondary Education (ICSE) Examination.
            </span>
          }
          bgColor={"#4464c4"}
          listOne={"Grades"}
          listTwo={"10"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#4464c4]">
        <div
          ref={keyFeatures}
          id="keyFeature"
          className="flex flex-col justify-center items-center w-[60%]"
        >
          <Section
            content={
              <KeyPoints
                headLine={"Key Features"}
                points={[
                  "Text has been written as per the syllabus in and after March 2024",
                  "The book includes Test Papers, Equation Sets, and ICSE Numericals with their solutions",
                  "An excellent book to be used before the ISCE exams",
                ]}
              />
            }
            bgColor={"rgb(68, 100, 196)"}
            img={img6}
          />
        </div>
      </div>
      <Circle />
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
            <ResourceCard
              headLine={"TEACHERS’ RESOURCES"}
              points={["E-book"]}
            />
            <ResourceCard
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
            bgColor={"#4464c4"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Chemistry10QuestionBank;
