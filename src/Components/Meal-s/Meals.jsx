/* eslint-disable react/prop-types */
import Meal from "../Meal/Meal";
import "./Meals.css";
import "../../App.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Meals = ({ mealsState, setMealsState }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="meals-container">
        {mealsState.map((meal) => {
          return (
            <Meal
              key={meal.idMeal}
              meal={meal}
              setMealsState={setMealsState}
              mealsState={mealsState}
            />
          );
        })}
      </div>
    </>
  );
};

export default Meals;
