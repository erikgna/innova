import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import menuOpen from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.svg";

export const Navbar = () => {
  const location = useLocation();

  const [menu, setMenu] = useState<boolean>(false);

  return (
    <nav className="bg-gray-800 pt-8 flex justify-center px-4">
      <div className="max-w-7xl w-full flex items-center justify-between">
        <Link to="/">
          <h1 className="text-white font-bold text-2xl cursor-pointer">
            Star Wars Wiki
          </h1>
        </Link>
        <button
          type="button"
          className="sm:hidden inline items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => setMenu(!menu)}
        >
          <span className="sr-only">Change menu</span>
          {menu ? (
            <img src={close} alt="Close" />
          ) : (
            <img src={menuOpen} alt="Open" />
          )}
        </button>
        {menu && (
          <div className="sm:hidden z-10 fixed top-24 left-1/2 -translate-x-1/2 rounded bg-gray-600 px-4 py-4 w-72">
            <ul className="flex flex-col items-start w-full">
              <li
                onClick={() => setMenu(false)}
                className={`w-full px-2 py-2 text-white ease-linear duration-300 rounded ${
                  location.pathname === "/"
                    ? "bg-blue-600"
                    : "hover:bg-gray-700"
                }`}
              >
                <Link to="/">Personagens</Link>
              </li>
              {localStorage.getItem("last-url") && (
                <li
                  onClick={() => setMenu(false)}
                  className={`mt-2 w-full px-2 py-2 text-white ease-linear duration-300  ${
                    location.pathname.includes("character")
                      ? "bg-blue-600"
                      : "hover:bg-gray-700"
                  }`}
                >
                  <Link to={localStorage.getItem("last-url") ?? "/"}>
                    Último acesso
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
        <ul className="hidden sm:flex items-center text-white">
          <li
            className={`hover:text-blue-500 ease-linear duration-300 ${
              location.pathname === "/" && "text-blue-500"
            }`}
          >
            <Link to="/">Personagens</Link>
          </li>
          {localStorage.getItem("last-url") && (
            <li
              className={`ml-8 hover:text-blue-500 ease-linear duration-300  ${
                location.pathname.includes("character") && "text-blue-500"
              }`}
            >
              <Link to={localStorage.getItem("last-url") ?? "/"}>
                Último acesso
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
