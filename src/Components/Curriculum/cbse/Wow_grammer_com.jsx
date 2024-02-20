import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/cbse/wow_grammer_com/wow grammar.png";
import logo from "../../../assets/curriculum/cbse/wow_grammer_com/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import CardSecond from "../../BookTemplate/CardSecond";
import img8 from "../../../assets/curriculum/cbse/english_weaves/digital content.png";
import img2 from "../../../assets/curriculum/cbse/english_weaves/toeflprimary.png";
import img3 from "../../../assets/curriculum/cbse/english_weaves/toefljunior.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import Banner from "../../BookTemplate/Banner";
import SectionTwo from "../../BookTemplate/SectionTwo";
import MainContent from "../../BookTemplate/MainContent";
import CardOne from "../../BookTemplate/CardOne";
import Content from "../../BookTemplate/Content";

const Wow_grammer_com = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner image={book1} bgColor={"rgb(133, 92, 209)"} />
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
            bgColor={"rgb(133, 92, 209)"}
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
            bgColor={"rgb(133, 92, 209)"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              <span className="font-bold text-[#855cd1]">
                WOW! Grammar & Composition,{" "}
              </span>
              brings together structural and functional grammar through
              systematic practice and fun activities. Ideal for young learners
              in the early stages of English language learning, the series is
              based on a unique curriculum design that recycles grammar points
              at every level and builds on previous understanding.
            </span>
          }
          bgColor={"rgb(133, 92, 209)"}
          listOne={"Grades"}
          listTwo={"1-8"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#855cd1]">
        <div ref={keyFeatures} id="keyFeature" className="w-[60%]">
          <SectionTwo
            content={
              <Content
                bgColor={"rgb(133, 92, 209)"}
                headLine={"Key features"}
                points={[
                  "Spiralling curriculum design",
                  "Lots of practice and revision through engagingly varied task types",
                  "Each topic is presented through real-life contexts",
                  "Colourful boxes and tables make remembering grammar forms, rules, and exceptions easier",
                  "Contextualized grammar practice for communicative purposes",
                  "Highly illustrated games along with oral and writing activities",
                  "Practice in reading comprehension and guided writing tasks",
                ]}
              />
            }
            bgColor={"rgb(133, 92, 209)"}
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
              Digital Platform + TOEFL*
            </span>
          </div>
          <br />

          <div className="flex flex-col sm:flex-row gap-4 px-5 justify-center items-center">
            <CardOne
              headLine={"TEACHERS’ RESOURCES"}
              points={[
                "E-book",
                "Animations",
                "Audio clips of Songs and Chants given in Grades 1 and 2",
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
                "Audio clips of Songs and Chants given in Grades 1 and 2",
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
            bgColor={"rgb(133, 92, 209)"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Wow_grammer_com;

// import React from "react";
// import { Circle } from "@mui/icons-material";

// import book2 from "../../../assets/curriculum/cbse/wow_grammer_com/book1.png";
// import wow_com from "../../../assets/curriculum/cbse/wow_grammer_com/Curriculum Catalogue_2021-22_Page_22.jpg";
// import girl from "../../../assets/curriculum/cbse/wow_grammer_com/girl.png";
// import fiction from "../../../assets/curriculum/cbse/wow_grammer_com/fiction.png";

// const Wow_grammer_com = ({ sOpen }) => {
//   return (
//     <>
//       <div
//         className={`w-full ${
//           sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
//         } flex flex-col sm:pl-[3rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
//       >
//         <img src={wow_com} className="w-full h-auto" alt="" />
//         <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
//           <span className="sm:w-4/5 w-full">
//             <span className="text-[#5a237f] font-semibold">
//               WOW! Grammar & Composition
//             </span>
//             brings together structural and functional grammar through systematic
//             practice and fun activities. Ideal for young learners in the early
//             stages of English language learning, the series is based on a unique
//             curriculum design that recycles grammar points at every level and
//             builds on previous understanding.
//           </span>
//           {/* <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#8972ac] py-2">
//             <div className="flex flex-col gap-[2px] ">
//               <span className="text-white font-semibold">Title</span>
//               <span className="text-black font-semibold">Book 1</span>
//               <span className="text-black font-semibold">Book 2</span>
//               <span className="text-black font-semibold">Book 3</span>
//               <span className="text-black font-semibold">Book 4</span>
//               <span className="text-black font-semibold">Book 5</span>
//               <span className="text-black font-semibold">Book 6 </span>
//               <span className="text-black font-semibold">Book 7</span>
//             </div>
//             <div className="flex flex-col gap-[2px]">
//               <span className="text-white font-semibold">Price</span>
//               <span className="text-black font-semibold">205</span>
//               <span className="text-black font-semibold">260</span>
//               <span className="text-black font-semibold">285</span>
//               <span className="text-black font-semibold">375</span>
//               <span className="text-black font-semibold">395</span>
//               <span className="text-black font-semibold">405</span>
//               <span className="text-black font-semibold">415</span>
//             </div>
//           </div> */}
//         </div>

//         <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-4 items-center w-full">
//           <div className="flex flex-col items-center sm:w-4/12 w-full">
//             <div className="m-3 flex flex-col w-full">
//               <span className="px-3 ml-3 py-1 bg-[#5a427e] rounded-t-lg w-fit text-white">
//                 KEY FEATURES
//               </span>
//               <ul className="px-2 py-1 w-full rounded-md bg-[#c7b1e9] text-black">
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp; Help
//                   Spiralling curriculum design
//                 </li>
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp; Lots
//                   of practice and revision through engagingly varied task types
//                 </li>
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp;
//                   Colourful boxes and tables make remembering grammar forms,
//                   rules, and exceptions easier
//                 </li>
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp;
//                   Contextualized grammar practice for communicative purposes
//                 </li>
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp; Highly
//                   illustrated games along with oral and writing activities
//                 </li>
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp;
//                   Practice in reading comprehension and guided writing tasks
//                 </li>
//                 <li>
//                   <span className="font-bold">Teacher's Resource Pack </span>-
//                   Lesson plans | Answer keys | Revision tests | Flipbook with
//                   concept animations
//                 </li>
//               </ul>
//             </div>
//             <div className="m-3 flex flex-col w-full">
//               <img src={book2} className=" h-auto" alt="" />
//             </div>
//           </div>
//           <div className="flex flex-col items-center sm:w-7/12 w-full m-4">
//             <div className="m-3 flex flex-col w-full">
//               <span className="px-3 ml-3 py-1 bg-[#5a427e] rounded-t-lg w-fit text-white">
//                 SUPPLEMENTED WITH
//               </span>
//               <div className="px-2 py-1 w-full flex rounded-t-lg bg-[#c7b1e9] text-black">
//                 <div className="flex flex-col items-center w-1/2 rounded-l-lg ">
//                   <img src={girl} className="h-auto" alt="" />
//                 </div>
//                 <div className="flex flex-col justify-center w-1/2 bg-[#c7b1e9] ">
//                   <img src={fiction} className="h-auto w-40 " alt="" />
//                   <p className="">For inculcating the habit of reading</p>
//                 </div>
//               </div>
//               <div className="pl-2 sm:pl-12 py-1 w-full flex justify-items-center bg-[#c7b1e9]">
//                 <h1 className="bg-[#5a427e] m-4  font-bold rounded-full p-2 w-[80%] text-center text-white ">
//                   Our 6-step methodology
//                 </h1>
//               </div>
//               <div className="px-2 py-1 w-full flex bg-[#c7b1e9]">
//                 <div className="flex flex-col  w-1/2 p-3 m-3 border-2 rounded-lg border-[skyblue] bg-white  ">
//                   <p className="text-xl">Read </p>

//                   <p className="text-sm">The Chapter</p>
//                   <br />
//                   <p className="text-[9px]">
//                     New chapters of 3 books (different levels) are released
//                     weekly. Fiction Express is accessible for dyslexic readers
//                     and includes a glossary of 40-80 words per chapter.
//                   </p>
//                 </div>
//                 <div className="flex flex-col w-1/2 m-3 p-3 border-2 rounded-lg border-[skyblue] bg-white">
//                   <p className="text-xl">VOTE </p>

//                   <p className="text-sm">on the plot</p>
//                   <br />
//                   <p className="text-[9px]">
//                     New chapters of 3 books (different levels) are released
//                     weekly. Fiction Express is accessible for dyslexic readers
//                     and includes a glossary of 40-80 words per chapter.
//                   </p>
//                 </div>
//               </div>
//               <div className="px-2 py-1 w-full flex bg-[#c7b1e9]">
//                 <div className="flex flex-col w-1/2 m-3 p-3 border-2 rounded-lg border-[skyblue] bg-white">
//                   <p className="text-xl">ANSWER </p>

//                   <p className="text-sm">the quiz</p>
//                   <br />
//                   <p className="text-[9px]">
//                     New chapters of 3 books (different levels) are released
//                     weekly. Fiction Express is accessible for dyslexic readers
//                     and includes a glossary of 40-80 words per chapter.
//                   </p>
//                 </div>
//                 <div className="flex flex-col w-1/2 m-3 p-3 border-2 rounded-lg border-[skyblue] bg-white">
//                   <p className="text-xl">TALK </p>

//                   <p className="text-sm">to the author</p>
//                   <br />
//                   <p className="text-[9px]">
//                     Through the forum, students have live conversations with the
//                     authors and other students worldwide. They can share ideas,
//                     opinions and thoughts about the book.
//                   </p>
//                 </div>
//               </div>
//               <div className="px-2 py-1 w-full flex rounded-b-lg bg-[#c7b1e9]">
//                 <div className="flex flex-col w-1/2 m-3 p-3 border-2 rounded-lg border-[skyblue] bg-white">
//                   <p className="text-xl">ENJOY </p>

//                   <p className="text-sm">the activities</p>
//                   <br />
//                   <p className="text-[9px]">
//                     Every chapter includes a set of flexible and useful
//                     resources that give teachers the option to tie-in Fiction
//                     Express into any school focus and scheme of work.
//                   </p>
//                 </div>
//                 <div className="flex flex-col w-1/2 m-3 p-3 border-2 rounded-lg border-[skyblue] bg-white">
//                   <p className="text-xl">MEASURE </p>

//                   <p className="text-sm">the impact</p>
//                   <br />
//                   <p className="text-[9px]">
//                     Progress is shown on the dashboard highlighting the
//                     performance at individual or class level: readings, votes,
//                     quiz results and forum interactions.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Wow_grammer_com;
