import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'; // 특정 주소에 특정 컴포넌트를 보여주겠다라는 것이다.
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route render={({ location }) => <div>
          <h2>이 페이지는 존재하지 않습니다.</h2>
          <p>{location.pathname}</p>
        </div> } />
      </Switch>
    </div>
  );
}

export default App;
