import React, { Component } from 'react';
import { connect } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import IconMenu from 'material-ui/IconMenu';
// import IconButton from 'material-ui/IconButton';
// import MenuItem from 'material-ui/MenuItem';
// import FontIcon from 'material-ui/FontIcon';



class Navbar extends Component {

	render() {
		const { values } = this.props;
		const { user } = this.props.user;

		const styles = {
			toolbar: {
				backgroundColor: `${values.nogRed}`
			},
			logoLabel: {
				fontSize: 20
			},
			logo: {
				color: '#FFF'
			},
			user: {
				color: '#FFF',
				fontSize: 20
			}
		}

		return (
			<MuiThemeProvider>
				<Toolbar style={styles.toolbar}>
					<ToolbarGroup firstChild={true}>
						<FlatButton
							label="Nog"
							labelStyle={styles.logoLabel}
							style={styles.logo}
							hoverColor="rgba(0,0,0,0.1)"
							href="/" />
					</ToolbarGroup>
					<ToolbarGroup>
						<ToolbarTitle
							text={user.name}
							style={styles.user}
						/>
						<Avatar
							size={30}
							src={user.iconUrl}
							/>
					</ToolbarGroup>
				</Toolbar>
			</MuiThemeProvider>
		);
	}
}

function mapStateToProps({ user, values }) {
	return { user, values };
}

export default connect(mapStateToProps)(Navbar);
