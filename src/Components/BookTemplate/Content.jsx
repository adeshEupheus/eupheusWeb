import React from "react";

const Content = ({ headLine, points, subHead, bgColor, para }) => {
  return (
    <div
      className="flex flex-row px-4 w-full lg:flex-row-reverse justify-left items-start md:w-[80%] lg:w-full"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col">
        <span className="sm:text-2xl lg:font-bold flex flex-col md:font-normal text-base py-3">
          {headLine}
        </span>
        <span className="sm:text-base text-base flex flex-col font-medium items-center w-full justify-center text-justify sm:text-left sm:flex-row">
          {para}
        </span>
        <div className="flex flex-col w-fit items-start">
          <div className="font-bold py-1">{subHead}</div>
          <ul
            className="items-center justify-center text-justify ml-4"
            style={{ backgroundColor: bgColor }}
          >
            {points
              ? points.map((point) => {
                  return <li className="list-disc py-1">{point}</li>;
                })
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
