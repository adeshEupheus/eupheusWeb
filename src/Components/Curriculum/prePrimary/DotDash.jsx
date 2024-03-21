import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/dotDash/donndash.png";
import logo from "../../../assets/curriculum/dotDash/dotdashIcon.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner from "../../BookTemplate/Banner";
import Section from "../../BookTemplate/Section";
import MainContent from "../../BookTemplate/MainContent";
import KeyPoints from "../../BookTemplate/KeyPoints";
import AgeCard from "../../BookTemplate/AgeCard";

const DotDash = () => {
  const keyFeatures = useRef(null);
  // const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200  ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner
        image={book1}
        bgColor={"#fcaa53"}
        Ncficon={false}
        flexprop={"flex flex-col justify-center items-center pt-3"}
      />
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
            bgColor={"#fcaa53"}
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
              The Early Childhood Learning Programme is based on the principles
              of Integrated and Experiential Learning and promotes creative
              thinking in young learners. It is designed by experienced teachers
              adhering to the elements of Multiple Intelligences and Bloom's
              Taxonomy. Our activity-based books and notebooks give children the
              opportunity to explore, understand, and enjoy learning. The books
              follow an interactive approach and aim to build learner
              independence right from an early age.
              <br />
              <span className="font-bold text-orange-500">DOT & DASH </span>
              contains a variety of exercises that build a sound foundation for
              developing writing skills among the young learners. It takes the
              child through various stages of handwriting development.The
              writing exercises will help the child to:
              <ul>
                <li className="list-disc">
                  develop eye-hand coordination and fine motor skills.
                </li>
                <li className="list-disc">be imaginative and creative.</li>
                <li className="list-disc">be prepared for letter-writing.</li>
              </ul>
            </span>
          }
          bgColor={"#fcaa53"}
          listOne={"NURSERY"}
          listTwo={"LKG"}
          listThree={"UKG"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#fcaa53]">
        <div
          ref={keyFeatures}
          id="keyFeature"
          className="flex flex-col justify-center items-center w-[60%]"
        >
          <Section
            content={
              <KeyPoints
                bgColor={"#fcaa53"}
                headLine={"Key Features"}
                points={[
                  "Tracing Shapes: Helps in learning different dimensions of geometric and curved shapes.",
                  "Dot to Dot: Guides the formation of a pattern and develops spatial intelligence.",
                  "Colouring: Helps in motor skill building through artistic expression.",
                  "Pattern Writing: Helps in building tripod grasp and wrist movement.",
                ]}
              />
            }
            bgColor={"rgb(252, 170, 83)"}
            img={img6}
          />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <AgeCard bgColor={"#fcaa53"} bgColor1={"#fc9930"} />
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#fcaa53"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default DotDash;
