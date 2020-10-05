// 함수를 디스패치 할 때에는, 해당 함수에서 dispatch 와 getState 를 파라미터로 받아와주어야 하는데 이 함수를 만들어주는 함수를 thunk 라고 부른다
const thunk = (store) => (next) => (action) => {
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);
};

const getComments = () => (dispatch, getState) => {
  // 이 안에서는 액션을 dispatch 할 수도 있고
  // getState를 사용하여 현재 상태도 조회 할 수 있습니다.
  const id = getState().post.activeId;

  // 요청이 시작했음을 알리는 액션
  dispatch({ type: 'GET_COMMENTS' });

  // 댓글을 조회하는 프로미스를 반환하는 getComments 가 있다고 가정해봅시다.
  api
    .getComments(id) // 요청을 하고
    .then((comments) =>
      dispatch({ type: 'GET_COMMENTS_SUCCESS', id, comments }),
    ) // 성공시
    .catch((e) => dispatch({ type: 'GET_COMMENTS_ERROR', error: e })); // 실패시
};

// thunk 함수에서 async/await를 사용해도 상관 없습니다.
const getComments = () => async (dispatch, getState) => {
  const id = getState().post.activeId;
  dispatch({ type: 'GET_COMMENTS' });
  try {
    const comments = await api.getComments(id);
    dispatch({ type: 'GET_COMMENTS_SUCCESS', id, comments });
  } catch (e) {
    dispatch({ type: 'GET_COMMENTS_ERROR', error: e });
  }
};
