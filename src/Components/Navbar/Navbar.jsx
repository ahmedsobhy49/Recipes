import "./Navbar.css";
import "../../App.css";
import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="left-side">
        <ul>
          <Logo />
          <li>
            <button className="btn">Add New Recipe</button>
          </li>
        </ul>
      </div>
      <div className="right-side">
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
