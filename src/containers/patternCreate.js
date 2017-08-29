import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class PatternCreate extends Component {
	componentWillMount() {

	}


	render() {
		// const userId = '59824b41172824a3e8d0d5d6'; //heroku db
		const userId = '598246abbee2c891bd2cedc8'; //dev db
		return (
			<div>
				<h2>Pattern Create</h2>
				<Link to={`/userhome/${userId}`}>
					<p>form goes here</p>
				</Link>
			</div>
		);
	}
}

function mapStateToProps({ values }) {
	return { values };
}

export default connect(mapStateToProps)(PatternCreate);
