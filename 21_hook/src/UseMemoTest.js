import { useState, useMemo } from "react";

//momo  가 있을때와 없을 때의 차이
//평균값 계산 함수
const avgFunc = (numbers) => {
  //numbers(list): list 숫자를 저장하고 있는 배열
  console.log("평균값 계산중...");

  //배열에 원소가 없다면 평균값은 0 반환
  if (numbers.length === 0) return 0;
  //numbers배열 원소값을 모두 더함
  const sum = numbers.reduce((acc, val) => acc + val);
  // console.log(sum);
  return sum / numbers.length;
};

const UseMemoTest = () => {
  const [number, setNumber] = useState("");
  const [list, setList] = useState([]);

  const onChangeFunc = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = () => {
    const newList = list.concat(Number(number));
    setList(newList);
    setNumber("");
  };

  //useMemo 사용
  //랜더링 과정에서 list값이 변경될 때만 실행
  const avg = useMemo(() => {
    return avgFunc(list);
  }, [list]);

  return (
    <>
      <h1>useMemo Hook</h1>
      <input type="number" value={number} onChange={onChangeFunc} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, idx) => {
          return <li key={idx}>{value}</li>;
        })}
      </ul>
      <h2>평균값: {avgFunc(list)}</h2>
      <h2>평균값: {avg}</h2>
    </>
  );
};

export default UseMemoTest;
