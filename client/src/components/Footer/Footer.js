import React from 'react';
import facebook from '../../Assets/Images/facebook-letter-logo.svg';
import linkedin from '../../Assets/Images/linkedin-logo.svg';


const Footer = (props) => {


    return (

        <div className="footer">
            <a href="#"><img src={facebook} alt="facebook logo" /></a>
            <a href="#"><img src={linkedin} alt="linkedin logo" /></a>
        </div>
        )

}


export default Footer;
