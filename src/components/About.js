import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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
    super(props);
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
        <div>
          LoggedIn User:
          <UserContext.Consumer>
            {({loggedInUser}) => <h2>{loggedInUser}</h2>}
          </UserContext.Consumer>
        </div>
        <User />
        {/* <UserClass /> */}
      </div>
    );
  }
}

export default About;
