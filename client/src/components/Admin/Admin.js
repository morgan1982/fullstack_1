import React, { Component } from 'react';

import Aux from '../../hoc/auxiliary';


class Admin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: '',
            pass: ''
        }
    }

    componentDidMount() {
        console.log("hello admin");
        console.log(this.props.location)


        }



    render () {



        return (

            <Aux>
                Admin Panel
            </Aux>


            )
    }
}


export default Admin;
