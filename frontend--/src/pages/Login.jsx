//Needed to use React
//Use state is to store data 
import React, {useState} from 'react';
import "../App.css";
//Used to make requests to backend
import axios from 'axios';

// Used to move from one page to another
import {useNavigate} from 'react-router-dom';

function Login(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState ('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post(
                "https://blooming-flowers-journal.onrender.com/api/users/login",
                {name, password}
            );

            if(!res.data){
                alert("Invalid login");
                return;
            }

            localStorage.setItem("user", JSON.stringify(res.data));
            navigate("/dashboard");

        } catch(error){
            console.error(error);
            alert("Login failed");
        }
    }; 

    return (
  <div className="login-page">

    <div className="login-card"> 
      <h2 className="login-title">Welcome Back</h2>

      <input
        className="login-input"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="login-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="login-button" onClick={handleLogin}>
        Login
      </button>

      <p style={{ textAlign: "center", marginTop: "10px", fontSize: "14px" }}>
    New here?{" "}
    <span
        style={{ cursor: "pointer", textDecoration: "underline" }}
        onClick={() => navigate("/signup")}
    >
        Create account
    </span>
</p>
    </div>

    {/* decorative flower */}
    <img
      src="/src/assets/Image-1.PNG"
      alt="flower"
      className="login-flower"
    />

  </div>
);
}

export default Login;
