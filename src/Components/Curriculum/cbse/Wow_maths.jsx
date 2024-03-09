import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/cbse/wowMath/WOW Maths.png";
import logo from "../../../assets/curriculum/cbse/wowMath/Icon.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import img2 from "../../../assets/curriculum/cbse/Maths_weaves/mathbuddy.png";
import img8 from "../../../assets/curriculum/zoom/digital content.png";
import Card from "../../BookTemplate/Card";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import Banner from "../../BookTemplate/Banner";
import Section from "../../BookTemplate/Section";
import MainContent from "../../BookTemplate/MainContent";
import ResourceCard from "../../BookTemplate/ResourceCard";
import KeyPoints from "../../BookTemplate/KeyPoints";

const Wow_maths = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner image={book1} bgColor={"rgb(227, 123, 48)"} Ncficon={true} />
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
            bgColor={"rgb(227, 123, 48)"}
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
            bgColor={"rgb(227, 123, 48)"}
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
            bgColor={"rgb(227, 123, 48)"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              <span className="font-bold text-[#e37b30]"> WOW! Maths </span>
              for CBSE is a comprehensive programme for grades 1-8 learners
              based on the innovative and effective teaching and learning
              practices of Singapore. The programme incorporates the Singapore
              Bar Model Method (a pedagogical strategy recognized globally and
              ranked the highest in TIMSS) and heuristics (problemsolving
              strategies) intricately woven with the guidelines of NEP 2020.
            </span>
          }
          bgColor={"rgb(227, 123, 48)"}
          listOne={"Grades"}
          listTwo={"1-8"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#e37b30]">
        <div ref={keyFeatures} id="keyFeature" className="w-[60%]">
          <Section
            content={
              <KeyPoints
                bgColor={"rgb(227, 123, 48)"}
                headLine={"Key features"}
                points={[
                  "Coursebooks: Based on the CPA approach, they are enriched with 15 unique features like real-life examples, creative concept visualisations, critical thinking questions and other learning tools that make learning Maths enjoyable and engaging.",
                  "Workbooks: Adopt a learner-centric approach to reinforce skills. Include a series of well-formulated questions including challengers, graded from lower to higher order of difficulty, to trigger thinking and reasoning skills.",
                ]}
              />
            }
            bgColor={"rgb(227, 123, 48)"}
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
              Digital Platform + Math Buddy*
            </span>
          </div>
          <br />

          <div className="flex flex-col sm:flex-row gap-4 px-5 justify-center items-center">
            <ResourceCard
              headLine={"TEACHERS’ RESOURCES"}
              points={[
                "E-book",
                "Animations**",
                "Lesson Plans",
                "Answer Keys",
                "Test Generators",
              ]}
            />
            <ResourceCard
              headLine={"STUDENTS’ RESOURCES"}
              points={["Chapter PDFs", "Animations**"]}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center py-6 md:p-4 text-sm">
            <Card
              image={img8}
              headLine={"Digital KeyPoints"}
              para={
                "It includes e-books, animations, interactive e-worksheets, and e-activities."
              }
            />
            <Card
              image={img2}
              headLine={"MathBuddy"}
              para={
                "CPA model delivering hands-on exploratory learning, interactive tools to teach in the classroom cloud-based home access for students."
              }
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"rgb(227, 123, 48)"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Wow_maths;

// import React from "react";
// import { Circle } from "@mui/icons-material";
// import book1 from "../../../assets/curriculum/cbse/wow_maths/1.png";
// import book2 from "../../../assets/curriculum/cbse/wow_maths/2.png";
// import book3 from "../../../assets/curriculum/cbse/wow_maths/3.png";
// import book4 from "../../../assets/curriculum/cbse/wow_maths/4.png";

// import wowmaths from "../../../assets/curriculum/cbse/wow_maths/Curriculum Catalogue_2021-22_Page_27.jpg";

// const Wow_maths = ({ sOpen }) => {
//   return (
//     <>
//       <div
//         className={`w-full ${
//           sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
//         } flex flex-col sm:px-[2rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
//       >
//         <img src={wowmaths} className="w-full h-auto" alt="" />
//         <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
//           <span className="sm:w-4/5 w-full">
//             <span className="text-[#f3934e] font-semibold"> WOW! Maths</span>
//             &nbsp; for CBSE is a comprehensive programme for 1-8 learners based
//             on the innovative and effective teaching and learning practices of
//             Singapore. The programme incorporates the{" "}
//             <b>Singapore Bar Model Method</b> (a pedagogical strategy recognized
//             globally and ranked the highest in TIMSS) and heuristics
//             (problem-solving strategies) intricately woven with the guidelines
//             of the <b>NCF 2005</b> (CBSE) .
//           </span>
//           {/* <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#f3934e] py-2">
//             <div className="flex flex-col gap-[2px] ">
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
//             <div className="flex flex-col gap-[2px]">
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
//           <div className="flex flex-col sm:w-6/12 w-full">
//             <span className="px-3 ml-3 py-1 bg-[#e2792e] rounded-t-lg w-fit text-white">
//               KEY FEATURES
//             </span>
//             <ul className="px-2 py-1 w-full rounded-md bg-[#ffc59b] text-black">
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp;
//                 <b>Course Books:</b> Based on the CPA approach, they are
//                 enriched with 15 unique features like real-life examples,
//                 creative concept visualizations, critical thinking questions and
//                 other support activities that make learning of Maths an
//                 enjoyable and engaging learning experience.
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp;
//                 <b>Work Books:</b>
//                 Adopt a learner-centric approach to reinforce skills. Include a
//                 series of well-formulated questions including challengers,
//                 graded from lower to higher order of difficulty, to trigger
//                 thinking and reasoning skills.
//               </li>
//             </ul>
//           </div>
//           <div className="flex flex-col sm:w-[50%] w-full m-4">
//             <span className="px-3 ml-3 py-1 bg-[#e2792e] rounded-t-lg w-fit text-white">
//               TEACHER SUPPORT
//             </span>
//             <ul className="px-2 py-1 w-full rounded-md bg-[#ffc59b] text-black">
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp;
//                 <b>Teacher Manuals:</b> Provide teachers with a one-step
//                 solution for delivering effective curriculum. Include suggested
//                 hands-on classroom and Maths lab activities, lesson plans and
//                 extensions to develop lateral thinking of concepts.
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp;Access to
//                 Math Buddy* software aligned to the book for teachers and Math
//                 lab kit (62 manipulatives)
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; Solved
//                 solutions for books 4 to 8
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="flex sm:flex-row flex-col px-4 w-full sm:px-0 gap-4 items-center ">
//           <div className="flex w-[50%] m-auto">
//             <img src={book1} className="w-full h-auto" alt="" />
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

// export default Wow_maths;
