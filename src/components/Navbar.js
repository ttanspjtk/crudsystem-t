import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-bark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand text-white ms-4" to="./">CRUD</NavLink>
                <div className="d-flex">
                    <NavLink className="me-4 header active" to="all" exact>All Users</NavLink>
                    <NavLink className="me-4 header" to="add" exact>Register</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
