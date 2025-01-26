import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import clsx from "clsx";

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div>
      <nav>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movie
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
