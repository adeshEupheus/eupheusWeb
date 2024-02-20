import React from "react";
import CardOne from "../../Components/BookTemplate/CardOne";

const OsLite2 = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 px-10 sm:px-4 justify-center items-center p-4">
        <CardOne headLine={"TEACHERS’ RESOURCES"} points={["E-book"]} />
        <CardOne headLine={"STUDENTS’ RESOURCES"} points={["Chapter PDFs"]} />
      </div>
    </div>
  );
};

export default OsLite2;
