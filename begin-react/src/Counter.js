import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  // const numberState = useState(0);
  // const number = numberState[0];
  // const setNumber = numberState[1];
  // 배열 비구조화 할당을 통하여 각 원소를 추출
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    // console.log("+1");
    // setNumber(number + 1);
    dispatch({ type: "INCREMENT" });
  };
  const onDecrease = () => {
    // console.log("-1");
    // setNumber(number - 1);
    dispatch({ type: "DECREMENT" });
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
