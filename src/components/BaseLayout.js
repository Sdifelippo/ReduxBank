import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';

function BaseLayout ({children}){
    return (
        <div className="mainPage">
            <div className="navigation">
                <NavLink className="navItem" to="/">Home</NavLink >
                <NavLink className="navItem" to="/users">Users</NavLink>
                <NavLink className="navItem" to="/users">Nav</NavLink>
            </div>
            {children}
        </div>
    );
  }




export default BaseLayout;
