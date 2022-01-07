import Map from './assets/map.png';
import StageButton from './assets/button_tmp.png';
import BackgroundButton from './assets/button_tmp.png';
import StudioButton from './assets/button_tmp.png';
import ConfigButton from './assets/button_tmp.png';
import SerialButton from './assets/button_tmp.png';
import MailButton from './assets/button_tmp.png';
import { Link } from 'react-router-dom';
import './Home.css'

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
    </div>
  );
}

export default Home;