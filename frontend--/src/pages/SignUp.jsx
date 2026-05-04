import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Signup() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const res = await axios.post(
                "https://blooming-flowers-journal.onrender.com/api/users",
                { name, password }
            );

            if (!res.data) {
                alert("Signup failed");
                return;
            }

            localStorage.setItem("user", JSON.stringify(res.data));
            navigate("/dashboard");

        } catch (err) {
            console.error(err);
            alert("Signup failed");
        }
    };

    return (
        <div className="login-page">

            <img
                src="/src/assets/Image-19.PNG"
                className="signup-flower"
                alt="flower"
            />

            <div className="login-card">

                <h2 className="login-title">New Bloom</h2>

                <input
                    className="login-input"
                    placeholder="Choose a name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    className="login-input"
                    type="password"
                    placeholder="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="login-button" onClick={handleSignup}>
                    Plant Seed
                </button>

                <p style={{ textAlign: "center", marginTop: "10px", fontSize: "14px" }}>
    Already have a garden?{" "}
    <span
        style={{ cursor: "pointer", textDecoration: "underline" }}
        onClick={() => navigate("/Login")}
    >
        Log in
    </span>
</p>

            </div>
        </div>
    );
}

export default Signup;