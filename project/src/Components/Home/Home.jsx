import React from 'react';
import './Home.css';
import {useDispatch} from 'react-redux'



const Home = () => {

  const dispatch=useDispatch()


const handleClick=()=>{

  dispatch({
    type:"firstCase",
    payload:['hello','faiz','Rana']
  })

}


  return (
    <div className='home'>
  Home

  <button onClick={()=>handleClick} >Hello</button>
    </div>
    
  );
};

export default Home;
