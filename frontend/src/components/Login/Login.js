import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import Navbar from '../Navbar/Navbar'
import './login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://arnowatest.herokuapp.com/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            localStorage.setItem('token', json.authToken);
            navigate("/");

        }
        else {
            window.alert("Invalid credentials, Login to correct credential or signup to Create an account ")
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <Navbar />
            <div className="body">
                <h1>Log in</h1>
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-label">
                            <label className='label' htmlFor="email">Email Address</label>
                            <input value={credentials.email}  onChange={onChange} type="text" id='email' name='email' placeholder='mike@gmail.com' />
                        </div>
                        <div className="form-label">
                            <label className='label' htmlFor="password">Password</label>
                            <input value={credentials.password} onChange={onChange} type="password" id='password' name='password' placeholder='Enter your password' />
                        </div>
                        <div className="submit">
                            <button type='submit' className='btn-submit'>Log in</button>
                        </div>
                        <div className="signup">
                            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login