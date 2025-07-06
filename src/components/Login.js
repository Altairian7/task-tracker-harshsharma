import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        e.preventDefault();
        if (username.trim()) {
            localStorage.setItem('username', username);
            onLogin(username);
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login To The Task Tracker!!</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Enter your Username Sir!"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;