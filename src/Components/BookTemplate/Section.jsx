import React from "react";

const Section = ({ content, content2, img, bgColor }) => {
  return (
    <div
      className="flex justify-center w-full items-center px-8 py-3 flex-col lg:flex-col xl:flex-row-reverse gap-6 md:w-full"
      style={{ backgroundColor: bgColor }}
    >
      <div className="">
        {img ? <img src={img} className="w-[10rem] h-[9rem]" alt="" /> : null}
      </div>
      <div className="flex flex-col justify-center items-center text-sm sm:text-base font-medium w-fit text-justify sm:text-left py-5">
        {content}
        {content2}
      </div>
    </div>
  );
};

export default Section;
