import { Outlet } from "react-router-dom";
import equipment from "./assets/unknown.png";
import './Backstage_equipment.css';

function Backstage_equipment() {
  return (
    <>
    <div className="App" style={{ backgroundImage: `url(${equipment})`,backgroundSize:"cover"}}>
    </div>
    <Outlet/>
    </>
  );
}

export default Backstage_equipment;