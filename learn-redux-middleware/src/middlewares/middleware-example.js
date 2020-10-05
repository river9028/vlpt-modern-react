const middleware_arrow = (store) => (next) => (action) => {
  // 하고 싶은 작업...
};

// 첫번째 store는 리덕스 스토어 인스턴스입니다. 이 안에 dispatch, getState, subscribe 내장함수들이 들어있죠.
function middleware_functional(store) {
  // 두번째 next 는 액션을 다음 미들웨어에게 전달하는 함수입니다. next(action) 이런 형태로 사용합니다. 만약 다음 미들웨어가 없다면 리듀서에게 액션을 전달해줍니다. 만약에 next 를 호출하지 않게 된다면 액션이 무시처리되어 리듀서에게로 전달되지 않습니다.
  return function (next) {
    // 세번째 action 은 현재 처리하고 있는 액션 객체입니다.
    return function (action) {
      // 하고 싶은 작업...
    };
  };
}

// 새로운 액션이 디스패치 되면 첫 번째로 등록한 미들웨어가 호출됩니다. 만약에 미들웨어에서 next(action)을 호출하게 되면 다음 미들웨어로 액션이 넘어갑니다. 그리고 만약 미들웨어에서 store.dispatch 를 사용하면 다른 액션을 추가적으로 발생시킬 수 도 있습니다.

// 액션 값을 객체가 아닌 함수도 받아오게 만들어서 액션이 함수타입이면 이를 실행 ( ===  redux-thunk)
const thunk = (store) => (next) => (action) => {
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);
};

const myThunk = () => (dispatch, getState) => {
  dispatch({ type: 'HELLO' });
  dispatch({ type: 'BYE' });
};

dispatch(myThunk());
