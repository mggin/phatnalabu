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
  View
} from 'react-native';

//import Realm from 'realm'
import fs from 'react-native-fs'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HeaderPage from './pagecomponents/headerpage'
import { Actions, Scece, ActionConst } from 'react-native-router-flux'
import { Container, Header, Left, Body, Right, Content, Button, Icon, Title } from 'native-base'
import { setSongPage } from '../../actions'
import * as color from './colorScheme'
const Realm = require('realm');


class Page extends Component {
  _checkEmptyVerse(verse) {
    //console.log(verse)
    if (verse == '') {
      return false
    } else {
      return true
    }
  }
  render() {
    const fontFamily = this.props.setting.fontFamily
    const fontSize = this.props.setting.fontSize
    const fontObj =  {fontSize: fontSize, fontFamily: fontFamily}
    const fontObjOfIndex = {fontSize: fontSize - 1, fontFamily}
    const fontObjOfTitle =  {fontSize: fontSize + 1, fontFamily}
    const songPage = this.props.songPage
    return (
      <View style={{flex: 1}}>
        <Container style={{backgroundColor: color.white}}>
          <HeaderPage />
          <Content>
            <View style={styles.mainview}>
              <View style={styles.indexbox}>
                <Text style={[styles.pgstyle,fontObj]}>{songPage.id}</Text>
              </View>
              <View style={styles.titlebox}>
                <Text style={[styles.titlepage, fontObjOfTitle]}>{songPage.title}</Text>
              </View>
              <View style={styles.keybox}>
                <Text style={[styles.keypage, fontObjOfIndex]}>{songPage.key}</Text>
              </View>
              { this._checkEmptyVerse(songPage.verse1) ? 
                <View style={styles.verse}>
                  <View style={styles.indexverseBox}>
                    <Text style={[styles.indexverse, fontObjOfIndex]}>1.</Text>
                  </View>
                  <Text style={[styles.versetxt,  fontObj]}>{songPage.verse1}</Text>
                </View> : null }
              { this._checkEmptyVerse(songPage.chorus) ? 
                <View style={styles.verse}>
                  <View style={styles.indexverseBoxOfChorus}>
                    <Text style={[styles.indexverse, fontObjOfIndex]}>Sakkik</Text>
                  </View>
                  <View style={{flex: 1}}/>
                  <Text style={[styles.versetxt, fontObj]}>{songPage.chorus}</Text>
                </View> : null }
              { this._checkEmptyVerse(songPage.verse2) ? 
                <View style={styles.verse}>
                  <View style={styles.indexverseBox}>
                    <Text style={[styles.indexverse, fontObjOfIndex]}>2.</Text>
                  </View>
                  <Text style={[styles.versetxt, fontObj]}>{songPage.verse2}</Text>
                </View> : null }
              { this._checkEmptyVerse(songPage.verse3) ? 
                <View style={styles.verse}>
                  <View style={styles.indexverseBox}>
                    <Text style={[styles.indexverse, fontObjOfIndex]}>3.</Text>
                  </View>
                  <Text style={[styles.versetxt, fontObj]}>{songPage.verse3}</Text>
                </View> : null }
              { this._checkEmptyVerse(songPage.verse4) ? 
                <View style={styles.verse}>
                  <View style={styles.indexverseBox}>
                    <Text style={[styles.indexverse, fontObjOfIndex]}>4.</Text>
                  </View>
                  <Text style={[styles.versetxt, fontObj]}>{songPage.verse4}</Text>
                </View> : null }
              { this._checkEmptyVerse(songPage.verse5) ? 
                <View style={styles.verse}>
                  <View style={styles.indexverseBox}>
                    <Text style={[styles.indexverse, fontObjOfIndex]}>5.</Text>
                  </View>
                  <Text style={[styles.versetxt, fontObj]}>{songPage.verse5}</Text>
                </View> : null }
              { this._checkEmptyVerse(songPage.verse6) ? 
                <View style={styles.verse}>
                  <View style={styles.indexverseBox}>
                    <Text style={[styles.indexverse, fontObjOfIndex]}>6.</Text>
                  </View>
                  <Text style={[styles.versetxt, fontObj]}>{songPage.verse6}</Text>
                </View> : null }
              { this._checkEmptyVerse(songPage.verse7) ? 
                <View style={styles.verse}>
                  <View style={styles.indexverseBox}>
                    <Text style={[styles.indexverse, fontObjOfIndex]}>7.</Text>
                  </View>
                  <Text style={[styles.versetxt, fontObj]}>{songPage.verse7}</Text>
                </View> : null }
              { this._checkEmptyVerse(songPage.verse8) ? 
                <View style={styles.verse}>
                  <View style={styles.indexverseBox}>
                    <Text style={[styles.indexverse, fontObjOfIndex]}>8.</Text>
                  </View>
                  <Text style={[styles.versetxt, fontObj]}>{songPage.verse8}</Text>
                </View> : null }
             
            </View>
          </Content>
        </Container> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainview: {
    margin: 2,
    backgroundColor: color.white
  },
  indexbox: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 5,
  },
  pgsty: {
    //
  },
  titlebox: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  titlepage: {
    justifyContent: 'center',
    alignItems: 'center',
    //margin: 5,
  },
  keybox: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5
  },
  verse: {
    flexDirection: 'row',
    margin: 5,
    padding: 5,
    //backgroundColor: 'red',
  },
  indexverseBoxOfChorus: {
    flex: 1,
    alignItems: 'flex-end',
  },
  indexverseBox: {
    flex: 1,
    alignItems: 'center',
  },
  versetxt: {
    flex: 6
  }

});


function mapStateToProps(state) {
  return {
    songPage: state.songPage,
    setting: state.setting
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    setSongPage: setSongPage
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Page);

