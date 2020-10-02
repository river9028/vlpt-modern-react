import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/velopert"
            activeStyle={{ background: 'black', color: 'white' }}
            // activeClassName={}
          >
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/gildong"
            activeStyle={{ background: 'black', color: 'white' }}
            // activeClassName={}
          >
            gildong
          </NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        // render: JSX 를 렌더링하는 것. 상위 영역에서 props 나 기타 값들을 필요하면 전달 가능
        render={() => <div>유저를 선택해주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />{' '}
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
