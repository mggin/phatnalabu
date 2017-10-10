/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

//import Realm from 'realm'
import fs from 'react-native-fs'
import { songList } from '../data'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions, Scene } from 'react-native-router-flux'
import { setSongPage } from '../../actions'


class SongList extends Component {

  constructor(props) {
    super(props);
  }

  _renderItem(item, index) {
    return (
      <TouchableOpacity onPress={() => this._renderActions(index)}
                        activeOpacity={0.7}
                        style={styles.item}>
        <Text>{item}</Text>
      </TouchableOpacity>
    )
  }
  _renderActions(index) {
    Actions.page()
    this.props.setSongPage(index)
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={songList}
          renderItem={({item, index}) => this._renderItem(item, index)}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    //marginRight: 5,
    //marginTop: 5,
    //marginLeft: 5,
    paddingLeft: 20,
    padding: 15,
    
    // backgroundColor: '#2980b9',
    borderBottomWidth: StyleSheet.hairlineWidth,
    // borderRadius: 7,
    borderColor: '#2c3e50'
  },
  });

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    setSongPage: setSongPage
  }, dispatch);
}

export default connect(null, matchDispatchToProps)(SongList);

