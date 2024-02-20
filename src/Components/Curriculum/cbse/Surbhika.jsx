import React, { useRef } from "react";
import book1 from "../../../assets/curriculum/cbse/surbhika/surbhika.png";
import logo from "../../../assets/curriculum/cbse/surbhika/surbhikaIcon.png";
import pdf from "../../../assets/curriculum/zoom/sample page.pdf";
import BasicButton from "../../Material/Button";
import Banner from "../../BookTemplate/Banner";
import MainContent from "../../BookTemplate/MainContent";
import img4 from "../../../assets/curriculum/zoom/oslite.png";
import CardOne from "../../BookTemplate/CardOne";

const Surbhika = () => {
  const UniqueAdvantages = useRef(null);

  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200  ease-linear md:mt-[4rem] mt-[10rem]`}
    >
      <Banner image={book1} bgColor={"#3299d1"} />
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 p-4">
        {/* <div
          onClick={() => {
            const ele = document.getElementById("keyFeature");
            ele.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <BasicButton
            text={"KEY FEATURES"}
            bgColor={"#3299d1"}
            textColor={"black"}
            size={"small"}
          />
        </div> */}
        <div
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
            bgColor={"#3299d1"}
            textColor={"black"}
          />
        </div>{" "}
      </div>
      <div className="flex sm:flex-row flex-col justify-center px-4 bg-gray-200">
        <MainContent
          image={logo}
          para={
            <span>
              <span className="font-bold text-[#3299d1]">
                सुरभिका हिंदी व्याक्रण-माला{" "}
              </span>
              सुरभिका हिंदी व्याकरण की रचना प्रा. थमिक और माध्यमिक कक्षाओं के
              विद्यार्थियों के लिए की गई है। इसके निर्माण में इस बात पर विशेष
              ध्यान दिया गया है कि विद्यार्थी नियमों और परिभाषाओं में न उलझें
              बल्कि व्याकरण का व्यावहारिक उपयोग के प्रयोग से विषय को समझने योग्य
              और रोचक बनाने का प्रयास किया गया है। इस व्याक्रण-माला की विशिष्टता
              इसके अभ्यासों की विविधता में भी है। अत्यन्त संक्षिप्त एवं
              बहुविकल्पीय प्रश्नों का निर्माण इस प्रकार किया गया है कि संबंधित
              पाठ के ज्ञान का सही मूल्यांकन हो सके और कोई भी पहलू न छूटे।
            </span>
          }
          bgColor={"#3299d1"}
          listOne={"Grades"}
          listTwo={"1-8"}
        />
      </div>
      {/* <div className="flex flex-col justify-center items-center bg-[#3299d1]">
        <div
          ref={keyFeatures}
          id="keyFeature"
          className="flex flex-col justify-center items-center w-[60%]"
        >
          <SectionTwo
            content={
              <Content
                headLine={"प्रमुख विशेषताऐं"}
                points={[
                  "वल्लरी को नया रूप-रंग दिया गया है।",
                  "सतत विकास लक्ष्यों संबंधित जानकारी को वल्लरी में स्थान दिया गया है।",
                  "वल्लारी का नया संशोधित संस्करण राष्ट्रीय पाठ्यचार्या रूपरेखा (एन.सी.एफ) के शैक्षिक दिशानिर्देशों पर आधारित है।",
                  "वल्लरी (1 से 5)  की कुछ कविताएँ मधुर गायन के रूप में उपलब्ध करायी गयी हैं।",
                  "राष्ट्रीय पाठ्यचार्या के नवीनतम दिशानिर्देशों के अनुसार निर्मित पाठमाला",
                  " कक्षा के सतरानुसार रोचक, मूल्यवान, विविध अध्ययन सामग्री शामिल है",
                  "अध्यापकों के लिए सहायक पुस्तिका",
                ]}
              />
            }
            bgColor={"rgb(50, 153, 209)"}
            img={img6}
          />
        </div>
      </div> */}
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
          <div className="flex flex-col sm:flex-row gap-4 px-10 sm:px-4 justify-center items-center p-4">
            <CardOne
              headLine={"TEACHERS’ RESOURCES"}
              points={["E-book", "Answer Keys", "Lesson Plans", "Worksheets"]}
            />
            <CardOne
              headLine={"STUDENTS’ RESOURCES"}
              points={["Chapter PDFs"]}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-3">
        <a href={pdf} target="_blank" rel="noreferrer">
          <BasicButton
            text={"Download"}
            bgColor={"#3299d1"}
            textColor={"black"}
          />
        </a>
      </div>
    </div>
  );
};

export default Surbhika;
