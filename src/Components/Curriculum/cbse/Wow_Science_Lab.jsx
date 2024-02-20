import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/cbse/wowScienceLab/science lab.png";
import logo from "../../../assets/curriculum/cbse/wowScienceLab/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner2 from "../../BookTemplate/Banner2";
import SectionTwo from "../../BookTemplate/SectionTwo";
import MainContent from "../../BookTemplate/MainContent";
import Content from "../../BookTemplate/Content";

const Wow_Science_Lab = () => {
  const keyFeatures = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200  ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner2 image={book1} bgColor={"#e3761e"} />
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
            bgColor={"#e3761e"}
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
              The Eupheus
              <span className="font-bold text-[#e3761e]">
                {" "}
                Science Lab Manual series{" "}
              </span>
              is intended for students of Grades 6 to 10 studying Science. As
              part of their lab activities for science, the series has been
              framed as per CBSE recommendations. CBSE encourages an all-round
              development of students. Thus, the aim of the manual is to help
              students understand various scientific facts and principles
              through hands-on activities. The manuals include theory,
              procedure, observation, inference, etc. Each topic has been
              elaborately discussed along with welllabelled diagrams. Language
              of the book is free of jargon and helps students understand the
              practical aspects of science without any difficulties.
            </span>
          }
          bgColor={"#e3761e"}
          listOne={"Grades"}
          listTwo={"1-8"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#e3761e]">
        <div
          ref={keyFeatures}
          id="keyFeature"
          className="flex flex-col justify-center items-center w-[60%]"
        >
          <SectionTwo
            content={
              <Content
                bgColor={"#e3761e"}
                headLine={"Key Features"}
                points={[
                  "Encourages development of scientific temperament among students by arousing interest, curiosity, and the spirit of inquiry",
                  "Well-labelled diagrams and appropriate illustrations enrich the experience of students while conducting the activities",
                  "Helps student work on experiments and investigate scienfically through interesting, easy to-do steps",
                  "Each activity allows students to self-evaluate while understanding the concept taught",
                ]}
              />
            }
            bgColor={"rgb(227, 118, 30)"}
            img={img6}
          />
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#e3761e"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Wow_Science_Lab;
