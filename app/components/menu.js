import React, { Component } from 'react';
import { Container, Tabs, Tab,  Header, Item, Input, Icon, Button, Text } from 'native-base';
import { getSongList } from '../utils'
import { songList } from '../data'
import SongList from './songList'

export default class Menu extends Component {

  componentDidMount() {
    this.setState({
      songList: songList
    })
   // getSongList()
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
        <Tabs initalPage={1}>
          <Tab heading="Labu">
            <SongList />
          </Tab>
          <Tab heading="Favorite">
            <Container />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}