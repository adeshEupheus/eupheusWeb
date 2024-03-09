import React from "react";

function Paragraph({ headLine, para, image, bgColor }) {
  return (
    <div
      className="flex flex-col lg:flex-row-reverse justify-center p-8 gap-8 md:w-[80%] lg:w-[70%] items-center"
      style={{ backgroundColor: bgColor }}
    >
      {image ? <img src={image} className="w-[6rem] h-auto" alt="" /> : null}
      <div className="flex gap-2 items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <span className="font-black sm:text-2xl py-4 text-base">
            {headLine}
          </span>
          <div
            className="font-medium gap-1"
            style={{ backgroundColor: bgColor }}
          >
            <div className="flex flex-col text-sm sm:text-base font-medium items-center w-full justify-center text-justify sm:text-left lg:sm:flex-row">
              {para}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paragraph;
