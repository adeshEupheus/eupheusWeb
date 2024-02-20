import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/cbse/ScienceTree/science tree.png";
import logo from "../../../assets/curriculum/cbse/ScienceTree/logo.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner from "../../BookTemplate/Banner";

import MainContent from "../../BookTemplate/MainContent";

import img4 from "../../../assets/curriculum/zoom/oslite.png";
import CardOne from "../../BookTemplate/CardOne";

const ScienceTree = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200  ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner image={book1} bgColor={"#009b89"} />
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
            bgColor={"#009b89"}
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
            bgColor={"#009b89"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              <span className="font-bold text-[#009b89]">Science Tree: </span>A
              series of five coursebooks aims to ensure effective learning with
              the help of an innovative and interesting teaching-learning
              process in a learner friendly environment. The approach followed
              in the books evokes curiosity and attentiveness in young learners’
              mind to the world around them. Fascinating pictures, vibrant
              illustrations, daily life examples, and hands-on experiments are
              used to stimulate young minds in connecting the concepts taught
              with the experiences about the world around them, that they would
              acquire gradually. A variety of exercises, activities, and project
              works that help teachers and parents in evaluation process have
              been included. Inquirybased approach to Science has been
              intricately woven with the pedagogical guidelines of the National
              Curriculum Framework(s) 2022-23 and the syllabus listed by various
              boards.
            </span>
          }
          bgColor={"#009b89"}
          listOne={"Grades"}
          listTwo={"1-5"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#009b89]">
        <div
          ref={keyFeatures}
          id="keyFeature"
          className="flex flex-col justify-center items-center w-[60%]"
        >
          {/* <SectionTwo
            content={
              <Content
                bgColor={"#009b89"}
                headLine={"Key Features"}
                subHead={
                  "Salient Features of the Mathematics Laboratory Manual are:"
                }
                points={[
                  "Concepts have been extensively explained through interesting, easy-to-understand activities",
                  "Activities have been enriched with appropriate gures and graphs",
                  "Each activity includes a clear step-by-step procedure for clear understanding",
                  "Each activity allows students to self-evaluate while understanding the concept taught",
                  "Viva Voce section has been provided with each activity to help students gain confidence and answer oral questions with ease",
                ]}
              />
            }
            bgColor={"rgb(0, 155, 137)"}
            img={img6}
          /> */}
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
            <CardOne
              headLine={"TEACHERS’ RESOURCES"}
              points={[
                "E-book",
                "Animations",
                "Answer Keys",
                "Lesson Plans",
                "Animations for Grades 3-5",
                "Worksheets",
                "Test Generator",
              ]}
            />
            <CardOne
              headLine={"STUDENTS’ RESOURCES"}
              points={["Chapter PDFs", "Animations for Grades 3-5"]}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#009b89"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default ScienceTree;
