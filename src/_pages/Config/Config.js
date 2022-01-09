import Menu from '../../_components/menu/menu.js';
import assets from "./assets/radio-4292411_1920.jpg"
import './Config.css'

function Config() {
  return (
    <div className="App" style={{ backgroundImage: `url(${assets})`,backgroundSize:"cover"}}>
      <h1>Config</h1>
      <Menu/>
    </div>
  );
}

export default Config;