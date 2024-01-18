import React from "react";

function Content2({ headLine, para, image, bgColor }) {
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex gap-2 items-center justify-center sm:w-[60%] px-4">
        <div className="flex flex-col justify-center items-center sm:p-12 p-4">
          <span className="font-black text-2xl">{headLine}</span>
          <div
            className="font-medium gap-1"
            style={{ backgroundColor: bgColor }}
          >
            <div className="flex flex-col text-sm sm:text-base font-medium items-center rounded-md w-full justify-center text-justify sm:text-left">
              {para}
            </div>
          </div>
        </div>
        {image ? <img src={image} className="w-32 h-32" alt="" /> : null}
      </div>
    </div>
  );
}

export default Content2;
