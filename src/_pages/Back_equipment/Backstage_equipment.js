import equipment from "./assets/unknown (1) (1).png";
import './Backstage_equipment.css';

function Backstage_equipment() {
  return (
    <div className="App" style={{ backgroundImage: `url(${equipment})`,backgroundSize:"cover"}}>
      <h1>Backstage</h1>
    </div>
  );
}

export default Backstage_equipment;