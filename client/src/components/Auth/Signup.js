import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { map } from 'lodash';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import timezones from './timezones';
import PropTypes from 'prop-types';

import TextField from './Fields/field';


class SignUp extends Component {


    state = {
        userName: '',
        password: '',
        passwordConfirmation: '',
        email: '',
        error: null,
        isLoading: false,
        redirect: false

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
          () => {
            this.setState({ isLoading: false,
                            redirect: true })

             }, // seems that is running if no error
          error => this.setState({ error })
        );
    }


    render () {

      if (this.state.redirect) {
        return <Redirect to='/'/>
      }


      if (this.state.error !== null) {
        console.log(Object.keys(this.state.error));

      }

        const options = map(timezones, (value, key) => {
            return <option key={value} value={value}>{key}</option>
        })



        return (
            <div className="form-container">
                <h2>Sign Up for Administrative Preveledges</h2>

                <TextField
                    label="Username"
                    type="text"
                    name="userName"
                    value={this.state.userName}
                    changed={this.handleChange} />

                <TextField
                    label="Password"
                    type="text"
                    name="password"
                    value={this.state.password}
                    changed={this.handleChange} />

                <TextField
                    label="Confirm Password"
                    type="text"
                    name="passwordConfirmation"
                    value={this.state.passwordConfirmation}
                    changed={this.handleChange} />

                <TextField
                    label="Email"
                    type="text"
                    name="email"
                    value={this.state.email}
                    changed={this.handleChange} />

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
                    <button className="btn-form" disabled={this.state.isLoading} onClick={this.onSubmit}>Sign up</button>
                </div>
            </div>
            )
    }

}

SignUp.propTypes = {
 // signUpUser: React.PropTypes.func.isRequired;
};


export default connect(null, actions)(SignUp);
