import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Meals from "./Components/Meal-s/Meals";
import Footer from "./Components/Footer/Footer";
import { meals } from "./MealsData";
import { useState } from "react";
import MealDetails from "./Components/MealDetails/MealDetails";
import AddNewMeal from "./Components/AddNewMeal/AddNewMeal";
import { Route, Routes } from "react-router-dom";

function App() {
  const [mealsState, setMealsState] = useState(meals);

  function handleAddNewMeal(mealName, mealPriec, mealThumb) {
    const newMeal = {
      strMeal: mealName,
      price: mealPriec,
      strMealThumb: mealThumb,
    };
    setMealsState([...mealsState, newMeal]);
    console.log(mealsState);
  }

  return (
    <>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route
            path="/details"
            element={<MealDetails mealsState={mealsState} />}
          />
          {/* AddNewMeal COMP */}
          <Route
            path="/addnewmeal"
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
