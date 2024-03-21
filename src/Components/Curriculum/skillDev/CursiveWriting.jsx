import React from "react";
import book1 from "../../../assets/curriculum/skillDev/Cursive Writing/cursive writing.png";
import logo from "../../../assets/curriculum/skillDev/Cursive Writing/logo.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner from "../../BookTemplate/Banner";
import MainContent from "../../BookTemplate/MainContent";

const CursiveWriting = () => {
  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200  ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner
        image={book1}
        bgColor={"#25adcf"}
        Ncficon={false}
        flexprop={"flex flex-col justify-center items-center pt-3"}
      />
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              The{" "}
              <span className="font-bold text-[#25adcf]">
                The Art of Handwriting Cursive Writing:{" "}
              </span>
              This series of seven books has been prepared to help children
              learn the art of good handwriting The models used in the
              worksheets of the books are based on the Motion Richardson style
              and the same cursive script progresses from the alphabet in the
              first two introductory books to two letter joints in books 1 and 2
              and further to simple words sentences along with some examples of
              creative writing in further parts of the series.
            </span>
          }
          bgColor={"#25adcf"}
          listOne={"Grades"}
          listTwo={"1-5"}
        />
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#25adcf"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default CursiveWriting;
