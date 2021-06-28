import logo from './logo.svg';
import './App.css';
import MNav from './components/MNav';
import {
  navdata
} from './constants';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <>
      <MNav data={navdata}/>
      <Switch>
        <Route path="/about">
          <h1>about</h1>
        </Route>
        <Route path="/projects">
          <h1>projects</h1>
        </Route>
        <Route path="/resume">
        <h1>resume</h1> 
        </Route>
      </Switch>
    </>
  );
}

export default App;
