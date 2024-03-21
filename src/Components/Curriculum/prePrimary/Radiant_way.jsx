import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/radiantWay/radiant way.png";
import logo from "../../../assets/curriculum/radiantWay/radiantwayIcon.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner from "../../BookTemplate/Banner";
import Section from "../../BookTemplate/Section";
import MainContent from "../../BookTemplate/MainContent";
import KeyPoints from "../../BookTemplate/KeyPoints";
import ResourceCard from "../../BookTemplate/ResourceCard";

const Radiant_way = () => {
  const keyFeatures = useRef(null);
  const Advantages = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      {/* <Banner2 image={book1} bgColor={"#76ad59"} /> */}
      <Banner
        Ncficon={false}
        flexprop={"flex flex-col justify-center items-center pt-3"}
        image={book1}
        bgColor={"#76ad59"}
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
            bgColor={"#76ad59"}
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
            bgColor={"#76ad59"}
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
            bgColor={"#76ad59"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              <span className="font-bold text-green-700">
                The Radiant Way Pre Primer and Primer
              </span>{" "}
              series has been specially prepared to meet the needs of the
              students who have been newly introduced to the study of English in
              the pre-primary classes of English-medium schools. While the
              series is linked with the Radiant Way series and the New Radiant
              Readers, it has been planned to be used as independent
              introductory English readers.
            </span>
          }
          bgColor={"#76ad59"}
          listOne={"PRE PRIMER"}
          listTwo={"PRIMER"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#76ad59]">
        <div ref={keyFeatures} id="keyFeature" className="w-[70%]">
          <Section
            content={
              <KeyPoints
                bgColor={"#76ad59"}
                headLine={"Key Features"}
                points={[
                  "Teaching methodology perfect for learners whose mother tongue is not English",
                  "Combination of ‘Phonic’ and ‘Look-and-Say’ method of teaching",
                  "Most of the vocabulary words provided in the series have short vowel sounds",
                  "Attractive four-colour illustrations found on most of the pages of the series",
                  "Child-friendly layout to engage young readers",
                  "Variety of exercises provided for revision work",
                  "Grade-appropriate vocabulary",
                ]}
              />
            }
            bgColor={"rgb(118, 173, 89)"}
            img={img6}
          />
        </div>
      </div>
      <div
        className="flex flex-col justify-center items-center"
        ref={Advantages}
        style={{ backgroundColor: "rgb(209 213 219)" }}
        id="Advantages"
      ></div>
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
              points={["E-book"]}
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
            bgColor={"#76ad59"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Radiant_way;
