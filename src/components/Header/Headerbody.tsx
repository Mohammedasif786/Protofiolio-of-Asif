import React from "react";
import NavInfo from "./Nav/NavInfo";

function Headerbody() {
  let tag1 = "<>";
  let tag2 = "</>";
  return (
    <div className="border-2 w-4/4 lg:content-start content-center max-h-3/4 p-4 text-2xl h-96 text-center lg:text-left lg:pt-36 lg:px-12">
      <h1 className="lg:text-center hidden lg:block lg:text-3xl lg:font-bold italic text-gray-600">
        Developer
      </h1>
      <div className="lg:flex lg:justify-between lg:py-4 lg:gap-4 lg:space-x-8 ">
        <div className="h-fit">
          {tag1}
          Hi ✋, i'm <br />
          Mohammed Asif
          <br />
          Frontend Developer
          {tag2}
        </div>
        <img
          className="relative bottom-18 hidden lg:block"
          src="https://img.magnific.com/premium-vector/programming-home_118813-4357.jpg?semt=ais_hybrid&w=740&q=80"
          width={340}
          alt="profile"
        />
      </div>
      <div className="flex justify-center float-end">
        <div className="absolute top-0 right-0 lg:right-70 lg:mx-auto">
          <NavInfo />
        </div>
      </div>
    </div>
  );
}

export default Headerbody;
