import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';


import reducers from './reducers';
import MovieList from './components/list_movies';
import IMDBMovie from './components/IMDBMovie.js';

//BrowserRouter function looks through the history library and then decides which component can be shown
//The Route function decides which component to render based on the path

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
          <Route path="/" component = { MovieList } ></Route>
          <Route path="/imdb/:id" component = { IMDBMovie }></Route>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#contentHolder'));
