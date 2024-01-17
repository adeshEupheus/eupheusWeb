import React from "react";
import img1 from "../assets/TeachTech/banner@3x.png";
import Content2 from "../Components/BookTemplate/Content2";
import img2 from "../assets/TeachTech/Asset 8@3x.png";
import CardSecond from "../Components/BookTemplate/CardSecond";
import BasicButton from "../Components/Material/Button";
import SectionThree from "../Components/BookTemplate/SectionThree";
import Content from "../Components/BookTemplate/Content";
import Footer from "../Components/Footer";

function TeachTech() {
  return (
    <div
      className={`w-full flex flex-col sm:pt-0 transition-all duration-200 ease-linear overflow-hidden`}
    >
      <div>
        <img src={img1} alt="" className="w-full" />
        <div className="sm:text-left ">
          <Content2
            para={
              "Welcome to Teach-Tech, an initiative of Eupheus Learning and powered by Google Workspace, to empower Schools through pedagogy and innovations. A series of seminars being organized under this initiative to decode NCF more carefully and discover tools and techniques to implement its key mandates."
            }
            bgColor={"rgb(250 204 21)"}
          />
          <div className="bg-gray-600">
            <span className="flex flex-col justify-center items-center py-4 font-bold text-4xl text-white">
              Upcoming Event
            </span>
            <div className="flex flex-row justify-center items-center gap-3">
              <CardSecond
                image={img2}
                headLine={"January 23rd"}
                para={"2024"}
              />
              {/* <CardSecond image={img2} headLine={"February 08th"} para={"2024"} />
          <CardSecond image={img2} headLine={"February 15th"} para={"2024"} /> */}
            </div>
            <div className="flex flex-row justify-center items-center gap-32 mt-5 pb-5">
              <a href=" https://shorturl.at/xFNW6" target="_blank">
                <BasicButton
                  text={"Book Your Slot"}
                  bgColor={"rgb(250 204 21)"}
                  textColor={"black"}
                />
              </a>
              {/* <BasicButton
            text={"Book Your Slot"}
            bgColor={"rgb(250 204 21)"}
            textColor={"black"}
          />
          <BasicButton
            text={"Book Your Slot"}
            bgColor={"rgb(250 204 21)"}
            textColor={"black"} 
          />*/}
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-300 px-5">
              <h2 className="text-xl font-normal mt-5">
                We welcome you to the session on
              </h2>
              <h1 className="text-3xl font-bold text-red-600">Decoding NCF</h1>
              <SectionThree />
              <div className="flex items-center justify-center mb-3">
                <a href=" https://shorturl.at/xFNW6">
                  <BasicButton
                    text={"Book Your Slot"}
                    bgColor={"rgb(220 38 38)"}
                    textColor={"white"}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-gray-300 px-5">
            <h1 className="text-3xl font-bold text-black mt-5">FAQs</h1>
            <span className="flex flex-col justify-center items-center py-4 font-normal w-[60%] ">
              Welcome to the second of its series of Sessions being organized
              under the banner of Teach-Tech powered by Google and Eupheus. An
              initiated by Eupheus Learning to empower Schools through pedagogy
              and innovations.
            </span>
            <div className="flex flex-col sm:w-[60%] sm:text-base text-sm p-4 m-2">
              <Content
                headLine={"Q1. What is Teach-Tech?"}
                subHead={
                  "A1. Teach-Tech is a series of seminars under the joint initiative of Eupheus Learning and is powered by Google to offer the following solutions to Schools:"
                }
                points={[
                  "Simplify NCF mandates through easy and elaborate discussion on the key points being highlighted in the latest NCF",
                  "Deep-dive into various stages of NCF like Foundational Stage, Preparatory Stage, Middle Stage, and Senior Stage",
                  "Launch ZoomPlus series from Eupheus which meets the mandates of NCF and showcases our technology integration",
                  "Corporate presentation on Eupheus Learning, India’s Largest School Focused Distribution Platform and a category leader",
                  "Immersion on Google Workspace, a productivity suite that makes a business environment safe and secure and integrates the most needed tech to enable business efficiency",
                ]}
              />
              <Content
                headLine={
                  "Q2. Who is the target audience of Teach-Tech and what do I expect from this session?"
                }
                para={
                  "A2. Teach-Tech series is relevant for School Principals and Teachers. In our very first session under this initiative of Teach-Tech, we are covering “Decoding NCF” and taking the audience through the details about NCF and focusing more on the ‘Foundational Stage’. We are also taking an opportunity to launch our ‘ZoomPlus’ series which is a transformational series for this foundational stage. Hence, the co-ordinators of pre-primary section will benefit greatly through this seminar."
                }
              />
              <Content
                headLine={
                  "Q3. When and where is the second session of Teach-Tech?"
                }
                para={
                  "A3. The second session is happening on January 23rd at the conference hall of Google Workspace office in Gurgaon. The details about the same are covered in our invite for this session."
                }
              />
              <Content
                headLine={"Q4. What is Google Workspace?"}
                subHead={
                  "A4. Google Workspace is designed to enhance productivity and streamline collaboration by providing a suite of interconnected, cloud-based tools that can be accessed from any device with internet connectivity."
                }
                points={[
                  "A Tool for enhancing productivity and fostering collaboration within various functions inside school",
                  "Your school can subscribe to Google Workspace and ensure safety and security of your school’s data",
                  "The workspace will allow interconnected technology for your school to become more productive",
                  "Detailed description about Google Workspace shall be provided during this session on December 19",
                ]}
              />
              <Content
                headLine={"Q5. What is the tie-up with Google Workspace?"}
                subHead={
                  "A5. Eupheus has tied up with Google to become their technology partner in this Teach-Tech Initiative."
                }
                points={[
                  "Under the NEP 2020 and NCF 2022/23, the ministry of education has carved out a serious role for EdTech to help the K-12 segment",
                  "Eupheus Learning, India’s largest school focused distribution platform has been championing initiatives and innovation to provide the most updated curriculum with the most appropriate technology integration. Our tie-up with Google Workspace is another step in that direction",
                  "Our own 21st Century School OS (SchoolMitra App) is on Google cloud now which offers amongst the best safety features and security",
                  "During this second session on January 23rd, Google Workspace will showcase their capabilities for a School to enhance their productivity",
                ]}
              />
              <Content
                headLine={"Q6. How do I attend this Teach-Tech session?"}
                subHead={
                  "A6. The invite carries details about the Teach-Tech session and a link to register. It’s a google form which captures key details about the attendant. It also captures whether the attendant requires parking. We would encourage the attendant to fill in that form and registers themselves and allow us to host them well."
                }
                points={[
                  "Google Workspace office will provide parking space on first come first serve basis. They need confirmation of vehicles by January 21st for sure",
                  "To enter the building, Google office requires details about the attendant, in specific, Name, Designation, School Name, Contact Number and Email Id to generate and ID card for that day’s meeting. They need confirmation of these details latest by January 22nd.",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TeachTech;
