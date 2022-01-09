import artist from "./assets/concert-2566002.jpg"
import './Studio_artist.css'

function Studio_artist() {
  return (
    <div className="App" style={{ backgroundImage: `url(${artist})`,backgroundSize:"cover"}}>
      <h1>Backstage</h1>
    </div>
  );
}

export default Studio_artist;