import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../assets/digital/Escavel/1.png";
import img2 from "../../assets/digital/Escavel/2.png";
import img3 from "../../assets/digital/Escavel/3.png";
import img4 from "../../assets/digital/Escavel/4.png";
import img5 from "../../assets/digital/Escavel/5.png";
import img6 from "../../assets/digital/targetplus/6.png";
import img7 from "../../assets/digital/targetplus/7.png";

const Escavel = ({ sOpen }) => {
  return (
    <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
    >
      <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
        <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
          <span className="font-semibold">3D Science Virtual Lab</span>
          <img src={img1} className="w-full h-auto" alt="" />
          <h1 className="text-white font-semibold px-3 rounded-md py-1 bg-red-500">
            For Middle to Senior Levels
          </h1>
        </div>
        <span className="sm:w-3/5 w-full ">
          <span className="text-blue-500 font-bold text-2xl">
            Virtual Lab of Tomorrow
          </span>
          <br /> <br />
          ScholAR is a one-of-a-kind virtual interactive platform that will
          immerse you in all the relevant educational knowledge that you can ask
          for and you can access it at any time and anywhere to start your
          learning journey whether it’s in the classroom or at home.
        </span>
      </div>
      <div className="flex flex-col sm:flex-row w-full gap-4">
        <div className="flex w-full sm:w-1/2 justify-center items-center flex-col">
          {" "}
          <img src={img2} className="w-[50%] h-auto" alt="" />
          <span className="font-bold text-lg text-center">
            Interactive Lab at your <br />
            School/Home
          </span>
        </div>
        <div className="flex w-full sm:w-1/2 justify-center">
          {" "}
          <img src={img3} className="w-full h-auto" alt="" />
        </div>
      </div>

      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center justify-center mt-[2rem] w-full">
        <div className="flex sm:w-5/12 flex-col gap-3 ">
          <div className="flex flex-col">
            <span className="px-3 ml-8 py-1 text-black font-semibold bg-red-500 rounded-t-lg w-fit">
              Interactive
            </span>
            <ul className="rounded-md flex flex-col gap-2 p-4 border-2 border-red-500">
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" /> Truly
                interactive experience which lets a user ‘play’ with a variety
                of experiments
              </li>
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" />
                Simulations are user-driven
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="px-3 ml-8 py-1 text-black font-semibold bg-red-500 rounded-t-lg w-fit">
              Immersive
            </span>
            <ul className="rounded-md flex flex-col gap-2 p-4 border-2 border-red-500">
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" />
                3D graphics enable a ‘game-like’ experience
              </li>
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" />
                Easy visualization of complex concepts
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:w-7/12 w-full">
          <img src={img4} className="w-[90%] h-auto m-auto" alt="" />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center justify-center mt-[2rem] w-full">
        <div className="flex sm:w-5/12 flex-col gap-3 ">
          <div className="flex flex-col">
            <span className="px-3 ml-8 py-1 text-black font-semibold bg-red-500 rounded-t-lg w-fit">
              Immersive
            </span>
            <ul className="rounded-md flex flex-col gap-2 p-4 border-2 border-red-500">
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" />
                Content is aligned to school syllabus
              </li>
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" />
                Designed with experienced school teachers and IIT-ians
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="px-3 ml-8 py-1 text-black font-semibold bg-red-500 rounded-t-lg w-fit">
              Always ON
            </span>
            <ul className="rounded-md flex flex-col gap-2 p-4 border-2 border-red-500">
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" />
                Distributed online
              </li>
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" />
                Always available to anyone, anywhere, anytime
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:w-7/12 w-full">
          <img src={img5} className="w-[90%] h-auto m-auto" alt="" />
        </div>
      </div>
      <div className="flex flex-col w-full m-2 bg-blue-500 p-5">
        <span className="font-semibold text-lg text-white">
          <span className="font-bold"> For Students:</span> &nbsp; ScholAR helps
          them understand complex concepts because they get hands-on with
          reallife scenarios. Engagement levels are high because ScholAR
          encourages a two-way communication, and inspires the user to interact
          with it.
        </span>{" "}
        <br />
        <span className="font-semibold text-lg text-white">
          <span className="font-bold"> For Teachers:</span> &nbsp; ScholAR is
          useful for classroom teaching as well as online teaching methods.
        </span>
      </div>
    </div>
  );
};

export default Escavel;
