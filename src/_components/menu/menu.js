import map from "./assets/map_4.jpg";
import Config from "./assets/settings_4.jpg";
import FC from "./assets/FC_4.jpg";
import Backstage from "./assets/Backstage_4.jpg";
import Studio from "./assets/Studio_4.jpg";
import Stage from "./assets/Stage_4.jpg";

import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css'

class Menu extends React.Component {
    render() { 
        return(
            <div>
                <div className='menu_map' href="/">
                    <Link to='/'><img src={map} width='65px' alt='button'/></Link>
                </div>

                <div className='menu_stage' href="/Stage">
                    <Link to='/Stage'><img src={Stage} width='65px' alt='button'/></Link>
                </div>

                <div className='menu_studio' href="/Studio">
                    <Link to='/Studio'><img src={Studio} width='65px' alt='button'/></Link>
                </div>

                <div className='menu_backstage' href="/Backstage">
                    <Link to='/Backstage'><img src={Backstage} width='65px' alt='button'/></Link>
                </div>

                <div className='menu_fc' href="/Funclub">
                    <Link to='/Funclub'><img src={FC} width='65px' alt='button'/></Link>
                </div>

                <div className='menu_config' href="/Config">
                    <Link to='/Config'><img src={Config} width='65px' alt='button'/></Link>
                </div>
            </div>
        )
    }
  }
  
  export default Menu;