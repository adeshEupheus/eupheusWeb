import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/skillDev/Vibes GK/gk vibes.png";
import logo from "../../../assets/curriculum/skillDev/Vibes GK/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import Banner from "../../BookTemplate/Banner";
import Section from "../../BookTemplate/Section";
import MainContent from "../../BookTemplate/MainContent";
import ResourceCard from "../../BookTemplate/ResourceCard";
import KeyPoints from "../../BookTemplate/KeyPoints";

const GKVibes = () => {
  const keyFeatures = useRef(null);
  const Advantages = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner image={book1} bgColor={"rgb(212, 89, 105)"} Ncficon={true} />
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
            bgColor={"rgb(212, 89, 105)"}
            textColor={"black"}
            size={"small"}
          />
        </div>
        <div
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
            bgColor={"rgb(212, 89, 105)"}
            textColor={"black"}
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
            bgColor={"rgb(212, 89, 105)"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              Eupheus Learning presents{" "}
              <span className="font-bold text-[#d45969]">
                General Knowledge Vibes,{" "}
              </span>
              a unique series of General Knowledge textbooks for Grades 1 to 8.
              The series comprises textbooks, interactive e-books, and periodic
              quizzes on current affairs. The aim of the series is to widen the
              student’s horizon and conceptual understanding of the term
              ‘General Knowledge’. To achieve this, General Knowledge Vibes
              provides an unbroken wireframe for learning solutions by providing
              core, supplemental, and home learning on the same platform.
            </span>
          }
          bgColor={"rgb(212, 89, 105)"}
          listOne={"Grades"}
          listTwo={"1-8"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#d45969]">
        <div ref={keyFeatures} id="keyFeature" className="w-[60%]">
          <Section
            content={
              <KeyPoints
                headLine={"Key features"}
                points={[
                  "Content is carefully graded to the curricula taught in class and thoroughly updated.",
                  "Innovative strategies have been employed to make learning fun and engaging.",
                  "Just for laughs has funny jokes and riddles for comic relief.",
                  "Discuss has quotes from famous people to initiate discussions and develop debating skills.",
                  "Find Out has snippets of information along with research-based questions.",
                  "Over to you develops personal and cognitive skills.",
                  "Life Skills will help integrate essential life skills through fictional stories, real-life situations, discussion questions, and more.",
                  "Activity promotes development of new skills through art and craft, DIY projects, and more.",
                  "Test Your Knowledge are test papers at the end of every chapter for assessment and evaluation.",
                  "News Today! are periodic current affairs for Grades 3 to 8 to inform them of the happenings around the world.",
                  "Unique NCF 2022–23 mandated feature pages with India-centric content has been added.",
                  "Self-assessment boxes have been added.",
                  "Yoga asanas have been included to encourage movement and exploration.",
                  "Inserts on Sustainable Development Goals (SDGs) to promote environmental awarenesshave been included.",
                  "21st Century learning skills have been highlighted along the content to make teachers cognizant of the specific learning skills.",
                  "Art Integration has been done.",
                ]}
              />
            }
            bgColor={"rgb(212, 89, 105)"}
            img={img6}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-200">
        <div ref={Advantages} id="Advantages" className="w-[60%]">
          <Section
            content={
              <KeyPoints
                headLine={"QUIZMASTER VINAY MUDALIAR BIO"}
                para={[
                  "Mr Vinay Mudaliar is a well-renowned quizmaster in India and abroad. He is also a television quiz show host. He has conducted numerous national level quizzes. He has conducted over 2500+ quizzes, across 75+ cities in all zones of India and abroad reaching out to lakhs of students. He is currently one of the leading quizmasters in the education industry. He is associated with all the major national education boards like the CBSE, ICSE, etc for conducting quizzes and imparting knowledge across the country. Mr Vinay Mudaliar’s quizzes are hugely popular across the country for their content, innovative formats, and engagement levels. Children, principals, and parents alike eagerly look forward to his quizzes. A crowd favourite quizmaster, his distinct style of connecting with the audience through his questions is his hallmark. He has received various awards and gained nation-wide recognition for his immense contributions.",
                ]}
              />
            }
            bgColor={"rgb(229 231 235)"}
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
          <br />

          <div className="flex flex-col sm:flex-row gap-4 p-5 justify-center items-center ">
            <ResourceCard
              headLine={"TEACHERS’ RESOURCES"}
              points={["E-book", "Animations**", "Worksheets", "Answer Keys"]}
            />
            <ResourceCard
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
            bgColor={"rgb(212, 89, 105)"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default GKVibes;
