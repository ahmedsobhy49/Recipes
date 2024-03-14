import "./Logo.css";
import logoImage from "../../assets/Logo.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/">
      <div className="logo-container">
        <div className="logo-image-container">
          <img src={logoImage} alt="logo" />
        </div>
        <h1 className="logo-name">Recipes</h1>
      </div>
    </Link>
  );
};

export default Logo;
