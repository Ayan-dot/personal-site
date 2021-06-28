import Navigation from './components/Navigation';
import {
  navdata
} from './constants';
import {
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <>
      <Navigation data={navdata}/>
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
