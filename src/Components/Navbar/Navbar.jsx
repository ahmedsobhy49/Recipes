import "./Navbar.css";
import "../../App.css";
import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left-side">
        <ul>
          <Logo />
          <li>
            <Link to="/add-new-meal">
              <button className="btn">Add New Recipe</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right-side">
        <ul>
          <li>
            <FontAwesomeIcon icon={faCartShopping} fontSize="2.2rem" />
          </li>
          <li>
            <FontAwesomeIcon icon={faCreditCard} fontSize="2.2rem" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
