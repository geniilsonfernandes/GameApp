import React from "react";
import thumb from "./ThumbnailSlider.module.css";
const ThumbnailSlider = (props) => {
  const { games, index } = props;

  console.log(games);
  return (
    <div className={thumb.container}>
      {/* game 1 */}
     
      {/* game 2 */}
      <div className={thumb.game}>
        <h3></h3>
        <div className={thumb.gamePhoto}></div>
      </div>
      {/* game 2 */}
      {/* game 1 */}
    </div>
  );
};

export default ThumbnailSlider;
