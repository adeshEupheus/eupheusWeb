import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../../assets/digital/Enpower/1.png";
import img2 from "../../../assets/digital/Enpower/3.png";
import img4 from "../../../assets/digital/Enpower/2.png";
import img3 from "../../../assets/digital/Enpower/4.png";
import img5 from "../../../assets/digital/Enpower/5.png";
import img6 from "../../../assets/digital/Enpower/6.png";

const Enpower = ({ sOpen }) => {
  return (
    <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:px-[2rem] bg-white sm:pt-0 transition-all duration-200 ease-linear pt-[9.5rem] lg:mt-[15vh] md:mt-[14vh] sm:mt-[20vh] gap-4`}
    >
      <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
        <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
          <span className="font-bold"> Soft Skills </span>
          <img src={img1} className="w-full h-auto" alt="" />
          <h1 className="w-full text-white text-center font-semibold px-2 sm:px-4 md:px-0 py-1   bg-[#661276]">
            For Primary to Senior Levels
          </h1>
        </div>
        <span className="sm:w-3/5 w-full font-semibold text-justify">
          <b>Redefining Life Skills Learning in India</b> <br /> <br />
          <b>Introducing online game-based soft skill development platform</b>
          <br />
          <br />
          World leader in game-based education and training, which specializes
          in the development of thinking skills and socio-emotional skills using
          strategy games.
        </span>
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center justify-center mt-[2rem] w-full">
        <div className="flex flex-col w-1/2">
          <img src={img4} className="w-full h-auto p-3" alt="" />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center justify-center mt-[2rem] w-full">
        <div className="flex flex-col w-full">
          <img src={img2} className="w-full h-auto p-3" alt="" />
        </div>
      </div>
      <div className="flex flex-wrap flex-row  gap-6 sm:px-0 px-3  justify-center mt-[1rem] w-full font-semibold">
        <span className="flex flex-row py-2 px-8  bg-[#ddbe4f]  rounded-lg">
          Engaging
        </span>
        <span className="flex flex-row  py-2 px-8 bg-[#ddbe4f]  rounded-lg">
          Effective{" "}
        </span>
        <span className="flex flex-row  py-2 px-8 bg-[#ddbe4f]  rounded-lg">
          Immersive
        </span>
        <span className="flex flex-row  py-2 px-8 bg-[#ddbe4f]  rounded-lg">
          Thinking coach
        </span>
        <span className="flex flex-row  py-2 px-8  bg-[#ddbe4f]  rounded-lg">
          Cost–effective
        </span>
      </div>
      <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-4 items-center w-full">
        <div className="flex flex-col items-center justify-center sm:w-4/12 w-full">
          <span className="font-bold p-2">Playing</span>
          <img
            src={img3}
            className="w-[40%] h-auto sm:w-full sm:h-auto"
            alt=""
          />
          <span className="font-bold text-xl">Game-based workout</span> <br />
          <span>using the Accelium System</span>
        </div>
        <div className="flex flex-col items-center justify-center sm:w-4/12 w-full">
          <span className="font-bold p-2">Playing</span>
          <img
            src={img5}
            className="w-[40%] h-auto sm:w-full sm:h-auto"
            alt=""
          />
          <span className="font-bold text-xl">Learning practical</span> <br />
          <span>concepts and strategies</span>
        </div>
        <div className="flex flex-col items-center justify-center sm:w-4/12 w-full">
          <span className="font-bold p-2">Playing</span>
          <img
            src={img6}
            className="w-[40%] h-auto sm:w-full sm:h-auto"
            alt=""
          />
          <span className="font-bold text-xl">Transfer and application</span>{" "}
          <br />
          <span className="p-1">
            of concepts learned in the game to real-life situations
          </span>
        </div>
      </div>
      <div className="flex flex-col px-4 sm:px-0 gap-4 items-center justify-center w-full bg-blue-500 p-5  rounded-lg my-4">
        <span className="flex w-fit font-bold text-white">
          An age-appropriate, user adaptive tool for higher order skill
          development
        </span>
      </div>
    </div>
  );
};

export default Enpower;
