import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/numberMax/numbermax.png";
import logo from "../../../assets/curriculum/numberMax/numbermaxIcon.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import img7 from "../../../assets/curriculum/numberMax/8.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner2 from "../../BookTemplate/Banner2";
import SectionTwo from "../../BookTemplate/SectionTwo";
import MainContent from "../../BookTemplate/MainContent";
import Content from "../../BookTemplate/Content";
import OsLite2 from "../../BookTemplate/OsLite2";
import CardThree from "../../BookTemplate/CardThree";

const Number_maxx = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner2 image={book1} bgColor={"#22c2f2"} />
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
            bgColor={"#22c2f2"}
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
            bgColor={"#22c2f2"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              The Early Childhood Learning Programme based on integrated and
              experiential learning promotes creative thinking in young
              learners. It is designed by experienced teachers adhering to the
              elements of Multiple Intelligences and Bloom's Taxonomy. Our
              activity-based books and notebooks give children the opportunity
              to explore, understand, and enjoy learning. They follow an
              interactive approach and aim to build learner independence right
              from an early age.
              <br />
              <span className="font-bold text-blue-400">NUMBER MAX </span>
              equips children with sound numerical skills. It creates a
              readiness for mathematical operations, application of concepts to
              daily life situations, and logical thinking.
            </span>
          }
          bgColor={"#22c2f2"}
          listOne={"NURSERY"}
          listTwo={"LKG"}
          listThree={"UKG"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#58d1f5]">
        <div
          ref={keyFeatures}
          id="keyFeature"
          className="flex flex-col justify-center items-center w-[60%]"
        >
          <SectionTwo
            content={
              <Content
                bgColor={"#58d1f5"}
                headLine={"Key Features"}
                points={[
                  "Revision Sheet: Recapitulation of concepts covered in the previous class.",
                  "Word Practice: Word building, phonetic practice of CVC words, and learning picture-word association.",
                  "Word Wall: Helps to recall the vowel sounds and usage.",
                  "Reading: Helps in reading by blending the sounds.",
                  "Grammar Pages: Teaches useful topics of grammar through child-friendly activities.",
                ]}
              />
            }
            bgColor={"rgb(88, 209, 245)"}
            img={img6}
          />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center p-4 sm:w-full bg-o">
        <img src={img7} className="w-[60%] h-auto" alt="" />
      </div>
      <div className="flex flex-row justify-center items-center">
        <CardThree bgColor={"#58d1f5"} bgColor1={"#22c2f2"} />
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
          <OsLite2 />
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#22c2f2"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Number_maxx;

// import React from "react";
// import { Circle } from "@mui/icons-material";
// import book1 from "../../../assets/curriculum/numberMax/8.png";
// import numbermaxx from "../../../assets/curriculum/numberMax/Curriculum Catalogue_2021-22_Page_14.jpg";
// import flower from "../../../assets/curriculum/alphaFun/5.png";

// const Number_maxx = ({ sOpen }) => {
//   return (
//     <>
//       <div
//         className={`w-full ${
//           sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
//         } flex flex-col sm:pl-[3rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
//       >
//         <img src={numbermaxx} className="w-full h-auto" alt="" />
//         <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
//           <span className="sm:w-4/5 w-full">
//             The Early Childhood Learning Programme based on Integrated and
//             Experiential Learning promotes creative thinking in young learners.
//             It is designed by experienced teachers adhering to the elements of
//             Multiple Intelligences and Bloom's Taxonomy. Our activity-based
//             books and notebooks give children the opportunity to explore,
//             understand, and enjoy learning. They follow an interactive approach
//             and aim to build learner independence right from an early age.
//           </span>
//           {/* <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#40B9A4] py-2">
//             <div className="flex flex-col gap-2">
//               <span className="text-white font-semibold">Title</span>
//               <span className="text-black font-semibold">Book 1</span>
//               <span className="text-black font-semibold">Book 2</span>
//               <span className="text-black font-semibold">Book 3</span>
//             </div>
//             <div className="flex flex-col gap-2">
//               <span className="text-white font-semibold">Price</span>
//               <span className="text-black font-semibold">330</span>
//               <span className="text-black font-semibold">370</span>
//               <span className="text-black font-semibold">395</span>
//             </div>
//           </div> */}
//         </div>
//         <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
//           <span className="sm:w-4/5 w-full">
//             <span className="text-[#278071] font-semibold">NUMBER MAX </span>
//             equips children with sound numerical skills. It creates a readiness
//             for mathematical operations, application of concepts to daily life
//             situations and logical thinking. The approach and activities focus
//             on building the following skills:
//           </span>
//         </div>
//         <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
//           <div className="flex flex-col sm:w-8/12 w-full">
//             <img src={book1} className="w-full h-auto" alt="" />
//           </div>
//           <div className="flex flex-col sm:w-[30%] w-full">
//             <span className="px-3 ml-3 py-1 bg-[#278071] rounded-t-lg w-fit">
//               KEY FEATURES
//             </span>

//             <ul className="px-2 py-1 w-full rounded-md bg-[#40B9A4] text-white">
//               <li>
//                 <Circle className="!text-[0.5rem] text-white" /> &nbsp;{" "}
//                 <b> Finger Tracing </b>
//                 Helps in learning number formation.
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-white" /> &nbsp;{" "}
//                 <b>Counting Objects</b>
//                 Builds numerical skills.
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-white" /> &nbsp;{" "}
//                 <b>Tracing and Colouring </b>
//                 Develops fine motor skills and preparedness for number writing
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-white" /> &nbsp;{" "}
//                 <b>Activities</b>
//                 Review of counting skills to build cognitive skills.
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-white" /> &nbsp;{" "}
//                 <b>Writing Practice </b>
//                 Assists number writing and promotes independent writing.
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-white" /> &nbsp;{" "}
//                 <b>Get Crafty </b>
//                 Builds fine motor skills through artistic learning.
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-white" /> &nbsp;{" "}
//                 <b>Review Sheet </b>
//                 Helps in recognition, recall and reinforcement of the learnt
//                 concepts.
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-4 items-center w-full">
//           <div className="flex flex-col items-center sm:w-1/2 w-full">
//             <img src={flower} className="w-[40%] h-auto" alt="" />
//           </div>
//           <div className="flex flex-col sm:w-1/2 w-full">
//             <span className="px-3 ml-6 py-1 bg-[#278071] rounded-t-lg w-fit">
//               TITLES AVAILABLE FOR
//             </span>

//             <ul className="px-4 py-2 flex flex-col w-fit border-[#278071] border-2 gap-4 rounded-lg justify-center bg-[#40B9A4] ">
//               <div className="flex gap-4 rounded-md w-fit px-3 justify-center py-2">
//                 <div className="flex flex-col gap-2">
//                   <span className="text-white font-semibold">
//                     Age 2+ <br />
//                     Level-1
//                   </span>
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <span className="text-white font-semibold">
//                     Age 3+ <br />
//                     Level-2
//                   </span>
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <span className="text-white font-semibold">
//                     Age 4+ <br />
//                     Level-3
//                   </span>
//                 </div>
//               </div>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Number_maxx;
