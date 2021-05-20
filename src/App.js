import './App.css';
import Header from './Header.js';
import Articles from './Articles.js'
import Trending from './Trending';
import { useState } from 'react';

function App() {

  // set light/ dark mode
  // still a work in progress for future ilya

  const [light, setLight] = useState(true)

  const handleLight=()=>{
    setLight(!light)
  }

  return (
    <div className={light ? 'light' : 'dark'}>
    <div className="wrapper">
      <Header />  

      <section className="mainSectionContainer">
        <Articles handleLight={()=>{handleLight()}} light={light}/>
        <Trending light={light}/>
      </section>    
    </div>
    </div>

  );
}

export default App;
