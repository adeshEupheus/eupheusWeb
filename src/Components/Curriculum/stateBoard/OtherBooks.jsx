import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/stateBoard/BOOK.png";
import logo1 from "../../../assets/curriculum/stateBoard/iniyalIcon.png";
import logo2 from "../../../assets/curriculum/stateBoard/telegucopyIcon.png";
import logo3 from "../../../assets/curriculum/stateBoard/rachnaIcon.png";
import logo4 from "../../../assets/curriculum/stateBoard/telaguIcon.png";
import logo5 from "../../../assets/curriculum/stateBoard/sumadhuraIcon.png";
import logo6 from "../../../assets/curriculum/stateBoard/kalikaIcon.png";
import logo7 from "../../../assets/curriculum/stateBoard/kampuIcon.png";
import logo8 from "../../../assets/curriculum/stateBoard/kannadaIcon.png";
import logo9 from "../../../assets/curriculum/stateBoard/RkannadaIcon.png";
import logo10 from "../../../assets/curriculum/stateBoard/kannadasiri.png";

import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner from "../../BookTemplate/Banner";
import img1 from "../../../assets/curriculum/stateBoard/1.png";
import img2 from "../../../assets/curriculum/stateBoard/2.png";
import img3 from "../../../assets/curriculum/stateBoard/3.png";
import img4 from "../../../assets/curriculum/stateBoard/4.png";
import img5 from "../../../assets/curriculum/stateBoard/5.png";
import img6 from "../../../assets/curriculum/stateBoard/6.png";
import img7 from "../../../assets/curriculum/stateBoard/7.png";
import img8 from "../../../assets/curriculum/stateBoard/8.png";
import img9 from "../../../assets/curriculum/stateBoard/9.png";
import img10 from "../../../assets/curriculum/stateBoard/10.png";

import OtherBookContent from "../../BookTemplate/OtherBookContent";

const OtherBooks = () => {
  const keyFeatures = useRef(null);
  //   const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200  ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner
        image={book1}
        bgColor={"#1e9c9e"}
        Ncficon={false}
        flexprop={"flex flex-col justify-center items-center pt-3"}
      />
      <div className="flex flex-col justify-center px-4 bg-[#8784e0]">
        <OtherBookContent
          image={logo1}
          para={
            <span>
              <span className="font-bold text-[#242253]">
                Iniya Tamil Payirchi Nool Grammar{" "}
              </span>
              is a series of Tamil grammar books for classes 1 to 10.
            </span>
          }
          image2={img1}
        />
      </div>
      <div className="flex flex-col justify-center px-4 bg-[#95e084]">
        <OtherBookContent
          image={logo2}
          para={
            <span>
              <span className="font-bold text-[#346530]">
                Radiant Telugu Copywriting is a series{" "}
              </span>
              of Telugu writing books for classes 1 to 5.
            </span>
          }
          image2={img2}
        />
      </div>
      <div className="flex flex-col justify-center px-4 bg-[#e084b1]">
        <OtherBookContent
          image={logo3}
          para={
            <span>
              <span className="font-bold text-[#8a305b]">
                Radiant Telugu Rachana{" "}
              </span>
              is a series of workbooks based on the Telugu Text books for grades
              1 to 5.
            </span>
          }
          image2={img3}
        />
      </div>
      <div className="flex flex-col justify-center px-4 bg-[#84d1e0]">
        <OtherBookContent
          image={logo4}
          para={
            <span>
              <span className="font-bold text-[#1d2651]">
                Radiant Telugu Vachakam{" "}
              </span>
              is a series of Telugu textbooks for classes 1 to 5.
            </span>
          }
          image2={img4}
        />
      </div>
      <div className="flex flex-col justify-center px-4 bg-[#e084a3]">
        <OtherBookContent
          image={logo5}
          para={
            <span>
              <span className="font-bold text-[#8f2d2d]">
                Sumadhura Kannada Copywriting{" "}
              </span>
              is a series of Kannada copywriting books for classes 1 to 7.
            </span>
          }
          image2={img5}
        />
      </div>
      <div className="flex flex-col justify-center px-4 bg-[#e0c884]">
        <OtherBookContent
          image={logo6}
          para={
            <span>
              <span className="font-bold text-[#ad7342]">
                Kannada Copywriting Radiant Kannada Kalika Malike{" "}
              </span>
              is a series of Kannada writing books for classes 1 to 7.
            </span>
          }
          image2={img6}
        />
      </div>
      <div className="flex flex-col justify-center px-4 bg-[#c0e084]">
        <OtherBookContent
          image={logo7}
          para={
            <span>
              <span className="font-bold text-[#4aa347]">
                The Kannada Kampu{" "}
              </span>
              is a series of Kannada readers for grades 1 to 8.
            </span>
          }
          image2={img7}
        />
      </div>
      <div className="flex flex-col justify-center px-4 bg-[#84c6e0]">
        <OtherBookContent
          image={logo8}
          para={
            <span>
              <span className="font-bold text-[#264b70]">
                Radiant Kannada Aksharmala{" "}
              </span>
              is a series of Kannada reading and writing books for grade UKG.
            </span>
          }
          image2={img8}
        />
      </div>
      <div className="flex flex-col justify-center px-4 bg-[#c0e084]">
        <OtherBookContent
          image={logo9}
          para={
            <span>
              <span className="font-bold text-[#43aa36]">
                Radiant Kannada Kagunitha{" "}
              </span>
              Writing helps students to write the Kannada script.
            </span>
          }
          image2={img9}
        />
      </div>
      <div className="flex flex-col justify-center px-4 bg-[#e0848f]">
        <OtherBookContent
          image={logo10}
          para={
            <span>
              <span className="font-bold text-[#8c2b36]">
                Radiant Kannada Siri{" "}
              </span>
              is a Kannada Reading Book for 1-5 class.
            </span>
          }
          image2={img10}
        />
      </div>

      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#1e9c9e"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default OtherBooks;
