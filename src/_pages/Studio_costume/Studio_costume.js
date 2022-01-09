import costume from "./assets/unknown (1).png"
import './Studio_costume.css'

function Studio_costume() {
  return (
    <div className="App" style={{ backgroundImage: `url(${costume}})`,backgroundSize:"cover"}}>
      <h1>Backstage</h1>
    </div>
  );
}

export default Studio_costume;