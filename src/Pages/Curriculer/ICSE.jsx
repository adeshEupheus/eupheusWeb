import React, { useEffect, useState, useRef } from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import Navbar from "../../Components/Navbar";
import GoToTop from "../../Components/Top";
import grayBg from "../../assets/grayBg.png";
import Footer from "../../Components/Footer";
import Chemistry9_10 from "../../Components/Curriculum/icse/Chemisrty9_10";
import Chemistry6_8 from "../../Components/Curriculum/icse/Chemistry6_8";
import Icse_mathsmatics from "../../Components/Curriculum/icse/Icse_mathsmatics";
import Icse_physics from "../../Components/Curriculum/icse/Icse_physics";
import Icse_wow_grammer_com from "../../Components/Curriculum/icse/Icse_wow_grammer_com";
import Iscebiology from "../../Components/Curriculum/icse/Icsebiology";
import New_radiant_reader from "../../Components/Curriculum/icse/New_radiant_reader";
import Grammer_com_vibes from "../../Components/Curriculum/cbse/Grammer_com_vibes";
import Wow_maths from "../../Components/Curriculum/cbse/Wow_maths";
import Wow_english from "../../Components/Curriculum/cbse/Wow_english";
import Silver_bells from "../../Components/Curriculum/cbse/Silver_bells";
import Chemistry6_8Workbook from "../../Components/Curriculum/icse/Chemistry6_8Workbook";
import Chemisrty9_10Workbook from "../../Components/Curriculum/icse/Chemistry9_10Workbbok";
import Chemisrty9_10Lab from "../../Components/Curriculum/icse/Chemisrty9_10Lab";
import WowIcseMaths from "../../Components/Curriculum/icse/WowIcseMaths";
import English_Tree from "../../Components/Curriculum/cbse/English_Tree";
import The_radiant_way from "../../Components/Curriculum/cbse/The_radiant_way";
import Icse_compu_bytes from "../../Components/Curriculum/icse/Icse_Compu_bytes";
import VibesSocial from "../../Components/Curriculum/cbse/VibesSocial";
import Chemistry10QuestionBank from "../../Components/Curriculum/icse/Chemistry10QuestionBank";

// icons
import icsebiologyIcon from "../../assets/curriculum/icse/icse_biology/Icon.png";
import icsemathIcon from "../../assets/curriculum/zoom/ICSEmathematics678.png";
import EnglishTreeIcon from "../../assets/curriculum/zoom/englishTree.png";
import icsephysicsIcon from "../../assets/curriculum/icse/icse_physics/Icon.png";
import NRRworkbookIcon from "../../assets/curriculum/zoom/ICSEnewRadiantReaders123.png";
import radiantwayIcon from "../../assets/curriculum/zoom/TheRadiantWay-firstStep.png";
import silverbellIcon from "../../assets/curriculum/zoom/silverbells123.png";
import wowcompubyteIcon from "../../assets/curriculum/zoom/ICSEwowCompuByte123.png";
import GramComIcon from "../../assets/curriculum/zoom/wowGram&Comm.png";
import { useNavigate } from "react-router-dom";
import Icse10 from "../../assets/curriculum/zoom/ICSEdalalChemistry-X.png";
import Icsedalal6_8 from "../../assets/curriculum/zoom/ICSEdalalChemistry678.png";
import sstvibeIcon from "../../assets/curriculum/zoom/socialStudiesVibes.png";
import WowMath from "../../assets/curriculum/icse/Wow Maths/icon.png";
import BackButton from "../../Components/Solutions/BackButton";

const Icse = () => {
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
          <div className="w-full grid sm:grid-rows-5 grid-rows-7 sm:grid-cols-3 grid-cols-2 sm:gap-[4rem] gap-[2rem] sm:px-[3rem] px-4 pb-8 sm:pt-24 pt-[12rem] lg:mt-[9vh] md:mt-[13vh] sm:mt-[21vh]">
            <div className="">
              <span
                onClick={() => setPage("Chemistry6_8")}
                className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={Icsedalal6_8} className="w-[100%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("Chemistry6_8")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("Chemistry6_8Workbook")}
                className="w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={Icsedalal6_8} className="w-[100%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("Chemistry6_8Workbook")}
              >
                Click Here
              </div>
            </div>
            <div className="">
              <span
                onClick={() => setPage("chemistry9_10")}
                className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={Icse10} className="w-[100%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("chemistry9_10")}
              >
                Click Here
              </div>
            </div>
            <div className="">
              <span
                onClick={() => setPage("Chemisrty9_10Workbook")}
                className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={Icse10} className="w-[100%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("Chemisrty9_10Workbook")}
              >
                Click Here
              </div>
            </div>
            <div className="">
              <span
                onClick={() => setPage("Chemisrty9_10Lab")}
                className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={Icse10} className="w-[100%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("Chemisrty9_10Lab")}
              >
                Click Here
              </div>
            </div>
            <div className="">
              <span
                onClick={() => setPage("Chemistry10QuestionBank")}
                className=" w-full bg-transparent hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={Icse10} className="w-[100%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("Chemistry10QuestionBank")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("Icse_physics")}
                className=" w-full  hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={icsephysicsIcon} className="w-[100%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("Icse_physics")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("Icsebiology")}
                className=" w-full  hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={icsebiologyIcon} className="w-[100%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("Icsebiology")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("WowIcseMaths")}
                className=" w-full  hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={WowMath} className="w-[100%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("WowIcseMaths")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("math")}
                className=" w-full hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={icsemathIcon} className="w-[100%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("math")}
              >
                Click Here
              </div>
            </div>

            <div>
              <span
                onClick={() => setPage("English_Tree")}
                className=" w-full  hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={EnglishTreeIcon} className="w-[100%] h-auto" alt="" />
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
                onClick={() => setPage("Icse_wow_grammer_com")}
                className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={GramComIcon} className="w-[100%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("Icse_wow_grammer_com")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("New_radiant_reader")}
                className=" w-ful hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={NRRworkbookIcon} className="w-[100%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("New_radiant_reader")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("The_radiant_way")}
                className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={radiantwayIcon} className="w-[100%] h-auto" alt="" />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("The_radiant_way")}
              >
                Click Here
              </div>
            </div>

            <div>
              <span
                onClick={() => setPage("Silver_bells")}
                className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={silverbellIcon} className="w-[100%] h-auto" alt="" />
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
                onClick={() => setPage("Icse_compu_bytes")}
                className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img
                  src={wowcompubyteIcon}
                  className="w-[100%] h-auto"
                  alt=""
                />
              </span>
              <div
                className="text-red-500 cursor-pointer font-bold flex justify-center"
                onClick={() => setPage("Icse_compu_bytes")}
              >
                Click Here
              </div>
            </div>
            <div>
              <span
                onClick={() => setPage("VibesSocial")}
                className=" w-full flex-col gap-2 hover:-translate-y-2 transition-all duration-200 ease-linear text-gray-100 flex justify-center cursor-pointer items-center rounded-md sm:text-[1.5rem] text-xs font-semibold"
              >
                <img src={sstvibeIcon} className="w-[100%] h-auto" alt="" />
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
      case "chemistry9_10":
        return (
          <div className="sm:mt-4">
            <Chemistry9_10 />
            <GoToTop />
          </div>
        );
        break;
      case "Chemistry6_8":
        return (
          <div className="sm:mt-4">
            <Chemistry6_8 />
            <GoToTop />
          </div>
        );
        break;
      case "math":
        return (
          <div className="sm:mt-4">
            <Icse_mathsmatics />
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
      case "WowIcseMaths":
        return (
          <div className="sm:mt-4">
            <WowIcseMaths />
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
      case "The_radiant_way":
        return (
          <div className="sm:mt-4">
            <The_radiant_way />
            <GoToTop />
          </div>
        );
        break;
      case "Chemistry6_8Workbook":
        return (
          <div className="sm:mt-4">
            <Chemistry6_8Workbook />
            <GoToTop />
          </div>
        );
        break;
      case "Chemistry10QuestionBank":
        return (
          <div className="sm:mt-4">
            <Chemistry10QuestionBank />
            <GoToTop />
          </div>
        );
        break;
      case "Chemisrty9_10Workbook":
        return (
          <div className="sm:mt-4">
            <Chemisrty9_10Workbook />
            <GoToTop />
          </div>
        );
        break;
      case "Chemisrty9_10Lab":
        return (
          <div className="sm:mt-4">
            <Chemisrty9_10Lab />
            <GoToTop />
          </div>
        );
        break;
      case "Icsebiology":
        return (
          <div className="sm:mt-4">
            <Iscebiology />
            <GoToTop />
          </div>
        );
        break;
      case "Icse_physics":
        return (
          <div className="sm:mt-4">
            <Icse_physics />
            <GoToTop />
          </div>
        );
        break;
      case "Icse_compu_bytes":
        return (
          <div className="sm:mt-4">
            <Icse_compu_bytes />
            <GoToTop />
          </div>
        );
        break;
      case "Icse_wow_grammer_com":
        return (
          <div className="sm:mt-4">
            <Icse_wow_grammer_com />
            <GoToTop />
          </div>
        );
        break;
      case "New_radiant_reader":
        return (
          <div className="sm:mt-4">
            <New_radiant_reader />
            <GoToTop />
          </div>
        );
        break;
      case "grammer_com_vibes":
        return (
          <div className="sm:mt-4">
            <Grammer_com_vibes />
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
      case "maths":
        return (
          <div className="sm:mt-4">
            <Wow_maths />
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

export default Icse;
