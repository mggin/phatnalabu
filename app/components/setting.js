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
  FlatList,
  Dimensions,
  Slider,
} from 'react-native';

//import Realm from 'realm'
import fs from 'react-native-fs'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HeaderPage from './pagecomponents/headerpage'
import { Actions, Scece, ActionConst } from 'react-native-router-flux'
import { Container, Header, Left, Body, Right, Content, Button, Icon, Title } from 'native-base'
import { fontColor, colorBg, tabColor, white} from './colorScheme'
import { setSongPage, setFontFamily, increaseFontSize,
         decreaseFontSize, setFontInfo, sliderAction,
         layoutChanged, getFavList } from '../../actions'



class Setting extends Component {

  _renderBackAction() {
    Actions.menu({type: ActionConst.BACK})
    console.log(this.props.setting)
    this.props.setFontInfo()
    this.props.getFavList()
  }
  
  render() {
    console.log(this.props.layout.flexDirectionSetting)
    return (
      <Container onLayout={this.props.layoutChanged}>
        <Header iosBarStyle='light-content'
                style={[styles.header, {height: this.props.setting.heightHeader}]}>
            <Left>
              <Button transparent onPress={() => this._renderBackAction()}>
                <Icon name='arrow-back' style={{ color: fontColor, fontSize: this.props.setting.iconSize}}/>
              </Button>
            </Left>
          </Header>
          <View style={{flex: 1, flexDirection: this.props.layout.flexDirectionSetting}}>
            <View style={styles.mainBlock}>
              <View style={styles.header1}>
                <Text style={[styles.headerTxt, {fontSize: this.props.setting.fontSize}]}>Font Family</Text>
              </View>
              <View style={styles.body}>
                <Picker selectedValue={this.props.setting.fontFamily}
                     itemStyle={{fontSize: 16, fontFamily: 'Verdana', color: 'black', fontWeight: 'bold'}}
                     onValueChange={(itemValue) => this.props.setFontFamily(itemValue)}>
                     <Picker.Item label="Times New Roman" value="Times New Roman" />
                     <Picker.Item label="Thonburi" value="Thonburi" />
                     <Picker.Item label="Gill Sans" value="Gill Sans" />
                </Picker>
             </View>
            </View>
            <View style={styles.mainBlock}>
              <View style={styles.header1}>
                <Text style={[styles.headerTxt, {fontSize: this.props.setting.fontSize}]}>Font Size</Text>
              </View>
              <View style={styles.body}>
                <View style={styles.box}>
                  <View style={styles.subBox}>
                    <Text style={{color: colorBg, fontFamily: 'Verdana', fontSize: 25}}>{this.props.setting.fontSize}</Text>
                  </View>
                </View>
                <Slider maximumValue={30}
                        minimumValue={12}
                        step={1}
                        value={this.props.setting.fontSize}
                        onValueChange={value => this.props.sliderAction(value)}
                        style={styles.slider}
                        maximumTrackTintColor={tabColor}
                        minimumTrackTintColor={colorBg}
                  />
             </View>
            </View>
            {this.props.layout.portrait ? <View style={{flex: 1}}/> : null}
        </View> 
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colorBg,
  },
  mainBlock: {
    flex: 1,
    // backgroundColor: '#000000',
    borderRadius: 3,
    margin: 10,
    
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colorBg,

  },
  header1: {
    backgroundColor: colorBg,
    flex: 1,
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 4,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
  },
  btnStyle: {
    justifyContent: 'center'
  },
  slider: {
    flex: 1,
    margin: 20,
  },
  headerTxt: {
    fontFamily: 'Verdana',
    color: white,
    fontWeight: 'bold'
  },
  box: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  subBox: {
    padding: 3,
    //borderRadius: 5,
    //borderColor: colorBg,
    //borderWidth: StyleSheet.hairlineWidth,
  }
})


function mapStateToProps(state) {
  return {
    songPage: state.songPage,
    setting: state.setting,
    layout: state.layoutChanged
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    setSongPage: setSongPage,
    setFontFamily: setFontFamily,
    increaseFontSize: increaseFontSize,
    decreaseFontSize: decreaseFontSize,
    setFontInfo: setFontInfo,
    sliderAction: sliderAction,
    layoutChanged: layoutChanged,
    getFavList: getFavList
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Setting);

