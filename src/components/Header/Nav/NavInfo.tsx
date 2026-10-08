import { TiThList } from "react-icons/ti";

function NavInfo() {
  return (
    <div className="lg:border-none border-2 h-fit rounded-full m-4 p-4 ">
      <div className="lg:flex lg:bg-green-600 lg:p-6 lg:rounded-xl lg:text-white lg:justify-center lg:items-center md:hidden hidden lg:gap-2 lg:space-x-8  lg:font-semibold">
        <h1>
          <a href="#" className="hover:ring-2 ease-in-out duration-300 hover:rounded hover:p-2">Projects</a>
        </h1>
        <h1>
          <a href="#" className="hover:ring-2 ease-in-out duration-300 hover:rounded hover:p-2">Skills</a>
        </h1>
        <h1>
          <a href="#" className="hover:ring-2 ease-in-out duration-300 hover:rounded hover:p-2">Education</a>
        </h1>
        <h1>
          <a href="#" className="hover:ring-2 ease-in-out duration-300 hover:rounded hover:p-2">Contact Me</a>
        </h1>
      </div>

      <TiThList className="lg:hidden" />
    </div>
  );
}

export default NavInfo;
