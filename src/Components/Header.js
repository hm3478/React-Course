import { LOGO_URL } from "../utils/constants";

const Header =()=>{
    return(
            <div className="header">
                    <div className="logo-container">
                            <img src={LOGO_URL} alt="logo" className="logo" />
                    </div>
                    <div className="menu-items">
                            <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                    <li>Cart</li>
                            </ul>
                    </div>
            </div>
    );
};
export default Header;