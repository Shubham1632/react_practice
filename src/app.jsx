import React from "react";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Hook from "./hooks";



export default function App(){
    return(
        <>

            <Header />
            <Hook/>
            <Content />
            <Footer />
        </>
    );
}