// import { useLocation } from "react-router-dom";
// import { useState, useEffect, useRef } from "react";
// import { v4 as uuidv4 } from "uuid";

// const UpdateMeal = ({ mealsState, setMealsState }) => {
//   const location = useLocation();
//   let meal = location.state;
//   const [mealName, setMealName] = useState(meal.strMeal);
//   const [mealPrice, setMealPrice] = useState(meal.price);
//   const [mealThumb, setMealThumb] = useState(meal.strMealThumb);
//   const [ingInputs, setIngInputs] = useState([{ id: 1, ingredient: "" }]);
//   const [imgInputs, setImgInputs] = useState([{ id: 1, mealPicture: "" }]);
//   const addIngredientButton = useRef(null);
//   const addIngredientInput = useRef(null);
//   const mealNameInput = useRef(null);
//   const addImgInput = useRef(null);

//   function handlaUpdate() {
//     meal = {
//       ...meal,
//       strMeal: mealName,
//       price: mealPrice,
//       strMealThumb: mealThumb,
//       ingredients: ingInputs,
//       mealPictures: imgInputs,
//     };
//     setMealsState(...mealsState);
//     console.log(meal);
//     console.log(mealsState);
//   }

//   //   useEffect(() => {
//   //     mealNameInput.current.focus();
//   //   }, []);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);

//   const handleIngChange = (id, ingredient) => {
//     const updatedIngInputs = ingInputs.map((input) => {
//       if (input.id === id) {
//         return { ...input, id, ingredient };
//       }
//       return input;
//     });
//     setIngInputs(updatedIngInputs);
//   };

//   const handleImgChange = (id, mealPicture) => {
//     const updatedImgInputs = imgInputs.map((input) => {
//       if (input.id === id) {
//         return { ...input, id, mealPicture };
//       }
//       return input;
//     });
//     setImgInputs(updatedImgInputs);
//   };

//   function handleAddNewIngredient(e) {
//     e.preventDefault();
//     const newIngInput = {
//       id: ingInputs.length + 1,
//       ingredient: "",
//     };
//     setIngInputs([...ingInputs, newIngInput]);
//   }

//   function handleAddNewImg(e) {
//     e.preventDefault();
//     const newImgInput = {
//       id: imgInputs.length + 1,
//       mealPicture: "",
//     };
//     setImgInputs([...imgInputs, newImgInput]);
//   }

//   useEffect(() => {
//     if (mealNameInput.current.value !== "") addIngredientInput.current.focus();
//   }, [ingInputs]);

//   useEffect(() => {
//     if (mealNameInput.current.value !== "") addImgInput.current.focus();
//   }, [imgInputs]);

//   return (
//     <div className="add-new-meal-container">
//       {/* left-side */}
//       <div className="addnewmeal-left-side">
//         <h3>Add New Meal</h3>
//         <div className="input-container">
//           <label htmlFor="meal-name">Meal Name</label>
//           <input
//             type="text"
//             ref={mealNameInput}
//             id="meal-name"
//             value={mealName}
//             onChange={(e) => setMealName(e.target.value)}
//           />
//         </div>
//         <div className="input-container">
//           <label htmlFor="meal-price">Price</label>
//           <input
//             type="text"
//             id="meal-price"
//             value={mealPrice}
//             onChange={(e) => setMealPrice(e.target.value)}
//           />
//         </div>

//         <div className="input-container">
//           <label htmlFor="meal-thumb">Meal Thumb</label>
//           <input
//             type="text"
//             id="meal-thumb"
//             value={mealThumb}
//             onChange={(e) => {
//               e.preventDefault();
//               setMealThumb(e.target.value);
//             }}
//           />
//         </div>
//         {/* add images */}
//         <div>
//           <div className="input-container add-bg ">
//             <label htmlFor="meal-images">Meal Images</label>
//             {imgInputs.map((input, index) => (
//               <input
//                 id="meal-image"
//                 key={index}
//                 ref={addImgInput}
//                 type="text"
//                 onChange={(e) => {
//                   handleImgChange(input.id, e.target.value);
//                   e.preventDefault();
//                 }}
//               />
//             ))}
//           </div>

//           <button className="add-input-btn" onClick={handleAddNewImg}>
//             +
//           </button>
//         </div>

//         {/* add ingredients */}
//         <div>
//           <div className="input-container add-bg">
//             <label htmlFor="meal-ingredient">Meal Ingredients</label>
//             {ingInputs.map((input, index) => (
//               <input
//                 id="meal-ingredient"
//                 key={index}
//                 ref={addIngredientInput}
//                 type="text"
//                 value={input.value}
//                 onChange={(e) => {
//                   handleIngChange(input.id, e.target.value);
//                   e.preventDefault();
//                 }}
//               />
//             ))}
//           </div>
//           <button
//             className="add-input-btn"
//             ref={addIngredientButton}
//             onClick={handleAddNewIngredient}
//           >
//             +
//           </button>
//         </div>
//       </div>
//       <div className="addnewmeal-middle-side">
//         <h3>Ingredients (Preview)</h3>
//         <ul>
//           {meal.ingredients.map((input) => {
//             return <li key={input.id}>{input.ingredient}</li>;
//           })}
//         </ul>
//       </div>
//       <div className="addnewmeal-right-side">
//         <button className="add-new-meal-btn" onClick={handlaUpdate}>
//           Update
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UpdateMeal;
//---------------------
// import { useLocation, useNavigate } from "react-router-dom";
// import { useState, useEffect, useRef } from "react";

// const UpdateMeal = ({ mealsState, setMealsState }) => {
//   const location = useLocation();
//   let meal = location.state;
//   const [mealName, setMealName] = useState("");
//   const [mealPrice, setMealPrice] = useState("");
//   const [mealThumb, setMealThumb] = useState("");
//   const [ingInputs, setIngInputs] = useState([{ id: 1, ingredient: "" }]);
//   const [imgInputs, setImgInputs] = useState([{ id: 1, mealPicture: "" }]);
//   const addIngredientButton = useRef(null);
//   const addIngredientInput = useRef(null);
//   const mealNameInput = useRef(null);
//   const addImgInput = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     mealNameInput.current.focus();
//   }, []);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);

//   const handleIngChange = (id, ingredient) => {
//     const updatedIngInputs = ingInputs.map((input) => {
//       if (input.id === id) {
//         return { ...input, id, ingredient };
//       }
//       return input;
//     });
//     setIngInputs(updatedIngInputs);
//   };

//   const handleImgChange = (id, mealPicture) => {
//     const updatedImgInputs = imgInputs.map((input) => {
//       if (input.id === id) {
//         return { ...input, id, mealPicture };
//       }
//       return input;
//     });
//     setImgInputs(updatedImgInputs);
//   };

//   function handleAddNewIngredient(e) {
//     e.preventDefault();
//     const newIngInput = {
//       id: ingInputs.length + 1,
//       ingredient: "",
//     };
//     setIngInputs([...ingInputs, newIngInput]);
//   }

//   function handleAddNewImg(e) {
//     e.preventDefault();
//     const newImgInput = {
//       id: imgInputs.length + 1,
//       mealPicture: "",
//     };
//     setImgInputs([...imgInputs, newImgInput]);
//   }

//   useEffect(() => {
//     if (mealNameInput.current.value !== "") addIngredientInput.current.focus();
//   }, [ingInputs]);

//   useEffect(() => {
//     if (mealNameInput.current.value !== "") addImgInput.current.focus();
//   }, [imgInputs]);
//   return (
//     <div className="add-new-meal-container">
//       {/* left-side */}
//       <div className="addnewmeal-left-side">
//         <h3>Add New Meal</h3>
//         <div className="input-container">
//           <label htmlFor="meal-name">Meal Name</label>
//           <input
//             type="text"
//             ref={mealNameInput}
//             id="meal-name"
//             value={meal.strMeal}
//             onChange={(e) => {
//               setMealName(e.target.value);
//               e.preventDefault();
//             }}
//           />
//         </div>
//         <div className="input-container">
//           <label htmlFor="meal-price">Price</label>
//           <input
//             type="text"
//             id="meal-price"
//             value={mealPrice}
//             onChange={(e) => {
//               setMealPrice(e.target.value);
//               e.preventDefault();
//             }}
//           />
//         </div>
//         <div className="input-container">
//           <label htmlFor="meal-thumb">Meal Thumb</label>
//           <input
//             type="text"
//             id="meal-thumb"
//             value={mealThumb}
//             onChange={(e) => {
//               setMealThumb(e.target.value);
//               e.preventDefault();
//             }}
//           />
//         </div>
//         {/* add images */}
//         <div>
//           <div className="input-container add-bg ">
//             <label htmlFor="meal-images">Meal Images</label>
//             {imgInputs.map((input, index) => (
//               <input
//                 id="meal-image"
//                 key={index}
//                 ref={addImgInput}
//                 type="text"
//                 onChange={(e) => {
//                   handleImgChange(input.id, e.target.value);
//                   e.preventDefault();
//                 }}
//               />
//             ))}
//           </div>

//           <button className="add-input-btn" onClick={handleAddNewImg}>
//             +
//           </button>
//         </div>

//         {/* add ingredients */}
//         <div>
//           <div className="input-container add-bg">
//             <label htmlFor="meal-ingredient">Meal Ingredients</label>
//             {ingInputs.map((input, index) => (
//               <input
//                 id="meal-ingredient"
//                 key={index}
//                 ref={addIngredientInput}
//                 type="text"
//                 value={input.value}
//                 onChange={(e) => {
//                   handleIngChange(input.id, e.target.value);
//                   e.preventDefault();
//                 }}
//               />
//             ))}
//           </div>

//           <button
//             className="add-input-btn"
//             ref={addIngredientButton}
//             onClick={handleAddNewIngredient}
//           >
//             +
//           </button>
//         </div>
//       </div>
//       <div className="addnewmeal-middle-side">
//         <h3>Ingredients (Preview)</h3>
//         <ul>
//           {ingInputs.map((input) => {
//             if (input.ingredient !== "") {
//               return <li key={input.id}>{input.ingredient}</li>;
//             }
//           })}
//         </ul>
//       </div>
//       <div className="addnewmeal-right-side">
//         <button
//           className="add-new-meal-btn"
//           onClick={() => {
//             onAdd(mealName, mealPrice, mealThumb, ingInputs, imgInputs);
//             navigate("/");
//           }}
//         >
//           Update
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UpdateMeal;
