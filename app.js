//const heading=React.createElement("h1",{id:"heading",ayz:"he"},"Hello world from React!") 
// const root=ReactDOM.createRoot(document.getElementById("root")) 
// root.render(heading);   
 
/** 
 * <div id="parent"> 
    <div id="child"> 
        <h1>Hello I am React!</h1> 
    </div> 
</div> 
 */ 
const parent=React.createElement("div",{id:"parent"}, 
    React.createElement("div",{id:"child"}, 
    React.createElement("h1",{},"Hello I am React!"))); 
    const root2=ReactDOM.createRoot(document.getElementById("root")); 
    root2.render(parent); 
/** 
 * <div id="parent"> 
    <div id="child"> 
        <h1>Hello I am React!</h1> 
          <h2>Hello I am React sibling</h1> 
    </div> 
</div> 
 */ 
const parentWithSiblings=React.createElement("div",{id:"parent"}, 
    React.createElement("div",{id:"child"},[ React.createElement("h1",{},"Hello I am React!"), React.createElement("h2",{},"Hello I am React Sibling!")] 
   )); 
    const root3=ReactDOM.createRoot(document.getElementById("root")); 
    root3.render(parentWithSiblings); 
    /** 
 * <div id="parent"> 
    <div id="child"> 
        <h1>Hello I am React!</h1> 
          <h2>Hello I am React sibling</h1> 
    </div> 
      <div id="child2"> 
        <h1>Hello I am React!</h1> 
          <h2>Hello I am React sibling</h1> 
    </div> 
</div> 
 */ 
const parentWithChildren=React.createElement("div",{id:"parent"}, 
   [React.createElement("div",{id:"child"},[ React.createElement("h1",{},"Hello I am React!"), React.createElement("h2",{},"Hello I am React Sibling!")] 
),React.createElement("div",{id:"child2"},[ React.createElement("h1",{},"Hello I am React-2!"), React.createElement("h2",{},"Hello I am React Sibling!-2")] 
)] ); 
const root4=ReactDOM.createRoot(document.getElementById("root")); 
root4.render(parentWithChildren);