import React from "react";
import "./App.css";

const Food1 = (props) => {
  return (
    <>
      <div>
        내가 좋아하는 음식은 <span className="red-text">{props.food}</span>
      </div>
    </>
  );
};

export default Food1;
