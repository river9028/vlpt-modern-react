import { useState, useReducer, useCallback } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, [action.name]: action.value };
    case "RESET":
      // return action.initialForm;
      return Object.keys(state).reduce((acc, current) => {
        acc[current] = "";
        return acc;
      }, {});
    default:
      return state;
  }
};

function useInputs(initialForm) {
  const [form, dispatch] = useReducer(reducer, initialForm);
  // change
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE", name, value });
  }, []);
  // const reset = useCallback(() => dispatch({ type: "RESET", initialForm }), [
  //   initialForm,
  // ]);
  const reset = useCallback(() => dispatch({ type: "RESET" }), []);
  return [form, onChange, reset];
}

export default useInputs;
