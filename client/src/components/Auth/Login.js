import React, { Component } from 'react';
import Aux from '../../hoc/auxiliary';
import TextField from './Fields/field';



class Login extends Component {


    state = {
		username: '',
    	password: '',
    	isLoading: false
    }

	
	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit = (e) => {
		e.preventDefault();
	}

	render () {
		const { username, password, isLoading } = this.state;
		
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



export default Login;
