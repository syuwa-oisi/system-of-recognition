import costume from "./assets/unknown (1).png"
import './Backstage_costume.css'

function Backstage_costume() {
  return (
    <div className="App" style={{ backgroundImage: `url(${costume})`,backgroundSize:"cover"}}>
      <h1>Backstage</h1>
    </div>
  );
}

export default Backstage_costume;