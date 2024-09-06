import React from "react";
import ReactDOM from "react-dom/client";

//React Element -Core React
// const heading=React.createElement("h1",{id:"heading"},"Hello Episode 3");
// console.log("heading",heading);
//JSX
//React element using JSX
const jsxHeading=(<h1 id="heading" className="heading" tabIndex="1">
    Namaste React using JSX</h1>)
console.log("jsxHeading",jsxHeading);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading)