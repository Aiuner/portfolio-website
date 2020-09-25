import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './layouts/Layout';
import About from './screens/About';
import Projects from './screens/Projects';
import ContactMe from './screens/ContactMe';
import Home from './screens/Home';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Layout>
      <h1>This is the home page.</h1>
      <Switch>
        <Route path='/about'>
          <About />
        </Route>

        <Route path='/projects'>
          <Projects />
        </Route>

        <Route path='/contact-me'>
          <ContactMe />
        </Route>

        <Route path='/' >
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
