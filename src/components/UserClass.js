import { Component, React } from "react";
class UserClass extends Component {
  constructor(props) {
    console.log("constrcutor", props);
    super(props);
    this.state={
        count:0
    }
    console.log("super constrcutor", props);
  }
  componentDidMount(){
    console.log("component mounted");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h2>Name {this.props.name} </h2>
        <h2>Age {28}</h2>
        <h2>Profession {this.props.profession}</h2>
        <button type="btn" onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}
        >Click</button>
        <div>Check Count : {this.state.count}</div>
      </div>
    );
  }
}
export default UserClass;
