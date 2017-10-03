import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getNogTypes } from '../actions';


class Home extends Component {
	componentWillMount() {
		this.props.getNogTypes();
	}


	render() {
		const userId = '59824b41172824a3e8d0d5d6'; //heroku db
		// const userId = '598246abbee2c891bd2cedc8'; //dev db
		const styles = {
			title: {
				marginTop: 20
			}
		}

		return (
			<div className="container">
				<h2 className="text-center" style={styles.title}>Welcome</h2>
				<Link to={`/userhome/${userId}`}>
					<p className="text-center">login</p>
				</Link>
			</div>
		);
	}
}

function mapStateToProps({ nogTypes }) {
	return { nogTypes };
}

export default connect(mapStateToProps, { getNogTypes })(Home);
