import { useState } from "react";

export default function Hook(){
    
    const [ismouseover, changecolor] = useState(true);
    const currstyle = {backgroundColor : ismouseover ? "green" : "blue", padding: "10px", margin : "20px"};
    function update(){
        changecolor(true);
    }
    function remove(){
        changecolor(false)
    }

    return(
        <>
            <button style= {currstyle} onMouseOver= {update} onMouseOut= {remove}> Change my color</button>
        </>
    );
}