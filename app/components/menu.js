import React, { Component } from 'react';
import { Container, Tabs, Tab, Right,  Header, Item, Left, Title, Body, Icon, Button, Text } from 'native-base';
import SongList from './songList'
import FavoriteList from './favoriteList'
import { getSongList, getFavList, setFavoriteDatabase, getFontInfo, layoutChanged } from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions, Scene } from 'react-native-router-flux'
import {fontColor, colorBg, tabColor } from './colorScheme'
import {
  AsyncStorage,
  StyleSheet,
  Dimensions
} from 'react-native'
const { width, height } = Dimensions.get('window')
class Menu extends Component {

  componentWillMount() {
    this._getFontInfo()
    this.props.getSongList()
    this.props.getFavList()
  }

  _getFontInfo() {
    AsyncStorage.multiGet(['@fontFamily', '@fontSize'])
      .then((fontInfo) => {
         //console.log(fontInfo[0][1])
         // console.log(fontInfo)
         this.props.getFontInfo(fontInfo[0][1], fontInfo[1][1])
    })
  }

  componentDidUnMount() {
    this.props.setFavoriteDatabase()
  }
  onChangeTab() {
    this.props.setFavoriteDatabase()
  }
  render() {
    return (
      <Container onLayout={() => this.props.layoutChanged()}>
        <Header hasTabs
                iosBarStyle='light-content'
                style={styles.header}>
          <Left>
          </Left>
          <Body style={{flex: 3}}>
            <Title style={styles.title}>PHATNA LABU</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => Actions.setting()}>
                  <Icon name='md-settings' style={{ color: fontColor }}/>
            </Button>
          </Right>
        </Header>
        <Tabs 
              tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
              onChangeTab={() => this.onChangeTab()}>
          <Tab heading="Labu"
               textStyle={[styles.tabTxt, {fontSize: 17}]}
               activeTextStyle={[styles.activeTxt, {fontSize: 18}]}
               tabStyle={styles.tab}
               activeTabStyle={styles.tab}>
            <SongList />
          </Tab>
          <Tab heading="Favorite"
               textStyle={[styles.tabTxt, {fontSize: 17}]}
               activeTextStyle={[styles.activeTxt, {fontSize: 18}]}
               tabStyle={styles.tab}
               activeTabStyle={styles.tab}>
            <FavoriteList />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colorBg,
    //borderColor: '#3498db'
  },
  tab: {
    backgroundColor: colorBg,
    borderColor: colorBg,
    marginTop: 0,
  },
  tabBarUnderlineStyle: {
    backgroundColor: fontColor,
    borderWidth: 0,
  },
  title: {
    fontSize: 19,
    color: fontColor,
    fontFamily: 'Times New Roman',
  },
  activeTxt: {
    fontFamily: 'Times New Roman',
    color: fontColor,
    fontWeight: '900'
  },
  tabTxt: {
    fontFamily: 'Times New Roman',
    color: tabColor,
    fontWeight: '700'
  },
})
function mapStateToProps(state) {
  return {
    dataList: state.dataList
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getSongList: getSongList,
    getFavList: getFavList,
    setFavoriteDatabase: setFavoriteDatabase,
    getFontInfo: getFontInfo,
    layoutChanged: layoutChanged,
  }, dispatch)
}
export default connect(null, matchDispatchToProps)(Menu)