import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../image/logo.55c2c6fa.svg';
import './Header.css'
const Header = () => {
    const {user,logOut} = useAuth();
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
                     Order-Now
                 </NavLink>
                 <NavLink to="/support"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "blue"
                    }}>
                     Support
                 </NavLink>
                 {/* <NavLink to="/register"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "blue"
                    }}>
                     Register
                 </NavLink> */}
                 <span className="text-warning me-3 fw-bold">{user.displayName}</span>
                {
                    user.email ? 
                    <button onClick={logOut} className="btn btn-warning">Log Out</button> :
                    <NavLink to="/login">Login</NavLink>
                }
                </div>
             </nav>
           
        </>
    );
};

export default Header;