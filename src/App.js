import React from 'react';
import { Route, Link } from 'react-router-dom'; // 특정 주소에 특정 컴포넌트를 보여주겠다라는 것이다.
import Home from './Home';
import About from './About';

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
      </ul>
      <hr />
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} />
    </div>
  );
}

export default App;
