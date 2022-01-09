import { Outlet } from "react-router-dom";
import artist from "./assets/concert-2566002.jpg"
import './Backstage_artist.css'

function Backstage_artist() {
  return (
    <>
    <div className="App" style={{ backgroundImage: `url(${artist})`,backgroundSize:"cover",backgroundPosition:"center"}}>
    </div>
    <Outlet/>
    </>
  );
}

export default Backstage_artist;