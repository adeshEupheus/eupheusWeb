import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/icse/icse_mathmatics/icse math 2.png";
import logo from "../../../assets/curriculum/icse/icse_mathmatics/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner from "../../BookTemplate/Banner";
import Section from "../../BookTemplate/Section";
import MainContent from "../../BookTemplate/MainContent";
import KeyPoints from "../../BookTemplate/KeyPoints";
import ResourceCard from "../../BookTemplate/ResourceCard";

const Icse_mathsmatics = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner
        image={book1}
        bgColor={"#f3bf4e"}
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
            bgColor={"#f3bf4e"}
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
            bgColor={"#f3bf4e"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              <span className="font-bold text-[#f3bf4e]">
                The ICSE Mathematics{" "}
              </span>
              series is a set of five books for classes 6 to 10 that has been
              prepared in accordance with the latest CISCE Curriculum.
            </span>
          }
          bgColor={"#f3bf4e"}
          listOne={"Grades"}
          listTwo={"6-10"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#f3bf4e]">
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
                  "All chapters start from zero level and gradually move towards the required level",
                  "Theories have been explained with proper illustrations",
                  "A large number of examples from different angles are worked out in each chapter",
                  "Chapters followed by graded exercises which include many multiple-choice questions",
                  "All the important formulae and results are given at the beginning of the book for quick reference",
                  "Series has been made student-friendly",
                  "Solutions of the textbook exercises provided in the form of the booklets for the teachers only",
                ]}
              />
            }
            bgColor={"rgb(243, 191, 78)"}
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
              points={["E-book", "Answer keys"]}
            />
            <ResourceCard
              headLine={"STUDENTS’ RESOURCES"}
              points={["Chapter PDFs", "Answer keys"]}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#f3bf4e"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Icse_mathsmatics;

// import React from "react";
// import { Circle } from "@mui/icons-material";
// import book2 from "../../../assets/curriculum/icse/icse_mathmatics/1.png";
// import book3 from "../../../assets/curriculum/icse/icse_mathmatics/2.png";
// import book4 from "../../../assets/curriculum/icse/icse_mathmatics/3.png";

// import wowmaths from "../../../assets/curriculum/icse/icse_mathmatics/Curriculum Catalogue_2021-22_Page_41.jpg";

// const Icse_mathsmatics = ({ sOpen }) => {
//   return (
//     <>
//       <div
//         className={`w-full ${
//           sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
//         } flex flex-col sm:pl-[3rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
//       >
//         <img src={wowmaths} className="w-full h-auto" alt="" />
//         <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
//           <span className="sm:w-4/5 w-full">
//             <span className="text-[#f3934e] font-semibold">
//               The ICSE Mathematics
//             </span>
//             &nbsp; series is a set of five books for classes 6 to 10 that has
//             been prepared in accordance with the latest CISCE Curriculum.
//           </span>
//           {/* <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#cdcd35] py-2">
//             <div className="flex flex-col gap-[2px] ">
//               <span className="text-white font-semibold">Title</span>
//               <span className="text-black font-semibold">Book 1</span>
//               <span className="text-black font-semibold">Book 2</span>
//               <span className="text-black font-semibold">Book 3</span>
//               <span className="text-black font-semibold">Book 4</span>
//               <span className="text-black font-semibold">Book 5</span>
//             </div>
//             <div className="flex flex-col gap-[2px]">
//               <span className="text-white font-semibold">Price</span>
//               <span className="text-black font-semibold">435</span>
//               <span className="text-black font-semibold">445</span>
//               <span className="text-black font-semibold">460</span>
//               <span className="text-black font-semibold">495</span>
//               <span className="text-black font-semibold">505</span>
//             </div>
//           </div> */}
//         </div>
//         <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
//           <div className="flex flex-col sm:w-9/12 w-full">
//             <span className="px-3 ml-3 py-1 bg-[#f3934e] rounded-t-lg w-fit text-white">
//               KEY FEATURES
//             </span>
//             <ul className="px-2 py-1 w-full rounded-md bg-[#ffff9b] text-black">
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; All
//                 chapters start from zero level and gradually move towards the
//                 required level
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; Theories
//                 have been explained with proper illustrations
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; A large
//                 number of examples from different angles are worked out in each
//                 chapter
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; Chapters
//                 followed by graded exercises which include many multiple-choice
//                 questions
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; All the
//                 important formulae and results are given at the beginning of the
//                 book for quick reference
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; Series
//                 has been made student-friendly
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp;Solutions
//                 of the textbook exercises provided in the form of the booklets
//                 for the teachers only
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-4 items-center w-full">
//           <div className="flex flex-col items-center sm:w-1/2 w-full">
//             <img src={book2} className="w-full h-auto" alt="" />
//           </div>
//           <div className="flex flex-col items-center sm:w-1/2 w-full">
//             <img src={book3} className="w-full h-auto" alt="" />
//           </div>
//           <div className="flex flex-col items-center sm:w-1/2 w-full">
//             <img src={book4} className="w-full h-auto" alt="" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Icse_mathsmatics;
