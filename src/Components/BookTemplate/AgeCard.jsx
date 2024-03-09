import React from "react";
import flower from "../../assets/curriculum/splash/flower.png";

function AgeCard({ bgColor, bgColor1 }) {
  return (
    <div className="flex sm:flex-row flex-col px-4 sm:px-0 gap-4 items-center w-full">
      <div className="flex flex-col items-center sm:w-1/2 w-full p-3">
        <img src={flower} className="w-[40%] h-auto" alt="" />
      </div>
      <div className="flex flex-col sm:w-1/2 w-full p-4">
        <span
          className="px-3 ml-6 py-1 rounded-t-lg w-fit font-bold"
          style={{ backgroundColor: bgColor1 }}
        >
          TITLES AVAILABLE FOR
        </span>

        <ul
          className="px-4 py-2 flex flex-col w-fit border-2 gap-4 rounded-lg justify-center"
          style={{ backgroundColor: bgColor }}
        >
          <div
            className="flex gap-4 rounded-md w-fit px-3 justify-center py-2"
            style={{ backgroundColor: bgColor }}
          >
            <div className="flex flex-col gap-2">
              <span className=" font-semibold">
                Age 2+ <br />
                Level-1
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className=" font-semibold">
                Age 3+ <br />
                Level-2
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className=" font-semibold">
                Age 4+ <br />
                Level-3
              </span>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default AgeCard;
