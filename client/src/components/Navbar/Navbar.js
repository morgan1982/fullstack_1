import React from 'react';
import { Link } from 'react-router-dom';

const navbar = (props) => {

    return (
        <div className="navbar">
            <h1 className="logo">THERAPIST</h1>
            <input type="checkbox" id="nav-toggle" className="nav-toggle" />
            <nav>
                <ul>
                    <li><Link to="/"><span>H</span>ome</Link></li>
                    <li><Link to="/blog"><span>B</span>log</Link></li>
                    <li><Link to="/contact"><span>C</span>ontact</Link></li>
                    <li><Link to="/about"><span>A</span>bout</Link></li>
                    <li><Link to="/test"><span>T</span>est</Link></li>
                </ul>
            </nav>
            <label htmlFor="nav-toggle" className="nav-toggle-label">
                <span></span>
            </label>
        </div>

        )

}




export default navbar;
