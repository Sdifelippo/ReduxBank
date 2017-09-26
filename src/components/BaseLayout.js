import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';
import Button from 'muicss/lib/react/button';

function BaseLayout ({children}){
    return (
        <div className="mainPage">
            <div className="navigation">
                <Button variant="raised" ><NavLink className="navItem" to="/">Home</NavLink ></Button>
                <Button variant="raised"><NavLink className="navItem" to="/users">Users</NavLink></Button>
                <Button variant="raised"><NavLink className="navItem" to="/users">Nav</NavLink></Button>
            </div>
            {children}
        </div>
    );
  }




export default BaseLayout;
