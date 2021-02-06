import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import Hero from './Hero';

function Nav() {
    
        const navStyle = {
            color: 'white'
        }
        // const counter = useSelector(state => state.counter);
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand" href="#">Navbar</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <Link style={navStyle} to="/">
                            <li className="nav-item active">
                                <span className="nav-link" href="#">Home <span className="sr-only">(current)</span></span>
                            </li>
                        </Link>
                        <Link style={navStyle} to="/contact-manager">
                            <li className="nav-item">
                                <span className="nav-link" href="#">Contacts Manager</span>
                            </li>
                        </Link>
                        <Link style={navStyle} to="/fortnite">
                            <li className="nav-item">
                                <span className="nav-link" href="#">Fortnite</span>
                            </li>
                        </Link>
                        <Link style={navStyle} to="/validation_form">
                            <li className="nav-item">
                                <span className="nav-link" href="#">User (Redux)</span>
                            </li>
                        </Link>
                        
                        <Link style={navStyle} to="/hero">
                            <li className="nav-item">
                                <span className="nav-link" href="#">Error Boundary</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>

        );
    }


export default Nav;