/* eslint-disable react/prop-types */
import MealName from "./MealNameInput";
import MealThumb from "./MealThumbInput";
import AddMealImages from "./AddMealImages";
import AddMealIngredients from "./AddMealIngredients";
const AllMealsInputs = ({
  meal,
  imgInputs,
  setImgInputs,
  ingInputs,
  setIngInputs,
  mealName,
  setMealName,
  mealThumb,
  setMealThumb,
  mealNameInput,
}) => {
  return (
    <div className="addnewmeal-left-side">
      <h3>{meal ? "Update Meal" : "Add New Meal"}</h3>
      <MealName
        mealName={mealName}
        setMealName={setMealName}
        mealNameInput={mealNameInput}
      />
      <MealThumb mealThumb={mealThumb} setMealThumb={setMealThumb} />
      <AddMealImages
        imgInputs={imgInputs}
        setImgInputs={setImgInputs}
        meal={meal}
      />
      <AddMealIngredients ingInputs={ingInputs} setIngInputs={setIngInputs} />
    </div>
  );
};

export default AllMealsInputs;
