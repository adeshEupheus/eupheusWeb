import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/skillDev/handwriting/zanerbloser.png";
import logo from "../../../assets/curriculum/skillDev/handwriting/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import Banner2 from "../../BookTemplate/Banner2";
import SectionTwo from "../../BookTemplate/SectionTwo";
import MainContent from "../../BookTemplate/MainContent";
import CardOne from "../../BookTemplate/CardOne";
import Content from "../../BookTemplate/Content";

const Handwriting = () => {
  const keyFeatures = useRef(null);
  const Advantages = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner2 image={book1} bgColor={"rgb(23, 128, 193)"} />
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
            bgColor={"rgb(23, 128, 193)"}
            textColor={"black"}
            size={"small"}
          />
        </div>
        <div
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
            bgColor={"rgb(23, 128, 193)"}
            textColor={"black"}
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
            bgColor={"rgb(23, 128, 193)"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              <span className="font-bold text-[#1780c1]">
                Zaner-Bloser Handwriting{" "}
              </span>
              is a series of seven books for classes K to 6 that help students
              to not only write their letters, but to also express themselves as
              confident, capable communicators. Handwriting is a key
              foundational skill for literacy development and the Zaner- Bloser
              series has been proven effective for developing all types of
              literacy skills, including reading.
              <br />
              The Zaner-Bloser Handwriting series is supplemented by
              Zaner-Bloser Handwriting Practice Masters for Grades K to 6 that
              help learners to further practice their writing skills.
            </span>
          }
          bgColor={"rgb(23, 128, 193)"}
          listOne={"Grades"}
          listTwo={"1-8"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#1780c1]">
        <div ref={keyFeatures} id="keyFeature" className="w-[60%]">
          <SectionTwo
            content={
              <Content
                headLine={"Key features"}
                points={[
                  "Writing models act as guidelines for students to write their letters neatly on the lines.",
                  "Stop and Check can be used by students to evaluate the letters they have written",
                  "Keys to Legibility help students to improve the shape, size, spacing, and slant of their letters to make their writing neat and legible",
                ]}
              />
            }
            bgColor={"rgb(23, 128, 193)"}
            img={img6}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-200">
        <div ref={Advantages} id="Advantages" className="w-[60%]">
          <SectionTwo
            content={
              <Content
                headLine={"DIGITAL SUPPORT"}
                para={[
                  "Digital Tutor QR codes available throughout the books that students can scan to access instructional videos that reinforce the basics of handwriting and teach how to write letters and numerals.",
                ]}
              />
            }
            bgColor={"rgb(229 231 235)"}
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
          <br />

          <div className="flex flex-col sm:flex-row gap-4 p-5 justify-center items-center ">
            <CardOne
              headLine={"TEACHERS’ RESOURCES"}
              points={["QR Codes For Digital Tutor And Instructional Videos"]}
            />
            <CardOne
              headLine={"STUDENTS’ RESOURCES"}
              points={["QR Codes For Digital Tutor And Instructional Videos"]}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"rgb(23, 128, 193)"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Handwriting;

// import React from "react";
// import { Circle } from "@mui/icons-material";
// import book1 from "../../../assets/curriculum/skillDev/handwriting/1.png";
// import book2 from "../../../assets/curriculum/skillDev/handwriting/2.png";
// import book3 from "../../../assets/curriculum/skillDev/handwriting/3.png";
// import englishvibes from "../../../assets/curriculum/skillDev/handwriting/Curriculum Catalogue_2021-22_Page_59.jpg";

// const Handwriting = ({ sOpen }) => {
//   return (
//     <>
//       <div
//         className={`w-full ${
//           sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
//         } flex flex-col sm:pl-[3rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
//       >
//         <img src={englishvibes} className="w-full h-auto" alt="" />
//         <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
//           <span className="sm:w-6/12 w-full">
//             <span className="text-[#1780c1] font-semibold">
//               Zaner-Bloser Handwriting
//             </span>{" "}
//             &nbsp; is a series of seven books for classes K to 6 that help
//             students to not only write their letters, but to also express
//             themselves as confident, capable communicators. Handwriting is a key
//             foundational skill for literacy development and the Zaner-Bloser
//             series has been proven effective for developing all types of
//             literacy skills, including reading. <br /> <br />
//             The Zaner-Bloser Handwriting series is supplemented by
//             <b> Zaner-Bloser Handwriting Practice Masters </b> for classes K to
//             6 that help students to further practice their writing skills
//           </span>
//           {/* <div className="sm:w-5/12 w-full bg-[#9dd9ff] rounded-lg  p-4">
//             <table className="">
//               <tr>
//                 <th className="text-white text-center">Title</th>
//                 <th className="text-white text-center">Price</th>
//               </tr>
//               <tr>
//                 <td>Zaner-Bloser Handwriting Book K</td>
//                 <td className="text-center">215</td>
//               </tr>
//               <tr>
//                 <td>Zaner-Bloser Handwriting Book 1</td>
//                 <td className="text-center">215</td>
//               </tr>
//               <tr>
//                 <td>Zaner-Bloser Handwriting Book 2</td>
//                 <td className="text-center">215</td>
//               </tr>
//               <tr>
//                 <td>Zaner-Bloser Handwriting Book 3</td>
//                 <td className="text-center">215</td>
//               </tr>
//               <tr>
//                 <td>Zaner-Bloser Handwriting Book 4</td>
//                 <td className="text-center">215</td>
//               </tr>
//               <tr>
//                 <td>Zaner-Bloser Handwriting Book 5 </td>
//                 <td className="text-center">215</td>
//               </tr>
//               <tr>
//                 <td>Zaner-Bloser Handwriting Practice Master K</td>
//                 <td className="text-center">130</td>
//               </tr>
//               <tr>
//                 <td>Zaner-Bloser Handwriting Practice Master 1</td>
//                 <td className="text-center">130</td>
//               </tr>
//               <tr>
//                 <td>Zaner-Bloser Handwriting Practice Master 2</td>
//                 <td className="text-center">130</td>
//               </tr>
//               <tr>
//                 <td>Zaner-Bloser Handwriting Practice Master 3</td>
//                 <td className="text-center">130</td>
//               </tr>
//               <tr>
//                 <td>Zaner-Bloser Handwriting Practice Master 4</td>
//                 <td className="text-center">130</td>
//               </tr>
//               <tr>
//                 <td>Zaner-Bloser Handwriting Practice Master 5</td>
//                 <td className="text-center">130</td>
//               </tr>
//               <tr>
//                 <td>Zaner-Bloser Handwriting Practice Master 6</td>
//                 <td className="text-center">130</td>
//               </tr>
//             </table>
//           </div> */}
//         </div>
//         <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
//           <div className="flex flex-col sm:w-9/12 w-full m-4">
//             <span className="px-3 ml-3 py-1 bg-[#1780c1] rounded-t-lg w-fit text-white">
//               KEY FEATURES
//             </span>
//             <ul className="px-2 py-1 w-full rounded-md bg-[#9dd9ff] text-black">
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; Digital
//                 Tutor QR codes available throughout the books that students can
//                 scan to access instructional videos that reinforce the basics of
//                 handwriting and teach how to write letters and numerals.
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; Writing
//                 models act as guidelines for students to write their letters
//                 neatly on the lines
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; Stop and
//                 Check can be used by students to evaluate the letters they have
//                 written
//               </li>
//               <li>
//                 <Circle className="!text-[0.5rem] text-black" /> &nbsp; Keys to
//                 Legibility help students to improve the shape, size, spacing,
//                 and slant of their letters to make their writing neat and
//                 legible
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="flex sm:flex-row flex-col px-4 sm:px-0  items-center w-full ">
//           <div className="flex flex-row items-center sm:w-1/2 w-full">
//             <img src={book1} className=" h-auto" alt="" />
//           </div>
//           <div className="flex flex-row items-center sm:w-1/2 w-full">
//             <img src={book2} className="rounded-md h-auto" alt="" />
//           </div>
//           <div className="flex flex-row items-center sm:w-1/2 w-full">
//             <img src={book3} className="rounded-md h-auto" alt="" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Handwriting;
//#1780c1
