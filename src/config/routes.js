import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "../components/Home";
import About from "../components/About";
import Works from "../components/Works";
import Contact from "../components/Contact";

export default (
	<Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/works" component={Works} />
        <Route path="/contact" component={Contact} />
  </Switch>
)