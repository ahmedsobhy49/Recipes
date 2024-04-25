import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Meals from "./Components/Meal-s/Meals";
import Footer from "./Components/Footer/Footer";
import MealDetails from "./Components/MealDetails/MealDetails";
import AddNewMeal from "./Components/AddNewMeal/AddNewMeal";
import { Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "./CustomHooks/useLocalStorage";
import { useState } from "react";
import { toast } from "react-toastify";
const mealsToEat = [];
let meaToEatlPrice = 0;
function App() {
  const [mealsState, setMealsState] = useLocalStorage("meals");
  const [numOfMeals, setNumOfMeals] = useState(0);

  function handleAddNewMeal(
    mealName,
    mealPrice,
    mealThumb,
    ingredients,
    mealPictures
  ) {
    const newMeal = {
      idMeal: uuidv4(),
      strMeal: mealName,
      price: mealPrice,
      strMealThumb: mealThumb,
      ingredients: ingredients,
      mealPictures: mealPictures,
    };
    setMealsState([...mealsState, newMeal]);
  }

  function handleEatToday(id, price) {
    if (!mealsToEat.includes(id)) {
      mealsToEat.push(id);
      setNumOfMeals((prev) => prev + 1);
      meaToEatlPrice += Number(price);
      toast.success("Happy Meal");
    }
  }

  function handleUpdateMeal(
    idMeal,
    mealName,
    mealPrice,
    mealThumb,
    ingredients,
    mealPictures
  ) {
    const updatedMealIndex = mealsState.findIndex(
      (meal) => meal.idMeal === idMeal
    );

    const updatedMeal = {
      ...mealsState[updatedMealIndex],
      strMeal: mealName,
      price: mealPrice,
      strMealThumb: mealThumb,
      ingredients: ingredients,
      mealPictures: mealPictures,
    };

    const updatedMealsState = [...mealsState];
    updatedMealsState[updatedMealIndex] = updatedMeal;
    setMealsState(updatedMealsState);
  }

  return (
    <>
      <Navbar numOfMeals={numOfMeals} meaToEatlPrice={meaToEatlPrice} />
      <div className="app-container">
        <Routes>
          <Route
            path={`/meal-details/:mealtitle`}
            element={<MealDetails handleEatToday={handleEatToday} />}
          />
          <Route
            path="/add-new-meal"
            element={<AddNewMeal onAdd={handleAddNewMeal} />}
          />
          <Route
            path="*"
            element={
              <Meals mealsState={mealsState} setMealsState={setMealsState} />
            }
          />
          <Route
            path="/update-meal/:mealtitle"
            element={<AddNewMeal onUpdate={handleUpdateMeal} />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
