import React, { useContext, useRef, useCallback } from "react";
import { UserDispatch } from "./App";
import useInputs from "./hooks/useInputs";

function CreateUser() {
  // 리액트 개발자 도구의 버그인지, CreateUser 도 렌더링 되는것처럼 보이는데 실제로 console.log 찍어보시면 렌더링이 안되고 있는 것을 확인 할 수 있습니다.
  // console.log("CreateUser");
  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: "",
  });

  const nextId = useRef(4);
  const dispatch = useContext(UserDispatch);

  const onCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
        active: false,
      },
    });
    reset();
    nextId.current += 1;
  };

  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default React.memo(CreateUser);
