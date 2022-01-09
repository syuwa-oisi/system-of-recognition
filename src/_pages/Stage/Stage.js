import Menu from '../../_components/menu/menu.js';
import './Stage.css'
import bg from "./assets/audience-1850022.jpg"

function Stage() {
  return (
    <div className="App" style={{ backgroundImage: `url(${bg})`,backgroundSize:"cover" ,position:"center"}}>
      <h1>Stage</h1>
      <Menu />
    </div>
  );
}

export default Stage;