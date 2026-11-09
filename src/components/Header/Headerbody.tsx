import React from "react";
import NavInfo from "./Nav/NavInfo";

function Headerbody() {
  let tag1 = "<>";
  let tag2 = "</>";
  return (
    <div className="border-2 w-4/4 lg:content-start content-center max-h-3/4 p-4 text-2xl h-96 lg:text-left lg:pt-36 lg:px-12 bg-linear-to-r from-blue-300 to-cyan-200">
      <h1 className="lg:text-center hidden lg:block lg:text-3xl lg:font-bold italic text-gray-600">
        Developer
      </h1>
      <div className="lg:flex lg:justify-between lg:py-4 lg:gap-4 lg:space-x-8">
        <div className="h-fit">
          <span className="text-white font-bold">{tag1}</span>
          <br />
          <div className="ml-8">
            Hi ✋, i'm <br />
            <b> Mohammed Asif</b>
            <br />
            Full Stack Developer&nbsp;(<strong>MERN</strong>)
          </div>
          <span className="text-white font-bold">{tag2}</span>
        </div>
        <img
          className="relative bottom-18 hidden lg:block"
          src="https://img.magnific.com/premium-vector/programming-home_118813-4357.jpg?semt=ais_hybrid&w=740&q=80"
          width={340}
          alt="profile"
        />
      </div>
      <div className="flex justify-center float-end">
        <div className="absolute top-0 right-0 lg:right-80 lg:mx-auto">
          <NavInfo />
        </div>
      </div>
    </div>
  );
}

export default Headerbody;
