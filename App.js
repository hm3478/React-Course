import React from "react";
import  ReactDOM  from "react-dom/client";
// const naame = React.createElement("p",{},"MY NAME IS HARSH !");
//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(naame);



const parent = React.createElement("div",{id:"parent"},
[
React.createElement("div",{id:"child"},
[      
        React.createElement("h1",{},"i am harsh"),
        React.createElement("h1",{},"hi"),
        React.createElement("h2",{},"hello")
]),
React.createElement("div",{id:"child2"},[
 React.createElement("h1",{},"hi am second child"),
 React.createElement("h1",{},"hi iam harsh misgra ")
])
]
);
console.log(parent);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);