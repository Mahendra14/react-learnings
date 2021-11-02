import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return (
    <Router>

      {/* //switch to make use so that only one return not all those matched */}
              <Navbar/>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        {/* adding a route for specific person with id and giving the value as childrem and in this we can be able to grab that id component in the person component*/}
        <Route path="/person/:id" children={<Person />}/>
        {/* it matches anything irrespective of anything. */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
