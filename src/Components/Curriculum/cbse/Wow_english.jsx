import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/cbse/wowEnglish/wow english.png";
import logo from "../../../assets/curriculum/cbse/wowEnglish/wowEnglishIcon.png";
// import img6 from "../../../assets/curriculum/zoom/key features.png";
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

const Wow_english = () => {
  const keyFeatures = useRef(null);
  const Advantages = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner image={book1} bgColor={"rgb(100, 201, 97)"} Ncficon={true} />
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
            bgColor={"rgb(100, 201, 97)"}
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
            bgColor={"rgb(100, 201, 97)"}
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
            bgColor={"rgb(100, 201, 97)"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              <span className="font-bold text-green-600">WOW! English</span>{" "}
              aims to make the learning of English language a fun and rewarding
              journey. The series progressively leads learners to connect
              language to life. It covers the major language areas such as
              vocabulary, grammar, reading, writing, and phonemic awareness.
              <br />
              The learning process is organised in ten themes which pupils can
              easily relate to. The use of colourful illustrations stimulates
              thinking and encourages participatory learning.
            </span>
          }
          bgColor={"rgb(100, 201, 97)"}
          listOne={"Grades"}
          listTwo={"1-8"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#64c961]">
        <div ref={keyFeatures} id="keyFeature" className="w-[60%]">
          <Section
            content={
              <KeyPoints
                bgColor={"rgb(100, 201, 97)"}
                headLine={"TEXTBOOK"}
                points={[
                  "Thematic lessons and poem, LSRW skill integration, phonics through reading in the early classes",
                  "Integration of NCP guidelines making assessment a part of learning",
                ]}
              />
            }
            bgColor={"rgb(100, 201, 97)"}
          />
        </div>
      </div>
      <div className="flex flex-col  bg-gray-200">
        <div ref={Advantages} id="advantages" className="w-[97%]">
          <Section
            content={
              <KeyPoints
                bgColor={"rgb(229 231 235)"}
                headLine={"TEACHER RESOURCE KIT"}
                points={[
                  "Printed manuals with exhaustive lesson plans, answer keys, and worksheets",
                ]}
              />
            }
            bgColor={"rgb(229 231 235)"}
          />
        </div>
      </div>
      <div className="flex flex-col bg-[#64c961]">
        <div className="w-[89%]">
          <Section
            content={
              <KeyPoints
                bgColor={"rgb(100, 201, 97)"}
                headLine={"WORKBOOK"}
                points={[
                  "Textbook-linked extended exercises",
                  "Varied and interesting tasks (creative, logical, comprehension)",
                  "Focused skill strengthening",
                ]}
              />
            }
            bgColor={"rgb(100, 201, 97)"}
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
            bgColor={"rgb(100, 201, 97)"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Wow_english;

// import React from "react";
// import { Circle } from "@mui/icons-material";
// import wow_english from "../../../assets/curriculum/cbse/wow_english/wow_english.jpg";
// import book1 from "../../../assets/curriculum/cbse/wow_english/book1.png";
// import book2 from "../../../assets/curriculum/cbse/wow_english/book2.png";

// const Wow_english = ({ sOpen }) => {
//   return (
//     <>
//       <div
//         className={`w-full ${
//           sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
//         } flex flex-col sm:pl-[3rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
//       >
//         <img src={wow_english} className="w-full h-auto" alt="" />
//         <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
//           <span className="sm:w-4/5 w-full">
//             <span className="text-[#2f8b2d] font-semibold">WOW! English </span>
//             aims to make learning of English language a fun and rewarding
//             journey. <br /> The series progressively leads learners to connect
//             language to life. It covers the major language areas such as
//             vocabulary, grammar, reading, writing, and phonemic awareness.{" "}
//             <br /> <br />
//             The learning process is organised in ten themes which pupils can
//             easily relate to. The use of colourful illustrations stimulates
//             thinking and encourages participatory learning.
//           </span>
//          {/* <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#2f8b2d] py-2">
//             <div className="flex flex-col gap-[2px] ">
//               <span className="text-white font-semibold">Title</span>
//               <span className="text-black font-semibold ">Book 1</span>
//               <span className="text-black font-semibold">Book 2</span>
//               <span className="text-black font-semibold">Book 3</span>
//               <span className="text-black font-semibold">Book 4</span>
//               <span className="text-black font-semibold">Book 5</span>
//               <span className="text-black font-semibold">Book 6 </span>
//               <span className="text-black font-semibold">Book 7</span>
//               <span className="text-black font-semibold">Book 8</span>
//             </div>
//             <div className="flex flex-col gap-[2px]">
//               <span className="text-white font-semibold">Price</span>
//               <span className="text-black font-semibold">355</span>
//               <span className="text-black font-semibold">385</span>
//               <span className="text-black font-semibold">410</span>
//               <span className="text-black font-semibold">440</span>
//               <span className="text-black font-semibold">465</span>
//               <span className="text-black font-semibold">485</span>
//               <span className="text-black font-semibold">505</span>
//               <span className="text-black font-semibold">520</span>
//             </div>
//           </div>*/}
//         </div>

//         <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
//           <div className="flex flex-col sm:w-4/12 w-full">
//             <span className="px-3 ml-3 py-1 bg-[#1f531e] rounded-t-lg w-fit text-white">
//               TEACHER RESOURCE KIT
//             </span>
//             <ul className="px-2 py-1 w-full rounded-md bg-[#2f8b2d] text-white">
//               <li>
//                 <Circle className="!text-[0.5rem] text-white" /> &nbsp; Teacher
//                 support manual
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-white" /> &nbsp; Consists
//                 of activities to support concepts and skills incorporated in
//                 textbooks
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-white" /> &nbsp; Includes
//                 guidelines, assessments, answers and checklist
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-white" /> &nbsp; Relevant
//                 resources to aid learning process
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-white" /> &nbsp; Includes
//                 resources for teachers and learners
//               </li>
//             </ul>
//           </div>
//           <div className="flex flex-col sm:w-[30%] w-full">
//             <span className="px-3 ml-3 py-1 bg-[#1f531e] rounded-t-lg w-fit text-white">
//               TEXTBOOK
//             </span>
//             <ul className="px-2 py-1 w-full rounded-md bg-[#2f8b2d] text-white">
//               <li>
//                 <Circle className="!text-[0.5rem] text-white" /> &nbsp; Thematic
//                 lessons and poems
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-white" /> &nbsp; Concept
//                 elaborations
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-white" /> &nbsp; Wide
//                 range of skill-building activities ranging from LSRW to life
//                 skills, phonics, free reading, and HOTS
//               </li>
//             </ul>
//           </div>
//           <div className="flex flex-col sm:w-[28%] w-full">
//             <span className="px-3 ml-3 py-1 bg-[#1f531e] rounded-t-lg w-fit text-white">
//               WORKBOOK
//             </span>
//             <ul className="px-2 py-1 w-full rounded-md bg-[#2f8b2d] text-white">
//               <li>
//                 <Circle className="!text-[0.5rem] text-white" /> &nbsp; Textbook
//                 linked extended exercises
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-white" /> &nbsp; Varied
//                 and interesting tasks (creative, logical, comprehension)
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-white" /> &nbsp; Focussed
//                 skill strengthening
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
//           <div className="flex flex-col sm:w-8/12 w-full justify-end  items-center">
//             <div className="m-3 flex flex-row w-full ">
//               <span className="px-3 ml-3 py-1 border-[#2f8b2d] rounded-t-lg w-fit text-white border-2 items-center">
//                 <center>
//                   <img src={book2} className="h-10" alt="" />
//                 </center>

//                 <p className="bold text-black text-xs text-center">
//                   The world’s # 1 multimedia, <br />
//                   multilingual, multi-platform and multi-awarded language <br />
//                   learning course for children. <br />
//                 </p>
//               </span>
//               <p className="px-2 py-1 w-full rounded-md bg-[#2f8b2d] text-white text-xs">
//                 <span className="text-sm">This is till Class 4</span> <br />
//                 Using captivating cartoon characters that tell a video story,
//                 MUZZY BBC uses a natural immersion approach to language learning
//                 that mimics the process we all used to acquire our native
//                 tongue. The unique MUZZY design is effective for visual/spatial,
//                 verbal, kinesthetic, musical, and logical/mathematical learners.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-2 items-center w-full">
//           <div className="flex flex-col items-center sm:w-5/12 w-full">
//             <img src={book1} className="h-auto" alt="" />
//           </div>
//           <div className="flex sm:w-6/12 w-full">
//             <div className="flex flex-col">
//               <span className="px-3 ml-3 py-1 border-[#2f8b2d] border-2 rounded-t-lg w-fit">
//                 TEXTBOOK
//               </span>
//               <ul className="px-2 py-1 w-full rounded-l-lg bg-[#2f8b2d] text-white text-justify">
//                 <li>
//                   <span className="text-xs p-2"> TEST FOR AGES 8-10</span>
//                 </li>{" "}
//                 <br />
//                 <li>
//                   <span className="text-xs">
//                     {" "}
//                     For young students, to measure current English skills and
//                     provide a foundation for future success.
//                   </span>
//                 </li>{" "}
//                 <br />
//                 <li>
//                   <span className="text-xs">
//                     Designed to assess the general English-language proficiency
//                     of young students aged 8+ in reading, listening and
//                     speaking, the TOEFL Primary tests provide support for
//                     teaching and learning with information about your students’
//                     abilities in relation to international standards.
//                   </span>
//                 </li>
//               </ul>
//             </div>
//             <div className="flex flex-col">
//               <span className="px-3 ml-3 py-1  border-[#2f8b2d] border-2 rounded-t-lg w-fit">
//                 TEXTBOOK
//               </span>
//               <ul className="px-2 py-4 w-full rounded-r-lg bg-[#1f531e] text-white text-justify">
//                 <li>
//                   <span className="text-xs p-2">TEST FOR AGES 11-14 </span>
//                 </li>
//                 <li>
//                   <span className="text-xs">
//                     For middle school to early high school level
//                     English-language programs.
//                   </span>
//                 </li>
//                 <li>
//                   <span className="text-xs">
//                     The TOEFL Junior tests provide an accurate and reliable
//                     measure of your students’ academic and social English skills
//                     and abilities in a school setting.
//                   </span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Wow_english;
