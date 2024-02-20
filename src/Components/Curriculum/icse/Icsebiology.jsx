import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/icse/icse_biology/Asset 61@3x.png";
import logo from "../../../assets/curriculum/icse/icse_biology/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner2 from "../../BookTemplate/Banner2";
import SectionTwo from "../../BookTemplate/SectionTwo";
import MainContent from "../../BookTemplate/MainContent";
import Content from "../../BookTemplate/Content";
import CardOne from "../../BookTemplate/CardOne";

const Icsebiology = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner2 image={book1} bgColor={"#4464c4"} />
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
              <span className="font-bold text-[#4464c4]">Icse Biology </span>
              Written specifically for the Council for Indian School Certificate
              Examinations' revised secondary syllabus, this series provides
              curriculum framework coverage for classes 9 and 10. It has been
              written by an experienced and renowned author of Biology.
            </span>
          }
          bgColor={"#4464c4"}
          listOne={"Grades"}
          listTwo={"9-10"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#4464c4]">
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
                  "Written in a very simple, easy-to-understand language, and in a point-wise sequential manner.",
                  "The latest ICSE syllabus has been followed with emphasis on easy explanations of concepts and key facts.",
                  "The text is complemented with well-illustrated, multi-coloured, properly labelled diagrams which inspire students to create the diagrams on their own.",
                  "Key terms that students need to know are clearly highlighted in the text.",
                  "Several flow charts and tables make the concepts easy to grasp and the chapters informative.",
                  "Questions from previous ICSE exams after each chapter prepare students for the board exam.",
                  "Questions modelled on the ICSE exam after each chapter.",
                  "Two Model Test Papers based on the new syllabus included towards the end of the book.",
                  "Last two years' Solved ICSE Question Papers have also been provided at the end of the book.",
                ]}
              />
            }
            bgColor={"rgb(68, 100, 196)"}
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
          <div className="flex flex-col sm:flex-row gap-4 p-5 justify-center items-center">
            <CardOne
              headLine={"TEACHERS’ RESOURCES"}
              points={["E-book", "Model Test Papers", "Solved Papers"]}
            />
            <CardOne
              headLine={"STUDENTS’ RESOURCES"}
              points={["Chapter PDFs", "Model Test Papers", "Solved Papers"]}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center sm:flex-row p-4 px-4">
        <div className="flex border-white rounded-3xl text-base font-semibold justify-center place-items-center bg-[#4464c4] text-white py-2 border-2 items-center drop-shadow-lg">
          <span className="w-full p-5">
            Basic ICSE BIOLOGY LAB MANUAL for Classes 9 and 10
          </span>
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

export default Icsebiology;
