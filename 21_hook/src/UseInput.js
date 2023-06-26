import { useState } from "react";

const useInput = (init, vali) => {
  //init: "KDT7."
  //vali: value.length < 10
  const [value, setValue] = useState(init);
  //console.log("vali", vali);
  const valiFunc = (event) => {
    // console.log(event.target.value);
    // console.log(vali(value));
    if (vali(value)) {
      setValue(event.target.value);
    } else {
      setValue(init);
    }
  };

  return { value, valiFunc };
};

const UseInputComp = () => {
  const maxLength = (value) => value.length < 10;
  //초기화 값과 검사하려는 값 두개 인자 필요
  const input = useInput("KDT7.", maxLength);
  //console.log(input);

  return (
    <>
      <h1>Hello World</h1>
      <input
        placeholder="이름을 하세요"
        value={input.value}
        onChange={input.valiFunc}
      />
    </>
  );
};

export default UseInputComp;
