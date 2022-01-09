import Menu from '../../_components/menu/menu.js';
import backstage from './assets/backstage.jpeg'
import './Backstage.css'

function Backstage() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backstage})`,backgroundSize:"cover"}}>
      <h1>Backstage</h1>
      <Menu/>
    </div>
  );
}

export default Backstage;