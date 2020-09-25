import React from 'react';

import Nav from '../components/Nav';

import './layout.css';

export default function Layout(props) {
  return (
    <>
      <main>
        <div className="nav-menu">
          <Nav />
        </div>
        <div className="page-content">
          {props.children}
        </div>
      </main>
    </>
  )
}