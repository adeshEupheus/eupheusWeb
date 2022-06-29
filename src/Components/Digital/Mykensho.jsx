import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../assets/digital/stepAndLearn/2.png";
import img2 from "../../assets/digital/stepAndLearn/3.png";
import img3 from "../../assets/digital/stepAndLearn/4.png";

const Mykensho = ({ sOpen }) => {
  return (
    <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
    >
      <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
        <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
          <span className="font-bold">Advanced Life Skills</span>
          <img src={img1} className="w-full h-auto" alt="" />
          <h1 className="text-white font-semibold px-3 rounded-md py-1 bg-purple-700">
            For Primary to Senior Levels
          </h1>
        </div>
        <span className="sm:w-3/5 w-full">
          mykensho is a unique technology and human-enabled program focused on
          preparing adolescents with the knowledge, skills, attributes, and
          values required to thrive in Industry 4.0. It is career and an
          advanced life skill development ecosystem solution. <br />
          mykensho is crafted like a subject, with structured curriculum, that
          can be easily integrated into any school curriculum with dynamic
          reporting to evaluate efficacy of the program at an individual/class
          or school level. It is for grades 5–12. <br />
        </span>
      </div>
      <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
        <span className="">
          School teachers involved in the program delivery are trained and
          mentored all year round by innovative teaching methods such as
          positive education pedagogy and methods to use the data on the
          platform to better engage with the students and create personalized
          learning experiences in and outside the classroom. Teachers can earn a
          certificate of being an International Certified Career Practitioner.{" "}
        </span>
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center justify-center mt-[2rem] w-full">
        <div className="flex flex-col sm:w-5/12 w-full">
          <span className="px-3 ml-8 py-1 text-white font-semibold bg-purple-700 rounded-t-lg w-fit">
            BENEFITS
          </span>
          <ul className="px-2 py-1 w-full rounded-md border-2 border-[#a0a0a4] text-black">
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp; Domains
              Covered
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp;
              Self-Development: know myself, set goals and achieve
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp; Career
              Exploration: explore careers, study options
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp; Engaging
              for all stakeholders: teachers, parents and students as part of
              the program as they all influence key decisions in the development
              of the student
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp;Teacher
              trainings
            </li>
            <li>
              <Circle className="!text-[0.5rem] text-black" /> &nbsp; Lesson
              plans
            </li>
          </ul>
        </div>
        <div className="bg-purple-700 flex flex-col rounded-lg sm:w-5/12 w-full gap-3 py-4">
          <h1 className="text-white flex w-full justify-center font-semibold">
            Multiple Learning Applications
          </h1>
          <div className="flex justify-around">
            <ul className="rounded-md flex flex-col gap-4 bg-purple-700">
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> QUIZ
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> STEPSTONE
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> BALLOONS
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> FLOOR KEYBOARD
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> THEME CARDS
              </li>
            </ul>
            <ul className="rounded-md bg-purple-700 gap-4 flex flex-col">
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> MEMORY
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> SENSORY
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> FOOTBALL
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> PUZZLE
              </li>
              <li className="font-semibold text-white">
                <Circle className="!text-[0.5rem] !text-white" /> PIANO
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img src={img3} className="mt-[1rem]" alt="" />
    </div>
  );
};

export default Mykensho;
