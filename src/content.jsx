import React from "react";
import Note from "./note";
import notelist from "./task";

function makenote(note){
    return <Note key = {note.id} heading = {note.heading} description = {note.description}> </Note>
}

export default function Content(){
    return(
       <>
       <p>these are the notes</p> 
       {notelist.map(makenote)}
       </>
    );
}