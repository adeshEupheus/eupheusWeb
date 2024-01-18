import React from "react";
import img1 from "../assets/TeachTech/banner@3x.png";
import Content2 from "../Components/BookTemplate/Content2";
import img2 from "../assets/TeachTech/Asset 8@3x.png";
import Content from "../Components/BookTemplate/Content";
import Footer from "../Components/Footer";

function TeachTech() {
  return (
    <div
      className={`w-full flex flex-col bg-white transition-all duration-200 ease-linear overflow-hidden`}
    >
      <div>
        <img src={img1} alt="" className="w-full" />
        <div>
          <Content2
            para={
              "Welcome to Teach-Tech, an initiated by Eupheus Learning and powered by Google Workspace, to empower Schools through pedagogy and innovations. A series of seminars being organized under this initiative to decode NCF more carefully and discover tools and techniques to implement its key mandates."
            }
            bgColor={"rgb(250 204 21)"}
          />
          <div className="bg-gray-600">
            <span className="flex flex-col justify-center items-center py-4 font-bold lg:text-4xl md:text-3xl sm:text-xl text-lg text-white">
              Upcoming Events
            </span>
            <div className="flex flex-row justify-center items-center gap-3 sm:w-[100%] p-3">
              <div className="flex flex-col justify-center items-center box-content border rounded-lg bg-yellow-400 p-6 m-4 w-36 text-lg">
                <img src={img2} alt="" className="w-20 h-20" />
                <p>January 23rd</p>
                <span>2024</span>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center mb-4">
              <a href=" https://shorturl.at/xFNW6" target="_blank">
                <button className="flex flex-col justify-center items-center bg-yellow-400 border rounded-full px-3">
                  Book Your Slot
                </button>
              </a>
            </div>
            <div className="flex flex-col justify-center items-center bg-gray-300 p-5">
              <h2 className="lg:text-4xl md:text-3xl sm:text-xl text-lg font-light">
                We welcome you to the session on
              </h2>
              <h1 className="lg:text-4xl md:text-3xl sm:text-xl text-lg font-bold text-red-600 py-3">
                Decoding NCF
              </h1>
              <div className="flex text-sm md:text-base flex-col justify-center sm:w-[60%] px-2">
                <div className="w-full flex justify-center">
                  <div className="w-fit flex flex-col">
                    <span className="font-semibold">Topics to be covered:</span>
                    <ul className="p-2">
                      <li className="list-disc py-2">NCF for Schools</li>
                      <li className="list-disc py-2">
                        Key Mandates of Foundational Stage
                      </li>
                      <li className="list-disc py-2">
                        Introducing Foundational Stage Solution – Zoom! Plus
                      </li>
                      <li className="list-disc py-2">
                        Google Workspace immersion
                      </li>
                    </ul>
                  </div>
                </div>
                <hr className="h-px flex-grow bg-yellow-500 border-3 border-yellow-500" />
                <ul className="flex flex-col justify-center items-center p-2">
                  <li className=" py-2">
                    <span className="font-semibold">Date: </span>January 23rd,
                    2024 (Tuesday)
                  </li>
                  <li className="py-2">
                    <span className="font-semibold">Time: </span> 11:30 am to
                    3.30 pm
                  </li>
                  <li className=" py-2 w-[70%]">
                    <span className="font-semibold">Event Address: </span>Google
                    Office, Signature Tower-D, Sector-15, Part-2, Gurugram,
                    Haryana, 122001
                  </li>
                  <li className=" py-2">
                    <span className="font-semibold">Event Hall: </span>Meerut
                    Hall, 7th Floor, Signature Tower-D
                  </li>
                  <li className=" py-2">
                    <span className="font-semibold">Register At: </span>
                    https://shorturl.at/xFNW6
                  </li>
                </ul>
                <hr className="h-px flex-grow bg-yellow-500 border-3 border-yellow-500" />
                <span className="font-semibold flex flex-col justify-center items-center p-2">
                  Contact Person for RSVP:
                </span>
                <ul className="flex flex-col justify-center items-center p-2">
                  <li className=" py-2">
                    Sumit Goyal +91 98999 99241, sumitg@eupheus.in
                  </li>
                  <li className=" py-2">
                    Prabhat Sinha +91 95600 11396 prabhats@eupheus.in
                  </li>
                  <li className=" py-2">
                    Naresh Vashishth +91 98910 17188, nareshv@eupheus.in
                  </li>
                  <li className="py-2">
                    Chhitiz Sisodia +91 93111 05718, chhitizs@eupheus.in
                  </li>
                  <li className="py-2">
                    Surinder Singh +91 96505 90228, surinders@eupheus.in
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center mb-3">
                <a href=" https://shorturl.at/xFNW6" target="_blank">
                  <button className="flex flex-col justify-center items-center bg-red-600 text-white border-white drop-shadow-xl rounded-full px-3">
                    Book Your Slot
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-gray-800 text-white p-5  ">
            <h1 className="font-bold md:text-3xl sm:text-xl text-lg text-white">
              FAQs
            </h1>
            <span className="flex flex-col justify-center items-center py-2 font-normal sm:w-[60%] px-3">
              Welcome to the second of its series of Sessions being organized
              under the banner of Teach-Tech powered by Google and Eupheus. An
              initiated by Eupheus Learning to empower Schools through pedagogy
              and innovations.
            </span>
            <div className="flex flex-col sm:w-[60%] sm:text-base text-sm p-4 m-2 font-normal px-1">
              <Content
                headLine={"Q1. What is Teach-Tech?"}
                para={
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
                para={
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
                para={
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
                para={
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
