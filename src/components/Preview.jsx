import React, { useState } from "react";

function Preview() {
  const [selected, setSelected] = useState("job");

  const getBorderWidth = (tab) => {
    if (selected === tab) {
      return "border-orange-500";
    } else {
      return "border-gray-400";
    }
  };

  return (
    <>
      <div className="h-14 w-full flex items-center">
        <div
          className={`ml-12 w-24 font-semibold cursor-pointer ${
            selected === "job" ? "text-customRed" : "text-customblack"
          }`}
          onClick={() => setSelected("job")}
        >
          Job Preview
        </div>
        <div
          className={`ml-12 w-24 font-semibold cursor-pointer ${
            selected === "applicants" ? "text-customRed" : "text-customblack"
          }`}
          onClick={() => setSelected("applicants")}
        >
          Applicants
        </div>
        <div
          className={`ml-12 w-24 font-semibold cursor-pointer ${
            selected === "match" ? "text-customRed" : "text-customblack"
          }`}
          onClick={() => setSelected("match")}
        >
          Match
        </div>
        <div
          className={`ml-12 w-24 font-semibold cursor-pointer ${
            selected === "messages" ? "text-customRed" : "text-customblack"
          }`}
          onClick={() => setSelected("messages")}
        >
          Messages
        </div>
      </div>
      <hr className={`border-t-2 mt-2 ${getBorderWidth(selected)}`} />
    </>
  );
}

export default Preview;
