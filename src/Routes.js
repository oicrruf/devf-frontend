import React from 'react';
import { Route } from 'react-router-dom';
import Search from './components/Search';
import CrearArticulo from './components/CrearArticulo';

export default [
  <React.Fragment key={"Routes"}>
      <Route exact path="/" component={ Search } ></Route>
      <Route exact path="/create-book" component={ CrearArticulo} ></Route>
  </React.Fragment>
];