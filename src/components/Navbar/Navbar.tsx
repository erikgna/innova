import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-gray-700 pt-8 flex justify-center px-4">
      <div className="max-w-7xl w-full flex items-center justify-between">
        <Link to="/">
          <h1 className="text-white font-bold text-2xl cursor-pointer">
            Star Wars Wiki
          </h1>
        </Link>
        <ul className="flex items-center text-white">
          <li>
            <Link to="/">Personagens</Link>
          </li>
          <li className="ml-8">
            <Link to={localStorage.getItem("last-url") ?? "/"}>
              Último acesso
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
