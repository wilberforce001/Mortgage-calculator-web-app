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
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>Email:</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Password:</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} /> 

                <button type='submit'>Login</button>
            </form>
        </div>
    );

}

export default Login;