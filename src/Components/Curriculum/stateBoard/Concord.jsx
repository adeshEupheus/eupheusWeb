import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/stateBoard/concord.png";
import logo from "../../../assets/curriculum/stateBoard/logo.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner2 from "../../BookTemplate/Banner2";
import MainContent from "../../BookTemplate/MainContent";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import CardOne from "../../BookTemplate/CardOne";
import SectionTwo from "../../BookTemplate/SectionTwo";
import Content from "../../BookTemplate/Content";
import img6 from "../../../assets/curriculum/zoom/key features.png";

const Concord = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200  ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner2 image={book1} bgColor={"#25adcf"} />
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
            bgColor={"#25adcf"}
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
            bgColor={"#25adcf"}
            textColor={"black"}
          />
        </div>{" "}
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-4 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              Extensive research has shown that school-going children need to
              carry lighter school bags to class. With this objective in mind,
              it has been suggested that learning in the primary school segment
              be divided into terms or semesters. An efficient way to do this is
              to integrate learning across disciplines in the primary classes
              over the academic year into two or three books in a progressive
              manner. Thus, the learner needs to carry only one term book to
              school for each term.
              <br />
              <span className="font-bold text-[#25adcf]">Concord </span>
              an integrated semester book series, has been designed by Eupheus
              Learning to implement this ideology according to the
              recommendations of the National Education Policy, 2020. This
              semester book series is a set of two books for two semesters for
              Grades 1 to 5. It integrates English, Mathematics, Environmental
              Studies, General Knowledge, and Computer Science for Grades 1 and
              2 and English, Mathematics, Science, Social Studies, General
              Knowledge, and Computer Science for Grades 3 to 5. Concord has a
              child-centred approach and builds in the principles of Multiple
              Intelligences and 21st century skill development. It integrates
              HOTS-based formative assessments and Life Skill development as the
              learning philosophy that integrates the various subjects
              seamlessly.
            </span>
          }
          bgColor={"#25adcf"}
          listOne={"Grades"}
          listTwo={"1-5"}
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
                headLine={"Key Features"}
                points={[
                  "Aligned to the National Curriculum Framework (2022), the first two levels of the series focus on building essential foundational competencies in literacy, numeracy, and environmental studies, general knowledge, and computer science.",
                  "Each book is designed to cover an extensive variety of topics that lays emphasis on discovery-based experiential learning and promotes critical thinking.",
                  "HOTS-based formative assessments reduce emphasis on rote learning",
                  "Pedagogical guidelines of the National Education Policy (NEP) 2020 highlighted along the content to make teachers cognizant of the specific learning skills.",
                  "The content is carefully graded to the learning standards of the curricula taught in each class.",
                  " Each chapter has clearly laid out learning objectives",
                  "Innovative strategies have been woven through quizzes to make learning fun and engaging",
                  "Assessments provided in the form of test papers and worksheets for comprehensive revision and evaluation.",
                  "Separate Activity booklets available for practice and assessments.",
                ]}
              />
            }
            bgColor={"rgb(37, 173, 207)"}
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
              points={[
                "Interactive Flipbook With Videos & Animations",
                "Lesson Plans",
                "Answer Keys",
                "Worksheets",
                "Test Generator",
              ]}
            />
            <CardOne
              headLine={"STUDENTS’ RESOURCES"}
              points={["Chapter PDFs", "Animations"]}
            />
          </div>
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

export default Concord;
