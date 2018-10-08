import React, { Component } from 'react';
import { map } from 'lodash';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import timezones from './timezones';
import PropTypes from 'prop-types';


class SignUp extends Component {


    state = {
        userName: '',
        password: '',
        passwordConfirmation: '',
        email: '',
        error: null,
        isLoading: false

}
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ isLoading: true }); // disables the button 
        const { userName, password } = this.state;
        const gredentials = { user: userName, password };
        this.props.signUpUser(gredentials, (resFromAction) => {
            console.log('inside the client after the action', resFromAction);
        }).then(
          () => { this.setState({ isLoading: false }) }, // seems that is running if no error
          error => this.setState({ error })
        );
    }


    render () {


      if (this.state.error !== null) {
        console.log(Object.keys(this.state.error));

      }

        const options = map(timezones, (value, key) => {
            return <option key={value} value={value}>{key}</option>
        })



        return (
            <div className="form-container">
                <h2>Sign Up for Administrative Preveledges</h2>

                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        className="form-control"
                        type="text"
                        name="userName"
                        value={this.state.userName}
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
                    <button disabled={this.state.isLoading} onClick={this.onSubmit}>Sign up</button>
                </div>
            </div>
            )
    }

}

SignUp.propTypes = {
 // signUpUser: React.PropTypes.func.isRequired;
};


export default connect(null, actions)(SignUp);
