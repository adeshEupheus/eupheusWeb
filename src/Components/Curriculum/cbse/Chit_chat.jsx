import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/cbse/ChitChat/chit chat.png";
import logo from "../../../assets/curriculum/cbse/ChitChat/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner2 from "../../BookTemplate/Banner2";
import SectionTwo from "../../BookTemplate/SectionTwo";
import MainContent from "../../BookTemplate/MainContent";
import Content from "../../BookTemplate/Content";

const Chit_chat = () => {
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
              The Central Board of Secondary Education (CBSE) has decided to
              assess the oral and aural (speaking and listening) skills of
              students in English. The overall purpose of the test is to help
              improve and standardise students' communicative skills.
              <br />
              <span className="font-bold text-[#25adcf]">Chit Chat: </span>A
              course in Speaking and Listening for 1 to 12, offers practise in
              listening comprehension to home learners' ability to listen
              effectively and constructively such that they
              <ul>
                <li className="list-disc">
                  listen for general and specific understanding
                </li>
                <li className="list-disc">
                  understand the spoken viewpoint, both explicit and implicit
                </li>
                <li className="list-disc">enjoy the spoken text</li>
              </ul>
            </span>
          }
          bgColor={"#25adcf"}
          listOne={"Grades"}
          listTwo={"1-12"}
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
                points={[
                  "Speaking to help learners understand language functions and give adequate practice in appropriate use of language register to help them",
                  "Adapt and suit language to the needs of a variety of audiences and purposes in oral communication",
                  "Organise their thoughts and present their point of view with clarity and coherence",
                  "learners use the language with correct tone and intonation",
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

export default Chit_chat;
