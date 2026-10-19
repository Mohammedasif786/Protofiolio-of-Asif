import { Drawer } from "@mui/material";
import { useState, type SetStateAction } from "react";
import { TiThList } from "react-icons/ti";

interface Pardon {
  menu: boolean;
  setMenu: React.Dispatch<SetStateAction<boolean>>;
}

function MiniNav({ menu, setMenu }: Pardon) {
  const items = [
    ["Projects", "#project"],
    ["Skills", "#Skills"],
    ["Education", "#edu"],
    ["Contact", "#contact"],
  ];

  return (
    <Drawer open={menu} onClose={() => setMenu(false)}>
      <nav className="flex flex-col w-48 gap-4 p-4">
        {items.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setMenu(false)}>
            {label}
          </a>
        ))}
      </nav>
    </Drawer>
  );
}

function NavInfo() {
  const [menu, setMenu] = useState(false);
  const OnMenu = () => setMenu((prev) => !prev);

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
      <MiniNav menu={menu} setMenu={setMenu} />
    </div>
  );
}

export default NavInfo;
