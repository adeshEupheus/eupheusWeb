import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/cbse/WowMathsLab/MathsLab.png";
import logo from "../../../assets/curriculum/cbse/WowMathsLab/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner2 from "../../BookTemplate/Banner2";
import SectionTwo from "../../BookTemplate/SectionTwo";
import MainContent from "../../BookTemplate/MainContent";
import Content from "../../BookTemplate/Content";

const Wow_Maths_Lab = () => {
  const keyFeatures = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200  ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner2 image={book1} bgColor={"#25adcf"} />
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
            bgColor={"#25adcf"}
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
              Mathematics, as a subject, poses multiple challenges to students
              in a classroom. It plays a dominant role in our everyday life. The
              <span className="font-bold text-[#25adcf]">
                {" "}
                Mathematics Laboratory Manual{" "}
              </span>
              series for Grades 6 to 10 has been created in adherence to the
              guidelines provided by NCERT. The concept of the lab manual is to
              replace the rote learning approach and create a fun-to-do style of
              learning that makes mathematics more relatable and an
              easy-to-grasp subject. The method used in the lab manual is
              effective, interesting, and enjoyable.
              <br />
              The series helps stimulate a child’s thinking abilities and
              encourages participatory and experiential learning. It aims to
              enable the child to become a self-reliant learner; it covers
              different areas to improve overall mathematical awareness.
            </span>
          }
          bgColor={"#25adcf"}
          listOne={"Grades"}
          listTwo={"6-10"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#25adcf]">
        <div
          ref={keyFeatures}
          id="keyFeature"
          className="flex flex-col justify-center items-center w-[60%]"
        >
          <SectionTwo
            content={
              <Content
                bgColor={"#25adcf"}
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
            bgColor={"rgb(37, 173, 207)"}
            img={img6}
          />
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#25adcf"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Wow_Maths_Lab;
