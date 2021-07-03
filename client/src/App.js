import React, { useState } from 'react'
import axios from "axios"

function PersonList() {
    const [joke, setJoke] = useState("");
    const [type, setType] = useState("")
    async function getResponse(){
        const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
        console.log(response.data);
        setJoke(`${response.data.setup}  ... ${response.data.punchline}`);
        setType(response.data.type)
    }
    return (
        <div>
            <h1>Person list</h1>
            <button onClick={getResponse}>get a joke</button>
            <h1>{joke}</h1>
            <h2>Type: {type}</h2>
        </div>
    )
}

export default PersonList
