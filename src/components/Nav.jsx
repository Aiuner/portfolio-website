import { logDOM } from '@testing-library/react';
import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';

import './styles/nav.css';

export default function Nav() {
  return (
    <div className="nav-content">
      <img src={Logo} className="logo" alt="Cassandra's Logo" />
      <nav>
        <ul>
          <li className="page-links">
            <NavLink exact to="/" activeClassName="current-path">Home</NavLink>
          </li>

          <li className="page-links">
            <NavLink to="/about" activeClassName="current-path">About Me</NavLink>
          </li>

          <li className="page-links">
            <NavLink to="/projects" activeClassName="current-path">My Projects</NavLink>
          </li>

          <li className="page-links">
            <NavLink to="/contact-me" activeClassName="current-path">Contact Me</NavLink>
          </li>
        </ul>
      </nav>
      <h1>Footer stuff will go down here.</h1>
    </div>
  );
}
