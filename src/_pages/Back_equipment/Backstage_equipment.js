import { Outlet } from "react-router-dom";
import equipment from "./assets/unknown.png";
import BS_equip_1 from './assets/BS_equip_1.png';
import BS_equip_2 from './assets/BS_equip_2.png';
import BS_equip_4 from './assets/BS_artist_4.png';

import './Backstage_equipment.css';

function Backstage_equipment() {
  return (
    <>
    <div className="App" style={{ backgroundImage: `url(${equipment})`,backgroundSize:"cover"}}>
    <div className='BS_artist_1' href="/Config">
        <img src={BS_equip_1} width='75px' alt='button'/>
    </div>
    <div className='BS_equip_2' href="/Config">
        <img src={BS_equip_2} width='65px' alt='button'/>
    </div>
    <div className='BS_artist_3' href="/Config">
        <img src={BS_equip_4} width='75px' alt='button'/>
    </div>
    <div className='BS_artist_4' href="/Config">
        <img src={BS_equip_4} width='75px' alt='button'/>
    </div>
    <div className='BS_artist_5' href="/Config">
        <img src={BS_equip_4} width='75px' alt='button'/>
    </div>
    </div>
    <Outlet/>
    </>
  );
}

export default Backstage_equipment;