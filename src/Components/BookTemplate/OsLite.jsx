import React from "react";
import img1 from "../../assets/curriculum/zoom/1.png";
import img2 from "../../assets/curriculum/zoom/2.png";
import img3 from "../../assets/curriculum/zoom/3.png";

import img8 from "../../assets/curriculum/zoom/digital content.png";
import CardOne from "../../Components/BookTemplate/CardOne";
import CardSecond from "../../Components/BookTemplate/CardSecond";

const OsLite = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 px-10 sm:px-4 justify-center items-center">
        <CardOne
          headLine={"TEACHERS’ RESOURCES"}
          points={[
            "E-book",
            "Animations",
            "Worksheets",
            "Activities",
            "Teacher manual** with bridge plan",
            "One month Vidyapravesh-inspired bridge plan for Grade 1",
          ]}
        />
        <CardOne
          headLine={"STUDENTS’ RESOURCES"}
          points={[
            "Chapter PDFs",
            "Animations",
            "Worksheets",
            "Activities",
            "Boards Games",
            "Additional songs and rhymes",
          ]}
        />
        <CardOne
          headLine={"PARENTS’ RESOURCES"}
          points={[
            "Parent activity booklets for Preschool 1, 2 and 3",
            "Animations through QR codes for Preschool 1, 2 and 3",
          ]}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center py-6 md:p-4">
        <CardSecond
          image={img8}
          headLine={"Digital Content"}
          para={
            "It includes e-books, animations, interactive e-worksheets, and e-activities."
          }
        />
        <CardSecond
          image={img1}
          headLine={"Cubetto curriculum"}
          para={
            "It used to learn basic coding and problem-solving though play and adventure."
          }
        />
        <CardSecond
          image={img2}
          headLine={"Pickatale App"}
          para={"It connects school learning to home learning."}
        />
        <CardSecond
          image={img3}
          headLine={"Zaner-Bloser Eupheus Handwriting Book"}
          para={"It used to develop handwriting skills."}
        />
      </div>
    </div>
  );
};

export default OsLite;
