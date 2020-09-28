import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './layouts/Layout';
import About from './screens/About';
import Projects from './screens/Projects';
import ContactMe from './screens/ContactMe';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/projects'>
          <Projects />
        </Route>

        <Route path='/contact-me'>
          <ContactMe />
        </Route>

        <Route path='/'>
          <About />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
