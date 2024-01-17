import React from "react";
import Content from "./Content";

function SectionThree({}) {
  return (
    <div className="flex sm:w-[34%] px-4 justify-center items-center bg-gray-300">
      <div className="flex flex-col justify-center items-center">
        <Content
          bgColor={"rgb(209 213 219)"}
          subHead={"Topics to be covered:"}
          points={[
            "NCF for Schools",
            "Key Mandates of Foundational Stage",
            "Introducing Foundational Stage Solution – Zoom! Plus",
            "Google Workspace immersion",
          ]}
        />
        <Content
          bgColor={"rgb(209 213 219)"}
          points={[
            "Date: January 23rd, 2024 (Tuesday)",
            "Time: 11:30 am to 3.30 pm",
            "Event Address: Google Office, Signature Tower-D, Sector-15, Part-2, Gurugram, Haryana, 122001",
            "Event Hall: Meerut Hall, 7th Floor, Signature Tower-D",
          ]}
        />
        <Content
          subHead={"Contact Person for RSVP:"}
          points={[
            "Sumit Goyal +919899999241, sumitg@eupheus.in",
            "Prabhat Sinha +91 9560011396, prabhats@eupheus.in",
            "Naresh Vashishth +91 9891017188, nareshv@eupheus.in",
            "Chhitiz Sisodia +91 9311105718, chhitizs@eupheus.in",
            "Surinder Singh +91 9650590228, surinders@eupheus.in",
          ]}
        />
      </div>
    </div>
  );
}

export default SectionThree;
