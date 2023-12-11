import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
        const[buttonName,setButtonName]=useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>
      <div className="menu-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button className="log" onClick={()=>{
                buttonName==="Login" ? setButtonName("Logout"):setButtonName("Login");
        }}>{buttonName}</button>
        </ul>
        
      </div>
    </div>
  );
};
export default Header;
