import equipment from "./assets/unknown (1) (1).png"
import './Studio_equipment.css'

function Studio_equipment() {
  return (
    <div className="App" style={{ backgroundImage: `url(${equipment})`,backgroundSize:"cover"}}>
      <h1>Backstage</h1>
    </div>
  );
}

export default Studio_equipment;