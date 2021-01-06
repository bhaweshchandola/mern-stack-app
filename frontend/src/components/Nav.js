import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        const navStyle = {
            color: 'white'
        }
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
              <Link style={navStyle} to="/">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                </Link>
                <Link style={navStyle} to="/contact-manager">
                <li class="nav-item">
                  <a class="nav-link" href="#">Contacts Manager</a>
                </li>
                </Link>
                <Link style={navStyle} to="/fortnite">
                <li class="nav-item">
                  <a class="nav-link" href="#">Fortnite</a>
                </li>
                </Link>
              </ul>
            </div>
          </nav>
            
        );
    }
}

export default Nav;