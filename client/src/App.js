import React, { useState } from 'react'
import axios from "axios"
import "./App.css"
function PersonList() {
    const [joke, setJoke] = useState("");
    const [type, setType] = useState("");
    const [bg, setBG] = useState("")
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
    }
    return (
        <div style={{backgroundColor: {bg}}}>
            <h1>Person list</h1>
            <button onClick={getResponse}>get a joke</button>
            <h1>{joke}</h1>
            <h2>Type: {type}</h2>
        </div>
    )
}

export default PersonList;