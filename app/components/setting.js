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
  Picker,
  FlatList
} from 'react-native';

//import Realm from 'realm'
import fs from 'react-native-fs'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HeaderPage from './pagecomponents/headerpage'
import { Actions, Scece, ActionConst } from 'react-native-router-flux'
import { Container, Header, Left, Body, Right, Content, Button, Icon, Title } from 'native-base'
import { setSongPage, setFontFamily, increaseFontSize, decreaseFontSize, setFontInfo } from '../../actions'



class Setting extends Component {

  _renderBackAction() {
    Actions.menu({type: ActionConst.BACK})
    this.props.setFontInfo()
  }
  _renderItem(item, index) {
    if (index == 0) {
      return (
        <View style={styles.block}>
          <View>
            <Text>item</Text>
          </View>
          <View>
            <Picker selectedValue={this.props.setting.fontFamily}
                     onValueChange={(itemValue) => this.props.setFontFamily(itemValue)}>
                     <Picker.Item label="Times New Roman" value="Times New Roman" />
                     <Picker.Item label="Verdana" value="Verdana" />
                     <Picker.Item label="Trebuchet MS" value="Trebuchet MS" />
          </Picker>
          </View>
        </View>
        
        )
    } else {
      return (
        <View style={styles.block}>
          <View>
            <Text>item</Text>
          </View>
          <View>
            <Button transparent onPress={() => this.props.increaseFontSize()}>
              <Icon name='md-add-circle' />
          </Button>
          <Button transparent onPress={() => this.props.decreaseFontSize()}>
              <Icon name='md-remove-circle' />
          </Button>
          </View>
        </View>
        )
    }
  }
  render() {
    return (
      <Container>
        <Header>
            <Left>
              <Button transparent onPress={() => this._renderBackAction()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
          </Header>
          <View>
          <FlatList
            data={['fontFamily', 'fontSize']}
            renderItem={({item, index}) => this._renderItem(item, index)}
            showsVerticalScrollIndicator={false}
          />
          </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row'
  }
})


function mapStateToProps(state) {
  return {
    songPage: state.songPage,
    setting: state.setting
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    setSongPage: setSongPage,
    setFontFamily: setFontFamily,
    increaseFontSize: increaseFontSize,
    decreaseFontSize: decreaseFontSize,
    setFontInfo: setFontInfo
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Setting);

