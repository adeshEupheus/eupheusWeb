import React from "react";

const Banner2 = ({ image, bgColor }) => {
  return (
    <div
      className="flex flex-col justify-center items-center w-full pt-3 object-fill"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col justify-center items-center">
        <img
          src={image}
          className="w-fit h-auto sm:pt-6 place-content-center"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner2;
