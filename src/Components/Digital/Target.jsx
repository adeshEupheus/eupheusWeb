import React from "react";
import { Circle } from "@mui/icons-material";
import img1 from "../../assets/digital/targetplus/1.png";
import img2 from "../../assets/digital/targetplus/2.png";
import img3 from "../../assets/digital/targetplus/3.png";
import img4 from "../../assets/digital/targetplus/4.png";
import img5 from "../../assets/digital/targetplus/5.png";
import img6 from "../../assets/digital/targetplus/6.png";
import img7 from "../../assets/digital/targetplus/7.png";

const Target = ({ sOpen }) => {
  return (
    <div
      className={`w-full ${
        sOpen ? "w-0 sm:w-full fixed sm:static -right-[100%]" : "w-full"
      } flex flex-col sm:pl-[3rem] bg-white sm:pt-4 transition-all duration-200 ease-linear pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] gap-4`}
    >
      <div className="flex sm:flex-row flex-col justify-around gap-2 w-full px-4 items-center">
        <div className="flex flex-col items-center gap-4 sm:w-[30%] w-full">
          <span className="font-semibold">Tool for improving results</span>
          <img src={img1} className="w-full h-auto" alt="" />
          <span>Powered by Sanako</span>
          <h1 className="text-white font-semibold px-3 rounded-md py-1 bg-red-500">
            For Primary to Senior Levels
          </h1>
        </div>
        <span className="sm:w-3/5 w-full ">
          <span className="text-red-500">iversusi</span>&nbsp; is a process of
          improving results using assessments ‘as’ learning
          <br /> <br />
          It improves results in every class as it provides interactive
          diagnostic reports and personal action plans instantly that are
          followed by immediate corrective action
        </span>
      </div>
      <div className="flex sm:flex-row flex-col gap-6 sm:px-0 px-3 items-center justify-center mt-[2rem] w-full">
        <div className="flex sm:w-5/12 flex-col gap-3 ">
          <span className="font-bold text-red-600 text-center text-xl">
            iversusi <span className="text-black ">stakeholder benefits</span>
          </span>
          <div className="flex flex-col">
            <span className="px-3 ml-8 py-1 text-black font-semibold bg-red-500 rounded-t-lg w-fit">
              Schools
            </span>
            <ul className="rounded-md flex flex-col gap-2 p-4 border-2 border-red-500">
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" /> Improve Board
                results
              </li>
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" />
                Benefit from a better image care for every child’s improvement
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="px-3 ml-8 py-1 text-black font-semibold bg-red-500 rounded-t-lg w-fit">
              Teachers
            </span>
            <ul className="rounded-md flex flex-col gap-4 p-4 border-2 border-red-500">
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" /> Save time
              </li>
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" />
                Work more effectively
              </li>
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" /> Get instant
                feedback
              </li>
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" />
                Address individual student needs in entire class settings
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="px-3 ml-8 py-1 text-black font-semibold bg-red-500 rounded-t-lg w-fit">
              Parents
            </span>
            <ul className="rounded-md flex flex-col gap-4 p-4 border-2 border-red-500">
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" />
                Get personalized reports that pinpoint areas of strength and
                improvement
              </li>
              <li className="font-semibold text-black">
                <Circle className="!text-[0.5rem] !text-black" />
                Help their children to study smarter, not just harder
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:w-7/12 w-full">
          <span className="font-bold text-red-600 text-center text-xl">
            iversusi <span className="text-black ">Process</span>
          </span>
          <img src={img2} className="w-[90%] h-auto m-auto" alt="" />
        </div>
      </div>
      <div className="flex flex-col w-full m-2">
        <img src={img3} className="w-[90%] h-auto m-auto" alt="" />
      </div>
      <div className="flex flex-col sm:flex-row w-full">
        <div className="flex justify-center items-center">
          <img src={img4} className="w-full h-auto m-auto" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img5} className="w-full h-auto m-auto" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img6} className="w-full h-auto m-auto" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src={img7} className="w-full h-auto m-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Target;
