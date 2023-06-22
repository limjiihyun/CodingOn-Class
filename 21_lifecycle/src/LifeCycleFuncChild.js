import { useEffect, useState } from "react";

function LifeCycleFuncChild(props) {
  const [text, setText] = useState("");

  //   useEffect(() => {
  //     //Mount 시점에 실행
  //     console.log("useEffect | Mount");

  //     //UnMount 시점에 실행
  //     return () => {
  //       console.log("useEffect | UnMount");
  //     };
  //   }, []);

  //   useEffect(() => {
  //     //Mount & Update 시점에 실행
  //     console.log("useEffect | Update");
  //   });
  //text가 변경될때
  useEffect(() => {
    console.log("Text | Update");
  }, [text]);

  return (
    <>
      <p>LifeCycleFuncChild {props.number} </p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
}

export default LifeCycleFuncChild;
