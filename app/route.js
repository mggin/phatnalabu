/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {Router,
        Scene,
        Actions,
} from 'react-native-router-flux'
import Menu from './components/menu'
import Page from './components/pages'
import Setting from './components/setting'
//import Study from './components/study'
//import Test from './components/test'
//import Setting from './components/setting'
//import About from './components/about'

export default class Route extends Component {

  render() {
    return (
      <Router>
        <Scene key='root' 
               hideNavBar={true}>
          <Scene key='menu'
                 initial={true}
                 component={Menu}/>
          <Scene key='page'
          //initial={true}
                 component={Page}/>
          <Scene key='setting'
                 component={Setting}/>
        </Scene>
      </Router>
    )
  }
}
