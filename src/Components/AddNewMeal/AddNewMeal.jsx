/* eslint-disable react/prop-types */
import "./AddNewMeal.css";
import "../../App.css";
import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddNewMeal = ({ onAdd, onUpdate }) => {
  const location = useLocation();
  let meal = location.state;

  const [mealName, setMealName] = useState(meal === null ? "" : meal.strMeal);

  const [mealPrice, setMealPrice] = useState(meal === null ? "" : meal.price);
  const [mealThumb, setMealThumb] = useState(
    meal === null ? "" : meal.strMealThumb
  );
  const [ingInputs, setIngInputs] = useState(
    meal === null ? [{ id: 1, ingredient: "" }] : meal.ingredients
  );
  const [imgInputs, setImgInputs] = useState(
    meal === null ? [{ id: 1, mealPicture: "" }] : meal.mealPictures
  );
  const addIngredientButton = useRef(null);
  const addIngredientInput = useRef(null);
  const mealNameInput = useRef(null);
  const addImgInput = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    mealNameInput.current.focus();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  function handleAddNewIngredient(e) {
    e.preventDefault();
    const newIngInput = {
      id: ingInputs.length + 1,
      ingredient: "",
    };

    setIngInputs([...ingInputs, newIngInput]);
    if (ingInputs.ingredient) console.log(newIngInput);
  }

  const handleIngChange = (id, ingredient) => {
    const updatedIngInputs = ingInputs.map((input) => {
      if (input.id === id) {
        return { ...input, id, ingredient };
      }
      return input;
    });
    setIngInputs(updatedIngInputs);
  };

  function handleAddNewImg(e) {
    e.preventDefault();
    const newImgInput = {
      id: imgInputs.length + 1,
      mealPicture: "",
    };
    setImgInputs([...imgInputs, newImgInput]);
  }

  const handleImgChange = (id, mealPicture) => {
    const updatedImgInputs = imgInputs.map((input) => {
      if (input.id === id) {
        return { ...input, id, mealPicture };
      }
      return input;
    });

    setImgInputs(updatedImgInputs);
  };

  useEffect(() => {
    if (mealNameInput.current.value !== "" && meal === null)
      addIngredientInput.current.focus();
  }, [ingInputs, meal]);

  useEffect(() => {
    if (mealNameInput.current.value !== "" && meal === null)
      addImgInput.current.focus();
  }, [imgInputs, meal]);

  return (
    <div className="add-new-meal-container">
      {/* left-side */}
      <div className="addnewmeal-left-side">
        <h3>Add New Meal</h3>
        <div className="input-container">
          <label htmlFor="meal-name">Meal Name</label>
          <input
            type="text"
            ref={mealNameInput}
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
            value={mealPrice}
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
          <div className="input-container add-bg ">
            <label htmlFor="meal-images">Meal Images</label>
            {imgInputs.map((input, index) => (
              <input
                id="meal-image"
                key={index}
                ref={addImgInput}
                type="text"
                value={input.mealPicture}
                onChange={(e) => {
                  handleImgChange(input.id, e.target.value);
                  e.preventDefault();
                }}
              />
            ))}
          </div>

          <button className="add-input-btn" onClick={handleAddNewImg}>
            +
          </button>
        </div>

        {/* add ingredients */}
        <div>
          <div className="input-container add-bg">
            <label htmlFor="meal-ingredient">Meal Ingredients</label>
            {ingInputs.map((input, index) => {
              return (
                <input
                  key={index}
                  id="meal-ingredient"
                  ref={addIngredientInput}
                  type="text"
                  value={input.ingredient}
                  onChange={(e) => {
                    handleIngChange(input.id, e.target.value);
                    e.preventDefault();
                  }}
                />
              );
            })}
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
          {ingInputs.map((input) => {
            if (input.ingredient !== "") {
              return <li key={input.id}>{input.ingredient}</li>;
            }
          })}
        </ul>
      </div>
      <div className="addnewmeal-right-side">
        <button
          className="add-new-meal-btn"
          onClick={() => {
            if (meal === null && mealName && mealPrice && ingInputs) {
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
