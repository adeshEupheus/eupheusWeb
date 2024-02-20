import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/alphaFun/alphafun.png";
import logo from "../../../assets/curriculum/alphaFun/alphafunIcon.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import img7 from "../../../assets/curriculum/alphaFun/4.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner2 from "../../BookTemplate/Banner2";
import SectionTwo from "../../BookTemplate/SectionTwo";
import MainContent from "../../BookTemplate/MainContent";
import Content from "../../BookTemplate/Content";
import OsLite2 from "../../BookTemplate/OsLite2";
import CardThree from "../../BookTemplate/CardThree";

const AlphaFun = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner2 image={book1} bgColor={"#85b366"} />
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
            bgColor={"#85b366"}
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
            bgColor={"#85b366"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              The Early Childhood Learning Programme is based on the principles
              of Integrated and Experiential Learning, which promotes creative
              thinking in young learners. It is designed by experienced teachers
              and adheres to the elements of Multiple Intelligences and Bloom's
              Taxonomy. Our activity-based books and notebooks give children the
              opportunity to explore, understand, and enjoy language learning.
              The books follow an interactive approach and aim to build the
              learner's independence from an early age.
              <br />
              <span className="font-bold text-green-600">ALPHA FUN </span>
              incorporates a combination of phonics and sight-word reading to
              ensure language development in early years.
            </span>
          }
          bgColor={"#85b366"}
          listOne={"NURSERY"}
          listTwo={"LKG"}
          listThree={"UKG"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#85b366]">
        <div
          ref={keyFeatures}
          id="keyFeature"
          className="flex flex-col justify-center items-center w-[60%]"
        >
          <SectionTwo
            content={
              <Content
                bgColor={"#85b366"}
                headLine={"Key Features"}
                points={[
                  "Revision Sheet: Recapitulation of concepts covered in the previous class.",
                  "Word Practice: Word building, phonetic practice of CVC words, and learning picture-word association.",
                  "Word Wall: Helps to recall the vowel sounds and usage.",
                  "Reading: Helps in reading by blending the sounds.",
                  "Grammar Pages: Teaches useful topics of grammar through child-friendly activities.",
                ]}
              />
            }
            bgColor={"rgb(133, 179, 102)"}
            img={img6}
          />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center p-4 sm:w-full bg-o">
        <img src={img7} className="w-[60%] h-auto" alt="" />
      </div>
      <div className="flex flex-row justify-center items-center">
        <CardThree bgColor={"#85b366"} bgColor1={"#4d9147"} />
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
          <OsLite2 />
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#85b366"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default AlphaFun;
