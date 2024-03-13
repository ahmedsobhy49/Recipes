/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./Meals.css";
import "../../App.css";

const Meals = ({
  mealsState,
  setMealsState,
  isDelete,
  setIsDelete,
  isCancel,
  setIsCancel,
  setIsConfirm,
  isConfirm,
}) => {
  function handleDelete(id) {
    setIsDelete(true);
    if (isConfirm && !isCancel) {
      setMealsState((curr) => {
        const newMealsState = curr.filter((meal) => meal.idMeal !== id);
        return newMealsState;
      });
    }
    setIsCancel(false);
    setIsConfirm(false);
  }

  return (
    <div className="meals-container">
      {mealsState.map((meal) => {
        return (
          <Meal
            key={meal.idMeal}
            meal={meal}
            onDelete={handleDelete}
            isDelete={isDelete}
            setIsDelete={setIsDelete}
            setIsCancel={setIsCancel}
            setIsConfirm={setIsConfirm}
          />
        );
      })}
    </div>
  );
};

export default Meals;

// import image1 from "../../assets/Bang Bang Shrimp Pasta Recipe  - Food_com.jpeg";
// import image2 from "../../assets/Best Healthy Dinner Recipes for Weight Loss.jpeg";
// import image3 from "../../assets/Cajun Shrimp Alfredo -.jpeg";
// import image4 from "../../assets/Chicken and Cauliflower “Rice” Bowls are Quick and Perfect for_.jpeg";
// import image5 from "../../assets/Chicken Pasta of your dreams!.jpeg";
// import image6 from "../../assets/Crispy Chicken Fettuccine Alfredo.jpeg";
// import image7 from "../../assets/Easy Homemade Beef Stew.jpeg";
// import image8 from "../../assets/Gordon Ramsay hits out at fans who blasted his £19 English fry up.jpeg";
// import image9 from "../../assets/Teriyaki Salmon Sushi Bowl.jpeg";
