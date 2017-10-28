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
import Realm from 'realm'
import { initialFont, deviceChanged } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import Study from './components/study'
//import Test from './components/test'
//import Setting from './components/setting'
//import About from './components/about'

class Route extends Component {
  componentWillMount() {
    this.props.initialFont()
    //this.props.deviceChanged()

    
  }
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


function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    initialFont: initialFont,  
    deviceChanged: deviceChanged
  }, dispatch)
}
export default connect(null, matchDispatchToProps)(Route)
