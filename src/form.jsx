import { useState } from "react";

export default function Form (){

    const [fullname , updatename] = useState({fname: "", lname: ""});
   
    function handle(event){
        const {name, value} = event.target; 
        updatename((prevvalue)=>{
            return{
                ...fullname,
                [name] : value
            };
        })
    }

    return (
        <div className="form">
            <h3>Hello {fullname.fname} {fullname.lname}</h3>
            <input  onChange={handle} value={fullname.fname} name="fname" placeholder="First Name"/>
            <input  onChange={handle} value={fullname.lname} name="lname" placeholder="Last Name"/>
            <button>Click here</button>
        </div>
    );
}