import React from 'react';
import { Route } from 'react-router-dom';
import Search from './components/Search';
import Inventory from './components/Inventory';

export default [
  <React.Fragment key={"Routes"}>
      <Route exact path="/" component={ Search } ></Route>
      <Route exact path="/inventory" component={ Inventory } ></Route>
  </React.Fragment>
];