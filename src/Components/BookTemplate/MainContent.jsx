import React from "react";

const MainContent = ({ image, para, bgColor, listOne, listTwo, listThree }) => {
  return (
    <div className="flex flex-col justify-center items-center md:w-[80%] lg:w-[70%]">
      <div className="flex gap-2 items-center justify-center w-[100%] sm:w-[100%]">
        <div className="flex flex-col lg:sm:flex-row sm:justify-center sm:items-center gap-3">
          <div className="flex flex-col justify-center items-center p-3">
            {image ? (
              <img src={image} className="h-fit w-[50%] lg:w-fit" alt="" />
            ) : null}
            <div className="flex flex-row rounded-full text-sm font-semibold w-fit py-4 px-2 h-fit mt-2 justify-center place-items-center">
              <ul
                className=" flex flex-col border rounded-full p-4 text-sm justify-center place-items-center"
                style={{ backgroundColor: bgColor }}
              >
                <li>{listOne}</li>
                <li>{listTwo}</li>
                <li>{listThree}</li>
              </ul>
            </div>
          </div>
          <div className="font-medium">
            <div className="flex flex-col text-sm sm:text-base font-medium items-center rounded-md w-full justify-center text-justify sm:text-left py-3">
              {para}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
