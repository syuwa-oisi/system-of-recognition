import Menu from '../../_components/menu/menu.js';
import FunClub_image from './assets/FunClub_image.png';
import './Funclub.css'

function Funclub() {
  return (
    <div className="App">
      <div className='FunClub_image' href="/Stage">
          <img src={FunClub_image} width='500px' alt='result'/>
        </div>
      <Menu/>
    </div>
  );
}

export default Funclub;