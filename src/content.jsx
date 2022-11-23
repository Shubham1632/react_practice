import React from "react";
import Note from "./note";
import notelist from "./task";

function makenote(note){
    return <Note key = {note.id} heading = {note.heading} description = {note.description}> </Note>
}

let completed = true;

function rendercondition(){
    return completed ? <h1>ther notes are completed</h1> : <>{notelist.map(makenote)}</>;

}

export default function Content(){
    return(
       <>
       {rendercondition()}
       
       </>
    );
}