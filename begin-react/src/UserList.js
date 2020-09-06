import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
  // deps 에 특정 값 넣기
  useEffect(() => {
    // console.log("컴포넌트가 화면에 나타남");
    console.log("user 값이 설정됨");
    console.log(user);
    return () => {
      // console.log("컴포넌트가 화면에서 사라짐");
      console.log("user 가 바뀌기 전..");
      console.log(user);
    };
  }, [user]);

  // deps 파라미터를 생략하기
  // useEffect(() => {
  //   console.log(user);
  // });

  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>

      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
