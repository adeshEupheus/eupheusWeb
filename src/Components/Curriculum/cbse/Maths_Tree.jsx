import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/cbse/Maths_Tree/Mathstree.png";
import logo from "../../../assets/curriculum/cbse/Maths_Tree/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
import img8 from "../../../assets/curriculum/zoom/digital content.png";
import CardSecond from "../../BookTemplate/CardSecond";
import img2 from "../../../assets/curriculum/cbse/Maths_weaves/mathbuddy.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import SectionTwo from "../../BookTemplate/SectionTwo";
import MainContent from "../../BookTemplate/MainContent";
import CardOne from "../../BookTemplate/CardOne";
import Content from "../../BookTemplate/Content";
import Banner2 from "../../BookTemplate/Banner2";
import img5 from "../../../assets/curriculum/zoom/ncf.png";

const Maths_Tree = () => {
  const keyFeatures = useRef(null);
  const Advantages = useRef(null);
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <div className="bg-[#bb70c2]">
        <img src={img5} alt="" className="w-16 h-16 -mb-5" />
        <Banner2 image={book1} bgColor={"rgb(187, 112, 194)"} />
      </div>
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
            bgColor={"rgb(187, 112, 194)"}
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
            text={"Teacher's Resources"}
            size={"small"}
            bgColor={"rgb(187, 112, 194)"}
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
            bgColor={"rgb(187, 112, 194)"}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              <span className="font-bold text-[#bb70c2]"> The Math Tree, </span>
              is a comprehensive primary-level mathematics learning programme
              for Grades 1–5 based on the guidelines of the National Curriculum
              Frameworks 2022–23. Adopting a Concrete-Pictorial- Abstract
              approach towards student engagement, this series comprises
              puzzles, stories, and a visually rich graded pedagogy to make
              learning of math fun and inclusive. It ensures that no child is
              behind acceptable benchmarks as far as foundational and
              preparatory numeracy skills are concerned. Furthermore, at the
              foundational stage it interweaves multi-disciplinary approach to
              acquiring numeracy skills, bringing art and language learning to
              the Math classroom.
              <br />
              The Math Tree is enriched with unique features like real-life
              examples, creative concept visualizations, critical thinking
              questions, and other support activities that helps teachers and
              learners treat numeracy as a life skill and not a subject that can
              be mastered through rote and drill.
            </span>
          }
          bgColor={"rgb(187, 112, 194)"}
          listOne={"Grades"}
          listTwo={"1-5"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#bb70c2]">
        <div ref={keyFeatures} id="keyFeature" className="w-[60%]">
          <SectionTwo
            content={
              <Content
                bgColor={"rgb(187, 112, 194)"}
                headLine={"Key features"}
                points={[
                  "Connect: For real-life connection with Math concepts",
                  "I Can: To revisit previously acquired concept through a quick assessment",
                  "Sing Along: Children understand different concepts through rhymes and their vocabulary also expands.",
                  "Stories: To promote the learning of language and mathematics simultaneously",
                  "Think Smart: To promote critical thinking skills",
                  "Puzzle Time: To make critical thinking activities",
                  "Everyday Math: Math problems that relate to our daily lives",
                  "Mind It: Helps learners avoid common mistakes",
                  "Worksheet: At the end of each chapter for additional practice",
                  "Mental Math: Building cognitive abilities of learners and making them think quickly and accurately",
                  "Fact Zone: Math facts to help learners recall rules of thumb",
                  "Chapter-end bonuses: Math vocabulary, key points, self-check",
                  "Math Lab activity to make math learning hands on and help learners use concrete manipulatives for concept acquisition",
                ]}
              />
            }
            bgColor={"rgb(187, 112, 194)"}
            img={img6}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#e5e7eb]">
        <div ref={Advantages} id="Advantages" className="w-[60%]">
          <SectionTwo
            content={
              <Content
                bgColor={"rgb(229 231 235)"}
                headLine={"RESOURCES FOR TEACHERS'"}
                points={[
                  "Teacher Manuals provide teachers with a one-step solution for delivering effective curriculum. Include suggested hands-on classroom and Math lab activities, lesson plans and extensions to develop lateral thinking of concepts.",
                  "Flipbooks with animations for teachers. Animations will also be available at home through 21st Century School OS Lite platform.",
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
            <CardOne
              headLine={"TEACHERS’ RESOURCES"}
              points={[
                "E-book",
                "Animations**",
                "Lesson Plans",
                "Answer Keys",
                "Test Generators",
              ]}
            />
            <CardOne
              headLine={"STUDENTS’ RESOURCES"}
              points={["Chapter PDFs", "Animations**"]}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center py-6 md:p-4 text-sm">
            <CardSecond
              image={img8}
              headLine={"Digital Content"}
              para={
                "It includes e-books, animations, interactive e-worksheets, and e-activities."
              }
            />
            <CardSecond
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
            bgColor={"rgb(187, 112, 194)"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Maths_Tree;
