import React from "react";
import TPT from "../../Images/TPT.png";

function ProjectCard() {
  return (
    <div className="border-2 w-4/4 my-8 content-center max-h-3/4 p-4 rounded-2xl text-2xl h-96 text-center shadow-xl shadow-gray-500/50 lg:flex lg:gap-4 lg:justify-center lg:items-center lg:border-0 lg:shadow-none lg:bg-gray-300">
      <img
        src={TPT}
        alt="Typing website"
        className="rounded-2xl lg:w-96 lg:h-full "
      />
      <div className="lg:flex lg:flex-col ">
        <h1 className="text-2xl lg:text-4xl font-bold text-center lg:text-start lg:py-2">
          Typing Project
        </h1>
        <p className="text-center text-lg lg:text-start">
         A productive web application to manage task, team and deadlines with a clean and modern interface
        </p>
        <div className="flex justify-center lg:justify-start lg:px-2 gap-4 mt-4 ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
            alt="typscript"
            className="size-8"
          />
          <img
            src="https://i.pinimg.com/474x/19/2c/7e/192c7e8637656cab675eaf9c7f3a44ee.jpg"
            alt="MUI lib"
            className="size-8 mix-blend-multiply"
          />
          <img
            src="https://img.icons8.com/color/1200/express-js.jpg"
            alt="Express.js"
            className="size-8 mix-blend-multiply"
          />
          <img
            src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
            alt="ReactLOGO"
            className="size-8"
          />
        </div>
        <div className="flex justify-center lg:justify-start lg:px-2 gap-4 mt-4">
          <button className="bg-gray-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded mt-4">
            <a href="https://github.com/Mohammedasif786">Github</a>
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            <a href="https://typingtest-self.vercel.app">Live demo</a>
          </button>
        </div>
      </div>
    </div>
  );
}

function ProjectSection() {
  return (
    <div className="flex flex-col border-2 w-4/4 content-center max-h-3/4 p-4 text-2xl text-center">
      <h1 className="text-4xl underline font-bold text-center my-6">
        -:Project List:-
      </h1>
      <ProjectCard />
    </div>
  );
}

export default ProjectSection;
