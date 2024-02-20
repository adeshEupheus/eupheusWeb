import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/cbse/english_weaves/english weaves.png";
import logo from "../../../assets/curriculum/cbse/english_weaves/icon.png";
// import img6 from "../../../assets/curriculum/zoom/key features.png";
import img8 from "../../../assets/curriculum/cbse/english_weaves/digital content.png";
import img1 from "../../../assets/curriculum/cbse/english_weaves/enounce.png";
import img2 from "../../../assets/curriculum/cbse/english_weaves/toeflprimary.png";
import img3 from "../../../assets/curriculum/cbse/english_weaves/toefljunior.png";
import CardSecond from "../../BookTemplate/CardSecond";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import Banner from "../../BookTemplate/Banner";
import SectionTwo from "../../BookTemplate/SectionTwo";
import MainContent from "../../BookTemplate/MainContent";
import CardOne from "../../BookTemplate/CardOne";
import Content from "../../BookTemplate/Content";

const English_weaves = () => {
  const keyFeatures = useRef(null);
  const Advantages = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner image={book1} bgColor={"rgb(230, 186, 85)"} />
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
            bgColor={"rgb(230, 186, 85)"}
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
            bgColor={"rgb(230, 186, 85)"}
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
            bgColor={"rgb(230, 186, 85)"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              <span className="font-bold text-yellow-800">ENGLISH WEAVES</span>{" "}
              is about the tapestry of literature born out of the loom of
              relatable language learning contexts. Informed by the policy
              guidelines of National Curriculum Frameworks 2022 and 2023, the
              course is staggered in three stages: Foundational, Preparatory,
              and Middle School. The books for the Foundational stage are
              introduced by Vidya Pravesh pages, and each unit is followed by
              project work, artintegration worksheet, and scaffolded
              self-assessment toolkits. centered around music, movement, play,
              and learning through doing and experience.
              <br />
              From the preparatory stage onwards, the focus shifts to weaving
              more intense literary experiences but we retain our adherence to
              policy guidelines by integrating art, life skill projects, and
              sustainability -development goal driven projects. We also
              introduce two assessments for learning— one for each
              semester—emphasizing on language learning in real-life context.
              <br />
              The series emphasizes building language skills along with
              emotional and social skills. The assessments include metacognitive
              toolkits so learners can reflect and react to their own learning
              journeys.
              <br />
              The coursebooks for Grades 1 through 8 are seamlessly woven with
              our pre-primary literacy courseware. We have focused tirelessly on
              continuity, seamlessness, and ingenuity of content.
            </span>
          }
          bgColor={"rgb(230, 186, 85)"}
          listOne={"Grades"}
          listTwo={"1-8"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#e6ba55]">
        <div ref={keyFeatures} id="keyFeature" className="w-[60%]">
          <SectionTwo
            content={
              <Content
                bgColor={"rgb(230, 186, 85)"}
                headLine={"TEXTBOOK"}
                points={[
                  "Thematic lessons and poem, LSRW skill integration, phonics through reading in the early classes",
                  "Integration of NCF guidelines, making assessment a part of learning",
                ]}
              />
            }
            bgColor={"rgb(230, 186, 85)"}
          />
        </div>
      </div>
      <div className="flex flex-col bg-[#d1d5db]">
        <div
          ref={Advantages}
          style={{ backgroundColor: "rgb(209 213 219)" }}
          id="Advantages"
          className="w-[97%]"
        >
          <SectionTwo
            content={
              <Content
                headLine={"TEACHER RESOURCE KIT"}
                points={[
                  "Printed manuals with exhaustive lesson plans, answer keys, and worksheets",
                  "Thematically-linked learning extensions",
                  "Varied and interesting tasks (creative, logical, comprehension)",
                  "Focused skill strengthening",
                ]}
              />
            }
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
            <CardOne
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
            <CardOne
              headLine={"STUDENTS’ RESOURCES"}
              points={[
                "Chapter PDFs",
                "Animations",
                "Classroom Audio Support for Stories, Poems, Phonics & Listening Tasks",
              ]}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center py-6 md:p-4">
            <CardSecond
              image={img8}
              headLine={"Digital Content"}
              para={
                "It includes e-books, animations, interactive e-worksheets, and e-activities."
              }
            />
            <CardSecond
              image={img1}
              headLine={"Benefits"}
              para={
                "Language-Learning Solutions with ‘Listen’ ‘Practice’ ‘Learn’ methodology to build pronunciation."
              }
            />
            <CardSecond
              image={img2}
              headLine={"TEST FOR AGES 8+"}
              para={
                "The tests are designed to: assess the general English-language proficiency of young students"
              }
            />
            <CardSecond
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
            bgColor={"rgb(230, 186, 85)"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default English_weaves;
