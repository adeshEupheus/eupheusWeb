import React, { useRef } from "react";
// import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/zoom/Book Banner.png";
import logo from "../../../assets/curriculum/zoom/zoomIcon.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import img7 from "../../../assets/curriculum/zoom/teacher resources.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import Banner from "../../BookTemplate/Banner";
import Paragraph from "../../BookTemplate/Paragraph";
import Section from "../../BookTemplate/Section";
import MainContent from "../../BookTemplate/MainContent";
import OsLite from "../../BookTemplate/OsLite";
import KeyPoints from "../../BookTemplate/KeyPoints";

const Zoom = () => {
  const keyFeatures = useRef(null);
  const Advantages = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner image={book1} bgColor={"rgb(250 204 21)"} Ncficon={true} />
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
            bgColor={"rgb(250 204 21)"}
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
            bgColor={"rgb(250 204 21)"}
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
            bgColor={"rgb(250 204 21)"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              <span className="font-bold text-yellow-400">Zoom! Plus:</span> The
              most pioneering indicator of a paradigm shift in learning and
              teaching, as stated by the National Curriculum Framework 2022, is
              the combining of Grades 1 and 2 with the pre-primary years. It is
              not merely a juxtaposition of academic years; it comes with fresh
              perspectives on how children experience and learn. More
              importantly, it comes with a wellplanned bridging of pre-primary
              years with grades 1 and 2. In Zoom! Plus we have imbibed all the
              sterling features of the NCF in letter and spirit. It is a course
              centered around music, movement, play, and learning through doing
              and experience.
            </span>
          }
          bgColor={"rgb(250 204 21)"}
          listOne={"Preschool 1, 2, 3"}
          listTwo={"Grade 1, 2"}
        />
      </div>
      <div ref={keyFeatures} id="keyFeature">
        <Section
          content={
            <KeyPoints
              bgColor={"rgb(250 204 21)"}
              headLine={"Key Features"}
              subHead={"Areas of focus:"}
              points={[
                "Physical and motor development",
                "Cognitive development",
                "Socio-emotional-ethical development",
                "Cultural/artistic development",
                "Development of communication and early language, literacy, and numeracy",
                "Observation-based teacher assessment",
              ]}
            />
          }
          content2={
            <KeyPoints
              bgColor={"rgb(250 204 21)"}
              subHead={"Ethos of the curriculum:"}
              points={[
                "Physical and motor development",
                "Cognitive development",
                "Socio-emotional-ethical development",
                "Cultural/artistic development",
                "Development of communication and early language, literacy, and numeracy",
                "Observation-based teacher assessment",
              ]}
            />
          }
          bgColor={"rgb(250 204 21)"}
          img={img6}
        />
      </div>
      <div
        className="flex flex-col justify-center items-center"
        ref={Advantages}
        style={{ backgroundColor: "rgb(209 213 219)" }}
        id="Advantages"
      >
        <Paragraph
          bgColor={"rgb(209 213 219)"}
          headLine={"COMPONENTS"}
          para={
            "Print Learning Material consists of a comprehensive set of 9 books in Preschool 1, 2, and 3, covering the following subjects: Phonics, Literacy, Numeracy, General Awareness, Art and Craft, Storybook, Rhymes, Handwriting, and Hindi. The pack for preschool also includes engaging supplementary materials like flashcards, fun mats, board games, and stickers to enhance the learning experience. Books for Grades 1 and 2 include Literacy, Numeracy, General Awareness, Art, Craft, Handwriting, and Hindi. The pack includes board games and songs to facilitate a play-based experience. Songs are accessible through QR codes, providing an interactive experience that combines music, movement, and play within the curriculum"
          }
        />
      </div>
      <div className="flex flex-row justify-center w-full bg-yellow-400">
        <Paragraph
          image={img7}
          headLine={"TEACHERS’ RESOURCE PACKAGE"}
          para={
            <span>
              <span className="font-bold">Zoom! Plus</span> offers a
              comprehensive teaching package that includes teachers' manuals
              with bridge plans, workbooks, and activity folders. This
              curriculum aligns seamlessly with the fiveyear. Foundational
              program and furthers the vision of twenty-first-century ideals. It
              embraces a progressive, empathetic, inclusive, and child-oriented
              approach, ensuring a holistic and effective educational
              experience.
            </span>
          }
          bgColor={"rgb(250 204 21)"}
        />
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
              Digital Platform + Cubetto* + Pickatale App + Zaner-Bloser
            </span>
          </div>
          <br />
          <OsLite />
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"rgb(250 204 21)"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Zoom;
