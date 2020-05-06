import React from "react";

function Login({ handleLogin }) {
    return (
        <button onClick={handleLogin} className="login btn">
            Login
        </button>
    );
}

export default Login;
