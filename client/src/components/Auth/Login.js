import React, { Component } from 'react';
import SignUp from './Signup';
import Aux from '../../hoc/auxiliary';

class Login extends Component {


    state = {}



    render () {


        return (
            <Aux>
                <div>Login</div>
                <SignUp />
            </Aux>

            )
    }
}



export default Login;
