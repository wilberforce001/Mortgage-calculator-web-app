import React, { useState } from 'react';

function Login() {
    // Initialize the states (email and passoword)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    // handleLogin function that gets triggered when the form is submitted
    const handleLogin = (e) => {
        e.preventDefault();
        console.log({ email, password });
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
                </form>
            </div>
        </div>
    )

}

export default Login;