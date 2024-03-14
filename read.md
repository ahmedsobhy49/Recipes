      {/* left-side */}
      {/* <div className="image-container">
          <img
            src={
              "https://www.sidechef.com/recipe/1cd15944-9411-4a9f-9cc9-18cb2050041e.jpg"
            }
            alt="ay haga"
          />
        </div>
        <div className="small-imgs-container">
          <button className="btn-img active">
            <img
              src={
                "https://www.sidechef.com/recipe/1cd15944-9411-4a9f-9cc9-18cb2050041e.jpg"
              }
              alt="1"
              className="small-img"
            />
          </button>
          <button className="btn-img">
            <img
              src={
                "https://www.sidechef.com/recipe/1cd15944-9411-4a9f-9cc9-18cb2050041e.jpg"
              }
              alt="2"
              className="small-img"
            />
          </button>
        </div> */}

.meal-details-container {
height: 600px;
}

.right-side-s {
display: flex;
flex-direction: column;
width: 45%;
overflow: scroll;
background-color: antiquewhite;
/_ height: 100%; _/
}

.right-side ul {
display: flex;
flex-direction: column;
}

.f {
display: flex;
justify-content: space-between;
align-items: stretch;
}

.c {
width: 45%;
background-color: aqua;
}
///////
.meal-details-contaienr {
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: space-between;
align-items: stretch;
/_ background-color: beige; _/
/_ padding: 1rem 0; _/
margin-top: 6rem;
}

.meal-details-right-side {
/_ box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; _/

display: flex;
flex-direction: column;
gap: 2rem;
width: 100%;
overflow: scroll;
/_ background-color: rgb(248, 244, 239); _/
justify-self: end;
padding: 2rem 10rem;
height: 80%;
}

.meal-details-right-side h2 {
font-size: 2.3rem;
}

.meal-details-right-side ul {
display: flex;
flex-direction: column;
gap: 3rem;
padding: 2rem;
list-style-type: none;
}

.ingredients-list {
display: flex;
flex-direction: column;
align-items: flex-start;
overflow: scroll;
gap: 3rem;
}

.ingredients-list li {
width: 100%;
}

// import "./MealDetails.css";
// import "../../App.css";
// import { Carousel } from "react-responsive-carousel";
// const MealDetails = () => {
// return (
// <div className="meal-details-contaienr">
// <div className="carousel-x">
// <Carousel width={"100%"} className="">
// <div>
// <img
// src={
// "https://www.sidechef.com/recipe/4f2677a7-68e8-472f-b471-8878e9cff811.jpg"
// }
// />
// </div>
// <div>
// <img
// src={
// "https://www.sidechef.com/recipe/4f2677a7-68e8-472f-b471-8878e9cff811.jpg"
// }
// />
// </div>
// <div>
// <img
// src={
// "https://www.sidechef.com/recipe/4f2677a7-68e8-472f-b471-8878e9cff811.jpg"
// }
// />
// </div>
// </Carousel>
// </div>

// {/_ right-side _/}
// <div className="meal-details-right-side">
// <h2>Meal title ingredients</h2>
// <ul className="ingredients-list">
// <li>Lorem ipsum dolor sit amet ahmed ahmed</li>
// <li>Lorem ipsum dolor sit amet ahmed ahmed</li>
// <li>Lorem ipsum dolor sit amet ahmed ahmed</li>
// <li>Lorem ipsum dolor sit amet ahmed ahmed</li>
// <li>Lorem ipsum dolor sit amet ahmed ahmed</li>
// <li>Lorem ipsum dolor sit amet ahmed ahmed</li>
// <li>Lorem ipsum dolor sit amet ahmed ahmed</li>
// <li>Lorem ipsum dolor sit amet ahmed ahmed</li>
// </ul>
// </div>
// </div>
// );
// };

// export default MealDetails;

////////////////////
add new meal component

// useEffect(function () {
// function handleAddNewIngredient() {
// console.log(ingredientsInputsContiner);
// ingredientsInputsContiner.current.insertAdjacentHTML(
// "beforeend",
// `<input type="text" />`
// );
// }
// if (addIngredientButton.current) {
// addIngredientButton.current.addEventListener(
// "click",
// handleAddNewIngredient
// );
// }

// return () => {
// if (addIngredientButton.current) {
// addIngredientButton.current.removeEventListener(
// "click",
// handleAddNewIngredient
// );
// }
// };
// }, []);

// useEffect(function () {
// function handleAddNewIngredient() {
// console.log(ingredientsInputsContiner);
// ingredientsInputsContiner.current.insertAdjacentHTML(
// "beforeend",
// `<input type="text" />`
// );
// }
// addIngredientButton.current.addEventListener(
// "click",
// handleAddNewIngredient
// );
// return () => {
// addIngredientButton.current.removeEventListener(
// "click",
// handleAddNewIngredient
// );
// };
// }, []);
