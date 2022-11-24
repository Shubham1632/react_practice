import { useState } from "react";

export default function Hook(){
    
    const [ismouseover, changecolor] = useState(true);
    const [username, setusername] = useState("");
    const currstyle = {backgroundColor : ismouseover ? "green" : "blue", padding: "10px", margin : "20px"};
    function update(){
        changecolor(true);
    }
    function remove(){
        changecolor(false)
    }
    const [name, changename] = useState("");
    function handle(element){
        changename(element.target.value);
    }
 
    function click(){
        setusername(name);
    }

    return(

        <>
            <h2>Hello {username}</h2>
            <input onChange={handle} type="text" placeholder="What is your name"/>
            <button style= {currstyle} onMouseOver= {update} onMouseOut= {remove} onClick={click}> Change my color</button>
        </>
    );
}