import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/skillDev/merry_go_round/MerrygoRound.png";
import logo from "../../../assets/curriculum/skillDev/merry_go_round/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner from "../../BookTemplate/Banner";
import Section from "../../BookTemplate/Section";
import MainContent from "../../BookTemplate/MainContent";
import KeyPoints from "../../BookTemplate/KeyPoints";

const Merry_go_round = () => {
  const keyFeatures = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200  ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner
        image={book1}
        bgColor={"#d14598"}
        Ncficon={false}
        flexprop={"flex flex-col justify-center items-center pt-3"}
      />
      <div className="flex flex-col sm:flex-row bg-o justify-center items-center gap-3 p-4">
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
            bgColor={"#d14598"}
            textColor={"black"}
            size={"small"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              The{" "}
              <span className="font-bold text-[#d14598]">
                Merry Go Round Cursive Series{" "}
              </span>
              is designed for the young learners to develop and gradually master
              cursive writing. The series follows a gradual progression of
              content and keeps the learners engaged, excited, and deeply
              involved in the intricacies of fine writing.
            </span>
          }
          bgColor={"#d14598"}
          listOne={"Grades"}
          listTwo={"1-5"}
          listThree={"A-C"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#d14598]">
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
                  "Develops cursive writing skills to inculcate faster writing speed",
                  "The continuous flow of writing developed in the series results in the reduction of errors",
                  "Develops thinking, language, and retention skills through cursive writing",
                  "Help students to strengthen their motor skills",
                ]}
              />
            }
            bgColor={"rgb(209, 69, 152)"}
            img={img6}
          />
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#d14598"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Merry_go_round;

// import React from "react";
// import { Circle } from "@mui/icons-material";
// import book1 from "../../../assets/curriculum/skillDev/merry_go_round/1.png";
// import book2 from "../../../assets/curriculum/skillDev/merry_go_round/2.png";
// import book3 from "../../../assets/curriculum/skillDev/merry_go_round/3.png";
// import englishvibes from "../../../assets/curriculum/skillDev/merry_go_round/Curriculum Catalogue_2021-22_Page_60.jpg";

// const Merry_go_round = ({ sOpen }) => {
//   return (
//     <div
//       className={`w-full ${
//         sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
//       } flex flex-col sm:pl-[3rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
//     >
//       <img src={englishvibes} className="w-full h-auto" alt="" />
//       <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
//         <span className="sm:w-8/12 w-full">
//           The &nbsp;
//           <span className="text-[#ed008c] font-semibold">
//             Merry Go Round Cursive Series
//           </span>
//           &nbsp; is designed for the young learners to develop and gradually
//           master cursive writing. The series follows a gradual progression of
//           content and keeps the learners engaged, excited and deeply involved in
//           the intricacies of fine writing.
//         </span>
//         {/* <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#ff9ed6] py-2">
//           <div className="flex flex-col gap-[2px] ">
//             <span className="text-white font-semibold">Title</span>
//             <span className="text-black font-semibold">Book A</span>
//             <span className="text-black font-semibold">Book B</span>
//             <span className="text-black font-semibold">Book C</span>
//             <span className="text-black font-semibold">Book 1</span>
//             <span className="text-black font-semibold">Book 2</span>
//             <span className="text-black font-semibold">Book 3</span>
//             <span className="text-black font-semibold">Book 4</span>
//             <span className="text-black font-semibold">Book 5</span>
//           </div>
//           <div className="flex flex-col gap-[2px]">
//             <span className="text-white font-semibold">Price</span>
//             <span className="text-black font-semibold">180</span>
//             <span className="text-black font-semibold">190</span>
//             <span className="text-black font-semibold">215</span>
//             <span className="text-black font-semibold">170</span>
//             <span className="text-black font-semibold">175</span>
//             <span className="text-black font-semibold">180</span>
//             <span className="text-black font-semibold">185</span>
//             <span className="text-black font-semibold">190</span>
//           </div>
//         </div> */}
//       </div>
//       <div className="flex flex-col px-4 sm:px-0 w-full ">
//         <span className="px-3 ml-3 py-1 bg-[#ed008c] rounded-t-lg w-fit text-white">
//           KEY FEATURES
//         </span>
//         <div className="flex flex-row  items-center w-[70%] rounded justify-center">
//           <div className="bg-[#ff9ed6] w-full sm:flex-col rounded-lg">
//             <ul className="px-2 py-1    text-black ">
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; Develops
//                 cursive writing skills to inculcate faster writing speed
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; The
//                 continuous flow of writing developed in the series results in
//                 the reduction of errors
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; Develops
//                 thinking, language, and retention skills through cursive writing
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; Help
//                 students to strengthen their motor skills
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-4 items-center w-full">
//         <div className="flex flex-col items-center sm:w-1/2 w-full">
//           <img src={book1} className="w-full h-auto" alt="" />
//         </div>
//         <div className="flex flex-col items-center sm:w-1/2 w-full">
//           <img src={book2} className="w-full h-auto" alt="" />
//         </div>
//         <div className="flex flex-col items-center sm:w-1/2 w-full">
//           <img src={book3} className="w-full h-auto" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Merry_go_round;
//#ed008c
