import React from 'react';
import { Route } from 'react-router-dom';
import SearchBooks from './components/Seacrh';
import CrearArticulo from './components/CrearArticulo';

export default [
  <React.Fragment key={"Routes"}>
      <Route exact path="/search" component={ SearchBooks } ></Route>
      <Route exact path="/create-book" component={ CrearArticulo} ></Route>
  </React.Fragment>
];