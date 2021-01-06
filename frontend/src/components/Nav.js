import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        const navStyle = {
            color: 'white'
        }
        return (
            <nav>
                <h3>Site Logo</h3>
                <ul className="nav-links">
                    <Link style={navStyle} to="/">
                        <li>Home</li>
                    </Link>
                    <Link style={navStyle} to="/contact-manager">
                        <li>Contacts Manager</li>
                    </Link>
                    <Link style={navStyle} to="/fortnite">
                        <li>Fortnite</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default Nav;