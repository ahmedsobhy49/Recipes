/_ eslint-disable react/prop-types _/
import { useState } from "react";

function AddMealImages({ imgInputs, setImgInputs }) {
const [imagePreviewSrcs, setImagePreviewSrcs] = useState([]); //
const handleImgChange = (id, file) => {
const reader = new FileReader();
reader.onload = () => {
const imageUrl = reader.result;
const updatedImgInputs = imgInputs.map((input) =>
input.id === id ? { ...input, mealPicture: imageUrl } : input
);
setImgInputs(updatedImgInputs);

      const newImagePreviewSrcs = [...imagePreviewSrcs];
      newImagePreviewSrcs[id - 1] = imageUrl;
      setImagePreviewSrcs(newImagePreviewSrcs);
    };
    if (file) {
      reader.readAsDataURL(file);
    }

};

const handleAddNewImg = (e) => {
e.preventDefault();
const newImgInput = {
id: imgInputs.length + 1,
mealPicture: "",
};
setImgInputs([...imgInputs, newImgInput]);
setImagePreviewSrcs((prevSrcs) => [...prevSrcs, ""]);
};
//
return (
<div>
<div className="input-container add-bg ">
<label htmlFor="meal-images">Meal Images</label>
{imgInputs.map((input, index) => (
<div key={input.id} className="one-image-input">
<label
htmlFor={`meal-image-${input.id}`}
className="image-file-input-label" >
upload Image
</label>
<input
id={`meal-image-${input.id}`}
className="image-file-input"
type="file"
accept="image/\*"
onChange={(e) => handleImgChange(input.id, e.target.files[0])}
/>
{imagePreviewSrcs[index] && (
<img
className="image-preview"
src={imagePreviewSrcs[index]}
alt={`Image preview ${index + 1}`}
/>
)}
</div>
))}
</div>
<button className="add-input-btn" onClick={handleAddNewImg}> +
</button>
</div>
);
}

export default AddMealImages;
