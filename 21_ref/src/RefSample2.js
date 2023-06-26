import { useRef } from "react";

function RefSample2() {
  //1. useRef()를 사용하여 로컬 변수 만들기
  const idRef = useRef(1);

  const plusId = () => {
    idRef.current += 1;
    console.log(idRef.current);
  };

  return (
    <>
      <h1>{idRef.current}</h1>
      <button onClick={plusId}>plus ref</button>
    </>
  );
}

export default RefSample2;
