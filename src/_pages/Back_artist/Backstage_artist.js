import { Outlet } from "react-router-dom";
import artist from "./assets/concert-2566002.jpg"
import BS_artist_1 from './assets/BS_artist_1.png';
import BS_artist_2 from './assets/BS_artist_2.png';
import BS_artist_3 from './assets/BS_artist_3.png';
import BS_artist_4 from './assets/BS_artist_4.png';
import './Backstage_artist.css'

function Backstage_artist() {
  return (
    <>
    <div className="App" style={{ backgroundImage: `url(${artist})`,backgroundSize:"cover",backgroundPosition:"center"}}>
    <div className='BS_artist_1' href="/Config">
        <img src={BS_artist_1} width='75px' alt='button'/>
    </div>
    <div className='BS_artist_2' href="/Config">
        <img src={BS_artist_2} width='75px' alt='button'/>
    </div>
    <div className='BS_artist_3' href="/Config">
        <img src={BS_artist_3} width='75px' alt='button'/>
    </div>
    <div className='BS_artist_4' href="/Config">
        <img src={BS_artist_4} width='75px' alt='button'/>
    </div>
    <div className='BS_artist_5' href="/Config">
        <img src={BS_artist_4} width='75px' alt='button'/>
    </div>
    
    </div>
    <Outlet/>
    </>
  );
}

export default Backstage_artist;