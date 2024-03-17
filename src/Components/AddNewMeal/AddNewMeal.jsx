/* eslint-disable react/prop-types */
import "./AddNewMeal.css";
import "../../App.css";
import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddNewMeal = ({ onAdd }) => {
  const [mealName, setMealName] = useState("");
  const [mealPrice, setMealPrice] = useState("");
  const [mealThumb, setMealThumb] = useState("");
  const [ingInputs, setIngInputs] = useState([{ id: 1, ingredient: "" }]);
  const [imgFiles, setImgFiles] = useState([]);
  const addIngredientButton = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleIngChange = (id, ingredient) => {
    const updatedIngInputs = ingInputs.map((input) => {
      if (input.id === id) {
        return { ...input, ingredient };
      }
      return input;
    });
    setIngInputs(updatedIngInputs);
  };

  function handleAddNewIngredient(e) {
    e.preventDefault();
    const newIngInput = {
      id: ingInputs.length + 1,
      ingredient: "",
    };
    setIngInputs([...ingInputs, newIngInput]);
  }

  const handleImgChange = (e, id) => {
    const files = e.target.files;
    setImgFiles([...imgFiles, { id, file: files[0] }]);
  };

  function handleAddNewMealPicture(e) {
    e.preventDefault();
    const newInput = {
      id: imgFiles.length + 1,
      value: "",
    };
    setImgFiles([...imgFiles, newInput]);
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
          <div className="input-containe add-bg ">
            {imgFiles.map((input) => (
              <input
                key={input.id}
                type="file"
                onChange={(e) => handleImgChange(e, input.id)}
              />
            ))}
          </div>
          <button className="add-input-btn" onClick={handleAddNewMealPicture}>
            +
          </button>
        </div>

        {/* add ingredients */}
        <div>
          <div className="input-container add-bg">
            {ingInputs.map((input) => (
              <input
                key={input.id}
                type="text"
                value={input.value}
                onChange={(e) => {
                  handleIngChange(input.id, e.target.value);
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
            onAdd(mealName, mealPrice, mealThumb, ingInputs, imgFiles);
            navigate("/");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddNewMeal;
