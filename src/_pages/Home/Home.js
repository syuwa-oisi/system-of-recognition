import Map from './assets/map.png';
import StageButton from './assets/Stage_r.png';
import BackgroundButton from './assets/Backstage_r.png';
import StudioButton from './assets/Studio_r.png';
import ConfigButton from './assets//Config_r.png';
import SerialButton from './assets/Serial_r.png';
import MailButton from './assets/mail_button.png';
import FC from "./assets/FC.jpg"
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="App" style={{ backgroundImage: `url(${Map})`,backgroundSize:"cover"}}>
      <h1>Home</h1>
      <div className='StageButton' href="/Stage">
        <Link to='/Stage'><img src={StageButton} width='125px' alt='button'/></Link>
      </div>
      <div className='BackstageButton' href="/Backstage">
        <Link to='/Backstage'><img src={BackgroundButton} width='100px' alt='button'/></Link>
      </div>
      <div className='StudioButton' href="/Studio">
        <Link to='/Studio'><img src={StudioButton} width='100px' alt='button'/></Link>
      </div>
      <div className='ConfigButton' href="/Config">
        <Link to='/Config'><img src={ConfigButton} width='50px' alt='button'/></Link>
      </div>
      <div className='SerialButton' href="/Serial">
        <Link to='/Serial'><img src={SerialButton} width='50px' alt='button'/></Link>
      </div>
      <div className='MailButton' href="/Mail">
        <Link to='/Mail'><img src={MailButton} width='50px' alt='button'/></Link>
      </div>
      <div className='FCButton' href="/Funclub">
        <Link to='/Funclub'><img src={FC} width='150px' alt='button'/></Link>
      </div>
    </div>
  );
}

export default Home;