import React from "react";

class UserClass extends React.Component {
    constructor(props){ /**constructor is used to get the props and it is called when component is initialized
         */
        super(props)
        this.state = {
            count:0,
            count2:2
        }
    }

    render(){
        const { name,location} = this.props;
        const {count,count2} = this.state;
        return(
            <div className="user-card">
                 <h1>Class Component</h1>
                 <h3>Count: {count}</h3>
                 <h3>Count2: {count2}</h3>
                 <button onClick={() => {
                    this.setState({
                        count:this.state.count + 1,
                        count2:this.state.count2 +2,
                    })
                 }}>Click</button>
                <h3>{name}</h3>
                <h3>{location}</h3>
            </div>
        )
    }
}

export default UserClass;