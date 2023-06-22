import { useState } from "react";

function TextComponet() {
  const [message, setMessage] = useState("");

  const Enter = () => {
    setMessage("입장하셨습니다");
  };
  const Leave = () => {
    setMessage("퇴장하셨습니다.");
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={Enter}>입장</button>
      <button onClick={Leave}>퇴장</button>
    </div>
  );
}

export default TextComponet;
