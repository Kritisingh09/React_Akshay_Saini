import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import UserContext from "../utils/userContext";

const Header = () => {
  const navElements = ["Home", "About us", "Contact us", "Cart"];
  const [initialBtnname, updateBtnValue] = useState("Login");
  const internetStatus = useInternetStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log("internetStatus", internetStatus);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Status{internetStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <li>{loggedInUser}</li>
          {/* {navElements.map((ele, index) => {
          return (<li key={index}>{ele}</li>);
        })} */}
          <li
            className="login-container"
            onClick={() => {
              console.log("hello cicked btn");

              initialBtnname === "Login"
                ? updateBtnValue("Log-Out")
                : updateBtnValue("Login");
            }}
          >
            {initialBtnname}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
