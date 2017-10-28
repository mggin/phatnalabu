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


class FavoriteList extends Component {
  /*
  componentWillMount() {
    this.props.getFavList()
  }
  */
  _renderItem(item, index) {
    const fontFamily = this.props.setting.fontFamily
    const fontSize = this.props.setting.fontSize
    console.log(fontFamily)
    return (
      <TouchableOpacity onPress={() => this._renderActions(item.id, item.favorite)}
                        activeOpacity={0.7}
                        style={[styles.item, {padding: this.props.setting.paddingList}]}>
        <Text style={{fontFamily, fontSize}}>{item.title}</Text>
      </TouchableOpacity>
    )
  }
  _renderActions(index, fav) {
    Actions.page()
    this.props.setSongPage(index, fav)
  }
  render() {
    //console.log()
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.dataList.favoriteList}
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
    marginLeft: 3,
    paddingLeft: 20,
    padding: 15,
    
    // backgroundColor: '#2980b9',
    borderBottomWidth: StyleSheet.hairlineWidth,
    // borderRadius: 7,
    borderColor: '#7f8c8d'
  },
  });

function mapStateToProps(state) {
  return {
    dataList: state.dataList,
    setting: state.setting
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    setSongPage: setSongPage,
    getFavList: getFavList
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FavoriteList);

