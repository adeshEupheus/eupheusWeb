import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/icse/chemistry_6_8/dalal chem 1.png";
import logo from "../../../assets/curriculum/icse/chemistry_6_8/logo2.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
// import img8 from "../../../assets/curriculum/icse/chemistry_6_8/circle1";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner2 from "../../BookTemplate/Banner2";
import SectionTwo from "../../BookTemplate/SectionTwo";
import MainContent from "../../BookTemplate/MainContent";
import Content from "../../BookTemplate/Content";
import OsLite2 from "../../BookTemplate/OsLite2";
import Circle from "../../BookTemplate/Circle";

const Chemistry6_8Workbook = () => {
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
              <span className="font-bold text-[#4464c4]">
                Dr. Dalal’s New Objective Workbooks for Simplified Middle School
                Chemistry{" "}
              </span>
              for classes 6 to 8 is a series of objective workbooks that have
              been created as per the latest curriculum by the Council for the
              Indian School Certificate Examinations, New Delhi, for Middle
              School Chemistry.
            </span>
          }
          bgColor={"#4464c4"}
          listOne={"Grades"}
          listTwo={"6-8"}
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
                  "Text material is as per the syllabus and is covered in the workbooks",
                  "Simple, lucid, and systematic approach",
                  "Comprehensive and detailed diagrams",
                  "Excellent objective exercises to mould and sharpen young minds into answering similar objective type questions in the ICSE examinations",
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
          <OsLite2 />
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

export default Chemistry6_8Workbook;
