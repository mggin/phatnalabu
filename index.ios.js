/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import allReducers from './reducers'
import Route from './app/route'

/*
const store = createStore(
  allReducers
);


export default class Phatnalabu extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    )
  }
}
*/
AppRegistry.registerComponent('phatnalabu', () => Route);
