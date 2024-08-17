import { useState } from "react";
const User = ({name}) => {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    return (
        <div className="user-card">
            <h1>Functional Component</h1>
            <h3>Count: {count}</h3>
            <h2>Name: {name}</h2>
            <h2>Location:Kadapa</h2>
            <h2>Cotact:9494880880</h2>
        </div>
    )
}

export default User;