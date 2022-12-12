import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full shadow-md p-3 flex justify-center bg-indigo-500">
      <ul className="flex flex-col items-center">
        <li>
          {" "}
          <img
            src={Logo}
            className="h-16 w-16 animate-spin-slow cursor-pointer"
            alt="Logo"
            onClick={() => navigate("/")}
          />{" "}
        </li>
        <li>
          <Link to="/shops" className="text-white font-bold">
            Boutiques
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
