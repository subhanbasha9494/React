import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnNm, setbtnName] = useState("Login");
  
  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROvviFop6CUi5IA_4oTCPAnTv7k8QSwhObqw&s"
          className="logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>{loggedInUser}</li>
          <button
            className="login"
            onClick={() => {
              btnNm === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnNm}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
