import { useState } from "react";

function FunctionComponent() {
  const [number, setNumber] = useState(0);
  const [hi, setHi] = useState("안녕하세요");

  console.log(number);

  return (
    <div>
      <h1>{number}</h1>
      <h3>{hi}</h3>
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <button onClick={() => setHi("반갑습니다")}>+1</button>
    </div>
  );
}

export default FunctionComponent;
