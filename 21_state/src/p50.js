import { useState } from "react";

function P50() {
  const [message, setMessage] = useState("안녕하세요");

  const fade = () => {
    {
      setMessage("");
    }
  };

  return (
    <div>
      <button onClick={fade}>사라져라</button>
      <h1>{message}</h1>
    </div>
  );
}

export default P50;
