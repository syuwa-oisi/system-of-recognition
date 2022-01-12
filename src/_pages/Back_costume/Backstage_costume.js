import { Outlet } from "react-router-dom";
import costume from "./assets/unknown.png"
import BS_cos_1 from './assets/BS_cos_1.png';
import BS_cos_2 from './assets/BS_cos_2.png';
import BS_cos_4 from './assets/BS_artist_4.png';
import './Backstage_costume.css'

function Backstage_costume() {
  return (
    <>
    <div className="App" style={{ backgroundImage: `url(${costume})`,backgroundSize:"cover"}}>
    <div className='BS_artist_1' href="/Config">
        <img src={BS_cos_1} width='75px' alt='button'/>
    </div>
    <div className='BS_artist_2' href="/Config">
        <img src={BS_cos_2} width='75px' alt='button'/>
    </div>
    <div className='BS_artist_3' href="/Config">
        <img src={BS_cos_4} width='75px' alt='button'/>
    </div>
    <div className='BS_artist_4' href="/Config">
        <img src={BS_cos_4} width='75px' alt='button'/>
    </div>
    <div className='BS_artist_5' href="/Config">
        <img src={BS_cos_4} width='75px' alt='button'/>
    </div>

    </div>
    <Outlet/>
    </>
  );
}

export default Backstage_costume;