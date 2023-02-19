import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 pt-8 flex justify-center px-4">
      <div className="max-w-7xl w-full flex items-center justify-between">
        <Link to="/">
          <h1 className="text-white font-bold text-2xl cursor-pointer">
            Star Wars Wiki
          </h1>
        </Link>
        <ul className="flex items-center text-white">
          <li
            className={`hover:text-blue-500 ease-linear duration-300 ${
              location.pathname === "/" && "text-blue-500"
            }`}
          >
            <Link to="/">Personagens</Link>
          </li>
          <li
            className={`ml-8 hover:text-blue-500 ease-linear duration-300  ${
              location.pathname.includes("character") && "text-blue-500"
            }`}
          >
            <Link to={localStorage.getItem("last-url") ?? "/"}>
              Último acesso
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
