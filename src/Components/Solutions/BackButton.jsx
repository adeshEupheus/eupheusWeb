import { ArrowBackIosNew } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="pr-4 pl-1 py-1 sm:pr-6 sm:pl-4 sm:py-2 font-semibold bg-gray-600 flex z-10 text-base sm:text-lg gap-1 items-center !text-gray-200 active:scale-90 transition-all duration-200 ease-linear fixed md:top-[9rem] sm:top-[15rem] lg:top-[8rem] top-[11rem] sm:left-[2rem] left-[0.4rem] rounded-3xl"
    >
      <ArrowBackIosNew className="!text-[1.2rem] sm:!text-[1.5rem]" />{" "}
      <span className="mb-[0.1rem]">Back</span>
    </button>
  );
};

export default BackButton;
