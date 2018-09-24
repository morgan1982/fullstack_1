import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import Aux from '../hoc/auxiliary';



const layout = (props) => (

        <Aux>
            <Navbar />
                {props.children}
            <Footer />
        </Aux>

    )


export default layout;
