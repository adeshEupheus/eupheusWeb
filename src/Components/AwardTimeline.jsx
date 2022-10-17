import { KeyboardArrowDown } from "@mui/icons-material";
import { useState } from "react";
import certtificate8 from "../assets/media/cer8.png";
import certtificate9 from "../assets/media/cer9.png";
import certtificate11 from "../assets/media/cer11.png";
import certtificate12 from "../assets/media/cer12.png";
import certtificate13 from "../assets/media/cer13.png";
import certtificate14 from "../assets/media/cer14.png";
import certtificate3 from "../assets/media/car3.png";
import certtificate4 from "../assets/media/cer4.png";
import certtificate5 from "../assets/media/cer5.png";
import certtificate6 from "../assets/media/cer6.png";
import certtificate7 from "../assets/media/cer7.png";
import certtificate1 from "../assets/media/cer1.png";
import certtificate2 from "../assets/media/cer2.png";

export default function AwardTimeline() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  return (
    <>
      <div class="p-4 mt-4">
        <div class="container">
          <div class="flex flex-col md:grid grid-cols-12 text-gray-50">
            <div class="flex md:contents relative">
              <div class="col-start-2 col-end-4 sm:mr-10 md:mx-auto relative">
                {/* <div className="absolute font-semibold w-full h-full flex items-center -left-[5rem] top-0 text-2xl text-[#f5ab1d]">
                  2022
                </div> */}

                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-[#f5ab1d] pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#f5ab1d] shadow text-center"></div>
              </div>

              <div className="flex flex-col gap-4 w-[100vw] md:items-start items-center my-[5rem] relative">
                <div
                  onClick={() => setFirst(!first)}
                  className={`${
                    first ? null : "absolute"
                  } -top-8 transition-all duration-[400] ease-linear sm:w-[40%] w-[85%] flex justify-center ${
                    first ? "rotate-[180deg] mt-4" : null
                  } cursor-pointer`}
                >
                  <div class="chevron"></div>
                  <div class="chevron"></div>
                  <div class="chevron"></div>
                  <span
                    className={`text-black ${
                      first ? "rotate-[180deg]" : null
                    } font-bold text-lg`}
                  >
                    2022
                  </span>
                </div>
                {first ? (
                  <div className=" w-full sm:justify-start justify-around px-4 bg-transparent flex flex-col sm:gap-12 gap-2">
                    <div className="flex gap-2">
                      <img
                        src={certtificate12}
                        className="sm:w-[16rem] w-[6rem] h-auto object-cover"
                        alt=""
                      />
                      <img
                        src={certtificate13}
                        className="sm:w-[16rem] w-[6rem] h-auto object-cover"
                        alt=""
                      />

                      <img
                        src={certtificate14}
                        className="sm:w-[16rem] w-[6rem] h-auto object-cover"
                        alt=""
                      />
                    </div>
                    <div className="flex gap-2">
                      <img
                        src={certtificate11}
                        className="sm:w-[16rem] w-[6rem] h-auto object-cover"
                        alt=""
                      />
                      <img
                        src={certtificate9}
                        className="sm:w-[16rem] w-[6rem] h-auto object-cover"
                        alt=""
                      />

                      <img
                        src={certtificate8}
                        className="sm:w-[16rem] w-[6rem] h-auto object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div class="flex md:contents">
              <div class="col-start-2 col-end-4 sm:mr-10 md:mx-auto relative">
                {/* <div className="absolute font-semibold w-full h-full flex justify-center items-center -left-[5rem] top-0 text-2xl text-[#f5ab1d]">
                  2021
                </div> */}
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-[#f5ab1d] pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#f5ab1d] shadow text-center">
                  <i class="fas fa-check-circle text-white"></i>
                </div>
              </div>
              <div className="flex flex-col gap-4 relative w-[100vw] md:items-start items-center my-[5rem]">
                <div
                  onClick={() => setSecond(!second)}
                  className={`${
                    second ? null : "absolute"
                  } -top-8 transition-all duration-[400] ease-linear sm:w-[40%] w-[85%] flex justify-center ${
                    second ? "rotate-[180deg] mt-4" : null
                  } cursor-pointer`}
                >
                  <div class="chevron"></div>
                  <div class="chevron"></div>
                  <div class="chevron"></div>
                  <span
                    className={`text-black ${
                      second ? "rotate-[180deg]" : null
                    } font-bold text-lg`}
                  >
                    2021
                  </span>
                </div>
                {second ? (
                  <div className=" w-full justify-start px-4 bg-transparent flex sm:flex-row flex-col gap-12">
                    <img
                      src={certtificate3}
                      className="h-[6rem] w-auto"
                      alt=""
                    />
                    <img
                      src={certtificate4}
                      className="h-[6rem] w-auto"
                      alt=""
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <div class="flex md:contents">
              <div class="col-start-2 col-end-4 sm:mr-10 md:mx-auto relative">
                {/* <div className="absolute font-semibold w-full h-full flex items-center -left-[5rem] top-0 text-2xl text-[#f5ab1d]">
                  2020
                </div> */}
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-[#f5ab1d] pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#f5ab1d] shadow text-center">
                  <i class="fas fa-times-circle text-white"></i>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-[100vw] relative md:items-start items-center my-[5rem]">
                <div
                  onClick={() => setThird(!third)}
                  className={`${
                    third ? null : "absolute"
                  } -top-8 transition-all duration-[400] ease-linear sm:w-[40%] w-[85%] flex justify-center ${
                    third ? "rotate-[180deg] mt-4" : null
                  } cursor-pointer`}
                >
                  <div class="chevron"></div>
                  <div class="chevron"></div>
                  <div class="chevron"></div>
                  <span
                    className={`text-black ${
                      third ? "rotate-[180deg]" : null
                    } font-bold text-lg`}
                  >
                    2020
                  </span>
                </div>
                {third ? (
                  <div className="flex flex-col gap-4">
                    <div className=" w-full justify-around px-4 bg-transparent flex sm:flex-row flex-col gap-3">
                      <img
                        src={certtificate3}
                        className="h-[6rem] w-auto"
                        alt=""
                      />
                      <img
                        src={certtificate4}
                        className="h-[6rem] w-auto"
                        alt=""
                      />
                    </div>
                    <div className="w-full justify-around px-4 bg-transparent flex sm:gap-3">
                      <img
                        src={certtificate5}
                        className="sm:w-[20rem] w-[7.8rem] h-auto object-cover"
                        alt=""
                      />
                      <img
                        src={certtificate6}
                        className="sm:w-[16rem] w-[7rem] h-auto object-cover"
                        alt=""
                      />
                      <img
                        src={certtificate7}
                        className="sm:w-[16rem] w-[7rem] h-auto object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div class="flex md:contents">
              <div class="col-start-2 col-end-4 sm:mr-10 md:mx-auto relative">
                {/* <div className="absolute font-semibold w-full h-full flex items-center -left-[5rem] top-0 text-2xl text-[#f5ab1d]">
                  2019
                </div> */}
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-[#f5ab1d] pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#f5ab1d] shadow text-center"></div>
              </div>

              <div className="flex flex-col gap-4 relative w-[100vw] md:items-start items-center my-[5rem]">
                <div
                  onClick={() => setFourth(!fourth)}
                  className={`${
                    fourth ? null : "absolute"
                  } -top-8 transition-all duration-[400] ease-linear sm:w-[40%] w-[85%] flex justify-center ${
                    fourth ? "rotate-[180deg] mt-4" : null
                  } cursor-pointer`}
                >
                  <div class="chevron"></div>
                  <div class="chevron"></div>
                  <div class="chevron"></div>
                  <span
                    className={`text-black ${
                      fourth ? "rotate-[180deg]" : null
                    } font-bold text-lg`}
                  >
                    2019
                  </span>
                </div>
                {fourth ? (
                  <div className=" w-full justify-start px-4 bg-transparent flex gap-3">
                    <img
                      src={certtificate3}
                      className="h-[6rem] w-auto"
                      alt=""
                    />
                  </div>
                ) : null}
              </div>
            </div>
            <div class="flex md:contents">
              <div class="col-start-2 col-end-4 sm:mr-10 md:mx-auto relative">
                {/* <div className="absolute font-semibold w-full h-full flex items-center -left-[5rem] top-0 text-2xl text-[#f5ab1d]">
                  2018
                </div> */}
                <div class="h-full w-6 flex items-center justify-center">
                  <div class="h-full w-1 bg-[#f5ab1d] pointer-events-none"></div>
                </div>
                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#f5ab1d] shadow text-center"></div>
              </div>

              <div className="flex flex-col gap-4 relative w-[100vw] md:items-start items-center my-[5rem]">
                <div
                  onClick={() => setFifth(!fifth)}
                  className={`${
                    fifth ? null : "absolute"
                  } -top-8 transition-all duration-[400] ease-linear sm:w-[40%] w-[85%] flex justify-center ${
                    fifth ? "rotate-[180deg] mt-4" : null
                  } cursor-pointer`}
                >
                  <div class="chevron"></div>
                  <div class="chevron"></div>
                  <div class="chevron"></div>
                  <span
                    className={`text-black ${
                      fifth ? "rotate-[180deg]" : null
                    } font-bold text-lg`}
                  >
                    2018
                  </span>
                </div>
                {fifth ? (
                  <div className=" w-full sm:justify-start justify-around px-4 bg-transparent flex sm:gap-3 gap-1">
                    <img
                      src={certtificate1}
                      className="sm:w-[24rem] w-[9rem] h-auto"
                      alt=""
                    />
                    <img
                      src={certtificate2}
                      className="sm:w-[28rem] w-[11rem] h-auto"
                      alt=""
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
