import backstage from './assets/backstage.jpeg'
import Result_img from "./assets/Result.png";
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import './Result.css'

function Result() {
  return (
    <>
      <div className="App" style={{ backgroundImage: `url(${backstage})`,backgroundSize:"cover"}}>
        <div className='Result_1' href="/Stage">
          <Link to='/Stage'><img src={Result_img} width='500px' alt='result'/></Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Result;