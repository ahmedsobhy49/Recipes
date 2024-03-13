/* eslint-disable react/prop-types */
import "./Meal.css";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Meal = ({
  meal,
  onDelete,
  // isDelete,
  // setIsDelete,
  // setIsCancel,
  // setIsConfirm,
}) => {
  const { idMeal, strMealThumb, strMeal, price } = meal;
  return (
    <div className="meal-container">
      <div className="meal-image-container">
        <img src={strMealThumb} alt="meal" />
      </div>
      <div className="meal-details-container">
        <h3 className="meal-title">{strMeal}</h3>
        <p className="meal-price">{price}$</p>
      </div>
      <div className="meal-layer">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="search-icon"
          type="button"
        />
        <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
        <FontAwesomeIcon
          icon={faXmark}
          className="delete-icon"
          onClick={() => {
            onDelete(idMeal);
          }}
        />
      </div>
    </div>
  );
};

export default Meal;
