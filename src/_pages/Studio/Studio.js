
import bg from "./assets/music-1290090.jpg"
import Studio_artist from './assets/Studio_artist.jpg';
import Studio_costume from "./assets/Studio_costume.jpg";
import Studio_equipment from "./assets/Studio_equip.jpg";
import React from 'react';
import './Studio.css'
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';

function Studio() {
  return (
    <>
    <div className="App" style={{ backgroundImage: `url(${bg})`,backgroundSize:"cover"}}>
    <div className='Studio_artist' href="/Stage">
          <Link to='/Studio/artist'><img src={Studio_artist} width='350px' alt='button'/></Link>
        </div>
        <div className='Studio_costume' href="/Stage">
          <Link to='/Studio/costume'><img src={Studio_costume} width='350px' alt='button'/></Link>
        </div>
        <div className='Studio_equip' href="/Stage">
          <Link to='/Studio/equip'><img src={Studio_equipment} width='350px' alt='button'/></Link>
        </div>
    </div>
    <Outlet/>
    </>
  );
}

export default Studio;