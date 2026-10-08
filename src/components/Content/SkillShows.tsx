import React from "react";

function FrontendSkills() {
  return (
    <div className="lg:flex lg:justify-center lg:gap-4">
      <h1 className="text-3xl italic hidden lg:block lg:mt-2 lg:px-3">
        Frontend
      </h1>
      <div className="hidden lg:border-l-2 lg:block"></div>
      <div className="flex justify-center gap-4 mt-4 lg:*:size-12">
        <img
          src="https://i.pinimg.com/474x/19/2c/7e/192c7e8637656cab675eaf9c7f3a44ee.jpg"
          alt="MUI lib"
          className="size-8"
        />
        <img
          src="https://reactrouter.com/_brand/react-router-brand-assets/logo/Light.svg"
          alt="React Router"
          className="size-8"
        />
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <img
          src="https://media.licdn.com/dms/image/v2/D5612AQECTJtz4p53jg/article-cover_image-shrink_720_1280/B56ZU8i0uPGQAI-/0/1740477517660?e=2147483647&v=beta&t=O2-808NADV8lwBWK5xdi8jtC5-AT1JcIIWFxS-6GavI"
          alt="ReactHOOK"
          className="h-8 rounded lg:size-12 lg:w-fit"
        />
        <h1 className="text-3xl italic lg:hidden">Frontend</h1>
        <img
          src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
          alt="ReactLOGO"
          className="size-8 lg:size-12"
        />
      </div>

      <div className="flex justify-center gap-4 mt-4 lg:*:size-12">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
          alt="JavaScript"
          className="size-8"
        />
        <img
          src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/960px-Typescript_logo_2020.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20221110153201"
          alt="TypeScript"
          className="size-8"
        />
      </div>
    </div>
  );
}

function BackendSkills() {
  return (
    <div className=" lg:flex lg:justify-center lg:gap-4">
      <h1 className="text-3xl font-bold hidden lg:block lg:mt-4">
        Backend
      </h1>
      <div className="hidden lg:border-l-2 lg:block"></div>
      <div className="flex justify-center gap-4 mt-4 lg:space-x-2">
        <img
          src="https://1000logos.net/wp-content/uploads/2020/09/MongoDB-Logo.jpg"
          alt="MongoDB"
          className="w-18 lg:w-24"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9sz_GXtQaMePinC6rmAOZe-QacBLz4BxbLtlV3xWbkZI9P2_buBQjWjc&s=10"
          alt="REST API"
          className="w-12 lg:w-18"
        />
      </div>

      <h1 className="text-2xl font-bold lg:hidden">Backend</h1>

      <div className="flex align-middle justify-center gap-4 mt-4 lg:space-x-2">
        <img
          src="https://img.icons8.com/color/1200/express-js.jpg"
          alt="Express.js"
          className="size-8 lg:size-12 border-2"
        />
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_640.png"
          alt="Node.js"
          className="w-18 lg:w-32 border-2"
        />
      </div>
    </div>
  );
}
function SkillShows() {
  return (
    <div className="border-2 w-4/4 content-center max-h-3/4 p-4 text-2xl text-center">
      <h1 className="text-2xl font-bold mb-8">-:My Skills:-</h1>
      <div className="lg:flex lg:flex-col lg:justify-center lg:gap-8">
      <FrontendSkills />
      <div className="border mx-12 my-8 lg:hidden"></div>
      <BackendSkills />
      </div>
    </div>
  );
}

export default SkillShows;
