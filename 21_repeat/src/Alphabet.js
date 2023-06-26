import { useState } from "react";

function Alphabet() {
  const [list, setList] = useState([
    {
      id: 1,
      alpha: "a",
    },
    {
      id: 2,
      alpha: "b",
    },
    {
      id: 3,
      alpha: "c",
    },
    {
      id: 4,
      alpha: "d",
    },
    {
      id: 5,
      alpha: "e",
    },
  ]);
  const [inputAlpha, setInputAlpha] = useState("");

  const addAlpha = () => {
    //concat() 인자로 주어진 값을 기존 배열에 합치기
    const newAlpha = list.concat({ id: list.length + 1, alpha: inputAlpha });
    setList(newAlpha);
    setInputAlpha("");
  };

  const deleteAlpha = (id) => {
    //일치 하지 않는 것만 빼고 list에 담음
    const newAlpha = list.filter((value) => value.id !== id);
    setList(newAlpha);
    console.log(newAlpha);
  };

  return (
    <>
      <input
        type="text"
        value={inputAlpha}
        onChange={(e) => setInputAlpha(e.target.value)}
      />
      <button onClick={addAlpha}>추가</button>
      <ol>
        {list.map((value) => {
          console.log(value);
          return (
            <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
              {value.alpha}
            </li>
          );
        })}
      </ol>
    </>
  );
}

export default Alphabet;
