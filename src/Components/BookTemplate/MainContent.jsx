import React from "react";

const MainContent = ({ image, para, bgColor, listOne, listTwo, listThree }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-2 items-center justify-center">
        <div className="flex flex-col w-full h-auto p-4">
          {image ? <img src={image} className="w-56 h-auto" alt="" /> : null}
          <div
            className="flex flex-row justify-center border rounded-full text-black font-semibold w-fit py-4 px-3 h-fit mt-2"
            style={{ backgroundColor: bgColor }}
          >
            <ul>
              <li>{listOne}</li>
              <li>{listTwo}</li>
              <li>{listThree}</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-4 m-8">
          <div className="font-medium gap-1">
            <div className="flex flex-col font-medium items-center rounded-md w-full justify-center text-justify">
              {para}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
