import React from "react";

const Content = ({ headLine, points, subHead, bgColor, para }) => {
  return (
    <div
      className="flex flex-row justify-center]"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col px-4">
        <span className="sm:text-2xl text-lg flex flex-col py-2 font-normal px-3">
          {headLine}
        </span>
        <span className="sm:text-base py-2 text-base w-[100%]">{para}</span>
        <div className="flex flex-row w-full items-center">
          <ul
            className="items-center rounded-md w-full justify-center text-justify"
            style={{ backgroundColor: bgColor }}
          >
            <span className="font-bold justify-center py-4">{subHead}</span>
            {points
              ? points.map((point) => {
                  return <li className="list-disc py-2">{point}</li>;
                })
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
