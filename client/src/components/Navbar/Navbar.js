import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/perception.png';

class  Navbar extends Component {

    constructor(props) {

        super(props);
        this.state = {
            toggled: false
        }
    }

    toggleHandler = () => {
        this.setState((prevState) => {
            return { toggled: !prevState.toggled }
        })
    }




    render () {

        const toggle = this.state.toggled ? "active" : "pasive";



        return (

        <div className="navbar">
            <img className="logo" src={logo} alt="psycology logo" />
            <h1 className="banner"><span>Know</span>Psyself</h1>
            <div className="toggle-container" onClick={this.toggleHandler}>
                <div className="nav-toggle"></div>
            </div>

            <nav className={toggle}>
                <ul>
                    <li><Link to="/"><span>H</span>ome</Link></li>
                    <li><Link to="/blog"><span>B</span>log</Link></li>
                    <li><Link to="/contact"><span>C</span>ontact</Link></li>
                    <li><Link to="/about"><span>A</span>bout</Link></li>
                    <li><Link to="/test"><span>T</span>est</Link></li>
                </ul>
            </nav>
        </div>

            )
    }
}




export default Navbar;
