import React, { Component } from 'react';
//import Realm from 'realm'
import fs from 'react-native-fs'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateFavoriteSong, setFavBool, favoriteAction, getFavList } from '../../../actions'
import { Actions, Scece, ActionConst } from 'react-native-router-flux'
import { Container, Header, Left, Body, Right, Content, Button, Icon, Title } from 'native-base'
import * as color from '../colorScheme'

class HeaderPage extends Component {

	_favoriteAction() {
		this.props.favoriteAction()
	}
	_renderBackAction() {
		Actions.menu({type: ActionConst.BACK})
		this.props.updateFavoriteSong(this.props.songPage.id, this.props.songPage.favorite)
		this.props.getFavList()
	}
	render() {
		return (
			<Header style={{backgroundColor: color.colorBg, height: this.props.setting.heightHeader}} iosBarStyle='light-content'>
	            <Left>
	              <Button transparent onPress={() => this._renderBackAction()}>
	                <Icon name='arrow-back' style={{color: color.fontColor, fontSize: this.props.setting.iconSize}}/>
	              </Button>
	            </Left>
	            <Right>
	            <Body>
	            </Body>
	              <Button transparent onPress={() => this._favoriteAction()}>
	                <Icon name={this.props.songPage.favIcon} style={{color: color.fontColor, fontSize: this.props.setting.iconSize}} />
	              </Button>
	            </Right>
	  		</Header>
		)
	}
}

function mapStateToProps(state) {
	return {
		songPage: state.songPage,
		setting: state.setting
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		updateFavoriteSong: updateFavoriteSong,
		setFavBool: setFavBool,
		favoriteAction: favoriteAction,
		getFavList: getFavList
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(HeaderPage)