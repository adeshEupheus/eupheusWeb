import React from "react";
import img5 from "../../assets/curriculum/zoom/ncf.png";
const Banner = ({ image, bgColor, flexprop, Ncficon }) => {
  return (
    <div
      className={`w-full object-fill ${flexprop}`}
      style={{ backgroundColor: bgColor }}
    >
      {Ncficon ? (
        <div className="grid flex-col justify-start items-start">
          <img src={img5} alt="" className="w-16 h-16 place-content-start" />
        </div>
      ) : null}
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
export default Banner;
