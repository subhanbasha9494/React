import User from './User';
import UserClass from './UserClass';

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <User/>
            <UserClass name={"Ayman"} location={"Bang"}/>
        </div>
    )
}

export default About;