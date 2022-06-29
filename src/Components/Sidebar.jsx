import React, { useEffect, useState } from "react";
import grayBg from "../assets/grayBg.png";
import {
  School,
  AccountBalance,
  KeyboardArrowDown,
  Menu,
  Circle,
} from "@mui/icons-material";
import Hamburger, { Spin } from "hamburger-react";
import { Link } from "react-router-dom";

const Sidebar = ({ sOpen, setSopen, type, setPage }) => {
  const [pp, setPp] = useState(false);
  const [cbse, setCbse] = useState(false);
  const [icse, setIcse] = useState(false);
  const [isOpen, setOpen] = useState(sOpen);

  const [hidden, setHidden] = useState(null);

  const handleChangePage = (name) => {
    setPage(name);
    if (window.innerWidth < 430) {
      setSopen(false);
    }
  };

  useEffect(() => {
    handleHidden();
    window.addEventListener("resize", handleHidden);

    return () => {
      window.removeEventListener("resize", handleHidden);
    };
  }, []);

  const handleHidden = () => {
    if (window.innerWidth < 470) {
      setHidden(false);
      setSopen(false);
      setOpen(false);
    } else {
      setHidden(true);
      setSopen(true);
      setOpen(true);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${grayBg})` }}
      className={`overflow-auto transition-all sm:py-2 ease-linear bg-[#dbdbdb] duration-200 ${
        sOpen ? "w-[55rem] lg:w-[30rem] 2xl:w-[30rem] md:w-[34rem]" : "w-0"
      }  min-h-[100vh] max-h-full`}
    >
      {/* hamburger icon */}
      <div
        className={`fixed block sm:hidden top-0 left-2 !z-50`}
        onClick={() => setSopen(!sOpen)}
      >
        <Hamburger toggled={isOpen} direction="right" toggle={setOpen} />
      </div>
      <div
        className={`flex flex-col gap-6 transition-all sm:pt-0 pt-[10rem] lg:mt-[13vh] md:mt-[15vh] sm:mt-[20vh] ease-linear duration-100`}
      >
        {/* pre primary */}

        <section>
          <div
            onClick={() => setPp(!pp)}
            className="px-6 py-2 flex items-center bg-[#af4242be] rounded-md  gap-4 w-full hover:shadow-xl  border-l-2 border-white cursor-pointer"
          >
            <h1 className=" text-gray-100 sm:text-xl text-sm font-bold">
              <span>
                {type === "curriculum"
                  ? "Pre-Primary"
                  : "Kinaesthetic Learning"}
              </span>
            </h1>
            <div className={`ml-8  transition-all ease-linear duration-200`}>
              <KeyboardArrowDown className=" text-gray-100" />
            </div>
          </div>

          {type === "curriculum" ? (
            <>
              <div
                className={`${
                  pp
                    ? "opacity-100 visible h-[20rem] lg:h-[19rem] md:h-[18.6rem]"
                    : "h-0 opacity-0 invisible"
                } transition-all  ease-linear duration-200`}
              >
                {/* <Link to="/mySchool"> */}

                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("zoom")}
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    {type === "curriculum" ? "Zoom!" : "Step & Learn"}
                  </h1>
                </div>

                {type === "curriculum" ? (
                  <>
                    <div
                      className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                    >
                      <Circle className={`!text-[.7rem] text-[#c96161]`} />
                      <h1
                        onClick={() => handleChangePage("alpha_fun")}
                        className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                      >
                        Alpha Fun
                      </h1>
                    </div>
                    <div
                      className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                    >
                      <Circle className={`!text-[.7rem] text-[#c96161]`} />
                      <h1
                        onClick={() => handleChangePage("dot_dash")}
                        className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                      >
                        Dot & Dash
                      </h1>
                    </div>
                    <div
                      className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                    >
                      <Circle className={`!text-[.7rem] text-[#c96161]`} />
                      <h1
                        onClick={() => handleChangePage("number_maxx")}
                        className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                      >
                        NUMBER MAX
                      </h1>
                    </div>
                    <div
                      className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                    >
                      <Circle className={`!text-[.7rem] text-[#c96161]`} />
                      <h1
                        onClick={() => handleChangePage("splash")}
                        className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                      >
                        SPLASH
                      </h1>
                    </div>
                    <div
                      className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                    >
                      <Circle className={`!text-[.7rem] text-[#c96161]`} />
                      <h1
                        onClick={() => handleChangePage("pitara")}
                        className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                      >
                        PITARA
                      </h1>
                    </div>
                    <div
                      className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                    >
                      <Circle className={`!text-[.7rem] text-[#c96161]`} />
                      <h1
                        onClick={() => handleChangePage("radiant_way")}
                        className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                      >
                        RADIANT WAY (PRE-PRIMER AND PRIMER)
                      </h1>
                    </div>
                  </>
                ) : null}

                {/* </Link> */}
              </div>
            </>
          ) : (
            <>
              <div
                className={`${
                  pp
                    ? "opacity-100 visible h-[2rem]"
                    : "h-0 opacity-0 invisible"
                } transition-all  ease-linear duration-200`}
              >
                {/* <Link to="/mySchool"> */}
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("step")}
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    {type === "curriculum" ? "Zoom!" : "Step & Learn"}
                  </h1>
                </div>

                {/* </Link> */}
              </div>
            </>
          )}
        </section>

        <section>
          <div
            onClick={() => setCbse(!cbse)}
            className="px-6 py-2 flex items-center bg-[#af4242be] rounded-md  gap-4 w-full hover:shadow-xl  border-l-2 border-white cursor-pointer"
          >
            <h1 className=" text-gray-100 sm:text-xl text-sm font-bold">
              {type === "curriculum" ? "CBSE SOLUTIONS" : "Coding"}
            </h1>
            <div className={`ml-8  transition-all ease-linear duration-200`}>
              <KeyboardArrowDown className=" text-gray-100" />
            </div>
          </div>
          {type === "curriculum" ? (
            <>
              <div
                className={`${
                  cbse
                    ? " opacity-100 visible h-[19rem] lg:h-[19rem] md:h-[18.6rem]"
                    : "h-0 opacity-0 invisible"
                } transition-all  ease-linear duration-200`}
              >
                {/* <Link to="/mySchool"> */}
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("wow_english")}
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    WOW! ENGLISH
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("english_vibes")}
                    className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    ENGLISH VIBES!
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("wow_grammar_com")}
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    WOW! GRAMMAR & COMPOSITION
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("grammar_com_vibes")}
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    GRAMMAR AND COMPOSITION VIBES!
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("new_radiant_liter")}
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    NEW RADIANT READERS LITERATURE READERS
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("the_radiant_way")}
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    RADIANT WAY (FIRST STEP TO FOURTH STEP)
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("my_world_my_earth")}
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    MY WORLD MY EARTH—ENVIRONMENTAL STUDIES
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("wow_maths")}
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    WOW! MATHS
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("wow_mental_maths")}
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    WOW! MENTAL MATHS
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("wow_science")}
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    WOW! SCIENCE
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("wow_compu_bytes")}
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    WOW! COMPU-BYTES
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("compu_app")}
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    COMPUTER APPLICATIONS
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("vallari_hindi")}
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    VALLARI—HINDI PATHMALA
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("surbhika_hindi")}
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    SURBHIKA—HINDI VYAKARAN MALA
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("silver_bells")}
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    SILVER BELLS
                  </h1>
                </div>

                {/* </Link> */}
              </div>
            </>
          ) : (
            <>
              <div
                className={`${
                  cbse
                    ? " opacity-100 visible h-[19rem] lg:h-[19rem] md:h-[18.6rem]"
                    : "h-0 opacity-0 invisible"
                } transition-all  ease-linear duration-200`}
              >
                {/* <Link to="/mySchool"> */}
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("primo")}
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Primo
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("robo_garden")}
                    className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Robo Garden
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("reading_prog")}
                    className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Reading Program
                  </h1>
                </div>
                {/* </Link> */}
              </div>
            </>
          )}
        </section>

        <section>
          <div
            onClick={() => setIcse(!icse)}
            className="px-6 py-2 flex items-center bg-[#af4242be] rounded-md  gap-4 w-full hover:shadow-xl  border-l-2 border-white cursor-pointer"
          >
            <h1 className=" text-gray-100 sm:text-xl text-sm font-bold">
              {type === "curriculum" ? "ICSE SOLUTION" : "Coding"}
            </h1>
            <div className={`ml-8  transition-all ease-linear duration-200`}>
              <KeyboardArrowDown className=" text-gray-100" />
            </div>
          </div>
          {type === "curriculum" ? (
            <>
              <div
                className={`${
                  icse
                    ? " opacity-100 visible h-[19rem] lg:h-[19rem] md:h-[18.6rem]"
                    : "h-0 opacity-0 invisible"
                } transition-all  ease-linear duration-200`}
              >
                {/* <Link to="/mySchool"> */}
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("chemistry_6_8")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Chemistry6_8
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("chemistry_9_10")}
                    className={`pl-9 uppercase text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Chemistry9_10
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("icse_physics")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Icse physics
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("icse_biology")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Icse Biology
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("icse_maths")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Icse Mathamathics
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("wow_english")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    WOW! ENGLISH
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("english_vibes")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    english vibes!
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("icse_wow_grammer_com")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    WOW! Icse GRAMMAR & COMPOSITION
                  </h1>
                </div>

                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("grammar_com_vibes")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Grammar and Composition Vibes!
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("new_radiant_reader")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    New Radiant Readers
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("the_radiant_way")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    The Radiant Way
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("silver_bells")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Silver Bells
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("wow_maths")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    WOW! Maths
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() =>
                      handleChangePage("radiant_enviromentnal_studies")
                    }
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Radiant Environmental Studies
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("new_radiant_science")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    New Radiant Science
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("icse_wow_compu_bytes")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    WOW! Compu-Bytes
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("wow_mind_map")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Wow! Mind Maps
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("value_first")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Value First
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("time_to_learn_art")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    It’s Time to Learn ART
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("wow_art_carft")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    WOW! Art & Craft
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("handwriting")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Handwriting
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("merry_go_round")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Merry Go Round Cursive Series
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("wow_within_worlds")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Wow! World Within Worlds
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("eupheus_school_atuls")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Eupheus School Atlas
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("young_set_deictionaries")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Young Set Dictionaries
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("nector")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Nector
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("nector_second")}
                    className={`pl-9 uppercase text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Nector
                  </h1>
                </div>

                {/* </Link> */}
              </div>
            </>
          ) : (
            <>
              <div
                className={`${
                  cbse
                    ? " opacity-100 visible h-[19rem] lg:h-[19rem] md:h-[18.6rem]"
                    : "h-0 opacity-0 invisible"
                } transition-all  ease-linear duration-200`}
              >
                {/* <Link to="/mySchool"> */}
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("primo")}
                    className={`pl-9 text-[#c96161] font-bold transition-all ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Primo
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("robo_garden")}
                    className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Robo Garden
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("reading_prog")}
                    className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Fiction Express
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("pickatale")}
                    className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Pickatale
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("enpower")}
                    className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Enpower
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("mykensho")}
                    className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Mykensho
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("enpower_two")}
                    className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Enpower
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("worldbook")}
                    className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Worldbook
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("worldebook")}
                    className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Worldebook
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("sanak")}
                    className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Sanak
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("enounce")}
                    className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Enounce
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("muzzy")}
                    className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Muzzy
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("radiant_ly")}
                    className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Radiant-ly
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("vantage")}
                    className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Vantage
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("target")}
                    className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Target
                  </h1>
                </div>
                <div
                  className={`flex items-center hover:translate-x-3 transition-all ease-linear duration-100 mr-8 ml-6 group opacity-100`}
                >
                  <Circle className={`!text-[.7rem] text-[#c96161]`} />
                  <h1
                    onClick={() => handleChangePage("escavel")}
                    className={`pl-9 text-[#c96161] transition-all font-bold ease-linear duration-200  py-2 bg-transparent cursor-pointer`}
                  >
                    Escavel
                  </h1>
                </div>

                {/* </Link> */}
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
