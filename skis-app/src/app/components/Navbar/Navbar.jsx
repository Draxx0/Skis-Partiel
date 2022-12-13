import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full shadow-md p-3 flex bg-zinc-800">
      <ul className="flex items-center gap-4">
        <li>
          {" "}
          <img
            src={Logo}
            className="h-16 w-16 cursor-pointer"
            alt="Logo"
            onClick={() => navigate("/")}
          />{" "}
        </li>
        <li>
          <Link
            to="/"
            className="text-white font-bold transition duration-750 ease-in-out hover:text-indigo-500"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/shops"
            className="text-white font-bold transition duration-750 ease-in-out hover:text-indigo-500"
          >
            Boutiques
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
