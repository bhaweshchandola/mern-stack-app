import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        const navStyle = {
            color: 'white'
        }
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
                    </ul>
                </div>
            </nav>

        );
    }
}

export default Nav;