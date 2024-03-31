/* eslint-disable react/prop-types */
import "./MealDetails.css";
import "../../App.css";
import { Carousel } from "react-responsive-carousel";
import { useLocation } from "react-router-dom";

const MealDetails = () => {
  const location = useLocation();
  const meal = location.state;
  const ingredientsArr = meal.ingredients;
  const imagesArr = meal.mealPictures;
  return (
    <div className="meal-details-contaienr">
      <div className="meal-details-left-side">
        <Carousel infiniteLoop={true}>
          {imagesArr.map((image, index) => {
            const { mealPicture } = image;
            return (
              <div key={index}>
                {mealPicture ? <img src={mealPicture} /> : ""}
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="meal-details-right-side">
        <h2>{meal.strMeal} ingredients</h2>
        <ul className="ingredients-list">
          {ingredientsArr?.map((ingredientObj, index) => {
            const { ingredient, cost } = ingredientObj;
            return ingredient ? (
              <li key={index}>
                {ingredient}
                {/* <span className="ingredient-cost"> {cost}$</span> */}
              </li>
            ) : (
              ""
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MealDetails;
