import React, { Component } from 'react';
//import Realm from 'realm'
import fs from 'react-native-fs'
//import { songPage } from '../../data'
import { resetSongPage, getFavorite, favBool, songPage} from '../../utils'
import { Actions, Scece, ActionConst } from 'react-native-router-flux'
import { Container, Header, Left, Body, Right, Content, Button, Icon, Title } from 'native-base'
const Realm = require('realm');

export default class HeaderPage extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	favoriteIcon: undefined,
	  	favBool: undefined,
	  };
	}

	componentDidMount() {
		getFavorite(this.props.index)
		this.setFavoriteIcon()
		// console.log('header page')
	}
	setFavoriteIcon() {
		this.setState({
			favBool: favBool
		})
		if (this.state.favBool) {
      	this.setState({
      		favoriteIcon: 'ios-bookmarks',
      	})
      } else {
      	this.setState({
      		favoriteIcon: 'ios-bookmarks-outline',
      	})
      }
	}
	favoriteAction() {
      if (this.state.favBool) {
      	//console.log(favorite)
      	this.setState({
      		favoriteIcon: 'ios-bookmarks-outline',
      		favBool: false
      	})
      } else {
      	this.setState({
      		favoriteIcon: 'ios-bookmarks',
      		favBool: true
      	})
      }
 	}
	actionMain() {
		Actions.menu({type: ActionConst.BACK})
		//this.setFavorite()
		resetSongPage()
	}
	render() {
		return (
			<Header>
	            <Left>
	              <Button transparent onPress={() => this.actionMain()}>
	                <Icon name='arrow-back' />
	              </Button>
	            </Left>
	            <Right>
	            <Body>
	            	
	            </Body>
	              <Button transparent>
	                <Icon name='md-settings' />
	              </Button>
	              <Button transparent onPress={() => this.favoriteAction()}>
	                <Icon name={this.state.favoriteIcon} />
	              </Button>
	            </Right>
	  		</Header>
		)
	}
}