import React, { useState } from "react";

function Counter() {
  // const numberState = useState(0);
  // const number = numberState[0];
  // const setNumber = numberState[1];
  // 배열 비구조화 할당을 통하여 각 원소를 추출
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    // console.log("+1");
    // setNumber(number + 1);
    setNumber((prevNumber) => prevNumber + 1);
  };
  const onDecrease = () => {
    // console.log("-1");
    // setNumber(number - 1);
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
