/* eslint-disable react/prop-types */

export default function IngredientsPreview({ ingInputs }) {
  return (
    <div className="addnewmeal-middle-side">
      <h3>Ingredients (Preview)</h3>
      <ul>
        {ingInputs.map(
          (input) =>
            input.ingredient && <li key={input.id}>{input.ingredient}</li>
        )}
      </ul>
    </div>
  );
}
