import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Meals from "./Components/Meal-s/Meals";
import Footer from "./Components/Footer/Footer";
import { meals } from "./MealsData";
import { useState } from "react";

function App() {
  const [mealsState, setMealsState] = useState(meals);

  return (
    <>
      <div className="app-container">
        <Navbar />
        <Meals mealsState={mealsState} setMealsState={setMealsState} />
        <Footer />
      </div>
    </>
  );
}

export default App;
