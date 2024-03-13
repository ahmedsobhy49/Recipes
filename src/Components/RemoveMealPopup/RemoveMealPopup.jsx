/* eslint-disable react/prop-types */
import { SlExclamation } from "react-icons/sl";
import PopupBox from "../PobupBox/PopupBox";
import "./RemoveMealPopup.css";
import "../../App.css";

const RemoveMealPopup = ({
  // isCancel,
  // isDelete,
  // isConfirm,
  setIsCancel,
  setIsConfirm,
  setIsDelete,
}) => {
  return (
    <PopupBox>
      <SlExclamation className="exclamation-icon" />
      <h3 className="confirm-message">
        Are you sure you want to delete this Recipe !
      </h3>
      <p className="meal-title">Meal Title</p>
      <div className="buttons-container">
        <button
          className="btn delete-btn"
          onClick={() => {
            setIsConfirm(() => true);
            setIsDelete(false);
          }}
        >
          Yes I am sure
        </button>
        <button
          className="btn cancel-btn"
          onClick={() => {
            setIsCancel(() => true);
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
