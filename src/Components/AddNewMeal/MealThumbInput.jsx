/* eslint-disable react/prop-types */

const MealThumb = ({ mealThumb, setMealThumb }) => {
  return (
    <div className="input-container">
      <label htmlFor="meal-thumb">Meal Thumb</label>
      <input
        type="text"
        id="meal-thumb"
        value={mealThumb}
        onChange={(e) => setMealThumb(e.target.value)}
      />
    </div>
  );
};

export default MealThumb;
