import "../Navigation/Navigation.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="navigation">
      <NavLink to="/">
        <li className="navigation_item">Accueil</li>
      </NavLink>
      <NavLink to="/propos">
        <li className="navigation_item">A Propos</li>
      </NavLink>
    </ul>
  );
};

export default Nav;
