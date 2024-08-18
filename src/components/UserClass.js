import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    /**constructor is used to get the props and it is called when component is initialized
     */
    //console.log("child constructor");
    super(props);
    this.state = {
      userInfo: {
        name: "sami",
        location: "Kadapa",
      },
    };
  }

  componentDidMount() {
    //console.log("Child componentDidMount");
    this.timer = setInterval(() => {
      console.log("Testing");
    }, 1000);
  }

  // async componentDidMount() {

  //   const data = await fetch("https://api.github.com/users/subhanbasha9494");
  //   const json = await data.json();
  //   this.setState({
  //     userInfo:json
  //   });
  //   console.log(json);
  // }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("componentwill unmount");
    clearInterval(this.timer);
  }

  render() {
    //console.log("child render");
    // const { name, location } = this.props;
    // const { count, count2 } = this.state;
    const { login, created_at } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h1>Class Component</h1>
        <h3>Count: {count}</h3>
        <h3>Count2: {count2}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Click
        </button> */}
        <h3>Name: {login}</h3>
        <h3>Location: {created_at}</h3>
      </div>
    );
  }
}

export default UserClass;
