import React, { useEffect, useState, useRef } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import Navbar from "../../Components/Navbar";
import GoToTop from "../../Components/Top";
import grayBg from "../../assets/grayBg.png";
import Footer from "../../Components/Footer";
// import { useNavigate } from "react-router-dom";
// import { Compu_app } from "../../Components/Curriculum/cbse/Compu_app";
// import English_vibes from "../../Components/Curriculum/cbse/English_vibes";
import Grammer_com_vibes from "../../Components/Curriculum/cbse/Grammer_com_vibes";
import My_world_my_earth from "../../Components/Curriculum/cbse/My_world_my_earth";
import New_radiant_literature from "../../Components/Curriculum/cbse/New_radiant_literature";
import Silver_bells from "../../Components/Curriculum/cbse/Silver_bells";
import The_radiant_way from "../../Components/Curriculum/cbse/The_radiant_way";
import Vallari from "../../Components/Curriculum/cbse/Vallari";
import Wow_compu_bytes from "../../Components/Curriculum/cbse/Wow_compu_bytes";
import Wow_english from "../../Components/Curriculum/cbse/Wow_english";
import Wow_grammer_com from "../../Components/Curriculum/cbse/Wow_grammer_com";
import Wow_maths from "../../Components/Curriculum/cbse/Wow_maths";
import Wow_menta_maths from "../../Components/Curriculum/cbse/Wow_menta_maths";
import Wow_science from "../../Components/Curriculum/cbse/Wow_science";
import English_weaves from "../../Components/Curriculum/cbse/English_weaves";
import English_Tree from "../../Components/Curriculum/cbse/English_Tree";
import Chit_chat from "../../Components/Curriculum/cbse/Chit_chat";
import EnvConnect from "../../Components/Curriculum/cbse/EnvConnect";
import Maths_weaves from "../../Components/Curriculum/cbse/Maths_weaves";
import Maths_Tree from "../../Components/Curriculum/cbse/Maths_Tree";
import Wow_Maths_Lab from "../../Components/Curriculum/cbse/Wow_Maths_Lab";
import ScienceTree from "../../Components/Curriculum/cbse/ScienceTree";
import Wow_Science_Lab from "../../Components/Curriculum/cbse/Wow_Science_Lab";
import Surbhika from "../../Components/Curriculum/cbse/Surbhika";

// icons
import GComIcon from "../../assets/curriculum/zoom/wowGram&Comm.png";
import newRLRIcon from "../../assets/curriculum/zoom/TheRadiantReader.png";
import newRwayIcon from "../../assets/curriculum/zoom/TheRadiantWay-firstStep.png";
import myWorldMyEarthIcon from "../../assets/curriculum/zoom/EnvStudies.png";
import WMIcon from "../../assets/curriculum/zoom/MathsWeave.png";
import WowMMIcon from "../../assets/curriculum/zoom/MathTree.png";
import WowScienceIcon from "../../assets/curriculum/zoom/wowScience678.png";
import WowComBytesIcon from "../../assets/curriculum/cbse/wowComBytes/Icon.png";
import SilverbellIcon from "../../assets/curriculum/zoom/silverbells123.png";
import { useNavigate } from "react-router-dom";
import EnglishWeaves from "../../assets/curriculum/cbse/english_weaves/englishWeaves.png";
import EnglishTree from "../../assets/curriculum/zoom/englishTree.png";
import wowEnglish from "../../assets/curriculum/zoom/wowEnglish1.png";
import ChitChat from "../../assets/curriculum/cbse/ChitChat/ChitChat.png";
import gram from "../../assets/curriculum/zoom/gram&comp.png";
import wowMaths from "../../assets/curriculum/zoom/wowMaths.png";
import WowMentalMathsIcon from "../../assets/curriculum/zoom/WowMentalMaths.png";
import WMathsLabIcon from "../../assets/curriculum/zoom/WowMathLab.png";
import Science_Tree from "../../assets/curriculum/zoom/sciencetree123.png";
import WowScienceLabIcon from "../../assets/curriculum/zoom/wowScienceLab678.png";
import envConnectIcon from "../../assets/curriculum/zoom/EnvConenct.png";
import socialStudiesIcon from "../../assets/curriculum/zoom/socialStudiesVibes.png";
import vallariIcon from "../../assets/curriculum/cbse/vallari/Icon.png";
import SurbhikaIcon from "../../assets/curriculum/cbse/surbhika/Icon.png";
import VibesSocial from "../../Components/Curriculum/cbse/VibesSocial";
import BackButton from "../../Components/Solutions/BackButton";

const Cbse = () => {
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
          <div className="w-full grid sm:grid-rows-5 grid-rows-7 sm:grid-cols-3 grid-cols-2 sm:gap-[4rem] gap-[2rem] sm:px-[3rem] px-4 pb-8 sm:pt-8 pt-[12rem] lg:mt-[19vh] md:mt-[21vh] sm:mt-[33vh]">
            <div>
              <span
                onClick={() => setPage("English_weaves")}
                className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={EnglishWeaves} className="w-[90%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("English_weaves")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("English_Tree")}
                className=" w-full hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={EnglishTree} className="w-[90%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("English_Tree")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("english")}
                className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={wowEnglish} className="w-[90%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("english")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("grammer_com")}
                className=" w-full  hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={GComIcon} className="w-[90%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("grammer_com")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("Grammer_com_vibes")}
                className=" w-full  hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={gram} className="w-[100%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("Grammer_com_vibes")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("new_radiant_literature")}
                className=" w-full  hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={newRLRIcon} className="w-[90%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("new_radiant_literature")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("the_radiant_way")}
                className=" w-ful hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={newRwayIcon} className="w-[90%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("the_radiant_way")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("Chit_chat")}
                className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={ChitChat} className="w-[90%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("Chit_chat")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("EnvConnect")}
                className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={envConnectIcon} className="w-[90%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("EnvConnect")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("my_world_my_earth")}
                className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img
                  src={myWorldMyEarthIcon}
                  className="w-[90%] h-auto"
                  alt=""
                />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("my_world_my_earth")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("Maths_weaves")}
                className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={WMIcon} className="w-[90%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("Maths_weaves")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("maths")}
                className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={wowMaths} className="w-[90%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("maths")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("Maths_Tree")}
                className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={WowMMIcon} className="w-[90%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("Maths_Tree")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("mental_maths")}
                className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img
                  src={WowMentalMathsIcon}
                  className="w-[90%] h-auto"
                  alt=""
                />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("mental_maths")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("Wow_Maths_Lab")}
                className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={WMathsLabIcon} className="w-[90%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("Wow_Maths_Lab")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("science")}
                className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={WowScienceIcon} className="w-[90%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("science")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("ScienceTree")}
                className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={Science_Tree} className="w-[90%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("ScienceTree")}
              >
                Click Here
              </div>
            </div>{" "}
            <div>
              <span
                onClick={() => setPage("Wow_Science_Lab")}
                className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img
                  src={WowScienceLabIcon}
                  className="w-[90%] h-auto"
                  alt=""
                />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("Wow_Science_Lab")}
              >
                Click Here
              </div>
            </div>{" "}
            <div>
              <span
                onClick={() => setPage("Wow_compu_bytes")}
                className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={WowComBytesIcon} className="w-[90%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("Wow_compu_bytes")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("Vallari")}
                className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={vallariIcon} className="w-[90%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("Vallari")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("Surbhika")}
                className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={SurbhikaIcon} className="w-[90%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("Surbhika")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("Silver_bells")}
                className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={SilverbellIcon} className="w-[90%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("Silver_bells")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("VibesSocial")}
                className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img
                  src={socialStudiesIcon}
                  className="w-[90%] h-auto"
                  alt=""
                />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("VibesSocial")}
              >
                Click Here
              </div>
            </div>
          </div>
        );
        break;
      case "Chit_chat":
        return (
          <div className="sm:mt-4">
            <Chit_chat />
            <GoToTop />
          </div>
        );
        break;
      case "EnvConnect":
        return (
          <div className="sm:mt-4">
            <EnvConnect />
            <GoToTop />
          </div>
        );
        break;
      case "ScienceTree":
        return (
          <div className="sm:mt-4">
            <ScienceTree />
            <GoToTop />
          </div>
        );
        break;
      case "Maths_weaves":
        return (
          <div className="sm:mt-4">
            <Maths_weaves />
            <GoToTop />
          </div>
        );
        break;
      case "Surbhika":
        return (
          <div className="sm:mt-4">
            <Surbhika />
            <GoToTop />
          </div>
        );
        break;
      case "Maths_Tree":
        return (
          <div className="sm:mt-4">
            <Maths_Tree />
            <GoToTop />
          </div>
        );
        break;
      case "Wow_Maths_Lab":
        return (
          <div className="sm:mt-4">
            <Wow_Maths_Lab />
            <GoToTop />
          </div>
        );
        break;
      case "Wow_Science_Lab":
        return (
          <div className="sm:mt-4">
            <Wow_Science_Lab />
            <GoToTop />
          </div>
        );
        break;
      case "VibesSocial":
        return (
          <div className="sm:mt-4">
            <VibesSocial />
            <GoToTop />
          </div>
        );
        break;
      case "Grammer_com_vibes":
        return (
          <div className="sm:mt-4">
            <Grammer_com_vibes />
            <GoToTop />
          </div>
        );
        break;
      case "my_world_my_earth":
        return (
          <div className="sm:mt-4">
            <My_world_my_earth />
            <GoToTop />
          </div>
        );
        break;
      case "new_radiant_literature":
        return (
          <div className="sm:mt-4">
            <New_radiant_literature />
            <GoToTop />
          </div>
        );
        break;
      case "Silver_bells":
        return (
          <div className="sm:mt-4">
            <Silver_bells />
            <GoToTop />
          </div>
        );
        break;
      case "English_weaves":
        return (
          <div className="sm:mt-4">
            <English_weaves />
            <GoToTop />
          </div>
        );
        break;
      case "English_Tree":
        return (
          <div className="sm:mt-4">
            <English_Tree />
            <GoToTop />
          </div>
        );
        break;

      case "grammer_com":
        return (
          <div className="sm:mt-4">
            <Wow_grammer_com />
            <GoToTop />
          </div>
        );
        break;
      case "the_radiant_way":
        return (
          <div className="sm:mt-4">
            <The_radiant_way />
            <GoToTop />
          </div>
        );
        break;
      case "Vallari":
        return (
          <div className="sm:mt-4">
            <Vallari />
            <GoToTop />
          </div>
        );
        break;
      case "Wow_compu_bytes":
        return (
          <div className="sm:mt-4">
            <Wow_compu_bytes />
            <GoToTop />
          </div>
        );
        break;
      case "english":
        return (
          <div className="sm:mt-4">
            <Wow_english />
            <GoToTop />
          </div>
        );
        break;
      case "maths":
        return (
          <div className="sm:mt-4">
            <Wow_maths />
            <GoToTop />
          </div>
        );
        break;
      case "mental_maths":
        return (
          <div className="sm:mt-4">
            <Wow_menta_maths />
            <GoToTop />
          </div>
        );
        break;
      case "science":
        return (
          <div className="sm:mt-4">
            <Wow_science />
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
          <BackButton />
        ) : (
          <button
            onClick={() => setPage("default")}
            className="pr-4 pl-1 py-1 sm:pr-8 sm:pl-6 sm:py-2 font-semibold bg-[#dbdbdb] flex  text-base sm:text-lg gap-1 items-center !text-red-800 active:scale-90 transition-all duration-200 ease-linear fixed sm:top-[15rem] lg:top-[11rem] top-[10rem] sm:left-[1rem] left-[0.4rem] rounded-md"
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

export default Cbse;
