import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { NumberOfDays } from '../Functions/NumberOfDays';
//import './App.css';
import Bloom from '../Functions/Bloom';
import Bloom1 from '../assets/Image-1.PNG'
import Bloom2 from '../assets/Image-2.PNG'
import Bloom3 from '../assets/Image-3.PNG'
import Bloom4 from '../assets/Image-4.PNG'
import Bloom5 from '../assets/Image-5.PNG'
import Bloom6 from '../assets/Image-6.PNG';
import Bloom7 from '../assets/Image-7.PNG'
import Bloom8 from '../assets/Image-8.PNG'
import Bloom9 from '../assets/Image-9.PNG'
import Bloom10 from '../assets/Image-10.PNG'
import Bloom11 from '../assets/Image-11.PNG'
import Bloom12 from '../assets/Image-12.PNG';
import Bloom13 from '../assets/Image-13.PNG'
import Bloom14 from '../assets/Image-14.PNG'
import Bloom15 from '../assets/Image-15.PNG'
import Bloom16 from '../assets/Image-16.PNG'
import Bloom17 from '../assets/Image-17.PNG'
import Bloom18 from '../assets/Image-18.PNG';
import Bloom19 from '../assets/Image-19.PNG'
import Bloom20 from '../assets/Image-20.PNG'

import Animation1 from '../assets/Animation-1.GIF'
import Animation2 from '../assets/Animation-2.GIF'
import Animation3 from '../assets/Animation-3.GIF'
import Animation4 from '../assets/Animation-4.GIF'
import Animation5 from '../assets/Animation-5.GIF'
import Animation6 from '../assets/Animation-6.GIF'
import Animation7 from '../assets/Animation-7.GIF'
import Animation8 from '../assets/Animation-8.GIF'
import Animation9 from '../assets/Animation-9.GIF'
import Animation10 from '../assets/Animation-10.GIF'
import Animation11 from '../assets/Animation-11.GIF'
import Animation12 from '../assets/Animation-12.GIF'
import Animation13 from '../assets/Animation-13.GIF'
import Animation14 from '../assets/Animation-14.GIF'
import Animation15 from '../assets/Animation-15.GIF'
import Animation16 from '../assets/Animation-16.GIF'
import Animation17 from '../assets/Animation-17.GIF'
import Animation18 from '../assets/Animation-18.GIF'
import Animation19 from '../assets/Animation-19.GIF'
import Animation20 from '../assets/Animation-20.GIF'

import "../App.css";


export default function Dashboard() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const [dates, setDates] = useState([]);

    
    const findDays = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/reflections");

            const userReflections = res.data.filter(
                (r) =>
                    String(r.userId) === String(user._id) &&
                    r.content &&
                    r.content.trim() !== ""
            );

            const dates = userReflections.map((r) => r.day);

            setDates(dates);

        } catch (error) {
            console.error(error);
        }
    };

    
    useEffect(() => {
        if (user) findDays();
    }, [user]);

    if (!user) {
        navigate("/");
        return <h1>Please login</h1>;
    }

  return (
        <>
            <h1 className = "Heading"><div className="welcome-text">Welcome</div><div className="name-text">{user.name}</div></h1>

            <div className="box-container">
                <Bloom day={1} dates={dates} animation={Animation6} picture={Bloom6} onReflectionAdded={findDays} />
                <Bloom day={2} dates={dates} animation={Animation20} picture={Bloom20} onReflectionAdded={findDays}/>
                <Bloom day={3} dates={dates} animation={Animation8} picture={Bloom8} onReflectionAdded={findDays}/>
                <Bloom day={4} dates={dates} animation={Animation16} picture={Bloom16} onReflectionAdded={findDays}/>
                <Bloom day={5} dates={dates} animation={Animation17} picture={Bloom17} onReflectionAdded={findDays}/>
                <Bloom day={6} dates={dates} animation={Animation12} picture={Bloom12} onReflectionAdded={findDays}/>
                <Bloom day={7} dates={dates} animation={Animation15} picture={Bloom15} onReflectionAdded={findDays}/>
                <Bloom day={8} dates={dates} animation={Animation10} picture={Bloom10} onReflectionAdded={findDays}/>
                <Bloom day={9} dates={dates} animation={Animation4} picture={Bloom4} onReflectionAdded={findDays}/>
                <Bloom day={10} dates={dates} animation={Animation5} picture={Bloom5} onReflectionAdded={findDays}/>
                <Bloom day={11} dates={dates} animation={Animation3} picture={Bloom3} onReflectionAdded={findDays}/>
                <Bloom day={12} dates={dates} animation={Animation1} picture={Bloom1} onReflectionAdded={findDays}/>
                <Bloom day={13} dates={dates} animation={Animation2} picture={Bloom2} onReflectionAdded={findDays}/>
                <Bloom day={14} dates={dates} animation={Animation11} picture={Bloom11} onReflectionAdded={findDays}/>
                <Bloom day={15} dates={dates} animation={Animation13} picture={Bloom13} onReflectionAdded={findDays}/>
                <Bloom day={16} dates={dates} animation={Animation14} picture={Bloom14} onReflectionAdded={findDays}/>
                <Bloom day={17} dates={dates} animation={Animation19} picture={Bloom19} onReflectionAdded={findDays}/>
                <Bloom day={18} dates={dates} animation={Animation9} picture={Bloom9} onReflectionAdded={findDays}/>
                <Bloom day={19} dates={dates} animation={Animation18} picture={Bloom18} onReflectionAdded={findDays}/>
                <Bloom day={20} dates={dates} animation={Animation7} picture={Bloom7} onReflectionAdded={findDays}/>
            </div>
        </>
    );
}



