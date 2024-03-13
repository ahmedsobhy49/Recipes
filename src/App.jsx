import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Meals from "./Components/Meal-s/Meals";
import Footer from "./Components/Footer/Footer";
import { meals } from "./MealsData";
import { useState } from "react";
import RemoveMealPopup from "./Components/RemoveMealPopup/RemoveMealPopup";
import MealDetails from "./Components/MealDetails/MealDetails";
function App() {
  const [mealsState, setMealsState] = useState(meals);
  const [isDelete, setIsDelete] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  return (
    <>
      <div className="app-container">
        <Navbar />
        <Meals
          mealsState={mealsState}
          setMealsState={setMealsState}
          isDelete={isDelete}
          setIsDelete={setIsDelete}
          isCancel={isCancel}
          setIsCancel={setIsCancel}
          isConfirm={isConfirm}
          setIsConfirm={setIsConfirm}
        />
        <Footer />
      </div>
      {isDelete && !isCancel && !isConfirm ? (
        <RemoveMealPopup
          isCancel={isCancel}
          setIsCancel={setIsCancel}
          isConfirm={isConfirm}
          setIsConfirm={setIsConfirm}
          isDelete={isDelete}
          setIsDelete={setIsDelete}
        />
      ) : (
        ""
      )}
    </>

    // <div className="app-container">
    //   <MealDetails mealsState={mealsState} />
    // </div>
  );
}

export default App;
