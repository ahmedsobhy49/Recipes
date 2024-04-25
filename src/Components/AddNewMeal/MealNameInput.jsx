/* eslint-disable react/prop-types */

const MealName = ({ setMealName, mealName, mealNameInput }) => {
  return (
    <div className="input-container">
      <label htmlFor="meal-name">Meal Name</label>
      <input
        type="text"
        ref={mealNameInput}
        id="meal-name"
        value={mealName}
        onChange={(e) => setMealName(e.target.value)}
      />
    </div>
  );
};

export default MealName;
