/* eslint-disable react/prop-types */
import { SlExclamation } from "react-icons/sl";
import PopupBox from "../PobupBox/PopupBox";
import "./RemoveMealPopup.css";
import "../../App.css";

const RemoveMealPopup = ({ setIsDelete, onConfirm, mealId, mealTitle }) => {
  return (
    <PopupBox>
      <SlExclamation className="exclamation-icon" />
      <h3 className="confirm-message">
        Are you sure you want to <span className="delete-word">delete </span>
        this Recipe !
      </h3>
      <p className="meal-title">{mealTitle}</p>
      <div className="buttons-container">
        <button
          className="btn delete-btn"
          onClick={() => {
            onConfirm(mealId);
          }}
        >
          Yes I am sure
        </button>
        <button
          className="btn cancel-btn"
          onClick={() => {
            setIsDelete(false);
          }}
        >
          Cancel
        </button>
      </div>
    </PopupBox>
  );
};

export default RemoveMealPopup;
