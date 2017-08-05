import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUserPatterns } from '../actions';

class Userhome extends Component {

	componentWillMount() {
		const { id } = this.props.match.params;
		this.props.getUserPatterns(id);
	}

	getNogName(nogId) {
		return this.props.nogTypes[nogId].name
	}

	renderPatterns() {
		return _.map(this.props.userPatterns, pattern => {
			let nogTypeName = this.getNogName(pattern.nogTypeId);
			return (
				<Link to={`/pattern-${nogTypeName}/${pattern._id}`} key={pattern._id}>
					<div style={{border: '1px solid #ddd'}}>
						<p>name: {pattern.name}</p>
						<p>singleColor: {pattern.singleColor}</p>
						<p>nog style: {nogTypeName}</p>
					</div>
				</Link>
			)
		})
	}

	render() {
		const { user } = this.props.user;
		const { userPatterns, nogTypes } = this.props;

		return (
			<div>
				<h2>{ user.name }'s patterns:</h2>
				{this.renderPatterns()}
			</div>
		);
	}
}

function mapStateToProps({ user, userPatterns, nogTypes }) {
	return { user, userPatterns, nogTypes };
}

export default connect(mapStateToProps, { getUserPatterns })(Userhome);
