import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../assets/digital/Vantage/2.png";
import img5 from "../../assets/digital/Vantage/1.png";

const Vantage = ({ sOpen }) => {
  return (
    <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
    >
      <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
        <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
          <span className="font-bold">
            Automated Essay <br />
            Assessment Application{" "}
          </span>
          <img src={img1} className="w-full h-auto" alt="" />
          <h1 className="text-white font-semibold px-3 rounded-md py-1 bg-yellow-600">
            For Middle to Senior Levels
          </h1>
        </div>
        <span className="sm:w-3/5 w-full ">
          MY Access! School Edition is the award-winning, cloud-based writing
          development solution that utilizes artificial intelligence and
          linguistic technologies to bring wide-scale differentiated instruction
          to the writing process. Educators can make timely, data-driven
          decisions for successful differentiated instruction and motivate
          students to write more frequently by providing them with immediate
          feedback.
        </span>
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center justify-center mt-[2rem] w-full">
        <div className="flex flex-col sm:w-10/12 w-full">
          <span className="px-3 ml-8 py-1 text-black font-semibold bg-yellow-600 rounded-t-lg w-fit">
            KEY FEATURES
          </span>
          <ul className="rounded-md flex flex-col gap-4 p-4 border-2 border-yellow-600">
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" /> Uses artificial
              intelligence and linguistic technologies to bring wide-scale
              differentiated instruction to the writing process
            </li>
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" />
              Provides over 1800 writing prompts across subjects and genres
            </li>
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" /> Unlimited
              opportunities to write and revise
            </li>
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" />
              Allows teachers to create their own prompts
            </li>
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" /> Delivers
              immediate feedback to students to improve their writing
            </li>
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" /> Aids students in
              preparing for high-stake assessments
            </li>
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" /> Provides
              teachers with data that can be used to provide focussed
              instructions for each student
            </li>
            <li className="font-semibold text-black">
              <Circle className="!text-[0.5rem] !text-black" /> Access to a
              variety of prewriting tools, including graphic organizers and
              printables to assist them in planning their responses
            </li>
          </ul>
        </div>
      </div>
      <img src={img5} className="w-[90%] h-auto m-auto" alt="" />
    </div>
  );
};

export default Vantage;
