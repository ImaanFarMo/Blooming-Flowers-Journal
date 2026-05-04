import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function NumberOfDays() {
    const [days, setDays] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));
    const id = user._id;

    useEffect(() => {
        findDays();
    }, []);

    const findDays = async () => {
        try {
            const res = await axios.get(
                "http://localhost:3000/api/reflections"
            );

            // reflections for this user
            const userReflections = res.data.filter(
                (r) => (String(r.userId) === String(user._id)) && r.content && r.content.trim() !== ""
            );

            // get dates
            const dates = userReflections.map((r) => r.day);

            setDays(dates);
            localStorage.setItem("dates", JSON.stringify(dates));

        } catch (error) {
            console.error(error);
        }
    };

    return ( //matve just return {days.legnth}
        <div>
            {days.length}
        </div>
        
    );
}