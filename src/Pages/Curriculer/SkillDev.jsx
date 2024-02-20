import React, { useEffect, useState, useRef } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import Navbar from "../../Components/Navbar";
import GoToTop from "../../Components/Top";
import grayBg from "../../assets/grayBg.png";
import Footer from "../../Components/Footer";
import Handwriting from "../../Components/Curriculum/skillDev/Handwriting";
import Merry_go_round from "../../Components/Curriculum/skillDev/Merry_go_round";
import Value_first from "../../Components/Curriculum/skillDev/Value_first";
import Wow_art_carft from "../../Components/Curriculum/skillDev/Wow_art_carft";
import Wow_within_worlds from "../../Components/Curriculum/skillDev/Wow_within_worlds";
import GKVibes from "../../Components/Curriculum/skillDev/GKVibes";
import CursiveWriting from "../../Components/Curriculum/skillDev/CursiveWriting";

// icons
import artIcon from "../../assets/curriculum/zoom/Its-time-to-learn-art.png";
import gkIcon from "../../assets/curriculum/skillDev/wow_within_worlds/gkIcon.png";
import handwritingIcon from "../../assets/curriculum/zoom/zanerbloser-handwriting.png";
import merrygoIcon from "../../assets/curriculum/zoom/merrygoround123.png";
import arthandwritingIcon from "../../assets/curriculum/zoom/artofhandwriting-cursiveWriting.png";
import valueIcon from "../../assets/curriculum/zoom/valuesFirst123.png";
import gkvibesIcon from "../../assets/curriculum/zoom/GKvibes14.png";
import { useNavigate } from "react-router-dom";

const SkillDev = () => {
  //   const navigate = useNavigate();
  const [page, setPage] = useState("default");
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Solutions - Eupheus";
  }, []);

  const handlePage = () => {
    switch (page) {
      case "default":
        return (
          <div className="w-full grid sm:grid-rows-5 grid-rows-3 sm:grid-cols-3 grid-cols-2 sm:gap-[4rem] gap-[2rem] sm:px-[3rem] px-4 sm:pt-8 pt-[13rem] lg:mt-[16vh] md:mt-[18vh] sm:mt-[21vh]">
            <div>
              <span
                onClick={() => setPage("GKVibes")}
                className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={gkvibesIcon} className="w-[100%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("GKVibes")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                // onClick={() => setPage("art")}
                onClick={() => setPage("gk")}
                className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                {/* <img src={artIcon} className="w-[90%] h-auto" alt="" /> */}
                <img src={gkIcon} className="w-[100%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("gk")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("Wow_art_carft")}
                className=" w-full  hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={artIcon} className="w-[100%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("Wow_art_carft")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                // onClick={() => setPage("artCraft")}
                onClick={() => setPage("value")}
                className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                {/* <img src={wowartIcon} className="w-[90%] h-auto" alt="" /> */}
                <img src={valueIcon} className="w-[100%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("value")}
              >
                Click Here
              </div>
            </div>

            <div>
              <span
                onClick={() => setPage("handwriting")}
                className=" w-full  hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={handwritingIcon} className="w-[100%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("handwriting")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("merrygo")}
                className=" w-full hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={merrygoIcon} className="w-[100%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("merrygo")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("CursiveWriting")}
                className=" w-full hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img
                  src={arthandwritingIcon}
                  className="w-[100%] h-auto"
                  alt=""
                />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("CursiveWriting")}
              >
                Click Here
              </div>
            </div>
          </div>
        );
        break;
      case "GKVibes":
        return (
          <div className="sm:mt-4">
            <GKVibes />
            <GoToTop />
          </div>
        );
        break;
      case "gk":
        return (
          <div className="sm:mt-4">
            <Wow_within_worlds />
            <GoToTop />
          </div>
        );
        break;
      case "handwriting":
        return (
          <div className="sm:mt-4">
            <Handwriting />
            <GoToTop />
          </div>
        );
        break;
      case "Wow_art_carft":
        return (
          <div className="sm:mt-4">
            <Wow_art_carft />
            <GoToTop />
          </div>
        );
        break;
      case "artCraft":
        return (
          <div className="sm:mt-4">
            <Wow_art_carft />
            <GoToTop />
          </div>
        );
        break;
      case "CursiveWriting":
        return (
          <div className="sm:mt-4">
            <CursiveWriting />
            <GoToTop />
          </div>
        );
        break;
      case "value":
        return (
          <div className="sm:mt-4">
            <Value_first />
            <GoToTop />
          </div>
        );
        break;
      case "merrygo":
        return (
          <div className="sm:mt-4">
            <Merry_go_round />
            <GoToTop />
          </div>
        );
        break;
      default:
        break;
    }
  };
  return (
    <div
      className="bg-[#dbdbdb] overflow-hidden"
      style={{ backgroundImage: `url(${grayBg})` }}
    >
      <Navbar highlight={"solutions"} />
      <div className="w-[100vw] flex flex-col gap-[2rem]">
        {page === "default" ? (
          <button
            onClick={() => navigate(-1)}
            className="pr-4 pl-1 py-1 sm:pr-6 sm:pl-4 sm:py-2 font-semibold bg-gray-600 flex z-10 text-base sm:text-lg gap-1 items-center !text-gray-200 active:scale-90 transition-all duration-200 ease-linear fixed md:top-[9rem] sm:top-[10rem] lg:top-[8rem] top-[11rem] sm:left-[2rem] left-[0.4rem] rounded-3xl"
          >
            <ArrowBackIosNew className="!text-[1.2rem] sm:!text-[1.5rem]" />{" "}
            <span className="mb-[0.1rem]">Back</span>
          </button>
        ) : (
          <button
            onClick={() => setPage("default")}
            className="pr-4 pl-1 py-1 sm:pr-8 sm:pl-6 sm:py-2 font-semibold bg-[#dbdbdb] flex  text-base sm:text-lg gap-1 items-center !text-red-800 active:scale-90 transition-all duration-200 ease-linear fixed sm:top-[8rem] lg:top-[11rem] top-[10rem] sm:left-[2rem] left-[0.4rem] rounded-md"
          >
            <ArrowBackIosNew className="!text-[1.2rem] sm:!text-[1.5rem]" />{" "}
            <span className="mb-[0.1rem]">Back</span>
          </button>
        )}
        {handlePage()}
      </div>
      <div className="sticky">
        <Footer />
      </div>
      <GoToTop />
    </div>
  );
};

export default SkillDev;
