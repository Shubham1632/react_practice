import React from "react";
import image from "./pic1.png";

export default function Content(){
    return(
       <> 
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt deserunt cum obcaecati 
        accusantium maiores ad quaerat. Omnis, laudantium. Minus dignissimos iusto corrupti maiores eos reiciendis, 
        commodi officia ut laudantium quo provident natus hic distinctio neque aliquid quidem fugiat, quas quod repudiandae? 
        Culpa libero dolorum quisquam!</p>
        <img src={image} alt="not here" />
        </>
    );
}