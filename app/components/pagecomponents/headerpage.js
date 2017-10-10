import React, { Component } from 'react';
//import Realm from 'realm'
import fs from 'react-native-fs'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setFavoriteSong, setFavBool, favoriteAction } from '../../../actions'
import { resetSongPage, getFavorite, favBool, songPage} from '../../utils'
import { Actions, Scece, ActionConst } from 'react-native-router-flux'
import { Container, Header, Left, Body, Right, Content, Button, Icon, Title } from 'native-base'

class HeaderPage extends Component {

	componentWillMount() {
		//this.props.setFavIcon()
	}

	_favoriteAction() {
		this.props.favoriteAction()
	}
	_renderBackAction() {
		Actions.menu({type: ActionConst.BACK})
		this.props.setFavoriteSong()
	}
	render() {
		return (
			<Header>
	            <Left>
	              <Button transparent onPress={() => this._renderBackAction()}>
	                <Icon name='arrow-back' />
	              </Button>
	            </Left>
	            <Right>
	            <Body>
	            </Body>
	              <Button transparent>
	                <Icon name='md-settings' />
	              </Button>
	              <Button transparent onPress={() => this._favoriteAction()}>
	                <Icon name={this.props.songPage.favIcon} />
	              </Button>
	            </Right>
	  		</Header>
		)
	}
}

function mapStateToProps(state) {
	return {
		songPage: state.songPage 
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		setFavoriteSong: setFavoriteSong,
		setFavBool: setFavBool,
		favoriteAction: favoriteAction,
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(HeaderPage)