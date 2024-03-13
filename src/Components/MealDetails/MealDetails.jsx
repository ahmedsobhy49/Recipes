/* eslint-disable react/prop-types */
import "./MealDetails.css";
import "../../App.css";
import { Carousel } from "react-responsive-carousel";
const MealDetails = ({ mealsState }) => {
  const images = mealsState[0].mealPictures;
  const ingredientsObj = mealsState[0].ingredients;
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
        <h2>Meal title ingredients</h2>

        <ul className="ingredients-list">
          {ingredientsObj.map((ingredientObj, index) => {
            const { ingredient } = ingredientObj;
            return <li key={index}>{ingredient}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default MealDetails;
