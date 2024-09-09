import React from "react";
import ReactDOM from "react-dom/client";
//React element using JSX
//React element
// const heading=(<h1 id="heading" className="heading" tabIndex="1">
//     Namaste React using JSX</h1>)
// //React component-functional component

const Title=()=>(
<h3 className="title">Practice React

</h3>

)
//React Element or jsx
const subTitle=(
    <p>Here Akshay Saini is Teaching React</p>
)
const elem=(
    <span>It is a React Element</span>
)
//<Title/> and <Title></Title> are same 
const HeadingComponent=()=> (
    <div id="container">
        <Title/> 
        <Title></Title>
        {Title()}
        
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)
root.render(<HeadingComponent/>) // this is how babel understands to render a component