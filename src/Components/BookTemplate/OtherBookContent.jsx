import React from "react";

function OtherBookContent({ image2, para, image }) {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center gap-3 w-[100%]">
      <div className="flex flex-col justify-center items-center p-3 sm:w-[50%]">
        {image ? <img src={image} className="h-fit lg:w-fit" alt="" /> : null}
      </div>
      <div className="flex flex-col text-sm sm:text-xl font-medium items-center rounded-md w-full justify-center text-justify sm:text-left py-3">
        {para}
      </div>
      <div className="flex flex-col justify-center items-center p-3 sm:w-[50%] ">
        {image ? <img src={image2} className="h-fit lg:w-fit" alt="" /> : null}
      </div>
    </div>
  );
}

export default OtherBookContent;
