import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/skillDev/value_first/valuefirst.png";
import logo from "../../../assets/curriculum/skillDev/value_first/logo.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner2 from "../../BookTemplate/Banner2";
import MainContent from "../../BookTemplate/MainContent";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import CardOne from "../../BookTemplate/CardOne";
import SectionTwo from "../../BookTemplate/SectionTwo";
import Content from "../../BookTemplate/Content";
import img6 from "../../../assets/curriculum/zoom/key features.png";

const Value_first = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200  ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner2 image={book1} bgColor={"#d44455"} />
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
            bgColor={"#d44455"}
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
            bgColor={"#d44455"}
            textColor={"black"}
          />
        </div>{" "}
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-4 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              The{" "}
              <span className="font-bold text-[#d44455]">Values First </span>
              series is an attempt to build a value education
              textbook-cum-workbook series for young learners. Interesting
              stories along with fun exercises presented in the series leave a
              positive impact on the young impressionable minds. Situational
              questions given in the series enable students to think and relate
              them to real life.
            </span>
          }
          bgColor={"#d44455"}
          listOne={"Grades"}
          listTwo={"1-8"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#d44455]">
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
                  "Characters introducing stories and their line of thought",
                  "Interesting stories leading towards the values being taught",
                  "Think About It talks about the values being covered in the stories",
                  "Daily-Dose relates the value of the story to day-to-day life so that they become habits",
                  "Wise-Quote includes theme-related quoted by famous people to reinforce learning outcome",
                  " Answer to evaluate the learner’s comprehension",
                  "Comment includes questions to assess and develop learner’s understanding of the theme",
                  "Share your Story/Activity to encourage learners to share their experiences with each other",
                  "Situation Check provides situation questions that help learners to empathise with the situation to make a choice",
                  "Explore includes beyond the text poems, stories, and anecdotes to develop reading habits and broaden the horizons of the learners",
                  "Pin-it-up provides instructions for learners to fill-up the ‘Value of the Month’ corner allocated on their class bulletin board",
                  "Also available: 12-page Life Skills Activity Book provided with books 3 to 8 to empower learners with life skills required to face challenges",
                ]}
              />
            }
            bgColor={"rgb(212, 68, 85)"}
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
          <div className="flex flex-col sm:flex-row gap-4 px-10 sm:px-4 justify-center items-center p-4">
            <CardOne
              headLine={"TEACHERS’ RESOURCES"}
              points={["E-book", "Answer Keys"]}
            />
            <CardOne
              headLine={"STUDENTS’ RESOURCES"}
              points={["Chapter PDFs", "Answer Keys"]}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#d44455"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Value_first;
