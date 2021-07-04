import React, { useState } from 'react'
import axios from "axios"
import "./App.css"
function PersonList() {
    const [joke, setJoke] = useState("");
    const [type, setType] = useState("");
    const [bg, setBG] = useState("#E08A7D")
    var color = '#'

    function changeBG(){
            const letters = '0123456789ABCDEF';
            for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
    }

    
    async function getResponse(){
        const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
        console.log(response.data);
        setJoke(`${response.data.setup}  ...  ${response.data.punchline}`);
        setType(response.data.type)
        changeBG()
        setBG(color)
        console.log(bg);
        }
    return (
        <div>
            <h1>Random joke gen</h1>
            <button onClick={getResponse}>get a joke</button>
            <h1>{joke}</h1>
            <h2>Type: {type}</h2>
            <h3>Color: {bg}</h3>
        </div>
    )
}

export default PersonList;