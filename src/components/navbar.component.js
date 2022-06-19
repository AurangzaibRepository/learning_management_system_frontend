import {Component} from "react";
import {Link} from "react-router-dom";
import './navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark justify-content-between">
                <label className="menu-title">Learning Management System</label>
                <div className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/tutorials" className="nav-link">Instructors</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about-us" className="nav-link">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact-us" className="nav-link">Contact Us</Link>
                    </li>
                </div>
            </nav>
        )
    }
}

export default Navbar;