import React from "react";
import thumb from "./ThumbnailSlider.module.css";
const ThumbnailSlider = (props) => {

  return (
    <div className={thumb.container}>
    
      <div className={thumb.game}>
        <div className={thumb.gamePhoto}></div>
      </div>
     
    </div>
  );
};

export default ThumbnailSlider;
