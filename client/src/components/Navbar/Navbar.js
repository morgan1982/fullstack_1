import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/perception.png';
import { connect } from 'react-redux';

class  Navbar extends Component {

    constructor(props) {

        super(props);
        this.state = {
            toggled: false,
            logged: true
        }
    }

    toggleHandler = () => {
        this.setState((prevState) => {
            return { toggled: !prevState.toggled }
        })
    }

    checkAuth () {
        let logger = null
        if (this.props.auth) {
            logger = this.props.auth.message;
            // console.log("inside check auth", logger)
        }
        switch(logger) {
            case null:
                // return 'Stiil logging'
                // break;
            case "false":
                return 'loggedout'
                break;
            default:
                return 'logged'

        }
    }

    Admin = () => {

        if (this.props.auth) {
            if (this.props.auth.user) {
                 return (
                    // <li><Link to="/admin"><span>A</span>dmin</Link></li>
                    "logged"
                    )
            } else {
                return null
            }
        }

    }
// <li className={ this.checkAuth() }><Link to="/admin"><span>A</span>dmin</Link></li>

// admin will be a protected route
// if the users is not logged in will redirect to login
// otherwhise it will show the admin

    render () {
        console.log(this.props);

        const toggle = this.state.toggled ? "active" : "pasive";
        // const adminLogged = this.state.logged ? "logged" : "";



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
                    <li className={this.Admin()}><Link to="/admin"><span>A</span>dmin</Link></li>
                </ul>
            </nav>
        </div>

            )
    }
}

function mapStateToProps ({ auth }) {

    return { auth };

}




export default connect(mapStateToProps, null)(Navbar);
