import React from 'react'
import Values from '../Values/Values';
import { useNavigate } from 'react-router-dom';


import './home.css'

const Home = () => {
  let navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate("/login")
  }
  return (
    <>
    <div className='container'>
      <div className="header">
        <h3>Welcome User1</h3>
        <button className='btn-logout' onClick={handleLogout}>Logout</button>
        <hr />
      </div>
      <Values/>
    </div>
    </>
  )
}

export default Home