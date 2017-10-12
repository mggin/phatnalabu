import React, { Component } from 'react';
import { Container, Tabs, Tab,  Header, Item, Input, Icon, Button, Text } from 'native-base';
import SongList from './songList'
import FavoriteList from './favoriteList'
import { getSongList, getFavList, setFavoriteDatabase } from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Menu extends Component {

  componentWillMount() {
    this.props.getSongList()
    this.props.getFavList()
  }
  componentDidUnMount() {
    this.props.setFavoriteDatabase()
  }

  render() {
    return (
      <Container>
        <Header>
        </Header>
        <Tabs initalPage={1} onChangeTab={() => this.props.setFavoriteDatabase()}>
          <Tab heading="Labu">
            <SongList />
          </Tab>
          <Tab heading="Favorite">
            <FavoriteList />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return {
    dataList: state.dataList
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getSongList: getSongList,
    getFavList: getFavList,
    setFavoriteDatabase: setFavoriteDatabase
  }, dispatch)
}
export default connect(null, matchDispatchToProps)(Menu)