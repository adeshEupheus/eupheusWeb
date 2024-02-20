import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/shabdSagar/shabd sagar.png";
import logo from "../../../assets/curriculum/shabdSagar/logo.png";
import img6 from "../../../assets/curriculum/zoom/key features.png";
// import img4 from "../../../assets/curriculum/zoom/oslite.png";
// import img7 from "../../../assets/curriculum/pitara/10.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner2 from "../../BookTemplate/Banner2";
import SectionTwo from "../../BookTemplate/SectionTwo";
import MainContent from "../../BookTemplate/MainContent";
import Content from "../../BookTemplate/Content";
// import OsLite2 from "../../BookTemplate/OsLite2";
// import CardThree from "../../BookTemplate/CardThree";

const AksharSagar = () => {
  const keyFeatures = useRef(null);
  // const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner2 image={book1} bgColor={"#b18ae6"} />
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 p-4">
        <div
          onClick={() => {
            const ele = document.getElementById("keyFeature");
            ele.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <BasicButton
            text={"प्रमुख विशेषताऐं"}
            bgColor={"#b18ae6"}
            textColor={"black"}
            size={"small"}
          />
        </div>

        {/* <div
          onClick={() => {
            const ele = document.getElementById("UniqueAdvantages");
            ele.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <BasicButton
            text={"UNIQUE ADVANTAGES"}
            size={"small"}
            bgColor={"#19bcbf"}
            textColor={"black"}
          />
        </div> */}
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-8 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              भाषा मानव जीवन का अभिन्न अंग है। भाषा मौखिक और लिखित अभिव्यक्ति का
              एक सशक्त माध्यम है। पाठशाला के प्रांगण में कदम रखते ही
              छात्र-छत्राओ को एक नई दुनिया से परिचय होता है। इस परिवेश में
              सुनना-बोलना, पढ़ना-लिखना सभी कौशलो विकास होता हैं। 'वर्ण' भाषा की
              लघुतम इकाई है। किसी भी भाषा को सीखने के लिए सबसे पहले वर्णों का
              ज्ञान होना बहुत जरूरी है, क्योंकि वर्ण ही भाषा का आधार होते हैं।
              इसी लक्ष्य की पूर्ति हेतु{" "}
              <span className="font-bold text-purple-500">'अक्षर सागर' </span>{" "}
              की रचना की गयी हैं।
              <br />
              <span className="font-bold text-purple-500">अक्षर सागर </span>
              द्वारा बच्चे हिंदी पढ़ने, लिखने, बोलने और समझने में तथा रचनात्मक
              अभिव्यक्त करने में भी सक्षम होंगे।
            </span>
          }
          bgColor={"#b18ae6"}
          listOne={"NURSERY"}
          listTwo={"LKG"}
          listThree={"UKG"}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-[#b18ae6]">
        <div
          ref={keyFeatures}
          id="keyFeature"
          className="flex flex-col justify-center items-center w-[60%]"
        >
          <SectionTwo
            content={
              <Content
                bgColor={"#b18ae6"}
                headLine={"प्रमुख विशेषताऐं"}
                points={[
                  "अक्षर बोध: अक्षर ज्ञान पृष्ठ।",
                  "चित्र पृष्ठ: अक्षर से शुरू होने वाले चित्रों की पहचान और उनके नमो के उच्चारण द्वारा शब्दकोष में वृद्धि।",
                  "क्रियाकलाप पृष्ठ अक्षर संबंधित रुचिपूर्ण व आकर्षक क्रियाकलाप पृष्ठ गतिविधि पृष्ठ द्वारा कार्यात्मक क्षमता में वृद्धि हेतु  पृष्ठ।",
                ]}
              />
            }
            bgColor={"rgb(177, 138, 230)"}
            img={img6}
          />
        </div>
      </div>
      {/* <div className="flex flex-row justify-center items-center p-4 sm:w-full bg-o">
        <img src={img7} className="w-[60%] h-auto" alt="" />
      </div>
      <div className="flex flex-row justify-center items-center">
        <CardThree bgColor={"#19bcbf"} bgColor1={"#159ea1"} />
      </div>
      <div ref={UniqueAdvantages} id="UniqueAdvantages">
        <div className="bg-gray-700">
          <div className="flex flex-col place-items-center justify-center">
            <img
              src={img4}
              className="w-40 h-auto border-2 flex gap-3 p-1 bg-white rounded-b-lg"
              alt=""
            />
            <span className="lg:text-lg font-extrabold flex items-center justify-center text-white text-base">
              21st Century School OS Lite
            </span>
            <span className="flex grid-col items-center justify-center text-white p-4 text-base lg:text-xl">
              Digital Platform
            </span>
          </div>
          <OsLite2 />
        </div>
      </div> */}
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#b18ae6"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};
export default AksharSagar;
