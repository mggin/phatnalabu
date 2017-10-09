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

import { getSongPage, songPage } from '../utils'
import HeaderPage from './pagecomponents/headerpage'
import { Actions, Scece, ActionConst } from 'react-native-router-flux'
import { Container, Header, Left, Body, Right, Content, Button, Icon, Title } from 'native-base'
const Realm = require('realm');


export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: undefined,
      title: undefined,
      key: undefined,
      verse1: undefined,
      chorus: undefined,
      verse2: undefined,
      verse3: undefined,
      verse4: undefined,
      verse5: undefined,
      verse6: undefined,
      verse7: undefined,
      verse8: undefined,
      bridge: undefined,
      favorite: undefined,
      fontSize: 17,
      fontFamily: 'Times New Roman'
    };
  }

  componentWillMount() {
    getSongPage(this.props.index)
    console.log(songPage)
  }

  _checkEmptyVerse(verse) {
    //console.log(verse)
    if (verse == '') {
      return false
    } else {
      return true
    }
  }
  render() {
    let fontObj =  {fontSize: this.state.fontSize, fontFamily: this.state.fontFamily}
    let fontObjOfIndex = {fontSize: this.state.fontSize - 1, fontFamily: this.state.fontFamily}
    let fontObjOfTitle =  {fontSize: this.state.fontSize + 1, fontFamily: this.state.fontFamily}
    //console.log(this.state.favorite + this.state.index + 'print')
    console.log(this.state.favorite)
    return (
      <View style={{flex: 1}}>
        <Container>
          <HeaderPage index={this.props.index}/>
          <Content>
            <View style={styles.mainview}>
              <View style={styles.indexbox}>
                <Text style={[styles.pgstyle,fontObj]}>{this.state.index}</Text>
              </View>
              <View style={styles.titlebox}>
                <Text style={[styles.titlepage, fontObjOfTitle]}>{this.state.title}</Text>
              </View>
              <View style={styles.keybox}>
                <Text style={[styles.keypage, fontObjOfIndex]}>{this.state.key}</Text>
              </View>
              { this._checkEmptyVerse(this.state.verse1) ? 
                <View style={styles.verse}>
                  <View style={styles.indexverseBox}>
                    <Text style={[styles.indexverse, fontObjOfIndex]}>1.</Text>
                  </View>
                  <Text style={[styles.versetxt,  fontObj]}>{this.state.verse1}</Text>
                </View> : null }
              { this._checkEmptyVerse(this.state.chorus) ? 
                <View style={styles.verse}>
                  <View style={styles.indexverseBoxOfChorus}>
                    <Text style={[styles.indexverse, fontObjOfIndex]}>Sakkik</Text>
                  </View>
                  <Text style={[styles.versetxt, fontObj]}>{this.state.chorus}</Text>
                </View> : null }
              { this._checkEmptyVerse(this.state.verse2) ? 
                <View style={styles.verse}>
                  <View style={styles.indexverseBox}>
                    <Text style={[styles.indexverse, fontObjOfIndex]}>2.</Text>
                  </View>
                  <Text style={[styles.versetxt, fontObj]}>{this.state.verse2}</Text>
                </View> : null }
              { this._checkEmptyVerse(this.state.verse3) ? 
                <View style={styles.verse}>
                  <View style={styles.indexverseBox}>
                    <Text style={[styles.indexverse, fontObjOfIndex]}>3.</Text>
                  </View>
                  <Text style={[styles.versetxt, fontObj]}>{this.state.verse3}</Text>
                </View> : null }
              { this._checkEmptyVerse(this.state.verse4) ? 
                <View style={styles.verse}>
                  <View style={styles.indexverseBox}>
                    <Text style={[styles.indexverse, fontObjOfIndex]}>4.</Text>
                  </View>
                  <Text style={[styles.versetxt, fontObj]}>{this.state.verse4}</Text>
                </View> : null }
              { this._checkEmptyVerse(this.state.verse5) ? 
                <View style={styles.verse}>
                  <View style={styles.indexverseBox}>
                    <Text style={[styles.indexverse, fontObjOfIndex]}>5.</Text>
                  </View>
                  <Text style={[styles.versetxt, fontObj]}>{this.state.verse5}</Text>
                </View> : null }
              { this._checkEmptyVerse(this.state.verse6) ? 
                <View style={styles.verse}>
                  <View style={styles.indexverseBox}>
                    <Text style={[styles.indexverse, fontObjOfIndex]}>6.</Text>
                  </View>
                  <Text style={[styles.versetxt, fontObj]}>{this.state.verse6}</Text>
                </View> : null }
              { this._checkEmptyVerse(this.state.verse7) ? 
                <View style={styles.verse}>
                  <View style={styles.indexverseBox}>
                    <Text style={[styles.indexverse, fontObjOfIndex]}>7.</Text>
                  </View>
                  <Text style={[styles.versetxt, fontObj]}>{this.state.verse7}</Text>
                </View> : null }
              { this._checkEmptyVerse(this.state.verse8) ? 
                <View style={styles.verse}>
                  <View style={styles.indexverseBox}>
                    <Text style={[styles.indexverse, fontObjOfIndex]}>8.</Text>
                  </View>
                  <Text style={[styles.versetxt, fontObj]}>{this.state.verse8}</Text>
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
    //backgroundColor: '#000000'
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
    margin: 5,
  },
  verse: {
    flexDirection: 'row',
    margin: 5,
    padding: 5,
    backgroundColor: 'red',
  },
  indexverseBoxOfChorus: {
    flex: 2,
  },
  indexverseBox: {
    flex: 1,
    alignItems: 'center',
  },
  versetxt: {
    flex: 6
  }

});

