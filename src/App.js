import React from 'react';
import tarun from './tarun.jpg'
import './App.css';
import SocialLinks from './components/SocialLinks';
import BioTarun from './components/BioTarun';
import Skills from './components/Skills';
import Ruler from './Ruler';

function App() {
  return (
    <div className="App">
      <Ruler />
     <img src={tarun} alt="tarun" className="tarun" />
     <BioTarun /> <br />
     <Skills />
      <SocialLinks />
      <Ruler />
     </div>
  );
}

export default App;
