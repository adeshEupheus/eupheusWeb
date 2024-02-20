import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/cbse/silverbell/silverbells.png";
import logo from "../../../assets/curriculum/cbse/silverbell/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner2 from "../../BookTemplate/Banner2";
import SectionTwo from "../../BookTemplate/SectionTwo";
import MainContent from "../../BookTemplate/MainContent";
import Content from "../../BookTemplate/Content";

const Silver_bells = () => {
  const keyFeatures = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200  ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner2 image={book1} bgColor={"#76a350"} />
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
            bgColor={"#76a350"}
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
              <span className="font-bold text-[#76a350]">Silver Bells </span>is
              a revised series of five poetry books that covers beloved
              children’s poems and classical poetry by renowned poets, both old
              and new. This package has been extremely popular with students and
              teachers of all schools that include the teaching of poetry in
              their curriculum. It is used by schools following the ICSE, CBSE,
              and State Boards.
            </span>
          }
          bgColor={"#76a350"}
          listOne={"Grades"}
          listTwo={"1-5"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#76a350]">
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
                  "In an easy-to-read small, slim size, the series consists of rhymes, poems, ballads, narrative poems, and short epics by well-known and beloved poets of centuries past.",
                  "Glossary of archaic words and notes aid students’ understanding of the poetry.",
                  "Classic line drawings make the series attractive and appealing.",
                ]}
              />
            }
            bgColor={"rgb(118, 163, 80)"}
            img={img6}
          />
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#76a350"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Silver_bells;

// import React from "react";
// import { Circle } from "@mui/icons-material";
// import book1 from "../../../assets/curriculum/cbse/sillverbell/1.png";
// import book2 from "../../../assets/curriculum/cbse/sillverbell/2.png";
// import book3 from "../../../assets/curriculum/cbse/sillverbell/3.png";
// import book4 from "../../../assets/curriculum/cbse/sillverbell/4.png";

// import wowmaths from "../../../assets/curriculum/cbse/sillverbell/Curriculum Catalogue_2021-22_Page_34.jpg";

// export const Silver_bells = ({ sOpen }) => {
//   return (
//     <>
//       <div
//         className={`w-full ${
//           sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
//         } flex flex-col sm:px-[2rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
//       >
//         <img src={wowmaths} className="w-full h-auto" alt="" />
//         <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0 items-center">
//           <span className="sm:w-4/5 w-full text-justify">
//             <span className="text-[#78b943] font-semibold">Silver Bells</span>
//             &nbsp; is a revised series of five poetry books that covers beloved
//             children’s poems and classical poetry by renowned poets both old and
//             new. This package has been extremely popular with students and
//             teachers of all schools that include the teaching of poetry in their
//             curriculum. It is used by schools following the ICSE, CBSE, and
//             State Boards.
//           </span>
//           {/* <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#73a04e] py-2">
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
//               <span className="text-black font-semibold">120</span>
//               <span className="text-black font-semibold">120</span>
//               <span className="text-black font-semibold">120</span>
//               <span className="text-black font-semibold">120</span>
//               <span className="text-black font-semibold">120</span>
//             </div>
//           </div> */}
//         </div>
//         <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-[80%] ml-16 ">
//           <div className="flex flex-col sm:w-6/12 w-full">
//             <span className="px-3 ml-3 py-1 bg-[#4d762b] rounded-t-lg w-fit text-white">
//               KEY FEATURES
//             </span>
//             <ul className="px-2 py-1 w-full rounded-md bg-[#d1efb8] text-black">
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; In an
//                 easy-to-read small, slim size, the series consists of rhymes,
//                 poems, ballads, narrative poems, and short epics by well-known
//                 and beloved poets of centuries past. Glossary of archaic words
//                 and notes aid students’ understanding of the poetry.
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; Antique
//                 line drawings make the series attractive and appealing.
//               </li>
//             </ul>
//           </div>
//           <div className="flex flex-col sm:w-[50%] w-[50%] m-4">
//             <img src={book1} className="w-full h-auto" alt="" />
//           </div>
//         </div>
//         <div className="flex sm:flex-row flex-col px-4 sm:px-0  items-center w-full">
//           <div className="flex flex-col items-center sm:w-1/2 w-[50%]">
//             <img src={book2} className="w-full h-auto" alt="" />
//           </div>
//           <div className="flex flex-col items-center sm:w-1/2 w-[50%]">
//             <img src={book3} className="w-full h-auto" alt="" />
//           </div>
//           <div className="flex flex-col items-center sm:w-1/2 w-[50%]">
//             <img src={book4} className="w-full h-auto" alt="" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
