import React from "react";

class UserClass extends React.Component {
    constructor(props){ /**constructor is used to get the props and it is called when component is initialized
         */
        super(props)
    }

    render(){
        const { name,location} = this.props;
        return(
            <div>
                <h1>{name}</h1>
                <h1>{location}</h1>
            </div>
        )
    }
}

export default UserClass;