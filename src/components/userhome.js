import React, { Component } from 'react';
import { connect } from 'react-redux';

class Userhome extends Component {
	render() {
		const { user } = this.props.user;
		console.log("user", user);

		return (
			<div>
				<h2>{ user.name }'s home page</h2>
				<img src={user.iconUrl} />
			</div>
		);
	}
}

function mapStateToProps({ user }) {
	return { user };
}

export default connect(mapStateToProps)(Userhome);
