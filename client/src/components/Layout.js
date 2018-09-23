import React from 'react';
import Navbar from './Navbar/Navbar';
import Aux from '../hoc/auxiliary';

const layout = (props) => (

        <Aux>
            <Navbar />
                {props.children}
        </Aux>

    )


export default layout;
