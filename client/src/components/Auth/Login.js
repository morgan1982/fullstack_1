import React, { Component } from 'react';
import Aux from '../../hoc/auxiliary';
import TextField from './Fields/field';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { login } from '../../actions';


class Login extends Component {


    state = {
		username: '',
		password: '',
		isLoading: false,
        redirect: false
    }


	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit = (e) => {
		e.preventDefault();
        this.setState({ isLoading: true });
        const { username, password } = this.state;
        const credentials = { user: username, password };
        this.props.login(credentials)
            .then(
                data => { console.log('returned from login', data ); this.setState({ isLoading: false }) },
                error => { console.log(`after singin validation ${error}`); this.setState({ isLoading: false }) }
                )

	}

	render () {
		const { username, password, isLoading } = this.state;

        if (this.state.redirect) {
            return <Redirect to='/' />
        }

        return (
			<Aux>
				<form className="form-container" onSubmit={this.onSubmit}>
					<h2>Login As Administrator</h2>
					<TextField
						label="Username"
						type="text"
						name="username"
						value={username}
						changed={this.changeHandler} />

					<TextField
						label="Password"
						type="text"
						name="password"
						value={password}
						changed={this.changeHandler} />
					<div className="form-group">
						<button className="btn-form" disabled={isLoading}>Login</button>
					</div>
                </form>
                <h2>{ username }</h2>
                <h2>{ password }</h2>

            </Aux>

            )
    }
}




export default connect(null, { login })(Login);
