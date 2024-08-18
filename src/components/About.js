import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             {/* <User name={"Ayman"}/> */}
//             <UserClass name={"Ayman"} location={"Kadapa"}/>
//             <UserClass name={"Ayman"} location={"Kadapa"}/>
//         </div>
//     )
// }

class About extends Component {
  constructor(props) {
    super(props)
    //console.log("parent constructor");
  }

  componentDidMount() {
    //console.log("parent componentDidMount");
  }

  render() {
    //console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <User/>
        {/* <UserClass /> */}
      </div>
    );
  }
}

export default About;
