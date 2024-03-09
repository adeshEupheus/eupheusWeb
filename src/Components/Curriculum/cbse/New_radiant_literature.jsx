import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/cbse/new_radiant_literature/radiant reader.png";
import logo from "../../../assets/curriculum/cbse/new_radiant_literature/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
// import Card from "../../BookTemplate/Card";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import Banner from "../../BookTemplate/Banner";
import Section from "../../BookTemplate/Section";
import MainContent from "../../BookTemplate/MainContent";
import ResourceCard from "../../BookTemplate/ResourceCard";
import KeyPoints from "../../BookTemplate/KeyPoints";

const New_radiant_literature = () => {
  const keyFeatures = useRef(null);
  // const Advantages = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner image={book1} bgColor={"rgb(252, 101, 124)"} Ncficon={true} />
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
            text={"TEXTBOOK"}
            bgColor={"rgb(252, 101, 124)"}
            textColor={"black"}
            size={"small"}
          />
        </div>
        {/* <div
          onClick={() => {
            const ele = document.getElementById("Advantages");
            ele.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <BasicButton
            text={"ADVANTAGES"}
            size={"small"}
            bgColor={"rgb(253, 70, 98)"}
            textColor={"black"}
          />
        </div> */}
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
            bgColor={"rgb(252, 101, 124)"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              The{" "}
              <span className="font-bold text-[#fd4662]">
                New Radiant Readers
              </span>{" "}
              Literature Readers are literary interesting lessons taken from the
              renowned and time-tested New Radiant Readers series. This
              Literature series of 8 readers is for Grades 1–8 of all CBSE and
              State Board schools seeks to familiarise students with classical
              and contemporary literary texts. It is an excellent literature
              supplement to English Readers and Workbooks based on the
              communicative approach.
            </span>
          }
          bgColor={"rgb(252, 101, 124)"}
          listOne={"Grades"}
          listTwo={"1-8"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#fc657c]">
        <div ref={keyFeatures} id="keyFeature" className="w-[60%]">
          <Section
            content={
              <KeyPoints
                bgColor={"rgb(252, 101, 124)"}
                headLine={"Key Features"}
                points={[
                  "It carry stories, folktales, and biographies based on the phonic pattern and poems of action and rhythm. Comprehension exercises practise usage of literary skills. Vocabulary exposes learners to literary devices. Grammar drills are graded to match students’ mental abilities while giving opportunities for sustained creative writing practice.",
                ]}
              />
            }
            bgColor={"rgb(252, 101, 124)"}
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
              Digital Platform + TOEFL* + Enounce**
            </span>
          </div>
          <br />

          <div className="flex flex-col sm:flex-row gap-4 p-5 justify-center items-center">
            <ResourceCard
              headLine={"TEACHERS’ RESOURCES"}
              points={["E-book", "Answer Keys"]}
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
            bgColor={"rgb(252, 101, 124)"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default New_radiant_literature;
