import { useState } from "react";

function P49() {
  const [message, setMessage] = useState("검정색");
  const [color, setColor] = useState({ color: "black" });

  const Red = () => {
    {
      setMessage("빨간색");
      setColor({ color: "red" });
    }
  };
  const Blue = () => {
    {
      setMessage("파란색");
      setColor({ color: "blue" });
    }
  };

  return (
    <div>
      <h1 style={color}>{message} 글씨</h1>
      <button onClick={Red}>빨간색</button>
      <button onClick={Blue}>파란색</button>
    </div>
  );
}

export default P49;
