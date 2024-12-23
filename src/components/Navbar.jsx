import logo from "../assets/logo.png";
import { CgMenu } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import NavbarComponents from "./NavbarComponents";
import { useState } from "react";
function Navbar() {
  const menu = [
    {
      name: "HOME",
      link: "#",
    },
    {
      name: "ABOUT",
      link: "#",
    },
    {
      name: "SERVICE",
      link: "#",
    },
    {
      name: "PRODUCT",
      link: "#",
    },
    {
      name: "FAQ",
      link: "#",
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="relative flex items-center justify-between max-w-7xl m-auto p-5">
      <div className="logo w-28 xl:w-32">
        <img src={logo} alt="" />
      </div>
      <div
        className={`md:hidden fixed flex items-center h-screen flex-col justify-center bg-white left-0 w-full gap-1 ${
          openMenu ? "top-0" : "-top-full"
        } ease-in-out duration-500`}
      >
        <div className="logo w-32 mb-4">
          <img src={logo} alt="" />
        </div>
        {menu.map((item) => (
          <NavbarComponents key={item.name} name={item.name} link={item.link} />
        ))}
        <div className="flex flex-col gap-2 text-center mt-4 w-full justify-center items-center">
          <a
            href=""
            className="border-2 border-emerald-700 w-3/4 text-emerald-700 font-semibold rounded-sm py-[6px]"
          >
            SIGN IN
          </a>
          <a
            href=""
            className="border-2 border-emerald-700 w-3/4 text-white font-semibold bg-emerald-700 py-[6px] rounded-sm"
          >
            GETS STARTED
          </a>
        </div>
      </div>
      {openMenu ? (
        <IoCloseSharp
          className="relative z-10 text-2xl text-emerald-800 md:hidden"
          onClick={() => setOpenMenu(!openMenu)}
        />
      ) : (
        <CgMenu
          className="relative z-10 text-2xl text-emerald-800 md:hidden"
          onClick={() => setOpenMenu(!openMenu)}
        />
      )}

      <div className={`hidden md:flex items-center justify-between gap-5`}>
        {menu.map((item) => (
          <NavbarComponents key={item.name} name={item.name} link={item.link} />
        ))}
        <div className="flex gap-3 text-center justify-center items-center">
          <a
            href=""
            className="text-sm border-2 border-emerald-700  text-emerald-700 font-semibold rounded-sm py-[6px] px-5 hover:bg-emerald-700 hover:text-white ease-in-out duration-500"
          >
            SIGN IN
          </a>
          <a
            href=""
            className="text-sm border-2 border-emerald-700  text-white font-semibold bg-emerald-700 py-[6px] px-5 rounded-sm hover:bg-white hover:text-emerald-700 ease-in-out duration-500"
          >
            GETS STARTED
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
