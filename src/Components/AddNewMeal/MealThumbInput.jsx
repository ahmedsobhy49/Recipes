/* eslint-disable react/prop-types */
import { useState } from "react";
const MealThumb = ({ mealThumb, setMealThumb }) => {
  const [imagePreviewSrcs, setImagePreviewSrcs] = useState(null);

  const handleImgChange = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const imageUrl = reader.result;
      setMealThumb(imageUrl);
      setImagePreviewSrcs(imageUrl);
      console.log(imageUrl);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="input-container">
      <label htmlFor="">Meal Thumb</label>
      <div className="meal-thumb-input-image-preview-container">
        <label htmlFor="meal-thumb" className="image-file-input-label">
          Upload Meal Thumb
        </label>
        <input
          type="file"
          id="meal-thumb"
          className="image-file-input"
          accept="image/*"
          onChange={(e) => handleImgChange(e.target.files[0])}
        />
        {imagePreviewSrcs && (
          <img src={imagePreviewSrcs} alt="" className="image-preview-thumb" />
        )}
      </div>
    </div>
  );
};

export default MealThumb;
