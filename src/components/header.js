import React from 'react';
import logo from './logo.png'

const Header = () => {
    return (
    <div className="info">    
        <div className="Sinfo">
            <h2>Sobrus Compte démo (NEW)</h2>
            <ul>
                <li><i className="fa fa-user-o"></i> DOUNIA RACHID</li>
                <li><i className="fa fa-phone"></i> 053755554454</li>
                <li><i className="fa fa-map-marker"></i> Merci de votre visite</li>
            </ul>
        </div>
        <div className="logo">
            <img width='100px' height='100px' src={logo} alt="nothing"/>
        </div>
    </div>    
    );
}

export default Header;
