import React from 'react';
import bg from "./assets/EOrzMc9U8AAe13_.png";
import Quiz_text from "./assets/quiz_text.png";
import image_1 from "./assets/Ans.png";
import './quiz.css'
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';

function Quiz() {
  return (
    <>
    <div className="App" style={{ backgroundImage: `url(${bg})`,backgroundSize:"cover"}}>
    <div className='Quiz' href="/Stage">
        <div className='Quiz_text' href="/Stage">
          <img src={Quiz_text} width='350px' alt='text'/>
        </div>
        <div className='Ans' href="/Stage">
          <Link to='/Stage/Result'><img src={image_1} width='350px' alt='button'/></Link>
        </div>
    </div>
    </div>
    <Outlet/>
    </>
  );
}

export default Quiz;