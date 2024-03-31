import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Meals from "./Components/Meal-s/Meals";
import Footer from "./Components/Footer/Footer";
import MealDetails from "./Components/MealDetails/MealDetails";
import AddNewMeal from "./Components/AddNewMeal/AddNewMeal";
import { Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "../useLocalStorage";

function App() {
  const [mealsState, setMealsState] = useLocalStorage("meals");

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

    if (updatedMealIndex !== -1) {
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
    } else {
      console.error("Meal not found");
    }
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
