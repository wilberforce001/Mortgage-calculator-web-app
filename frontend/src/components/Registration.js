import React, { useState } from "react";
import axios from "axios";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        console.log({ email, password });

        try {
            const res = await axios.post('/register', { email, password });
            console.log('Registration response:', res);
            alert('Registration successful');
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Error registering user')
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4" style={{ width: '400px' }}>
                <h2 className='text-center'>Register</h2>
                <form onSubmit={handleRegister}>
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
                    <button type='submit' className='btn btn-primary w-100'>Register</button>
                    {error && <p>{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default Register;