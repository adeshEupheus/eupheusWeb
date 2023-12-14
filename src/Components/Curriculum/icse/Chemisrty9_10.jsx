import React from "react";
import { Circle } from "@mui/icons-material";
import circle1 from "../../../assets/curriculum/icse/chemistry_9_10/circle1.PNG";
import circle2 from "../../../assets/curriculum/icse/chemistry_9_10/circle2.PNG";
import book1 from "../../../assets/curriculum/icse/chemistry_9_10/1.png";
import book2 from "../../../assets/curriculum/icse/chemistry_9_10/2.png";
import englishvibes from "../../../assets/curriculum/icse/chemistry_9_10/Curriculum Catalogue_2021-22_Page_38.jpg";

const Chemisrty9_10 = ({ sOpen }) => {
  return (
    <>
      <div
        className={`w-full ${
          sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
        } flex flex-col sm:pl-[3rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
      >
        <img src={englishvibes} className="w-full h-auto" alt="" />
        <div className="flex sm:flex-row flex-col gap-1 w-full px-4 sm:px-0">
          <span className="sm:w-4/5 w-full">
            <span className="text-[#4464c4] font-semibold">
              Dr. Dalal’s New Simplified School Chemistry
            </span>{" "}
            &nbsp; for classes 9 and 10 is a series of textbooks, workbooks, and
            lab manuals that has been created in accordance with the latest
            syllabus prescribed by The Council for the Indian School Certificate
            Examinations, New Delhi for The Indian Certificate of Secondary
            Education [I.C.S.E.] Examinations. Solvable question bank and test
            papers for class 10 are also available.
          </span>
        </div>
        <div className="flex sm:flex-row flex-col  px-4 sm:px-0 w-full">
          <div className=" sm:w-[40%] w-full m-6">
            <span className="px-3 ml-3 py-1 bg-[#4464c4] rounded-t-lg w-fit text-white">
              KEY FEATURES
            </span>
            <ul className="px-2 py-1 w-full rounded-md bg-[#87a1ed] text-black">
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Thorough
                coverage of the entire text matter and is strictly as per the
                syllabus
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; Approach
                of the book is simple, lucid, and systematic
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp;
                Interesting diagrams make the text more interesting and lucid
              </li>
            </ul>
          </div>
          {/* <div className="flex text-sm flex-col sm:w-6/12 w-full p-5 m-4 bg-[#87a1ed] rounded-lg">
            <table className="">
              <tr>
                <th className="text-white flex justify-start">Title</th>
                <th className="text-white">Price</th>
              </tr>
              <tr>
                <td>Simplified ICSE Chemistry for Std. IX</td>
                <td>410</td>
              </tr>
              <tr>
                <td>Simplified ICSE Chemistry for Std. X</td>
                <td>420</td>
              </tr>
              <tr>
                <td>
                  Objective Workbook for Simplified ICSE Chemistry for Std. IX
                </td>
                <td>319</td>
              </tr>
              <tr>
                <td>
                  Objective Workbook for Simplified ICSE Chemistry for Std. X
                </td>
                <td>319</td>
              </tr>
              <tr>
                <td>
                  Simplified ICSE Practical Laboratory Chemistry Manual for
                  Class IX
                </td>
                <td>319</td>
              </tr>
              <tr>
                <td>
                  Simplified ICSE Practical Laboratory Chemistry Manual for
                  Class X
                </td>
                <td>319</td>
              </tr>
              <tr>
                <td>
                  Simplified ICSE Chemistry Solvable Question Bank & 25 Test
                  Papers for Std. X
                </td>
                <td>385</td>
              </tr>
            </table>
          </div> */}
        </div>
        <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
          <div className="flex flex-col sm:w-6/12 w-full">
            <img src={book1} className="w-[80%] h-auto" alt="" />
          </div>
          <div className="flex flex-col sm:w-[50%] w-full">
            <div className="flex flex-row">
              <img src={circle1} className="w-[50%] h-auto" alt="" />
              <img src={circle2} className="w-[50%] h-auto" alt="" />
            </div>
            <div className=""></div>
            <img src={book2} className="w-[80%] h-auto" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chemisrty9_10;
