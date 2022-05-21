import { Link } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">Logo</div>
            <div className="menu">
                <ul>
                    <li><Link to="#" className="nav-link">Home</Link></li>
                    <li><Link to="#" className="nav-link">Deputados</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;