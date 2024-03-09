import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/cbse/Maths_weaves/math weaves.png";
import logo from "../../../assets/curriculum/cbse/Maths_weaves/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import img8 from "../../../assets/curriculum/zoom/digital content.png";
import img2 from "../../../assets/curriculum/cbse/Maths_weaves/mathbuddy.png";
import Card from "../../BookTemplate/Card";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import Banner from "../../BookTemplate/Banner";
import Section from "../../BookTemplate/Section";
import MainContent from "../../BookTemplate/MainContent";
import ResourceCard from "../../BookTemplate/ResourceCard";
import KeyPoints from "../../BookTemplate/KeyPoints";

const Maths_weaves = () => {
  const keyFeatures = useRef(null);
  const Advantages = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner image={book1} bgColor={"rgb(67, 147, 204)"} Ncficon={true} />
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
            bgColor={"rgb(67, 147, 204)"}
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
            bgColor={"rgb(67, 147, 204)"}
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
            bgColor={"rgb(67, 147, 204)"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              Aligned to the 2022-23 National Curriculum Frameworks (NCF),
              <span className="font-bold text-[#4393cc]"> Maths Weaves </span>
              brings a shift in focus from mathematical content to mathematical
              learning environments, where a whole range of processes take
              precedence: formal problem solving, use of heuristics, estimation
              and approximation, optimisation, use of patterns, visualisation,
              representation, making connections and mathematical communication.
              With this series every student will feel engaged with a sense of
              success, while at the same time solving conceptual challenges.
            </span>
          }
          bgColor={"rgb(67, 147, 204)"}
          listOne={"Grades"}
          listTwo={"1-8"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#4393cc]">
        <div ref={keyFeatures} id="keyFeature" className="w-[60%]">
          <Section
            content={
              <KeyPoints
                bgColor={"rgb(67, 147, 204)"}
                headLine={"Key features"}
                points={[
                  "Puzzles and play-way activities: Games of strategy, logic and word puzzles, and recreational mathematics excite children about mathematics and develop logical skills.",
                  "Board games teach children to follow simple rules and enhance understanding of language and mathematics through play and employment of critical thinking.",
                  "Rhymes in Grades 1 and 2 help children understand different concepts.",
                  "Stories in Grades 1–5 promote the learning of language and mathematics simultaneously.",
                  "Art integration projects in every chapter increase motivation and curiosity in learning.",
                  "Enrichment corner comprising critical thinking, life skills, subject integration, discovery based and communication questions at the end of every chapter in Grades 1–3.",
                  "Math Lab activities in Grades 4–8 to strengthen the learning of mathematical concepts through concrete materials and hands-on experiences.",
                ]}
              />
            }
            bgColor={"rgb(67, 147, 204)"}
            img={img6}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#e5e7eb]">
        <div ref={Advantages} id="Advantages" className="w-[60%]">
          <Section
            content={
              <KeyPoints
                bgColor={"rgb(229 231 235)"}
                headLine={
                  "ENGAGING SUPPLEMENTS FOR IN-CLASS AND AT-HOME LEARNING"
                }
                points={[
                  "Practice Booklet for fun and engaging learning from Grades 1–5; exemplar HOTS questions for Grades 6–8—only for teachers and schools for in-class learning enhancement",
                  "Material board at the end of the book provides hands-on experience and brings concepts to life by allowing children to experience and handle physical objects.",
                  "Comprehensive teacher support material with teaching aids facilitates classroom transactions.",
                  "Animations to support learners from Grades 1 through 5. Available on flipbooks and 21st Century School OS Lite platforms.",
                  "Math Buddy to schools for instant test-making, math lab simulation, and videos for handson learning demonstrations.",
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
              Digital Platform + Math Buddy*
            </span>
          </div>
          <br />

          <div className="flex flex-col sm:flex-row gap-4 px-5 justify-center items-center">
            <ResourceCard
              headLine={"TEACHERS’ RESOURCES"}
              points={[
                "E-book",
                "Animations**",
                "Lesson Plans",
                "Answer Keys",
                "Test Generators",
              ]}
            />
            <ResourceCard
              headLine={"STUDENTS’ RESOURCES"}
              points={["Chapter PDFs", "Animations**"]}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center py-6 md:p-4 text-sm">
            <Card
              image={img8}
              headLine={"Digital Content"}
              para={
                "It includes e-books, animations, interactive e-worksheets, and e-activities."
              }
            />
            <Card
              image={img2}
              headLine={"MathBuddy"}
              para={
                "CPA model delivering hands-on exploratory learning, interactive tools to teach in the classroom cloud-based home access for students."
              }
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"rgb(67, 147, 204)"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Maths_weaves;
