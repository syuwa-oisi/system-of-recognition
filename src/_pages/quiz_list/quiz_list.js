import React from 'react';
import './quiz_list.css'
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';

function Quiz_list() {
  return (
    <>
    <div className="App" >
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
    </div>
    </div>
    <Outlet/>
    </>
  );
}


export default Quiz_list;