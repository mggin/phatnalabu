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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions, Scene } from 'react-native-router-flux'
import { setSongPage, getFavList, searchAction } from '../../actions'
import { Container, Tabs, Tab,  Header, Item, Input, Icon, Button} from 'native-base';
import { SearchBar } from 'react-native-elements'

class SongList extends Component {

  componentWillUnMount() {
    this.props.getFavList()
  }
  _renderItem(item, index) {
    return (
      <TouchableOpacity onPress={() => this._renderActions(item.id, item.favorite)}
                        activeOpacity={0.7}
                        style={styles.item}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    )
  }
  _renderActions(index, fav) {
    Actions.page()
    this.props.setSongPage(index, fav)
  }
  render() {
    const header = <SearchBar placeholder="Type Here..." onChangeText={(text) => this.props.searchAction(text)}lightTheme round />;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.dataList.searchSongList}
          renderItem={({item, index}) => this._renderItem(item, index)}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={header}
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
function mapStateToProps(state) {
  return {
    dataList: state.dataList
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    setSongPage: setSongPage,
    getFavList: getFavList,
    searchAction: searchAction
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SongList);

