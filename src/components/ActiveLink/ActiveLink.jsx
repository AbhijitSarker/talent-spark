import React from 'react';
import './ActiveLink.css'
import { NavLink } from 'react-router-dom';
const ActiveLink = ({ to, children }) => {
    return (

        <NavLink
            to={to}
            className={`mr-10  text-purple-600 hover:text-blue-500 font-medium  block ${({ isActive }) => isActive ? "active" : ""}`}
        >
            {children}
        </NavLink>

    );
};

export default ActiveLink;