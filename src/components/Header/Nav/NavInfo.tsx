import { useState } from "react";
import { TiThList } from "react-icons/ti";

function MiniNav() {
  return (
    <div>
      <ul className="border bg-gray-600 w-96 h-96 text-left space-y-3 text-4xl even:bg-gray-800 rounded-lg">
        <li>Project</li>
        <li>Skills</li>
        <li>Education</li>
        <li>Contact Me</li>
      </ul>
    </div>
  );
}

function NavInfo() {
  const [menu, setMenu] = useState(false);
  const OnMenu = () => setMenu((prev) => !prev);
  console.log(menu);

  return (
    <div className="lg:border-none border-2 h-fit rounded-full m-4 p-4 ">
      <div className="lg:flex lg:bg-green-600 lg:p-6 lg:rounded-xl lg:text-white lg:justify-center lg:items-center md:hidden hidden lg:gap-2 lg:space-x-8 lg:font-semibold">
        <h1>
          <a
            href="#project"
            className="hover:ring-2 ease-in-out duration-300 hover:rounded hover:p-2"
          >
            Projects
          </a>
        </h1>
        <h1>
          <a
            href="#Skills"
            className="hover:ring-2 ease-in-out duration-300 hover:rounded hover:p-2"
          >
            Skills
          </a>
        </h1>
        <h1>
          <a
            href="#edu"
            className="hover:ring-2 ease-in-out duration-300 hover:rounded hover:p-2"
          >
            Education
          </a>
        </h1>
        <h1>
          <a
            href="#contact"
            className="hover:ring-2 ease-in-out duration-300 hover:rounded hover:p-2"
          >
            Contact Me
          </a>
        </h1>
      </div>

      <TiThList className="lg:hidden" onClick={OnMenu} />
      {menu && <MiniNav />}
    </div>
  );
}

export default NavInfo;
