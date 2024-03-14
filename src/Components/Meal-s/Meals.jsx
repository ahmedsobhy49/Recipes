/* eslint-disable react/prop-types */

import Meal from "../Meal/Meal";
import "./Meals.css";
import "../../App.css";

const Meals = ({ mealsState, setMealsState }) => {
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

/* eslint-disable react/prop-types */

// import Meal from "../Meal/Meal";
// import "./Meals.css";
// import "../../App.css";
// import { Route, Routes } from "react-router-dom";
// import MealDetails from "../MealDetails/MealDetails";

// const Meals = ({ mealsState, setMealsState }) => {
//   return (
//     <>
//       <div className="meals-container">
//         {mealsState.map((meal) => {
//           return (
//             <>
//               <Meal
//                 key={meal.idMeal}
//                 meal={meal}
//                 setMealsState={setMealsState}
//                 mealsState={mealsState}
//               />
//               <Routes>
//                 <Route path="/details" element={<MealDetails meal={meal} />} />
//               </Routes>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Meals;
