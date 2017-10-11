import React, { Component } from 'react';
import { Container, Tabs, Tab,  Header, Item, Input, Icon, Button, Text } from 'native-base';
import { songList } from '../data'
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

  searchSongTitle = (title) => {
    let loweredTitle = title.toLowerCase()
    //let songTitles = this.state.songList
    //  update error ! whenever filter the search, reuse the original list: not updated list.
    let filteredTitles = songList.filter((item) => {
        return item.toLowerCase().match(loweredTitle)
    })
    if (!title || title === '') {
      this.setState({
        songList: songList
      })
    } else if (!Array.isArray(filteredTitles) && !filteredTitles.length) {
      // set no data flag to true so as to render flatlist conditionally
    } else if (Array.isArray(filteredTitles)) {
      this.setState({
        ///noData: false,
        songList: filteredTitles,
        text: title
      })
    } else {
      console.log()
    }
  }

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" 
                   onChangeText={(text) => this.searchSongTitle(text)}/>
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
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