import './Stage.css'
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import bg from "./assets/audience-1850022.jpg"
import image_1 from "./assets/image_1.png";
import image_2 from "./assets/image_2.png";
import image_3 from "./assets/image_3.png";
import image_4 from "./assets/image_4.png";
import image_5 from "./assets/image_5.png";
import image_6 from "./assets/image_6.png";
import image_7 from "./assets/image_7.png";
import image_8 from "./assets/image_8.png";
import image_9 from "./assets/image_9.png";

function Stage() {
  return (
    <div className="App" style={{ backgroundImage: `url(${bg})`,backgroundSize:"cover" ,position:"center"}}>
      <div className='Quiz_list' href="/Stage">
        <div className='Quiz_1' href="/Stage">
          <Link to='/Stage/Quiz'><img src={image_1} width='350px' alt='button'/></Link>
        </div>
        <div className='Quiz_2' href="/Stage">
          <Link to='/Stage/Quiz'><img src={image_2} width='350px' alt='button'/></Link>
        </div>
        <div className='Quiz_3' href="/Stage">
          <Link to='/Stage/Quiz'><img src={image_3} width='350px' alt='button'/></Link>
        </div>
        <div className='Quiz_4' href="/Stage">
          <Link to='/Stage/Quiz'><img src={image_4} width='350px' alt='button'/></Link>
        </div>
        <div className='Quiz_5' href="/Stage">
          <Link to='/Stage/Quiz'><img src={image_5} width='350px' alt='button'/></Link>
        </div>
        <div className='Quiz_6' href="/Stage">
          <Link to='/Stage/Quiz'><img src={image_6} width='350px' alt='button'/></Link>
        </div>
        <div className='Quiz_7' href="/Stage">
          <Link to='/Stage/Quiz'><img src={image_7} width='350px' alt='button'/></Link>
        </div>
        <div className='Quiz_8' href="/Stage">
          <Link to='/Stage/Quiz'><img src={image_8} width='350px' alt='button'/></Link>
        </div>
        <div className='Quiz_9' href="/Stage">
          <Link to='/Stage/Quiz'><img src={image_9} width='350px' alt='button'/></Link>
        </div>
    </div>
    <Outlet/>
    </div>
  );
}
export default Stage;