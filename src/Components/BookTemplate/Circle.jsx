import React from "react";

function Circle() {
  return (
    <div className="flex flex-col justify-center items-center sm:flex-row p-4 bg-gray-200 px-4">
      <div className="flex border-white rounded-full text-base font-semibold justify-center place-items-center bg-[#4464c4] text-white m-5 w-60 h-60 border-2 items-center drop-shadow-lg">
        <span className="w-[50%]">
          Rave reviews from over 1000 ICSE Chemistry Teachers from all corners
          of India
        </span>
      </div>
      <div className="flex flex-col border-white rounded-full text-base justify-center drop-shadow-lg place-items-center bg-[#4464c4] text-white py-2 m-5 w-60 h-60 border-2 items-center font-semibold ">
        <span className="w-[50%]">
          Acknowledged and appreciated by over 700 ICSE schools from all over
          India
        </span>
      </div>
    </div>
  );
}

export default Circle;
