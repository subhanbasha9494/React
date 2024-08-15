import { useState } from "react";

const Header = () => {
  const [btnNm,setbtnName] = useState("Login");
    return (
      <div className="header">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROvviFop6CUi5IA_4oTCPAnTv7k8QSwhObqw&s"
            className="logo"
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login" onClick={() => {btnNm === 'Login'?setbtnName('Logout'):setbtnName('Login')}}>{btnNm}</button>
          </ul>
        </div>
      </div>
    );
  };   

  export default Header;