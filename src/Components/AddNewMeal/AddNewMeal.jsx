/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AllMealsInputs from "./AllMealsInputs";
import IngredientsPreview from "./IngredientsPreview";
import AddUpdateMealButton from "./AddUpdateMealButton";
import "./AddNewMeal.css";
import "../../App.css";

const AddNewMeal = ({ onAdd, onUpdate }) => {
  const location = useLocation();
  const mealNameInput = useRef(null);
  const meal = location.state || null;

  const [ingInputs, setIngInputs] = useState(
    meal ? meal.ingredients : [{ id: 1, ingredient: "", cost: "" }]
  );

  const [imgInputs, setImgInputs] = useState(
    meal ? meal.mealPictures : [{ id: 1, mealPicture: "" }]
  );

  const [mealName, setMealName] = useState(meal ? meal.strMeal : "");

  const [mealThumb, setMealThumb] = useState(meal ? meal.strMealThumb : "");

  useEffect(() => {
    mealNameInput.current.focus();
    if (!meal) {
      setMealName("");
      setMealThumb("");
      setIngInputs([{ id: 1, ingredient: "", cost: "" }]);
      setImgInputs([{ id: 1, mealPicture: "" }]);
    }
  }, [meal]);

  useEffect(() => {
    mealNameInput.current.focus();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const mealPrice = ingInputs.reduce((acc, curr) => {
    return Number(curr.cost) + acc;
  }, 0);

  return (
    <div className="add-new-meal-container">
      <AllMealsInputs
        meal={meal}
        mealName={mealName}
        setMealName={setMealName}
        imgInputs={imgInputs}
        setImgInputs={setImgInputs}
        ingInputs={ingInputs}
        setIngInputs={setIngInputs}
        mealThumb={mealThumb}
        setMealThumb={setMealThumb}
        mealNameInput={mealNameInput}
      />

      <IngredientsPreview ingInputs={ingInputs} />

      <AddUpdateMealButton
        meal={meal}
        mealName={mealName}
        onAdd={onAdd}
        onUpdate={onUpdate}
        ingInputs={ingInputs}
        mealPrice={mealPrice}
        mealThumb={mealThumb}
        imgInputs={imgInputs}
      />
    </div>
  );
};

export default AddNewMeal;
