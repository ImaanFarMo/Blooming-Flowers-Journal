import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

export default function Bloom({ day, animation, picture, dates, onReflectionAdded }) {

    const isCompleted = dates.includes(day);

    const [gifKey, setGifKey] = useState(0);
    const [showPicture, setShowPicture] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [reflectionText, setReflectionText] = useState("");

    // Handle bloom animation
    useEffect(() => {
        if (!isCompleted) return;

        setShowPicture(false);
        setGifKey(prev => prev + 1);

        const timer = setTimeout(() => {
            setShowPicture(true);
        }, 1300);

        return () => clearTimeout(timer);
    }, [isCompleted]);

    //  Submit reflection
    const handleSubmit = async () => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user || !user._id) {
            alert("User not found. Please log in again.");
            return;
        }

        if (!reflectionText.trim()) {
            alert("Write something first.");
            return;
        }

        console.log("SENDING:", {
            userId: user._id,
            day,
            content: reflectionText
        });

        await axios.post("http://localhost:3000/api/reflections", {
            userId: user._id,
            day: Number(day), 
            content: reflectionText.trim()
        });

        setIsOpen(false);
        setReflectionText("");

        if (onReflectionAdded) {
            onReflectionAdded();
        }

    } catch (err) {
        console.error("ERROR:", err.response?.data || err.message);
    }

    };

    return (
        <div className="bloom-box">

            {/* NOT COMPLETED → clickable circle */}
            {!isCompleted && (
                <div
                    className="empty-circle"
                    onClick={() => setIsOpen(true)}
                    style={{
                        animation: `bounce ${1 + Math.random() * 0.5}s ease-out forwards`,
                        animationDelay: `${Math.random() * 0.3}s`
                    }}
                >
                    {day}
                </div>
            )}

            {/* COMPLETED → animation → flower */}
            {isCompleted && (
                <>
                    {!showPicture && (
                        <img
                            className="animation"
                            key={gifKey}
                            src={`${animation}?t=${gifKey}`}
                            alt="animation"
                        />
                    )}

                    {showPicture && (
                        <img
                            className="picture"
                            src={picture}
                            alt="bloom"
                        />
                    )}
                </>
            )}

            {/* POPUP */}
            {isOpen && (
                <div 
                    className="popup-overlay" 
                    onClick={() => setIsOpen(false)}
                >
                    <div 
                        className="popup-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>Day {day}</h2>

                        <textarea
                            className="reflection-input"
                            value={reflectionText}
                            onChange={(e) => setReflectionText(e.target.value)}
                            placeholder="Write your reflection..."
                        />

                        <div className="popup-buttons">
                            <button onClick={() => setIsOpen(false)}>
                                Cancel
                            </button>

                            <button onClick={handleSubmit}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}