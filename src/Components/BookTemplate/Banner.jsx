import React from "react";
import img5 from "../../assets/curriculum/zoom/ncf.png";
const Banner = ({ image, bgColor }) => {
  return (
    <div className="w-full object-fill" style={{ backgroundColor: bgColor }}>
      <div className="grid flex-col justify-start items-start">
        <img src={img5} alt="" className="w-16 h-16 place-content-start" />
      </div>
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
// import React from "react";
// import img5 from "../../assets/curriculum/zoom/ncf.png";

// const Banner = ({ image, bgColor }) => {
//   return (
//     <div
//       className="w-full grid flex-col object-fill sm:mt-16 lg:mt-0 md:mt-0"
//       style={{ backgroundColor: bgColor }}
//     >
//       <img src={img5} alt="" className="w-16 h-16" />
//       <img src={image} className="w-fit h-auto sm:pt-6" alt="" />
//     </div>
//   );
// };

// export default Banner;
