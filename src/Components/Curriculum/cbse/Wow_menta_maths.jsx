import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/cbse/wow_menteal_maths/Asset 26@3x.png";
import logo from "../../../assets/curriculum/cbse/wow_menteal_maths/logo.png";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner from "../../BookTemplate/Banner";
import MainContent from "../../BookTemplate/MainContent";
import Paragraph from "../../BookTemplate/Paragraph";
import ResourceCard from "../../BookTemplate/ResourceCard";

const Wow_menta_maths = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner
        image={book1}
        bgColor={"#009b89"}
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
            text={"ADVANTAGES"}
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
              {" "}
              <span className="font-bold text-[#009b89]">
                WOW! Mental Maths,{" "}
              </span>
              Smart Mental Maths Strategies, is a series of eight skill
              development books for Grades 1-8, specifically developed to teach
              students the techniques of mental computations. The series blends
              various shortcuts and strategies including the sutras of Vedic
              Maths to help students learn the essential skills required to
              calculate mentally.
              <br />
              Each book has been aligned to the grade-wise coverage of the
              concepts taught in school, thereby ensuring the appropriateness of
              the strategies taught.
              <br />
              In Grades 1 to 3, emphasis has been laid on simple calculations of
              whole numbers to help students develop strong reasoning skills.
              Subsequently, in Grades 4 and 5, the strategies learnt in previous
              grades are reinforced and extended to fractions and decimals. In
              Grades 6 to 8, the concepts are further extended to real numbers,
              percentage, ratio and proportion, algebra, etc. to include more
              advanced methods of approaching the problems, especially through
              Vedic Maths.
            </span>
          }
          bgColor={"#009b89"}
          listOne={"Grades"}
          listTwo={"1-8"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#009b89]">
        <div
          ref={keyFeatures}
          id="keyFeature"
          className="flex flex-col justify-center items-center"
        >
          <Paragraph
            bgColor={"#009b89"}
            headLine={"WOW FACT"}
            para={[
              "Strategy-based information to give an insight as to where the listed skill can be appropriately applied",
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-200">
        <div className="flex flex-col justify-center items-center">
          <Paragraph
            bgColor={"#e5e7eb"}
            headLine={"THINK AHEAD"}
            para={[
              "Challenging higher order questions that trigger analytical reasoning and help students apply the relevant strategy, and find solutions on their own",
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#009b89]">
        <div className="flex flex-col justify-center items-center">
          <Paragraph
            bgColor={"#009b89"}
            headLine={"PRACTICE TIME"}
            para={[
              "Present after a set of strategies. and includes practice from those particular strategies with an aim to help students solve questions and apply the skills they have learnt",
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-200">
        <div className="flex flex-col justify-center items-center">
          <Paragraph
            bgColor={"#e5e7eb"}
            headLine={"TEACHING TIP"}
            para={[
              "Includes suggestions/ideas for teachers and parents to support the students in making the learning of the strategy comprehensive and complete",
            ]}
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
            bgColor={"#009b89"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Wow_menta_maths;
