import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/cbse/wow_menteal_maths/Asset 26@3x.png";
import logo from "../../../assets/curriculum/cbse/wow_menteal_maths/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner2 from "../../BookTemplate/Banner2";
import SectionTwo from "../../BookTemplate/SectionTwo";
import MainContent from "../../BookTemplate/MainContent";
import Content2 from "../../BookTemplate/Content2";
import OsLite2 from "../../BookTemplate/OsLite2";

const Wow_menta_maths = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner2 image={book1} bgColor={"#009b89"} />
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
            text={"ADVANTAGES"}
            bgColor={"#009b89"}
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
            bgColor={"#009b89"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              {" "}
              <span className="font-bold text-[#009b89]">
                WOW! Mental Maths,{" "}
              </span>
              Smart Mental Maths Strategies, is a series of eight skill
              development books for Grades 1-8, specifically developed to teach
              students the techniques of mental computations. The series blends
              various shortcuts and strategies including the sutras of Vedic
              Maths to help students learn the essential skills required to
              calculate mentally.
              <br />
              Each book has been aligned to the grade-wise coverage of the
              concepts taught in school, thereby ensuring the appropriateness of
              the strategies taught.
              <br />
              In Grades 1 to 3, emphasis has been laid on simple calculations of
              whole numbers to help students develop strong reasoning skills.
              Subsequently, in Grades 4 and 5, the strategies learnt in previous
              grades are reinforced and extended to fractions and decimals. In
              Grades 6 to 8, the concepts are further extended to real numbers,
              percentage, ratio and proportion, algebra, etc. to include more
              advanced methods of approaching the problems, especially through
              Vedic Maths.
            </span>
          }
          bgColor={"#009b89"}
          listOne={"Grades"}
          listTwo={"1-8"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#009b89]">
        <div
          ref={keyFeatures}
          id="keyFeature"
          className="flex flex-col justify-center items-center"
        >
          <Content2
            bgColor={"#009b89"}
            headLine={"WOW FACT"}
            para={[
              "Strategy-based information to give an insight as to where the listed skill can be appropriately applied",
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-200">
        <div className="flex flex-col justify-center items-center">
          <Content2
            bgColor={"#e5e7eb"}
            headLine={"THINK AHEAD"}
            para={[
              "Challenging higher order questions that trigger analytical reasoning and help students apply the relevant strategy, and find solutions on their own",
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#009b89]">
        <div className="flex flex-col justify-center items-center">
          <Content2
            bgColor={"#009b89"}
            headLine={"PRACTICE TIME"}
            para={[
              "Present after a set of strategies. and includes practice from those particular strategies with an aim to help students solve questions and apply the skills they have learnt",
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-200">
        <div className="flex flex-col justify-center items-center">
          <Content2
            bgColor={"#e5e7eb"}
            headLine={"TEACHING TIP"}
            para={[
              "Includes suggestions/ideas for teachers and parents to support the students in making the learning of the strategy comprehensive and complete",
            ]}
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
          <OsLite2 />
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#009b89"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Wow_menta_maths;

// import React from "react";
// import { Circle } from "@mui/icons-material";
// import book2 from "../../../assets/curriculum/cbse/wow_maths/2.png";
// import book3 from "../../../assets/curriculum/cbse/wow_maths/3.png";
// import book4 from "../../../assets/curriculum/cbse/wow_maths/4.png";

// import wowmaths from "../../../assets/curriculum/cbse/wow_menteal_maths/Curriculum Catalogue_2021-22_Page_28.jpg";

// const Wow_menta_maths = ({ sOpen }) => {
//   return (
//     <>
//       <div
//         className={`w-full ${
//           sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
//         } flex flex-col sm:px-[2rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
//       >
//         <img src={wowmaths} className="w-full h-auto" alt="" />
//         <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0  items-center">
//           <span className="sm:w-4/5 w-full text-justify">
//             <span className="text-[#009b89] font-semibold">
//               {" "}
//               WOW! Maths Maths,
//             </span>
//             &nbsp; Smart Mental Maths Strategies, is a series of eight skill
//             development books for the 1-8 levels, specifically developed to
//             teach students the techniques of mental computations. The series
//             blends various shortcuts and strategies including the sutras of
//             Vedic Maths to help students learn the essential skills required to
//             calculate mentally. Each book has been developed with alignment to
//             the grade-wise coverage of the concepts taught in school, thereby
//             ensuring the appropriateness of the strategies taught <br /> <br />
//             In grade one to three; emphasis has been laid on simple calculations
//             of whole numbers to help students develop good reasoning skills.
//             Subsequently, in grades four and five, the strategies learnt in
//             previous grades are reinforced and extended to fractions and
//             decimals. In grade six to eight, the concepts are further extended
//             to real numbers, percentage, ratio and proportion, algebra etc. to
//             include more advanced methods of approaching the problems specially
//             through Vedic Maths
//           </span>
//           {/* <div className="flex gap-4 rounded-md w-fit px-3 justify-center  bg-[#009b89]  py-2">
//             <div className="flex flex-col gap-[4px] item-center">
//               <span className="text-white font-semibold">Title</span>
//               <span className="text-black font-semibold">Book 1</span>
//               <span className="text-black font-semibold">Book 2</span>
//               <span className="text-black font-semibold">Book 3</span>
//               <span className="text-black font-semibold">Book 4</span>
//               <span className="text-black font-semibold">Book 5</span>
//               <span className="text-black font-semibold">Book 6 </span>
//               <span className="text-black font-semibold">Book 7</span>
//               <span className="text-black font-semibold">Book 8</span>
//             </div>
//             <div className="flex flex-col gap-[4px]">
//               <span className="text-white font-semibold">Price</span>
//               <span className="text-black font-semibold">435</span>
//               <span className="text-black font-semibold">445</span>
//               <span className="text-black font-semibold">460</span>
//               <span className="text-black font-semibold">495</span>
//               <span className="text-black font-semibold">505</span>
//               <span className="text-black font-semibold">530</span>
//               <span className="text-black font-semibold">530</span>
//               <span className="text-black font-semibold">530</span>
//             </div>
//           </div> */}
//         </div>
//         <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
//           <div className="flex flex-col sm:w-3/12 w-full">
//             <span className="px-3 ml-3 py-1 bg-[#009b89] rounded-t-lg w-fit text-white">
//               WOW FACT
//             </span>
//             <ul className="px-2 py-1 w-full rounded-md bg-[#b2f3eb] text-black">
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; Strategy
//                 based information to give an insight as to where the listed
//                 skill can be appropriately applied
//               </li>
//             </ul>
//           </div>
//           <div className="flex flex-col sm:w-3/12 w-full m-4">
//             <span className="px-3 ml-3 py-1 bg-[#009b89] rounded-t-lg w-fit text-white">
//               TEACHER SUPPORT
//             </span>
//             <ul className="px-2 py-1 w-full rounded-md  bg-[#b2f3eb] text-black">
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp;
//                 Challenging higher order questions that trigger analytical
//                 reasoning and help students apply the relevant strategy, and
//                 find solutions on their own.
//               </li>
//             </ul>
//           </div>
//           <div className="flex flex-col sm:w-3/12 w-full m-4">
//             <span className="px-3 ml-3 py-1 bg-[#009b89] rounded-t-lg w-fit text-white">
//               PRACTICE TIME
//             </span>
//             <ul className="px-2 py-1 w-full rounded-md  bg-[#b2f3eb] text-black">
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; Added
//                 after a set of strategies. Includes practice from a collection
//                 of strategies with an aim to make students solve questions by
//                 selecting the most appropriate strategy
//               </li>
//             </ul>
//           </div>
//           <div className="flex flex-col sm:w-3/12 w-full m-4">
//             <span className="px-3 ml-3 py-1 bg-[#009b89] rounded-t-lg w-fit text-white">
//               TEACHING TIP
//             </span>
//             <ul className="px-2 py-1 w-full rounded-md  bg-[#b2f3eb] text-black">
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; Includes
//                 suggestions/ ideas for teachers and parents, to support the
//                 students in making the learning of the strategy comprehensive
//                 and complete.
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

// export default Wow_menta_maths;
