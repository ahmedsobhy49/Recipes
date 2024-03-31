/* eslint-disable react/prop-types */
import "./Meal.css";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import RemoveMealPopup from "../RemoveMealPopup/RemoveMealPopup";
import { useState } from "react";
import { Link } from "react-router-dom";

const Meal = ({ meal, setMealsState, mealsState }) => {
  const { idMeal, strMealThumb, strMeal, price } = meal;
  const [isDelete, setIsDelete] = useState(false);

  function handleDelete() {
    setIsDelete(true);
  }

  function handleConfirmDelete(id) {
    const newMealsState = mealsState.filter((meal) => meal.idMeal !== id);
    setMealsState(newMealsState);
    setIsDelete(false);
    console.log(newMealsState);
  }
  return (
    <>
      <div className="meal-container">
        <div className="meal-image-container">
          <img src={strMealThumb} alt="meal" />
        </div>
        <div className="meal-details-container">
          <h3 className="meal-title">{strMeal}</h3>
          <p className="meal-price">{price}$</p>
        </div>
        <div className="meal-layer">
          <Link to={`/meal-details/${strMeal}`} state={meal}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          </Link>
          <Link to={`/update-meal/${strMeal}`} state={meal}>
            <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
          </Link>
          <FontAwesomeIcon
            icon={faXmark}
            className="delete-icon"
            onClick={() => {
              handleDelete(idMeal);
            }}
          />
        </div>
      </div>
      {isDelete ? (
        <RemoveMealPopup
          setIsDelete={setIsDelete}
          onConfirm={handleConfirmDelete}
          mealId={meal.idMeal}
          mealTitle={meal.strMeal}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Meal;
