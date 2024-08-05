import { NavLink } from "react-router-dom";
import "./Footer.css"
const Footer = () => {
    return ( 
        <>
        <footer>
            <div className="footer-container">
                <NavLink>About us</NavLink>
                <NavLink>Contact us</NavLink>
                <NavLink>FAQ</NavLink>
                <NavLink>Partners</NavLink>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;