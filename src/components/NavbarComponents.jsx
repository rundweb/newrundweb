import { useState } from "react";
import logo from "../../assets/logo.png";
import { TbMenu2 } from "react-icons/tb";
const NavbarComponents = () => {
  const menu = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About Us",
    },
    {
      id: 3,
      name: "Our Service",
    },
    {
      id: 4,
      name: "Our Product",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="max-w-screen-xl m-auto flex items-center justify-between font-inter relative">
      <ul className="hidden md:flex md:items-center gap-3">
        {menu.map((menus) => {
          return (
            <li key={menus.id}>
              <a
                href=""
                className="text-emerald-900 font-normal text-16 hover:text-emerald-700 ease-in-out duration-300"
              >
                {menus.name}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="nav-logo">
        <img className="w-28 md:w-32" src={logo} alt="logo rundweb" />
      </div>

      <div className="hidden md:flex items-center gap-2">
        <a
          href=""
          className="text-emerald-700 text-16 font-medium border-2 border-emerald-600 py-2 rounded-md p-7 text-center"
        >
          Sign In
        </a>
        <a
          href=""
          className=" bg-emerald-600 text-white text-16 font-medium border-2 border-emerald-600 py-2 rounded-md p-7 text-center"
        >
          Join Now
        </a>
      </div>

      <ul
        className={`fixed  right-0 w-full bg-white flex flex-col items-center justify-center h-screen gap-1 ${
          menuOpen ? "top-0" : "-top-125"
        } ease-in-out duration-700 md:hidden`}
      >
        <div className="nav-logo mb-4">
          <img className="w-32" src={logo} alt="logo rundweb" />
        </div>
        {menu.map((menus) => {
          return (
            <li key={menus.id} className="my-1">
              <a
                href=""
                className="text-emerald-900 font-medium text-16 hover:text-emerald-700 ease-in-out duration-300"
              >
                {menus.name}
              </a>
            </li>
          );
        })}
        <div className="nav-btn flex flex-col mt-4 justify-center items-center gap-3">
          <a
            href=""
            className="text-emerald-700 text-lg font-medium border-2 border-emerald-600 py-2 rounded-md w-56 text-center"
          >
            Sign In
          </a>
          <a
            href=""
            className=" bg-emerald-600 text-white text-lg font-medium border-2 border-emerald-600 py-2 rounded-md w-56 text-center"
          >
            Join Now
          </a>
        </div>
      </ul>
      <TbMenu2
        className="relative z-20 text-emerald-700 text-2xl md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      />
    </header>
  );
};

export default NavbarComponents;
