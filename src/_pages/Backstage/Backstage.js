import backstage from './assets/backstage.jpeg'
import Backstage_artist from './assets/Back_artist.jpg';
import Backstage_costume from "./assets/Back_costume.jpg";
import Backstage_equipment from "./assets/Back_equip.jpg";
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import './Backstage.css'

function Backstage() {
  return (
    <>
      <div className="App" style={{ backgroundImage: `url(${backstage})`,backgroundSize:"cover"}}>
        <div className='Back_artist' href="/Stage">
          <Link to='/Backstage/artist'><img src={Backstage_artist} width='350px' alt='button'/></Link>
        </div>
        <div className='Back_costume' href="/Stage">
          <Link to='/Backstage/costume'><img src={Backstage_costume} width='350px' alt='button'/></Link>
        </div>
        <div className='Back_equip' href="/Stage">
          <Link to='/Backstage/equip'><img src={Backstage_equipment} width='350px' alt='button'/></Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Backstage;