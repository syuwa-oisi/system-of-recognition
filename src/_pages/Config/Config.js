import Menu from '../../_components/menu/menu.js';
import assets from "./assets/radio-4292411_1920.jpg";
import Config_image from './assets/Config_image.png';
import './Config.css'

function Config() {
  return (
    <div className="App" style={{ backgroundImage: `url(${assets})`,backgroundSize:"cover"}}>
      <div className='Config_image' href="/Stage">
        <img src={Config_image} width='500px' alt='result'/>
      </div>
      <Menu/>
    </div>
  );
}

export default Config;