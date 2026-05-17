import React from "react";
import Home from "./Home";
import About from "./About"
import AddJob from "./AddJob";
import "./Layout.css";
import {Link, Outlet } from "react-router-dom";
function Layout(){
    return(
        <header className="header">
            <h1 className="logo">Job portal</h1>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                 <Link to="/jobs">Jobs</Link>
                  <Link to="/addjob">Add Job</Link>
            </nav>
            <Outlet/>
        </header>)
    
}
export default Layout;