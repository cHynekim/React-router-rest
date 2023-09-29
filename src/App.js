import './App.css';
import Header from './Header';
import DayList from './DayList';
import WordList from './WordList';
import Empty from './Empty';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import CreateWord from './CreateWord';
import CreateDay from './CreateDay';

function App() {
  
  return (
    <BrowserRouter>
      <div id='wrap'>
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route exact path="/word/:day">
            <WordList />
          </Route>
          <Route exact path="/create">
            <CreateWord />
          </Route>
          <Route exact path="/create_day">
            <CreateDay />
          </Route>
          <Route>
            <Empty />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

/*
보카 '/' 누르면 메인
day1 누르면 1에 해당하는 단어 호출
~~> utilising Router

* routing을 위해 필요한 components
* <BrowserRouter> 최상위 element
* <Switch> 로 components 분리
* <Route> 이용 path 지정

*DayList 의 Link comp의 day정보를 :day변수가 받음
*/