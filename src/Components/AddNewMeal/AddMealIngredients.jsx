/* eslint-disable react/prop-types */
function AddMealIngredients({ ingInputs, setIngInputs }) {
  const handleAddNewIngredient = (e) => {
    e.preventDefault();
    const newIngInput = {
      id: ingInputs.length + 1,
      ingredient: "",
      cost: "",
    };
    setIngInputs([...ingInputs, newIngInput]);
  };

  const handleIngChange = (id, ingredient) => {
    const updatedIngInputs = ingInputs.map((input) =>
      input.id === id ? { ...input, ingredient } : input
    );
    setIngInputs(updatedIngInputs);
  };

  const handleCostChange = (id, cost) => {
    const updatedIngInputs = ingInputs.map((input) =>
      input.id === id ? { ...input, cost } : input
    );
    setIngInputs(updatedIngInputs);
  };

  return (
    <div>
      <div className="input-container add-bg">
        <label htmlFor="meal-ingredient">Meal Ingredients</label>
        {ingInputs.map((input) => (
          <div className="ing-and-cost-inputs-container" key={input.id}>
            <div className="ing-input-container">
              <input
                id={`meal-ingredient-${input.id}`}
                placeholder="ingredient"
                type="text"
                value={input.ingredient}
                onChange={(e) => handleIngChange(input.id, e.target.value)}
              />
            </div>
            <div className="cost-input-container">
              <input
                id={`meal-cost-${input.id}`}
                type="number"
                min={0}
                placeholder="cost"
                value={input.cost}
                onChange={(e) => handleCostChange(input.id, e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
      <button className="add-input-btn" onClick={handleAddNewIngredient}>
        +
      </button>
    </div>
  );
}

export default AddMealIngredients;
