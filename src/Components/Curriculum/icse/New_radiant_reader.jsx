import React from "react";
import { Circle } from "@mui/icons-material";
import book1 from "../../../assets/curriculum/icse/new_radiant_reader/1.png";
import book2 from "../../../assets/curriculum/icse/new_radiant_reader/2.png";
import book3 from "../../../assets/curriculum/icse/new_radiant_reader/3.png";
import book4 from "../../../assets/curriculum/icse/new_radiant_reader/4.png";
import englishvibes from "../../../assets/curriculum/icse/new_radiant_reader/Curriculum Catalogue_2021-22_Page_46.jpg";

const New_radiant_reader = ({ sOpen }) => {
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
            Based on a time-tested and popular school study material for nearly
            hundred years, this new edition of the &nbsp;{" "}
            <span className="text-[#f4a267] font-semibold">
              New Radiant Readers
            </span>{" "}
            &nbsp;, is a literature series of 2 Primers, 8 Readers and 8
            Workbooks. This package is for classes K-8 and for the ICSE schools
            seeking to familiarize students with classical and contemporary
            literary texts. All the lessons in this series are based on the
            phonic pattern. This series follows the recommendations of the ICSE
            syllabus and all required themes and skills have been fully covered
            in an interesting manner.
          </span>
          <div className="flex gap-4 rounded-md w-fit px-3 justify-center bg-[#ffa463] py-2">
            <div className="flex flex-col gap-[2px] ">
              <span className="text-white font-semibold">Title</span>
              <span className="text-black font-semibold">Book 1</span>
              <span className="text-black font-semibold">Book 2</span>
              <span className="text-black font-semibold">Book 3</span>
              <span className="text-black font-semibold">Book 4</span>
              <span className="text-black font-semibold">Book 5</span>
              <span className="text-black font-semibold">Book 6</span>
              <span className="text-black font-semibold">Book 7</span>
              <span className="text-black font-semibold">Book 8</span>
            </div>
            <div className="flex flex-col gap-[2px]">
              <span className="text-white font-semibold">Price</span>
              <span className="text-black font-semibold">235</span>
              <span className="text-black font-semibold">250</span>
              <span className="text-black font-semibold">265</span>
              <span className="text-black font-semibold">275</span>
              <span className="text-black font-semibold">285</span>
              <span className="text-black font-semibold">300</span>
              <span className="text-black font-semibold">310</span>
              <span className="text-black font-semibold">325</span>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
          <div className="flex flex-col sm:w-[50%] w-full m-4">
            <span className="px-3 ml-3 py-1 bg-[#f4a267] rounded-t-lg w-fit text-white">
              KEY FEATURES
            </span>
            <ul className="px-2 py-1 w-full rounded-md bg-[#ffc59b] text-black">
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; • The{" "}
                <b>Readers</b> carry stories, folktales, and biographies based
                on the phonic pattern and poems of action and rhythm.
                Comprehension exercises practise usage of language. Vocabulary
                and Grammar drills are graded to match students’ mental
                abilities while giving opportunities for sustained creative
                writing practice.
              </li>
              <li>
                <Circle className="!text-[0.5rem] text-black" /> &nbsp; The{" "}
                <b>Workbooks</b> are linked to the Readers lesson-wise. They
                carry vocabulary, grammar, and writing exercises that extend
                from each lesson of the Reader. Invigorating listening and
                speaking activities help to refine aural-oral skills in the
                learner.
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:w-6/12 w-full">
            <span className="bg-[#ff964c] p-4 m-4 rounded-lg">
              <img src={book4} className="w-[80%] h-auto m-auto" alt="" />
              <span className="flex justify-center text-white">
                Workbooks for classes 1-8
              </span>
            </span>
            <span className="px-3 ml-3 py-1 bg-[#d47e41] rounded-t-lg w-fit text-white">
              KIDS AND PARENTAL SUPPORT
            </span>
            <span className="p-6 w-[80%] rounded-lg bg-[#ff964c] text-black">
              <img src={book3} className="w-[80%] h-auto m-auto" alt="" />
              <span className="text-white">
                A.I.-Powered Adaptive App to improve your grammar skills in an
                interactive and fun way
              </span>
            </span>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-2 px-4 sm:px-0 items-center w-full">
          <div className="flex flex-col sm:w-6/12 w-full">
            <img src={book1} className="w-[80%] h-auto" alt="" />
          </div>
          <div className="flex flex-col sm:w-[50%] w-full">
            <img src={book2} className="w-[80%] h-auto" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default New_radiant_reader;
