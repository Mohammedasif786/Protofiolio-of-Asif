import React from "react";

function DetailFooter() {
  return (
    <div className="w-4/4 bg-gray-400 content-center max-h-3/4 p-4 text-2xl text-center">
      <div className="lg:flex lg:text-left">
      <div className="w-4/4 content-center max-h-3/4 p-4 text-2xl ">
        <h1 className="text-3xl font-bold">Ready for Project?</h1>
        <p className="text-center text-lg italic">
          Drop a line at formohammedasif6@gmail.com
        </p>
        <ul className=" text-lg p-2 space-y-2">
          <li>Open for full time roles</li>
          <li>Freelancer</li>
          <li>Mini Projects</li>
          <li>Future Updates..</li>
        </ul>
      </div>
      <div className="w-4/4 content-center max-h-3/4 p-4 lg:p-0 text-2xl text-center">
        <h1 className="text-3xl font-bold">Navigation</h1>
        <ul className="text-lg p-2 space-y-2">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Projecs</a>
          </li>
        </ul>
      </div>
      <div className="w-4/4 content-center max-h-3/4 p-4 text-2xl flex flex-col justify-center items-center space-y-3">
        <h1 className="text-3xl font-bold">Social Media</h1>
        <ul className="text-lg p-2 space-x-4 flex justify-center items-center">
          <li>
            <a href="https://www.linkedin.com/in/mohammed-asif-6332b2236/">
              <img
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/960px-LinkedIn_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
                alt="LinkedIn"
                width="30"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/Mohammedasif786">
              <img
                src="https://cdn-icons-png.flaticon.com/256/25/25231.png"
                width={30}
                alt="Github"
              />
            </a>
          </li>
        </ul>
      </div>
      </div>
      <footer className="text-sm text-start">
        © 2026 Md Asif. All rights reserved.
      </footer>
    </div>
  );
}

export default DetailFooter;
