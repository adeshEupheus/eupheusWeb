import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/cbse/the_radiant_way/the radiant way.png";
import logo from "../../../assets/curriculum/cbse/the_radiant_way/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import img7 from "../../../assets/curriculum/alphaFun/4.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner2 from "../../BookTemplate/Banner2";
import SectionTwo from "../../BookTemplate/SectionTwo";
import MainContent from "../../BookTemplate/MainContent";
import Content from "../../BookTemplate/Content";
import OsLite2 from "../../BookTemplate/OsLite2";
import CardThree from "../../BookTemplate/CardThree";

const The_radiant_way = () => {
  const keyFeatures = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner2 image={book1} bgColor={"#85b366"} />
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
            bgColor={"#85b366"}
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
            bgColor={"#85b366"}
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
              <span className="font-bold text-green-600">The Radiant Way </span>
              —First Step to Fourth Step series is a combination of the phonic
              and sentence methods of teaching reading. Each is given due
              recognition but they are blended to produce a single logical
              approach. The result is a sure foundation on which wider and later
              reading may be built. Everywhere the books are used— and they have
              been phenomenally popular all over the world—the testimony is the
              same: the Radiant Way child can read.
            </span>
          }
          bgColor={"#85b366"}
          listOne={"Grades"}
          listTwo={"1-4"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#85b366]">
        <div
          ref={keyFeatures}
          id="keyFeature"
          className="flex flex-col justify-center items-center w-[60%]"
        >
          <SectionTwo
            content={
              <Content
                bgColor={"#85b366"}
                headLine={"Key Features"}
                points={[
                  "Teaching methodology perfect for learners whose mother tongue is not English",
                  "Classical literary stories and poems given in the series",
                  "Smooth gradation over each step",
                  "Combination of 'Phonic' and ‘Look-and-Say’ method of teaching",
                  "Phonic practice integrated with the main text",
                  "Grade-appropriate vocabulary",
                  "Ample recapitulation of vocabulary and sounds learnt previously",
                ]}
              />
            }
            bgColor={"rgb(133, 179, 102)"}
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
          <OsLite2 />
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#85b366"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default The_radiant_way;
