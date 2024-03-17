/* eslint-disable react/prop-types */
import "./MealDetails.css";
import "../../App.css";
import { Carousel } from "react-responsive-carousel";
import { useLocation } from "react-router-dom";
const MealDetails = () => {
  const location = useLocation();
  const meal = location.state;

  const images = meal.mealPictures;
  const ingredientsArr = meal.ingredients;
  return (
    <div className="meal-details-contaienr">
      <div className="meal-details-left-side">
        <Carousel infiniteLoop={true}>
          {images.map((image, index) => {
            const { mealPicture } = image;
            return (
              <div key={index}>
                <img src={mealPicture} />
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
            return (
              <li key={index}>
                {ingredient} <span className="ingredient-cost"> {cost}$</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MealDetails;
