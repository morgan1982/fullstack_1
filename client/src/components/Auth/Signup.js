import React, { Component } from 'react';
import { map } from 'lodash';

import timezones from './timezones';

class SignUp extends Component {



    state = {
        username: "",
        password: "",
        passwordConfirmation: "",
        email: ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }


    render () {

        const options = map(timezones, (value, key) => {
            return <option key={value} value={value}>{key}</option>
        })



        return (
            <div className="form-container">
                <h2>Sign Up for Administrative Preveledges</h2>

                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input className="form-control"
                           type="text"
                           name="username"
                           value={this.state.username}
                           onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input className="form-control"
                           type="text"
                           name="password"
                           onChange={this.handleChange}
                           value={this.state.password} />
                </div>

                <div className="form-group">
                    <label className="control-label">Confirm Password</label>
                    <input className="form-control"
                           type="text"
                           name="passwordConfirmation"
                           onChange={this.handleChange}
                           value={this.state.passwordConfirmation} />
                </div>

                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input className="form-control"
                           type="text"
                           name="email"
                           onChange={this.handleChange}
                           value={this.state.email} />
                </div>

                <div className="form-group">
                    <label className="control-label">Timezone</label>
                    <select className="form-control"
                           type="text"
                           name="email"
                           onChange={this.handleChange}
                           value={this.state.email}>
                    <option value="" disabled>Choose Your Timezone</option>
                    {options}

                    </select>
                </div>


                <div className="form-group">
                    <button onClick={this.onSubmit}>Sign up</button>
                </div>
            </div>
            )
    }
}



export default SignUp;
