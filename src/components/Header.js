import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnNm, setbtnName] = useState("Login");
  const {loggedInUser} = useContext(UserContext);
  //Selector is a hook inside react
  //Subscribing to the store using the selector

  const cartItems = useSelector((store) => store.cart.items);

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
          <li>
            <Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
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
