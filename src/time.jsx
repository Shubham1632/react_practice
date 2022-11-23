import { useState } from "react";


export default function Time(){


    var [time, settime] = useState( new Date().toLocaleTimeString());

    function updatetime(){
        time = settime( new Date().toLocaleTimeString());
    }
    return (
        <>
        <h1>The current time is {time}</h1>
        <button onClick={updatetime}>update</button>
        </>
    );
}