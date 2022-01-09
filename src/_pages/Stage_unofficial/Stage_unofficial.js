import bg from "./assets/photo-1494475673543-6a6a27143fc8.jpeg"
import './Stage_unofficial.css'

function Stage_unofficial() {
  return (
    <div className="App" style={{ backgroundImage: `url(${bg})`,backgroundSize:"cover"}}>
      <h1>Backstage</h1>
    </div>
  );
}

export default Stage_unofficial;