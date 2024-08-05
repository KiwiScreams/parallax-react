import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header>
        <nav className="flex">
          <ul className="flex">
            <NavLink>Connect with Us</NavLink>
            <NavLink>Enhance Your Gaming Experience</NavLink>
          </ul>
          <NavLink>Enhance Your Gaming Experience</NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
