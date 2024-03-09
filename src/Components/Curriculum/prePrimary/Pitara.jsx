import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/pitara/pitara.png";
import logo from "../../../assets/curriculum/pitara/pitaraIcon.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import img7 from "../../../assets/curriculum/pitara/10.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner from "../../BookTemplate/Banner";
import Section from "../../BookTemplate/Section";
import MainContent from "../../BookTemplate/MainContent";
import KeyPoints from "../../BookTemplate/KeyPoints";
import ResourceCard from "../../BookTemplate/ResourceCard";
import AgeCard from "../../BookTemplate/AgeCard";

const Pitara = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner
        image={book1}
        bgColor={"#19bcbf"}
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
            bgColor={"#19bcbf"}
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
            bgColor={"#19bcbf"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              भाषा मानव जीवन का अभिन्न अंग है। भाषा मौखिक और लिखित अभिव्यक्ति का
              एक सशक्त माध्यम है। पाठशाला के प्रांगण में कदम रखते ही
              छात्र-छत्राओ को एक नई दुनिया से परिचय होता है। इस परिवेश में
              सुनना-बोलना, पढ़ना-लिखना सभी कौशलो विकास होता हैं। 'वर्ण' भाषा की
              लघुतम इकाई है। किसी भी भाषा को सीखने के लिए सबसे पहले वर्णों का
              ज्ञान होना बहुत जरूरी है, क्योंकि वर्ण ही भाषा का आधार होते हैं।
              इसी लक्ष्य की पूर्ति हेतु{" "}
              <span className="font-bold text-emerald-500">'पिटारा' </span> की
              रचना की गयी हैं।
              <br />
              <span className="font-bold text-emerald-500">पिटारा </span>
              द्वारा बच्चे हिंदी पढ़ने, लिखने, बोलने और समझने में तथा रचनात्मक
              अभिव्यक्त करने में भी सक्षम होंगे।
            </span>
          }
          bgColor={"#19bcbf"}
          listOne={"NURSERY"}
          listTwo={"LKG"}
          listThree={"UKG"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#19bcbf]">
        <div
          ref={keyFeatures}
          id="keyFeature"
          className="flex flex-col justify-center items-center w-[60%]"
        >
          <Section
            content={
              <KeyPoints
                bgColor={"#19bcbf"}
                headLine={"प्रमुख विशेषताऐं"}
                points={[
                  "अक्षर बोध: अक्षर ज्ञान पृष्ठ।",
                  "चित्र पृष्ठ: अक्षर से शुरू होने वाले चित्रों की पहचान और उनके नमो के उच्चारण द्वारा शब्दकोष में वृद्धि।",
                  "क्रियाकलाप पृष्ठ अक्षर संबंधित रुचिपूर्ण व आकर्षक क्रियाकलाप पृष्ठ गतिविधि पृष्ठ द्वारा कार्यात्मक क्षमता में वृद्धि हेतु  पृष्ठ।",
                ]}
              />
            }
            bgColor={"rgb(25, 188, 191)"}
            img={img6}
          />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center p-4 sm:w-full bg-o">
        <img src={img7} className="w-[60%] h-auto" alt="" />
      </div>
      <div className="flex flex-row justify-center items-center">
        <AgeCard bgColor={"#19bcbf"} bgColor1={"#159ea1"} />
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
              points={["E-book", "Worksheets"]}
            />
            <ResourceCard
              headLine={"STUDENTS’ RESOURCES"}
              points={["Chapter PDFs", "Worksheets"]}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#19bcbf"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};
export default Pitara;

// import React from "react";
// import { Circle } from "@mui/icons-material";
// import book1 from "../../../assets/curriculum/pitara/10.png";
// import pitara from "../../../assets/curriculum/pitara/Curriculum Catalogue_2021-22_Page_16.jpg";
// import flower from "../../../assets/curriculum/alphaFun/5.png";

// const Pitara = ({ sOpen }) => {
//   return (
//     <>
//       <div
//         className={`w-full ${
//           sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
//         } flex flex-col sm:pl-[3rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
//       >
//         <img src={pitara} className="w-full h-auto" alt="" />
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
//           {/* <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#1ab1df] py-2">
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
//             <span className="text-[#0095a4] font-semibold">NUMBER MAX </span>
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
//             <span className="px-3 ml-3 py-1 bg-[#227880] rounded-t-lg w-fit">
//               KEY FEATURES
//             </span>

//             <ul className="px-2 py-1 w-full rounded-md bg-[#1ab1df] text-white">
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
//             <span className="px-3 ml-6 py-1 bg-[#0095a4] rounded-t-lg w-fit">
//               TITLES AVAILABLE FOR
//             </span>

//             <ul className="px-4 py-2 flex flex-col w-fit border-[#0095a4] border-2 gap-4 rounded-lg justify-center bg-[#1ab1df] ">
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

// export default Pitara;
