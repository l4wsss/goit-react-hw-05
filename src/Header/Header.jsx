import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movie</NavLink>
      </nav>
    </div>
  );
};

export default Header;
