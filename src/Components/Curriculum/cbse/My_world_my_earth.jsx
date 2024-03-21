import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/cbse/myWorldMyEarth/my world my earth.png";
import logo from "../../../assets/curriculum/cbse/myWorldMyEarth/myWorldMyEarthIcon.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner from "../../BookTemplate/Banner";
import Section from "../../BookTemplate/Section";
import MainContent from "../../BookTemplate/MainContent";
import KeyPoints from "../../BookTemplate/KeyPoints";
import ResourceCard from "../../BookTemplate/ResourceCard";

const My_world_my_earth = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner
        image={book1}
        bgColor={"#fc9268"}
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
            bgColor={"#fc9268"}
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
            bgColor={"#fc9268"}
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
              <span className="font-bold text-[#fc9268]">
                My World My Earth—Environmental Studies{" "}
              </span>
              series for classes 1 to 5 aims to familiarise students with
              different aspects of the world around them. These books introduce
              concepts of social interaction, encourage scientific thoughts, and
              make students aware of the diversity in the world at large.
            </span>
          }
          bgColor={"#fc9268"}
          listOne={"Grades"}
          listTwo={"1-5"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#fc9268]">
        <div
          ref={keyFeatures}
          id="keyFeature"
          className="flex flex-col justify-center items-center w-[60%]"
        >
          <Section
            content={
              <KeyPoints
                bgColor={"#fc9268"}
                headLine={"Key Features"}
                points={[
                  "Look forward helps students to think about the topic before moving forward",
                  "Know more, learn more, trivia, and additional information help students in building their General Knowledge",
                  "Challenge yourself encourages students to be inquisitive",
                  "Test yourself given at the end of each chapter for easy revision",
                  "Together time engages the students with the topic creatively",
                  "Activity offers hands-on practice and in-depth understanding of the topic",
                  "Evaluation Corner offers variety of test exercises",
                ]}
              />
            }
            bgColor={"rgb(252, 146, 104)"}
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
          <div className="flex flex-col sm:flex-row gap-4 px-10 sm:px-4 justify-center items-center p-4">
            <ResourceCard
              headLine={"TEACHERS’ RESOURCES"}
              points={["E-book", "Answer Keys", "Lesson Plans"]}
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
            bgColor={"#fc9268"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default My_world_my_earth;

// import React from "react";
// import { Circle } from "@mui/icons-material";
// import book1 from "../../../assets/curriculum/cbse/my_world_my_earth/1.png";
// import book2 from "../../../assets/curriculum/cbse/my_world_my_earth/2.png";
// import book3 from "../../../assets/curriculum/cbse/my_world_my_earth/3.png";
// import englishvibes from "../../../assets/curriculum/cbse/my_world_my_earth/Curriculum Catalogue_2021-22_Page_26.jpg";

// const My_world_my_earth = ({ sOpen }) => {
//   return (
//     <>
//       <>
//         <div
//           className={`w-full ${
//             sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
//           } flex flex-col sm:px-[2rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
//         >
//           <img src={englishvibes} className="w-full h-auto" alt="" />
//           <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0 items-center">
//             <span className="sm:w-4/5 w-full text-justify">
//               The &nbsp;
//               <span className="text-[#f4a267] font-semibold">
//                 My World My Earth—Environmental Studies
//               </span>
//               series for classes 1 to 5 aims to familiarise students with
//               different aspects of the world around them. These books introduce
//               concepts of social interaction, encourage scientific thoughts, and
//               make students aware of the diversity in the world at large.
//             </span>
//             {/* <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#ffa463] py-2">
//               <div className="flex flex-col gap-[2px] ">
//                 <span className="text-white font-semibold">Title</span>
//                 <span className="text-black font-semibold">Book 1</span>
//                 <span className="text-black font-semibold">Book 2</span>
//                 <span className="text-black font-semibold">Book 3</span>
//                 <span className="text-black font-semibold">Book 4</span>
//                 <span className="text-black font-semibold">Book 5</span>
//               </div>
//               <div className="flex flex-col gap-[2px]">
//                 <span className="text-white font-semibold">Price</span>
//                 <span className="text-black font-semibold">285</span>
//                 <span className="text-black font-semibold">335</span>
//                 <span className="text-black font-semibold">345</span>
//                 <span className="text-black font-semibold">355</span>
//                 <span className="text-black font-semibold">370</span>
//               </div>
//             </div> */}
//           </div>
//           <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
//             <div className="flex flex-col sm:w-6/12 w-full">
//               <img src={book1} className="w-[80%] h-auto" alt="" />
//             </div>
//             <div className="flex flex-col sm:w-[50%] w-full m-4">
//               <span className="px-3 ml-3 py-1 bg-[#ce7433] rounded-t-lg w-fit text-white">
//                 KEY FEATURES
//               </span>
//               <ul className="px-2 py-1 w-full rounded-md bg-[#f2d4bf] text-black">
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp; Look
//                   forward helps students to think about the topic before moving
//                   forward
//                 </li>
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp; Know
//                   more, learn more, trivia, and additional information help
//                   students in building their General Knowledge
//                 </li>
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp;
//                   Challenge yourself encourages students to be inquisitive
//                 </li>
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp; Test
//                   yourself given at the end of each chapter for easy revision
//                 </li>
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp;
//                   Together time engages the students with the topic creatively
//                 </li>
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp;
//                   Activity offers hands on practice and in-depth understanding
//                   of the topic
//                 </li>
//                 <li>
//                   <Circle className="!text-[0.5rem] text-black" /> &nbsp;
//                   Evaluation Corner offers variety of test exercises
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full mb-2">
//             <div className="flex flex-col sm:w-6/12 w-[50%]">
//               <img src={book2} className="w-[80%] h-auto" alt="" />
//             </div>
//             <div className="flex flex-col sm:w-[50%] w-[50%]">
//               <img src={book3} className="w-[80%] h-auto" alt="" />
//             </div>
//           </div>
//         </div>
//       </>
//     </>
//   );
// };

// export default My_world_my_earth;
