import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './exercise';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules/';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

const store = createStore(rootReducer, composeWithDevTools()); // 스토어를 만듭니다.
// composeWithDevTools 를 사용하여 리덕스 개발자 도구 활성화

// console.log(store.getState()); // 스토어의 상태를 확인해봅시다.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
