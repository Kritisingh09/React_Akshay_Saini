import { Component } from "react";
import UserClass from "./UserClass";

// const About =()=>{
//     return (
//         <><h1>This page is about the React details</h1>
//         <UserClass name={"Kriti"} profession={"Senior Software Engineer"}/></>
//     )
// }
class About extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h2>Customer Details</h2>
        <UserClass name={"Kriti"} profession={"Senior Software Engineer"}/>
      </div>
    );
  }
}
export default About;
