import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getNogTypes } from '../actions';


class Home extends Component {
	componentWillMount() {
		this.props.getNogTypes();
	}


	render() {
		// const userId = '59824b41172824a3e8d0d5d6'; //heroku db
		const userId = '598246abbee2c891bd2cedc8'; //dev db
		return (
			<div>
				<h2>Home/Login</h2>
				<Link to={`/userhome/${userId}`}>
					<p>login</p>
				</Link>
			</div>
		);
	}
}

function mapStateToProps({ nogTypes }) {
	return { nogTypes };
}

export default connect(mapStateToProps, { getNogTypes })(Home);
