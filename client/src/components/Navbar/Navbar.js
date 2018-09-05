import React from 'react';
import { Link } from 'react-router-dom';

const navbar = (props) => {

    return (
        <div className="navbar">
            <h1 className="logo">THERAPIST KANELOPOLO</h1>
            <input type="checkbox" id="nav-toggle" className="nav-toggle" />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/test">Test</Link></li>
                </ul>
            </nav>
{            <label htmlFor="nav-toggle" className="nav-toggle-label">
                <span></span>
            </label>}
        </div>

        )

}




export default navbar;
