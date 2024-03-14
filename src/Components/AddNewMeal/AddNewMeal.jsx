/* eslint-disable react/prop-types */
import "./AddNewMeal.css";
import "../../App.css";
import { useEffect, useRef, useState } from "react";

const AddNewMeal = ({ onAdd }) => {
  const [mealName, setMealName] = useState("");
  const [mealPriec, setMealPrice] = useState("");
  const [mealThumb, setMealThumb] = useState("");
  const [inputs, setInputs] = useState([{ id: 1, value: "" }]);
  const addIngredientButton = useRef(null);

  const handleChange = (id, value) => {
    const updatedInputs = inputs.map((input) => {
      if (input.id === id) {
        return { ...input, value };
      }
      return input;
    });
    setInputs(updatedInputs);
  };

  function handleAddNewIngredient(e) {
    e.preventDefault();
    const newInput = {
      id: inputs.length + 1,
      value: "",
    };
    setInputs([...inputs, newInput]);
  }

  return (
    <div className="add-new-meal-container">
      {/* left-side */}
      <div className="addnewmeal-left-side">
        <h3>Add New Meal</h3>
        <div className="input-container">
          <label htmlFor="meal-name">Meal Name</label>
          <input
            type="text"
            id="meal-name"
            value={mealName}
            onChange={(e) => {
              setMealName(e.target.value);
              e.preventDefault();
            }}
          />
        </div>
        <div className="input-container">
          <label htmlFor="meal-price">Price</label>
          <input
            type="text"
            id="meal-price"
            value={mealPriec}
            onChange={(e) => {
              setMealPrice(e.target.value);
              e.preventDefault();
            }}
          />
        </div>

        <div className="input-container">
          <label htmlFor="meal-thumb">Meal Thumb</label>
          <input
            type="text"
            id="meal-thumb"
            value={mealThumb}
            onChange={(e) => {
              setMealThumb(e.target.value);
              e.preventDefault();
            }}
          />
        </div>
        {/* add images */}
        <div>
          <div className="input-containe add-bg">
            <input type="image" />
          </div>
          <button className="add-input-btn">+</button>
        </div>

        {/* add ingredients */}
        <div>
          <div className="input-container add-bg">
            {inputs.map((input) => (
              <input
                key={input.id}
                type="text"
                value={input.value}
                onChange={(e) => {
                  handleChange(input.id, e.target.value);
                  e.preventDefault();
                }}
              />
            ))}
          </div>
          <button
            className="add-input-btn"
            ref={addIngredientButton}
            onClick={handleAddNewIngredient}
          >
            +
          </button>
        </div>
      </div>
      <div className="addnewmeal-middle-side">
        <h3>Ingredients (Preview)</h3>
        <ul>
          {inputs.map((input) => {
            if (input.value !== "") {
              return <li key={input.id}>{input.value}</li>;
            }
          })}
        </ul>
      </div>
      <div className="addnewmeal-right-side">
        <button
          className="add-new-meal-btn"
          onClick={() => onAdd(mealName, mealPriec, mealThumb)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddNewMeal;
