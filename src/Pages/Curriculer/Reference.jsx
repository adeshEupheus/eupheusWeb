import React, { useEffect, useState, useRef } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import Navbar from "../../Components/Navbar";
import GoToTop from "../../Components/Top";
import grayBg from "../../assets/grayBg.png";
import Footer from "../../Components/Footer";
import Eupheus_school_atlas from "../../Components/Curriculum/reference/Eupheus_school_atlas";
import Eupheus_atlas_icse from "../../Components/Curriculum/reference/Eupheus_atlas_icse";

// icons
import atlasIcon from "../../assets/curriculum/Reference/atlasIcon.png";
import atlasCompaniomIcon from "../../assets/curriculum/zoom/eupehusAltasCompanion.png";
import { useNavigate } from "react-router-dom";

const Reference = () => {
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
          <div className="w-full grid sm:grid-rows-5 grid-rows-7 sm:grid-cols-3 grid-cols-2 sm:gap-[4rem] gap-[2rem] sm:px-[3rem] px-4 pb-8 sm:pt-20 pt-[13rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[21vh]">
            <div>
              <span
                onClick={() => setPage("atlas")}
                className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={atlasIcon} className="w-[100%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("atlas")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("Eupheus_atlas_icse")}
                className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img
                  src={atlasCompaniomIcon}
                  className="w-[100%] h-auto"
                  alt=""
                />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("Eupheus_atlas_icse")}
              >
                Click Here
              </div>
            </div>
          </div>
        );
        break;
      case "atlas":
        return (
          <div className="sm:mt-4">
            <Eupheus_school_atlas />
            <GoToTop />
          </div>
        );
        break;
      case "Eupheus_atlas_icse":
        return (
          <div className="sm:mt-4">
            <Eupheus_atlas_icse />
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
            className="pr-4 pl-1 py-1 sm:pr-6 sm:pl-4 sm:py-2 font-semibold bg-gray-600 flex z-10 text-base sm:text-lg gap-1 items-center !text-gray-200 active:scale-90 transition-all duration-200 ease-linear fixed md:top-[7rem] sm:top-[10rem] lg:top-[6rem] top-[10rem] sm:left-[2rem] left-[0.4rem] rounded-3xl"
            // className="pr-4 pl-1 py-1 sm:pr-8 sm:pl-6 sm:py-2 font-semibold bg-[#d13131] flex  text-base sm:text-lg gap-1 items-center !text-gray-200 active:scale-90 transition-all duration-200 ease-linear fixed sm:top-[10rem] lg:top-[5rem] top-[10rem] sm:left-[4rem] left-[0.4rem] rounded-md"
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
      <div className="sticky bottom-0">
        <Footer />
      </div>
      <GoToTop />
    </div>
  );
};

export default Reference;
