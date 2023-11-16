import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import { useState } from "react";

const AppLayout =()=>{
        return(
                <div className="app">
                <Header/>
                <Body/>
                <Footer/>
                </div>
        );
};
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);