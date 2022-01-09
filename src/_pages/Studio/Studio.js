import Menu from '../../_components/menu/menu.js';
import bg from "./assets/music-1290090.jpg"
import React from 'react';
import './Studio.css'

function Studio() {
  return (
    <div className="App" style={{ backgroundImage: `url(${bg})`,backgroundSize:"cover"}}>
      <h1>Studio</h1>
      <Menu/>
    </div>
  );
}

export default Studio;