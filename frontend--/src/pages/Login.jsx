//Needed to use React
//Use state is to store data 
import React, {useState} from 'react';

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
                "http://localhost:3000/api/users/login",
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

    return(
        <div>
            <h2>Login</h2>

            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br /><br />

            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <br /><br />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
