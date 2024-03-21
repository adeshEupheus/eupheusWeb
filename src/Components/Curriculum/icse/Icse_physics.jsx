import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/icse/icse_physics/Asset 62@3x.png";
import logo from "../../../assets/curriculum/icse/icse_physics/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner from "../../BookTemplate/Banner";
import Section from "../../BookTemplate/Section";
import MainContent from "../../BookTemplate/MainContent";
import KeyPoints from "../../BookTemplate/KeyPoints";
import ResourceCard from "../../BookTemplate/ResourceCard";

const Icse_physics = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner
        image={book1}
        bgColor={"#d45da4"}
        Ncficon={false}
        flexprop={"flex flex-col justify-center items-center pt-3"}
      />
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
            bgColor={"#d45da4"}
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
            bgColor={"#d45da4"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              <span className="font-bold text-[#d45da4]">Icse Physics </span>
              Written specifically for the Council for Indian School Certificate
              Examinations (ICSE) as per the revised secondary syllabus, this
              series provides curriculum coverage for classes 9 and 10. It has
              been written by an eminent and respected author in the discipline
              of Physics.
            </span>
          }
          bgColor={"#d45da4"}
          listOne={"Grades"}
          listTwo={"9-10"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#d45da4]">
        <div
          ref={keyFeatures}
          id="keyFeature"
          className="flex flex-col justify-center items-center w-[60%]"
        >
          <Section
            content={
              <KeyPoints
                headLine={"Key Features"}
                points={[
                  "Written in a very simple, easy-to-understand language, point-wise sequential manner.",
                  "The latest ICSE syllabus has been followed with emphasis on easy explanation of concepts with key facts.",
                  "Text and illustrations of diagrams contribute to the basic understanding of facts, definitions, concepts, and principles of physics and create interest among the students.",
                  "Key terms students need to know are clearly highlighted in the text.",
                  "Comprehensive in-text exercises including conceptual and numerical problems.",
                  "Questions from previous ICSE exams after each chapter prepare students for the board exam.",
                  "Questions modelled on the ICSE exams after each chapter.",
                  "Two Model Test Papers based on the new syllabus for practice have been given at the end of the book.",
                  "Last years' solved ICSE Question Paper has also been provided at the end of the book.",
                ]}
              />
            }
            bgColor={"rgb(212, 93, 164)"}
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
          <div className="flex flex-col sm:flex-row gap-4 p-5 justify-center items-center">
            <ResourceCard
              headLine={"TEACHERS’ RESOURCES"}
              points={[
                "E-book",
                "Model Test Papers",
                "Solved Papers",
                "Extra Chapter Wise Questions for ICSE Physics 9th and 10th",
              ]}
            />
            <ResourceCard
              headLine={"STUDENTS’ RESOURCES"}
              points={["Chapter PDFs", "Model Test Papers", "Solved Papers"]}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center sm:flex-row p-4 px-4">
        <div className="flex border-white rounded-3xl text-base font-semibold justify-center place-items-center bg-[#d45da4] py-2 border-2 items-center drop-shadow-lg">
          <span className="w-full p-5">
            Also available: Basic ICSE PHYSICS LAB MANUAL for Classes 9 and 10
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#d45da4"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Icse_physics;

//#d675af
// import React from "react";
// import { Circle } from "@mui/icons-material";
// import book1 from "../../../assets/curriculum/icse/icse_physics/1.png";
// import book2 from "../../../assets/curriculum/icse/icse_physics/2.png";
// import book3 from "../../../assets/curriculum/icse/icse_physics/3.png";

// import englishvibes from "../../../assets/curriculum/icse/icse_physics/Curriculum Catalogue_2021-22_Page_39.jpg";

// const Icse_physics = ({ sOpen }) => {
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
//             Written specifically for the Council for Indian School Certificate
//             Examinations (ICSE) as per the revised secondary syllabus, this
//             series provides curriculum coverage for classes 9 and 10. It has
//             been written by an eminent and respected author in the discipline of
//             Physics.
//           </span>
//           {/* <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#d675af] py-2">
//             <div className="flex flex-col gap-[2px] ">
//               <span className="text-white font-semibold">Title</span>
//               <span className="text-black font-semibold">Book 1</span>
//               <span className="text-black font-semibold">Book 2</span>
//             </div>
//             <div className="flex flex-col gap-[2px]">
//               <span className="text-white font-semibold">Price</span>
//               <span className="text-black font-semibold">400</span>
//               <span className="text-black font-semibold">415</span>
//             </div>
//           </div> */}
//         </div>
//         <div className="flex flex-col px-4 sm:px-0 w-full ">
//           <span className="px-3 ml-3 py-1 bg-[#b43c84] rounded-t-lg w-fit text-white">
//             KEY FEATURES
//           </span>
//           <div className="flex flex-row  items-center w-[90%] bg-[#d675af] rounded justify-center">
//             <div className=" sm:w-1/2 w-full sm:flex-col">
//               <ul className="px-2 py-1  rounded-md  text-black ">
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp;The{" "}
//                   Written in a very simple, easy-to-understand language,
//                   point-wise sequential manner.
//                 </li>
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp; A list
//                   The latest ICSE syllabus has been followed with emphasis on
//                   easy explanation of concepts with key facts.
//                 </li>
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp;Text
//                   and illustrations of diagrams contribute to the basic
//                   understanding of facts, definitions, concepts, and principles
//                   of physics and create interest among the students.
//                 </li>
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp;Key
//                   terms students need to know are clearly highlighted in the
//                   text.
//                 </li>
//               </ul>
//             </div>
//             <div className=" sm:w-1/2 w-full sm:flex-col">
//               <ul className="px-2 py-1  rounded-md  text-black ">
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp;
//                   Comprehensive in-text exercises including conceptual and
//                   numerical problems.
//                 </li>
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp;
//                   Questions from previous ICSE exams after each chapter prepare
//                   students for the board exam.
//                 </li>
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp;
//                   Questions modelled on the ICSE exams after each chapter
//                 </li>
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp; Two
//                   Model Test Papers based on the new syllabus for practice have
//                   been given at the end of the book.
//                 </li>
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp; Last
//                   years' solved ICSE Question Paper has also been provided at
//                   the end of the book.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-4 items-center w-full">
//           <div className="flex flex-col items-center sm:w-1/2 w-full">
//             <img src={book1} className="w-full h-auto" alt="" />
//           </div>
//           <div className="flex flex-col items-center sm:w-1/2 w-full">
//             <img src={book2} className="w-full h-auto" alt="" />
//           </div>
//           <div className="flex flex-col items-center sm:w-1/2 w-full">
//             <img src={book3} className="w-full h-auto" alt="" />
//           </div>
//         </div>
//         <div className="flex w-full sm:flex-row flex-col px-4 sm:px-0 gap-4  items-center m-3">
//           <div className=" w-[90%] bg-[#b43c84] m-auto p-3 rounded-lg text-white font-bold justify-center flex">
//             Also available: Basic ICSE PHYSICS LAB MANUAL for Classes 9 and 10
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Icse_physics;
