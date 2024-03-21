import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/icse/chemistry_9_10/dalal chem 3.png";
import logo from "../../../assets/curriculum/icse/chemistry_9_10/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
// import img8 from "../../../assets/curriculum/icse/chemistry_6_8/circle1";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner from "../../BookTemplate/Banner";
import Section from "../../BookTemplate/Section";
import MainContent from "../../BookTemplate/MainContent";
import KeyPoints from "../../BookTemplate/KeyPoints";
import ResourceCard from "../../BookTemplate/ResourceCard";
import Circle from "../../BookTemplate/Circle";

const Chemisrty9_10 = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner
        image={book1}
        bgColor={"#4464c4"}
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
            bgColor={"#4464c4"}
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
            bgColor={"#4464c4"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              <span className="font-bold text-[#4464c4]">
                Dr. Dalal’s Simplified ICSE Chemistry{" "}
              </span>
              for classes 9 and 10 are textbooks that have been created in
              accordance with the latest syllabus prescribed by The Council for
              the Indian School Certificate Examinations, New Delhi for The
              Indian Certificate of Secondary Education (ICSE) Examinations.
            </span>
          }
          bgColor={"#4464c4"}
          listOne={"Grades"}
          listTwo={"9-10"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#4464c4]">
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
                  "Thorough coverage of the text matter as per the syllabus in and after 2024",
                  "Simple, lucid, and systematic approach",
                  "Detailed and well-labelled diagrams to improve comprehension",
                  "Practice exercises to sharpen minds",
                ]}
              />
            }
            bgColor={"rgb(68, 100, 196)"}
            img={img6}
          />
        </div>
      </div>
      <Circle />
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
            <ResourceCard
              headLine={"TEACHERS’ RESOURCES"}
              points={["E-book"]}
            />
            <ResourceCard
              headLine={"STUDENTS’ RESOURCES"}
              points={["Chapter PDFs"]}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#4464c4"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Chemisrty9_10;

// import React from "react";
// import { Circle } from "@mui/icons-material";
// import circle1 from "../../../assets/curriculum/icse/chemistry_9_10/circle1.PNG";
// import circle2 from "../../../assets/curriculum/icse/chemistry_9_10/circle2.PNG";
// import book1 from "../../../assets/curriculum/icse/chemistry_9_10/1.png";
// import book2 from "../../../assets/curriculum/icse/chemistry_9_10/2.png";
// import englishvibes from "../../../assets/curriculum/icse/chemistry_9_10/Curriculum Catalogue_2021-22_Page_38.jpg";

// const Chemisrty9_10 = ({ sOpen }) => {
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
//             <span className="text-[#4464c4] font-semibold">
//               Dr. Dalal’s New Simplified School Chemistry
//             </span>{" "}
//             &nbsp; for classes 9 and 10 is a series of textbooks, workbooks, and
//             lab manuals that has been created in accordance with the latest
//             syllabus prescribed by The Council for the Indian School Certificate
//             Examinations, New Delhi for The Indian Certificate of Secondary
//             Education [I.C.S.E.] Examinations. Solvable question bank and test
//             papers for class 10 are also available.
//           </span>
//         </div>
//         <div className="flex sm:flex-row flex-col  px-4 sm:px-0 w-full">
//           <div className=" sm:w-[40%] w-full m-6">
//             <span className="px-3 ml-3 py-1 bg-[#4464c4] rounded-t-lg w-fit text-white">
//               KEY FEATURES
//             </span>
//             <ul className="px-2 py-1 w-full rounded-md bg-[#87a1ed] text-black">
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; Thorough
//                 coverage of the entire text matter and is strictly as per the
//                 syllabus
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; Approach
//                 of the book is simple, lucid, and systematic
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp;
//                 Interesting diagrams make the text more interesting and lucid
//               </li>
//             </ul>
//           </div>
//           {/* <div className="flex text-sm flex-col sm:w-6/12 w-full p-5 m-4 bg-[#87a1ed] rounded-lg">
//             <table className="">
//               <tr>
//                 <th className="text-white flex justify-start">Title</th>
//                 <th className="text-white">Price</th>
//               </tr>
//               <tr>
//                 <td>Simplified ICSE Chemistry for Std. IX</td>
//                 <td>410</td>
//               </tr>
//               <tr>
//                 <td>Simplified ICSE Chemistry for Std. X</td>
//                 <td>420</td>
//               </tr>
//               <tr>
//                 <td>
//                   Objective Workbook for Simplified ICSE Chemistry for Std. IX
//                 </td>
//                 <td>319</td>
//               </tr>
//               <tr>
//                 <td>
//                   Objective Workbook for Simplified ICSE Chemistry for Std. X
//                 </td>
//                 <td>319</td>
//               </tr>
//               <tr>
//                 <td>
//                   Simplified ICSE Practical Laboratory Chemistry Manual for
//                   Class IX
//                 </td>
//                 <td>319</td>
//               </tr>
//               <tr>
//                 <td>
//                   Simplified ICSE Practical Laboratory Chemistry Manual for
//                   Class X
//                 </td>
//                 <td>319</td>
//               </tr>
//               <tr>
//                 <td>
//                   Simplified ICSE Chemistry Solvable Question Bank & 25 Test
//                   Papers for Std. X
//                 </td>
//                 <td>385</td>
//               </tr>
//             </table>
//           </div> */}
//         </div>
//         <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
//           <div className="flex flex-col sm:w-6/12 w-full">
//             <img src={book1} className="w-[80%] h-auto" alt="" />
//           </div>
//           <div className="flex flex-col sm:w-[50%] w-full">
//             <div className="flex flex-row">
//               <img src={circle1} className="w-[50%] h-auto" alt="" />
//               <img src={circle2} className="w-[50%] h-auto" alt="" />
//             </div>
//             <div className=""></div>
//             <img src={book2} className="w-[80%] h-auto" alt="" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Chemisrty9_10;
