import React from "react";
import img5 from "../../assets/curriculum/zoom/ncf.png"
const Banner = ({image, bgColor}) => {
return (
        <div className="w-full flex flex-row pt-7 object-fill" style={{backgroundColor: bgColor,
        }}>
       <img src={image} className="w-full h-56 relative left-14" alt="" />
        <img src={img5} className="w-24 h-20 pb-4 pr-7" alt="" />
        </div>
    
   )
 }

 export default Banner