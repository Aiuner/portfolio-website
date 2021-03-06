import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';

import './styles/nav.css';

export default function Nav() {
  return (
    <div className="nav-content">
      <img src={Logo} className="logo" alt="Cassandra's Logo" />
      <h1 className="title">Cassandra Doeinck</h1>
      <h2 className="descriptors">Software Engineer | Digital Artist</h2>
      <nav>
        <ul>
          <li className="page-links">
            <NavLink exact to="/" activeClassName="current-path">About Me</NavLink>
          </li>

          <li className="page-links">
            <NavLink to="/projects" activeClassName="current-path">My Projects</NavLink>
          </li>

          <li className="page-links">
            <NavLink to="/contact-me" activeClassName="current-path">Contact Me</NavLink>
          </li>
        </ul>
      </nav>
      <p className="footer">© 2020.<br/> Cassandra Doeinck. All rights reserved.</p>
    </div>
  );
}
