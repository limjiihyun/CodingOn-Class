import { useState, useCallback } from "react";

const UseCallbackTest = () => {
  const [count, setCount] = useState(0);

  const withOutCallback = () => {
    console.log("withOutCallback", count);
    setCount(count + 1);
  };
  //useCallback()
  //반복해서 생성되는 이벤트 핸들러 함수를 useCallback으로 감싸주면
  //함수를 기억해서 컴포넌트가 다시 랜더링되도 기존의 기억하고 있는
  //기존 함수를 그대로 사용
  const withCallback = useCallback(() => {
    console.log("withCallback", count);
    setCount(count + 1);
  }, [count]);

  console.log("render");

  return (
    <>
      <div>
        <h2>Count: {count}</h2>

        <button onClick={withOutCallback}>Without Callback</button>
        <button onClick={withCallback}>With Callback</button>
      </div>
    </>
  );
};

export default UseCallbackTest;

// useCallback vs useMemo
// useCallback : useMemo를 기반으로 만든 hook
// 단, "함수를 사용할 때" 편의성을 증진시킨 hook

// 공통점 : 성능 최적화
// 차이점
// useMemo : "값"을 재사용
// -> 값의 재사용을 위해 전달된 함수를 실행하고 "그 결과"를 저장
// useCallback : "함수"를 재사용
// -> "함수의 재사용"을 위해 전달된 "함수 자체"를 저장
