import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserPatterns, getNogTypes } from '../actions';

class Userhome extends Component {

	componentWillMount() {
		const { id } = this.props.match.params;
		this.props.getUserPatterns(id);
		this.props.getNogTypes();
	}

	getNogName(nogId) {
		return this.props.nogTypes[nogId].name
	}

	renderPatterns() {
		return _.map(this.props.userPatterns, pattern => {
			return (
				<div key={pattern._id}>
					<p>name: {pattern.name}</p>
					<p>nog style: {this.getNogName(pattern.nogTypeId)}</p>
				</div>
			)
		})
	}

	render() {
		const { user } = this.props.user;
		const { userPatterns, nogTypes } = this.props;
		console.log("userPatterns", userPatterns);
		console.log("nogTypes", nogTypes);

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

export default connect(mapStateToProps, { getUserPatterns, getNogTypes })(Userhome);
