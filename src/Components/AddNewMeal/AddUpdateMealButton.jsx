/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddUpdateMealButton({
  meal,
  mealName,
  ingInputs,
  mealPrice,
  mealThumb,
  imgInputs,
  onAdd,
  onUpdate,
}) {
  const navigate = useNavigate();

  return (
    <div className="addnewmeal-right-side">
      <button
        className="add-new-meal-btn"
        onClick={() => {
          if (!mealName) {
            toast.error("Please Provide Meal Name");
          } else if (!mealThumb) {
            toast.error("Please Provide Meal Thumb");
          } else if (!imgInputs[0].mealPicture) {
            toast.error("Please Provide at least One Meal Image");
          } else if (!ingInputs[0].ingredient) {
            toast.error("Please Provide Meal Ingredients");
          }
          if (
            meal === null &&
            mealName &&
            mealThumb &&
            imgInputs[0].mealPicture &&
            ingInputs[0].ingredient
          ) {
            onAdd(mealName, mealPrice, mealThumb, ingInputs, imgInputs);
            navigate("/");
            toast.success("meal added Successfully");
          }
          if (meal) {
            onUpdate(
              meal.idMeal,
              mealName,
              mealPrice,
              mealThumb,
              ingInputs,
              imgInputs
            );
            navigate("/");
            toast.success(`Meal ${mealName} Updated Successfully`);
          }
        }}
      >
        {location.pathname === "/add-new-meal" ? "Add" : "Update"}
      </button>
    </div>
  );
}
