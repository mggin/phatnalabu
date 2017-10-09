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
import { getSongList } from '../utils'
import { Actions, Scene } from 'react-native-router-flux'


export default class SongList extends Component {

  constructor(props) {
    super(props);
  }

  _renderItem(item, index) {
    return (
      <TouchableOpacity onPress={() => Actions.page({index: index})}
                        activeOpacity={0.7}
                        style={styles.item}>
        <Text>{item}</Text>
      </TouchableOpacity>
    )
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

