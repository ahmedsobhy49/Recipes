import "./AddNewMeal.css";
import "../../App.css";

const AddNewMeal = () => {
  return (
    <div className="add-new-meal-container">
      {/* left-side */}
      <div className="left-side">
        <h3>Add New Meal</h3>
        <div className="input-container">
          <label htmlFor="meal-name">Meal Name</label>
          <input type="text" id="meal-name" />
        </div>
        <div className="input-container">
          <label htmlFor="meal-price">Price</label>
          <input type="text" id="meal-price" />
        </div>

        <div className="input-container">
          <label htmlFor="meal-thumb">Meal Thumb</label>
          <input type="text" id="meal-thumb" />
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
            <input type="text" />
          </div>
          <button className="add-input-btn">+</button>
        </div>
      </div>
      <div className="middle-side">
        <h3>Ingredients (Preview)</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
      <div className="right-side"></div>
    </div>
  );
};

export default AddNewMeal;
