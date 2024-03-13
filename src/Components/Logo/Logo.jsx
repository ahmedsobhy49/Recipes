import "./Logo.css";
import logoImage from "../../assets/Logo.png";
const Logo = () => {
  return (
    <a href="">
      <div className="logo-container">
        <div className="logo-image-container">
          <img src={logoImage} alt="logo" />
        </div>
        <h1 className="logo-name">Recipes</h1>
      </div>
    </a>
  );
};

export default Logo;
