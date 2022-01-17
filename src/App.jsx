import './global.css';

import {
  Route,
  Switch,
} from 'react-router-dom';
import {
  about,
  footerdata,
  navdata,
  projects
} from './constants';

import About from './pages/About';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Popup from './components/Popup';
import Projects from './pages/Projects';
import { useState } from 'react';

const App = () => {
  const [showModal, onModalShow] = useState(false);
  return (
    <>
    <div className="container-md w-75" >
      <Navigation data={navdata} show={showModal} change={onModalShow}/>
      <Popup show={showModal} change={onModalShow}/>
      <Switch>
        <Route exact path={["","/about"]}>
          <About data={about}/>
        </Route>
        <Route path="/projects">
          <Projects data={projects}/>
        </Route>
      </Switch>
      </div>
      <Footer data={footerdata}/>
    </>
  );
}

export default App;
