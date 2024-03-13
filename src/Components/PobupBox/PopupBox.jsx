/* eslint-disable react/prop-types */
import "./PopupBox.css";
import "../../App.css";
const PopupBox = ({ children }) => {
  return (
    <div className="layer">
      <div className="popup-box">{children}</div>
    </div>
  );
};

export default PopupBox;
