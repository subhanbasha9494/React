import User from './User';
import UserClass from './UserClass';

const About = () => {
    return (
        <div>
            <h1>About</h1>
            {/* <User name={"Ayman"}/> */}
            <UserClass name={"Ayman"} location={"Kadapa"}/>
        </div>
    )
}

export default About;