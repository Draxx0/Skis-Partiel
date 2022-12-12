import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full shadow-md p-3 flex justify-center bg-indigo-500">
      <ul>
        <li>
          {" "}
          <img src={Logo} className="h-16 w-16 animate-spin-slow" alt="" />{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
