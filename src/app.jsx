import React from "react";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Time from "./time";



export default function App(){
    return(
        <>

            <Header />
            <Time />
            <Content />
            <Footer />
        </>
    );
}