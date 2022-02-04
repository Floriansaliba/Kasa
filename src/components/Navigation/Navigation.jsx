import "../Navigation/Navigation.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="navigation">
      <Link to="/">
        <li className="navigation_item">Acceuil</li>
      </Link>
      <Link to="/propos">
        <li className="navigation_item">A Propos</li>
      </Link>
    </ul>
  );
};

export default Nav;
