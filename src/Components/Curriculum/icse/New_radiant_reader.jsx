import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/icse/new_radiant_reader/icse radiant reader.png";
import logo from "../../../assets/curriculum/icse/new_radiant_reader/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner2 from "../../BookTemplate/Banner2";
import SectionTwo from "../../BookTemplate/SectionTwo";
import MainContent from "../../BookTemplate/MainContent";
import Content from "../../BookTemplate/Content";
import CardOne from "../../BookTemplate/CardOne";

const New_radiant_reader = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner2 image={book1} bgColor={"#f3a34e"} />
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
            bgColor={"#f3a34e"}
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
            bgColor={"#f3a34e"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              Based on a time-tested and popular school study material for
              nearly hundred years, this new edition of the{" "}
              <span className="font-bold text-[#f3a34e]">
                New Radiant Readers,{" "}
              </span>
              is a literature series of 2 Primers, 8 Readers, and 8 Workbooks.
              This package is for classes K-8 and for the ICSE schools seeking
              to familiarize students with classical and contemporary literary
              texts. All the lessons in this series are based on the phonic
              pattern. This series follows the recommendations of the ICSE
              syllabus and all required themes and skills have been fully
              covered in an interesting manner.
            </span>
          }
          bgColor={"#f3a34e"}
          listOne={"Grades"}
          listTwo={"1-8"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#f3a34e]">
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
                  "The Readers carry stories, folktales, and biographies based on the phonic pattern and poems of action and rhythm. Comprehension exercises practise usage of language. Vocabulary and Grammar drills are graded to match students’ mental abilities while giving opportunities for sustained creative writing practice.",
                  "The Workbooks are linked to the Readers lesson-wise. They carry vocabulary, grammar, and writing exercises that extend from each lesson of the Reader. Invigorating listening and speaking activities help to refine aural-oral skills in the learner.",
                ]}
              />
            }
            bgColor={"rgb(243, 163, 78)"}
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
              Digital Platform + Radiantly App
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 p-5 justify-center items-center">
            <CardOne
              headLine={"TEACHERS’ RESOURCES"}
              points={["E-book", "Answer keys", "Test Generators"]}
            />
            <CardOne headLine={"STUDENTS’ RESOURCES"} points={["E-book"]} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#f3a34e"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default New_radiant_reader;

// import React from "react";
// import { Circle } from "@mui/icons-material";
// import book1 from "../../../assets/curriculum/icse/new_radiant_reader/1.png";
// import book2 from "../../../assets/curriculum/icse/new_radiant_reader/2.png";
// import book3 from "../../../assets/curriculum/icse/new_radiant_reader/3.png";
// import book4 from "../../../assets/curriculum/icse/new_radiant_reader/4.png";
// import englishvibes from "../../../assets/curriculum/icse/new_radiant_reader/Curriculum Catalogue_2021-22_Page_46.jpg";

// const New_radiant_reader = ({ sOpen }) => {
//   return (
//     <>
//       <div
//         className={`w-full ${
//           sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
//         } flex flex-col sm:pl-[3rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
//       >
//         <img src={englishvibes} className="w-full h-auto" alt="" />
//         <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
//           <span className="sm:w-4/5 w-full">
//             Based on a time-tested and popular school study material for nearly
//             hundred years, this new edition of the &nbsp;{" "}
//             <span className="text-[#f4a267] font-semibold">
//               New Radiant Readers
//             </span>{" "}
//             &nbsp;, is a literature series of 2 Primers, 8 Readers and 8
//             Workbooks. This package is for classes K-8 and for the ICSE schools
//             seeking to familiarize students with classical and contemporary
//             literary texts. All the lessons in this series are based on the
//             phonic pattern. This series follows the recommendations of the ICSE
//             syllabus and all required themes and skills have been fully covered
//             in an interesting manner.
//           </span>
//           {/* <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#ffa463] py-2">
//             <div className="flex flex-col gap-[2px] ">
//               <span className="text-white font-semibold">Title</span>
//               <span className="text-black font-semibold">Book 1</span>
//               <span className="text-black font-semibold">Book 2</span>
//               <span className="text-black font-semibold">Book 3</span>
//               <span className="text-black font-semibold">Book 4</span>
//               <span className="text-black font-semibold">Book 5</span>
//               <span className="text-black font-semibold">Book 6</span>
//               <span className="text-black font-semibold">Book 7</span>
//               <span className="text-black font-semibold">Book 8</span>
//             </div>
//             <div className="flex flex-col gap-[2px]">
//               <span className="text-white font-semibold">Price</span>
//               <span className="text-black font-semibold">235</span>
//               <span className="text-black font-semibold">250</span>
//               <span className="text-black font-semibold">265</span>
//               <span className="text-black font-semibold">275</span>
//               <span className="text-black font-semibold">285</span>
//               <span className="text-black font-semibold">300</span>
//               <span className="text-black font-semibold">310</span>
//               <span className="text-black font-semibold">325</span>
//             </div>
//           </div> */}
//         </div>
//         <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
//           <div className="flex flex-col sm:w-[50%] w-full m-4">
//             <span className="px-3 ml-3 py-1 bg-[#f4a267] rounded-t-lg w-fit text-white">
//               KEY FEATURES
//             </span>
//             <ul className="px-2 py-1 w-full rounded-md bg-[#ffc59b] text-black">
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; • The{" "}
//                 <b>Readers</b> carry stories, folktales, and biographies based
//                 on the phonic pattern and poems of action and rhythm.
//                 Comprehension exercises practise usage of language. Vocabulary
//                 and Grammar drills are graded to match students’ mental
//                 abilities while giving opportunities for sustained creative
//                 writing practice.
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; The{" "}
//                 <b>Workbooks</b> are linked to the Readers lesson-wise. They
//                 carry vocabulary, grammar, and writing exercises that extend
//                 from each lesson of the Reader. Invigorating listening and
//                 speaking activities help to refine aural-oral skills in the
//                 learner.
//               </li>
//             </ul>
//           </div>
//           <div className="flex flex-col sm:w-6/12 w-full">
//             <span className="bg-[#ff964c] p-4 m-4 rounded-lg">
//               <img src={book4} className="w-[80%] h-auto m-auto" alt="" />
//               <span className="flex justify-center text-white">
//                 Workbooks for classes 1-8
//               </span>
//             </span>
//             <span className="px-3 ml-3 py-1 bg-[#d47e41] rounded-t-lg w-fit text-white">
//               KIDS AND PARENTAL SUPPORT
//             </span>
//             <span className="p-6 w-[80%] rounded-lg bg-[#ff964c] text-black">
//               <img src={book3} className="w-[80%] h-auto m-auto" alt="" />
//               <span className="text-white">
//                 A.I.-Powered Adaptive App to improve your grammar skills in an
//                 interactive and fun way
//               </span>
//             </span>
//           </div>
//         </div>
//         <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
//           <div className="flex flex-col sm:w-6/12 w-full">
//             <img src={book1} className="w-[80%] h-auto" alt="" />
//           </div>
//           <div className="flex flex-col sm:w-[50%] w-full">
//             <img src={book2} className="w-[80%] h-auto" alt="" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default New_radiant_reader;
