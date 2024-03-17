import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Meals from "./Components/Meal-s/Meals";
import Footer from "./Components/Footer/Footer";
import { meals } from "./MealsData";
import { useState } from "react";
import MealDetails from "./Components/MealDetails/MealDetails";
import AddNewMeal from "./Components/AddNewMeal/AddNewMeal";
import { Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [mealsState, setMealsState] = useState(meals);

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
    console.log(mealsState);
  }

  return (
    <>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path={`/meal-details/:mealtitle`} element={<MealDetails />} />
          {/* AddNewMeal COMP */}
          <Route
            path="/add-new-meal"
            element={<AddNewMeal onAdd={handleAddNewMeal} />}
          />
          {/* Meals */}
          <Route
            path="*"
            element={
              <Meals mealsState={mealsState} setMealsState={setMealsState} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
