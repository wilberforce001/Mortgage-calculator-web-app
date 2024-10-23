import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
    // Initialize the states (email and passoword)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // handleLogin function that gets triggered when the form is submitted
    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        console.log({ email, password });

        try {
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password,
            });

            // Handle successful login
            console.log(response.data.message);
        } catch (err) {
            setError(err.response.data.message || 'Login failed');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4" style={{ width: '400px' }}>
                <h2 className='text-center'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className='form-group mb-3'>
                        <label>Email</label>
                        <input 
                        type='email'
                        className='form-control'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <label>Password</label>
                        <input
                        type='password'
                        className='form-control'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <button type='submit' className='btn btn-primary w-100'>Login</button>
                    {error && <p>{error}</p>}
                </form>

                <p>
                    Not registered? <Link to="/register">Click here to register</Link>
                </p>
            </div>
        </div>
    );

}

export default Login;