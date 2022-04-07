import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

import Navbar from '../Navbar/Navbar'
import './signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { name, email, password } = credentials
      const response = await fetch("https://arnowatest.herokuapp.com/api/auth/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password })
  
      });
      const json = await response.json();
      console.log(json)
      if (json.success) {
        localStorage.setItem('token', json.authToken);
        navigate("/");
  
      }
      else {
        window.alert("Invalid Details")
      }
    }
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
  return (
    <div>
    <Navbar />
    <div className="body">
        <h1>Sign up</h1>
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <div className="form-label">
                    <label className='label' htmlFor="name">Name</label>
                    <input onChange={onChange} type="text" id='name' name='name' placeholder='Enter your name here' />
                </div>
                <div className="form-label">
                    <label className='label' htmlFor="email">Email Address</label>
                    <input onChange={onChange} type="text" id='email' name='email' placeholder='mike@gmail.com' />
                </div>
                <div className="form-label">
                    <label className='label' htmlFor="password">Password</label>
                    <input onChange={onChange} type="password" id='password' name='password' placeholder='Enter your password' />
                </div>
                <div className="form-label">
                    <label className='label' htmlFor="cpassword">Confirm Password</label>
                    <input onChange={onChange} type="password" id='cpassword' name='cpassword' placeholder='Enter the confirm password' />
                </div>
                <div className="submit">
                    <button disabled={credentials.name.length < 3 || credentials.email.length < 5 || credentials.password.length < 3 || credentials.cpassword.length < 3 || credentials.password !== credentials.cpassword} type="submit" className='btn-submit'>Sign up</button>
                </div>
                <div className="signup">
                    <p>Already Signed up? <Link to="/login">Log in</Link></p>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default Signup