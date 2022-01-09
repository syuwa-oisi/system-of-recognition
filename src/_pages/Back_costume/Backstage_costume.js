import { Outlet } from "react-router-dom";
import costume from "./assets/unknown.png"
import './Backstage_costume.css'

function Backstage_costume() {
  return (
    <>
    <div className="App" style={{ backgroundImage: `url(${costume})`,backgroundSize:"cover"}}>
    </div>
    <Outlet/>
    </>
  );
}

export default Backstage_costume;