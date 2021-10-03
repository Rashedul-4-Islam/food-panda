import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../image/logo.55c2c6fa.svg';
import './Header.css'
const Header = () => {
    return (
        <>
             <div>
             <img className="logo" src={logo} alt="" />
             </div>
             <nav className="navbar">
                <div>
                <NavLink to="/home"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "blue"
                    }}>
                     Home
                 </NavLink>
                 <NavLink to="/foods"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "blue"
                    }}>
                     Foods
                 </NavLink>
                 <NavLink to="/track"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "blue"
                    }}>
                     Track
                 </NavLink>
                 <NavLink to="/support"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "blue"
                    }}>
                     Support
                 </NavLink>
                </div>
             </nav>
           
        </>
    );
};

export default Header;