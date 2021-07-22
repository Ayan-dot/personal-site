import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Popup from './components/Popup';
import Projects from './pages/Projects';
import {
  navdata, footerdata, projects
} from './constants';
import './global.css';
import { useState } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

const App = () => {
  const [showModal, onModalShow] = useState(false);
  return (
    <>
    <div className="container-lg mt-5" >
      <Navigation data={navdata} show={showModal} change={onModalShow}/>
      <Popup show={showModal} change={onModalShow}/>
      <Switch>
        <Route path="/about">
          <h1>about</h1>
        </Route>
        <Route path="/projects">
          <Projects data={projects}/>
        </Route>
        <Route path="/resume">
        <h1>resume</h1><br/>
        <h1>resume</h1><br/>
        <h1>resume</h1><br/>
        <h1>resume</h1><br/>
        <h1>resume</h1><br/>

        <h1>resume</h1><br/>
        <h1>resume</h1><br/>
        <h1>resume</h1><br/>
        <h1>resume</h1><br/>
        <h1>resume</h1><br/>
        <h1>resume</h1><br/>
        <h1>resume</h1><br/>
        <h1>resume</h1><br/><h1>resume</h1><br/>

        </Route>
      </Switch>
      </div>
      <Footer data={footerdata}/>
    </>
  );
}

export default App;
