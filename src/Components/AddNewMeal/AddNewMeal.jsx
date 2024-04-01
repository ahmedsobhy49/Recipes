/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AddNewMeal.css";
import "../../App.css";

const IngredientInput = ({
  id,
  ingredient,
  cost,
  onIngredientChange,
  onCostChange,
}) => {
  return (
    <div className="ing-and-cost-inputs-container">
      <div className="ing-input-container">
        <input
          id={`meal-ingredient-${id}`}
          placeholder="ingredient"
          type="text"
          value={ingredient}
          onChange={(e) => onIngredientChange(id, e.target.value)}
        />
      </div>
      <div className="cost-input-container">
        <input
          id={`meal-cost-${id}`}
          type="text"
          placeholder="cost"
          value={cost}
          onChange={(e) => onCostChange(id, e.target.value)}
        />
      </div>
    </div>
  );
};

const ImageInput = ({ id, mealPicture, onImageChange }) => {
  return (
    <input
      id={`meal-image-${id}`}
      key={id}
      type="text"
      value={mealPicture}
      onChange={(e) => onImageChange(id, e.target.value)}
    />
  );
};

const AddNewMeal = ({ onAdd, onUpdate }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const meal = location.state || null;
  const [mealName, setMealName] = useState(meal ? meal.strMeal : "");
  const [mealThumb, setMealThumb] = useState(meal ? meal.strMealThumb : "");
  const [ingInputs, setIngInputs] = useState(
    meal ? meal.ingredients : [{ id: 1, ingredient: "", cost: "" }]
  );
  const [imgInputs, setImgInputs] = useState(
    meal ? meal.mealPictures : [{ id: 1, mealPicture: "" }]
  );

  const mealNameInput = useRef(null);

  useEffect(() => {
    mealNameInput.current.focus();
    if (!meal) {
      setMealName("");
      setMealThumb("");
      setIngInputs([{ id: 1, ingredient: "", cost: "" }]);
      setImgInputs([{ id: 1, mealPicture: "" }]);
    }
  }, [meal]);

  useEffect(() => {
    mealNameInput.current.focus();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleAddNewIngredient = (e) => {
    e.preventDefault();
    const newIngInput = {
      id: ingInputs.length + 1,
      ingredient: "",
      cost: "",
    };
    setIngInputs([...ingInputs, newIngInput]);
  };

  const handleAddNewImg = (e) => {
    e.preventDefault();
    const newImgInput = {
      id: imgInputs.length + 1,
      mealPicture: "",
    };
    setImgInputs([...imgInputs, newImgInput]);
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

  const handleImgChange = (id, mealPicture) => {
    const updatedImgInputs = imgInputs.map((input) =>
      input.id === id ? { ...input, mealPicture } : input
    );
    setImgInputs(updatedImgInputs);
  };

  const mealPrice = ingInputs.reduce((acc, curr) => {
    return Number(curr.cost) + acc;
  }, 0);

  return (
    <div className="add-new-meal-container">
      <div className="addnewmeal-left-side">
        <h3>{meal ? "Update Meal" : "Add New Meal"}</h3>
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
        <div className="input-container">
          <label htmlFor="meal-thumb">Meal Thumb</label>
          <input
            type="text"
            id="meal-thumb"
            value={mealThumb}
            onChange={(e) => setMealThumb(e.target.value)}
          />
        </div>

        <div className="input-container add-bg ">
          <label htmlFor="meal-images">Meal Images</label>
          {imgInputs.map((input) => (
            <ImageInput
              key={input.id}
              id={input.id}
              mealPicture={input.mealPicture}
              onImageChange={handleImgChange}
            />
          ))}
        </div>
        <button className="add-input-btn" onClick={handleAddNewImg}>
          +
        </button>

        <div className="input-container add-bg">
          <label htmlFor="meal-ingredient">Meal Ingredients</label>
          {ingInputs.map((input) => (
            <IngredientInput
              key={input.id}
              id={input.id}
              ingredient={input.ingredient}
              cost={input.cost}
              onIngredientChange={handleIngChange}
              onCostChange={handleCostChange}
            />
          ))}
        </div>
        <button className="add-input-btn" onClick={handleAddNewIngredient}>
          +
        </button>
      </div>

      <div className="addnewmeal-middle-side">
        <h3>Ingredients (Preview)</h3>
        <ul>
          {ingInputs.map(
            (input) =>
              input.ingredient && <li key={input.id}>{input.ingredient}</li>
          )}
        </ul>
      </div>

      <div className="addnewmeal-right-side">
        <button
          className="add-new-meal-btn"
          onClick={() => {
            if (meal === null && mealName && ingInputs) {
              onAdd(mealName, mealPrice, mealThumb, ingInputs, imgInputs);
            } else {
              onUpdate(
                meal.idMeal,
                mealName,
                mealPrice,
                mealThumb,
                ingInputs,
                imgInputs
              );
            }
            navigate("/");
          }}
        >
          {location.pathname === "/add-new-meal" ? "Add" : "Update"}
        </button>
      </div>
    </div>
  );
};

export default AddNewMeal;
