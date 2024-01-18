import React from "react";
// import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/zoom/Book Banner.png";
import logo from "../../../assets/curriculum/zoom/zoomIcon.png";
import img1 from "../../../assets/curriculum/zoom/1.png";
import img2 from "../../../assets/curriculum/zoom/2.png";
import img3 from "../../../assets/curriculum/zoom/3.png";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import img7 from "../../../assets/curriculum/zoom/teacher resources.png";
import img8 from "../../../assets/curriculum/zoom/digital content.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import CardOne from "../../BookTemplate/CardOne";
import CardSecond from "../../BookTemplate/CardSecond";
import Banner from "../../BookTemplate/Banner";
import Content2 from "../../BookTemplate/Content2";
import SectionTwo from "../../BookTemplate/SectionTwo";
import MainContent from "../../BookTemplate/MainContent";

const Zoom = ({ sOpen }) => {
  return (
    <div
      className={`w-full flex flex-col sm:px-[2rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
    >
      <Banner image={book1} bgColor={"rgb(250 204 21)"} />
      <div className="flex grid-cols-3 place-items-center justify-center gap-3">
        {/* <a target="#key features"></a> */}
        <BasicButton
          text={"KEY FEATURES"}
          bgColor={"rgb(250 204 21)"}
          textColor={"black"}
        />
        <BasicButton
          text={"ADVANTAGES"}
          bgColor={"rgb(250 204 21)"}
          textColor={"black"}
        />
        <BasicButton
          text={"UNIQUE ADVANTAGES"}
          bgColor={"rgb(250 204 21)"}
          textColor={"black"}
        />
      </div>
      <div className="flex sm:flex-row flex-col gap-1 justify-center px-8 pr-16 py-4 bg-gray-200">
        <MainContent
          image={logo}
          para={
            "Zoom! Plus: The most pioneering indicator of a paradigm shift in learning and teaching, as stated by the National Curriculum Framework 2022, is the combining of Grades 1 and 2 with the pre-primary years. It is not merely a juxtaposition of academic years; it comes with fresh perspectives on how children experience and learn. More importantly, it comes with a wellplanned bridging of pre-primary years with grades 1 and 2. In Zoom! Plus we have imbibed all the sterling features of the NCF in letter and spirit. It is a course centered around music, movement, play, and learning through doing and experience."
          }
          bgColor={"rgb(250 204 21)"}
          listOne={"Preschool 1, 2, 3"}
          listTwo={"Grade 1, 2"}
        />
        {/* <div className="gap-4 m-3">
          <img src={logo} className="w-56 h-auto" alt="" />
          <br />
          <div className="flex place-items-center justify-center border rounded-full bg-yellow-400 text-black font-semibold w-fit py-4 px-3">
            <ul>
              <li>Preschool 1-3</li>
              <li>Grade 1-2</li>
            </ul>
          </div>
        </div>
        <span className="sm:w-4/5 justify-center">
          <span className="text-orange-500 font-semibold">Zoom! Plus</span> The
          most pioneering indicator of a paradigm shift in learning and
          teaching, as stated by the National Curriculum Framework 2022, is the
          combining of Grades 1 and 2 with the pre-primary years. It is not
          merely a juxtaposition of academic years; it comes with fresh
          perspectives on how children experience and learn. More importantly,
          it comes with a wellplanned bridging of pre-primary years with grades
          1 and 2. In{" "}
          <span className="text-orange-500 font-semibold">Zoom! Plus</span> we
          have imbibed all the sterling features of the NCF in letter and
          spirit. It is a course centered around music, movement, play, and
          learning through doing and experience.
        </span>
      </div> */}
      </div>
      <SectionTwo />
      <div className="flex flex-col justify-center items-center">
        <Content2
          bgColor={"rgb(209 213 219)"}
          headLine={"COMPONENTS"}
          para={
            "Print Learning Material consists of a comprehensive set of 9 books in Preschool 1, 2, and 3, covering the following subjects: Phonics, Literacy, Numeracy, General Awareness, Art and Craft, Storybook, Rhymes, Handwriting, and Hindi. The pack for preschool also includes engaging supplementary materials like flashcards, fun mats, board games, and stickers to enhance the learning experience. Books for Grades 1 and 2 include Literacy, Numeracy, General Awareness, Art, Craft, Handwriting, and Hindi. The pack includes board games and songs to facilitate a play-based experience. Songs are accessible through QR codes, providing an interactive experience that combines music, movement, and play within the curriculum"
          }
        />
      </div>
      <div className="flex flex-row justify-center w-full bg-yellow-400">
        <Content2
          image={img7}
          headLine={"TEACHERS’ RESOURCE PACKAGE"}
          para={
            "Zoom! Plus offers a comprehensive teaching package that includes teachers' manuals with bridge plans, workbooks, and activity folders. This curriculum aligns seamlessly with the fiveyear. Foundational program and furthers the vision of twenty-first-century ideals. It embraces a progressive, empathetic, inclusive, and child-oriented approach, ensuring a holistic and effective educational experience."
          }
          bgColor={"rgb(250 204 21)"}
        />
      </div>
      <div className="bg-gray-700" id="unique advantages">
        <div className="flex flex-col place-items-center justify-center">
          <img
            src={img4}
            className="w-40 h-auto border-2 flex gap-3 p-1 bg-white rounded-b-lg"
            alt=""
          />
          <span className="text-lg font-extrabold flex items-center justify-center text-white">
            21st Century School OS Lite
          </span>
          <span className="text-xl flex items-center justify-center text-white">
            Digital Platform + Cubetto* + Pickatale App + Zaner-Bloser
          </span>
        </div>
        <br />
        <div className="flex grid-row place-items-center justify-center gap-6">
          <CardOne
            headLine={"TEACHERS’ RESOURCES"}
            points={[
              "E-book",
              "Animations",
              "Worksheets",
              "Activities",
              "Teacher manual** with bridge plan",
              "One month Vidyapravesh-inspired bridge plan for Grade 1",
            ]}
          />
          <CardOne
            headLine={"STUDENTS’ RESOURCES"}
            points={[
              "Chapter PDFs",
              "Animations",
              "Worksheets",
              "Activities",
              "Boards Games",
              "Additional songs and rhymes",
            ]}
          />
          <CardOne
            headLine={"PARENTS’ RESOURCES"}
            points={[
              "Parent activity booklets for Preschool 1, 2 and 3",
              "Animations through QR codes for Preschool 1, 2 and 3",
            ]}
          />
        </div>
        <div className="flex sm:flex-row flex-col m-4 p-2 gap-6 left-6">
          <CardSecond
            image={img8}
            headLine={"Digital Content"}
            para={
              "It includes e-books, animations, interactive e-worksheets, and e-activities."
            }
          />
          <CardSecond
            image={img1}
            headLine={"Cubetto curriculum"}
            para={
              "It used to learn basic coding and problem-solving though play and adventure."
            }
          />
          <CardSecond
            image={img2}
            headLine={"Pickatale App"}
            para={"It connects school learning to home learning."}
          />
          <CardSecond
            image={img3}
            headLine={"Zaner-Bloser Eupheus Handwriting Book"}
            para={"It used to develop handwriting skills."}
          />
        </div>
      </div>
      <div className="flex items-center justify-center mb-3">
        <a href={pdf}>
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
