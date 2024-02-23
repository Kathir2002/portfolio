import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="w-12 h-12 object-contain" src={Logo} alt="Logo" />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
          to={"/projects"}
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
