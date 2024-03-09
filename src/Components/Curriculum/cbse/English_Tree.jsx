import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/cbse/English_Tree/english tree.png";
import logo from "../../../assets/curriculum/cbse/English_Tree/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import Card from "../../BookTemplate/Card";
import img8 from "../../../assets/curriculum/cbse/english_weaves/digital content.png";
import img1 from "../../../assets/curriculum/cbse/english_weaves/enounce.png";
import img2 from "../../../assets/curriculum/cbse/english_weaves/toeflprimary.png";
import img3 from "../../../assets/curriculum/cbse/english_weaves/toefljunior.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import Banner from "../../BookTemplate/Banner";
import Section from "../../BookTemplate/Section";
import MainContent from "../../BookTemplate/MainContent";
import ResourceCard from "../../BookTemplate/ResourceCard";
import KeyPoints from "../../BookTemplate/KeyPoints";

const English_Tree = () => {
  const keyFeatures = useRef(null);
  // const Advantages = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner image={book1} bgColor={"rgb(158, 176, 79)"} Ncficon={true} />
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
            text={"Key Features"}
            bgColor={"rgb(158, 176, 79)"}
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
            bgColor={"rgb(100, 201, 97)"}
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
            bgColor={"rgb(158, 176, 79)"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              <span className="font-bold text-[#9eb04f]">
                The English Tree,{" "}
              </span>
              A Structural Course in English Language, for Grades 1 to 8 is
              designed to meet the recommendations of the National Educational
              Policy, 2020, and the curriculum objectives of all educational
              boards. Catering to a light school bag, the series provides a
              single textbook for each class bolstered by a built-in workbook.
              With focus on structures, linguistic skills are taught by
              transmitting from receptive to productive tasks.
            </span>
          }
          bgColor={"rgb(158, 176, 79)"}
          listOne={"Grades"}
          listTwo={"1-8"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#9eb04f]">
        <div ref={keyFeatures} id="keyFeature" className="w-[60%]">
          <Section
            content={
              <KeyPoints
                bgColor={"rgb(158, 176, 79)"}
                headLine={"Key features"}
                points={[
                  "Approach through themes conforming to learners’ physical, social, cultural ambience and values enshrined in the Constitution",
                  "Exposure to language structures through contextually input-rich texts practised extensively",
                  "Listening skill provides pre-reading activities introducing the theme of the chapter and leads to meaningful communication",
                  "Reading skill is enriched through literary, classical, authentic, and contemporary texts",
                  "Speaking skill aided by visual and textual inputs for controlled and spontaneous speech as well as triggers for writing tasks",
                  "Writing skill encouraged through structured and unstructured tasks",
                  "Structure Practice helps learners hone their application and understand how multiple forms and meanings interact",
                  "Grammar focuses on application and practice rather than theory",
                  "Sub skills practise pronunciation, word build-up, spelling, reference and Internet research skills through group work, pair work, and individual practice",
                  "Recapitulation and practice of skills is facilitated by worksheets at the end of each textbook",
                ]}
              />
            }
            bgColor={"rgb(158, 176, 79)"}
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

          <div className="flex flex-col sm:flex-row gap-4 px-5 justify-center items-center">
            <ResourceCard
              headLine={"TEACHERS’ RESOURCES"}
              points={[
                "E-book",
                "Animations",
                "Classroom Audio Support for Stories,Poems, Phonics & Listening Tasks",
                "Lesson Plans",
                "Answer Keys",
                "Worksheets",
                "Test Generators",
              ]}
            />
            <ResourceCard
              headLine={"STUDENTS’ RESOURCES"}
              points={[
                "Chapter PDFs",
                "Animations",
                "Classroom Audio Support for Stories, Poems, Phonics & Listening Tasks",
              ]}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center py-6 md:p-4">
            <Card
              image={img8}
              headLine={"Digital Content"}
              para={
                "It includes e-books, animations, interactive e-worksheets, and e-activities."
              }
            />
            <Card
              image={img1}
              headLine={"Benefits"}
              para={
                "Language-Learning Solutions with ‘Listen’ ‘Practice’ ‘Learn’ methodology to build pronunciation."
              }
            />
            <Card
              image={img2}
              headLine={"TEST FOR AGES 8+"}
              para={
                "The tests are designed to: assess the general English-language proficiency of young students"
              }
            />
            <Card
              image={img3}
              headLine={"TEST FOR AGES 11+"}
              para={
                "The TOEFL Junior tests are an accurate and reliable measure of your students’ communicative skills in English."
              }
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"rgb(158, 176, 79)"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default English_Tree;
