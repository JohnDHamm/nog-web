import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserPatterns } from '../actions';

class Userhome extends Component {

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getUserPatterns(id);
	}

	renderPatterns() {
		return _.map(this.props.userPatterns, pattern => {
			return (
				<div key={pattern._id}>
					<p>name: {pattern.name}</p>
					<p>nog style: {pattern.nogTypeId}</p>
				</div>
			)
		})
	}

	render() {
		const { user } = this.props.user;
		const { userPatterns } = this.props;
		console.log("userPatterns", userPatterns);

		return (
			<div>
				<h2>{ user.name }'s patterns:</h2>
				{this.renderPatterns()}
			</div>
		);
	}
}

function mapStateToProps({ user, userPatterns }) {
	return { user, userPatterns };
}

export default connect(mapStateToProps, { getUserPatterns })(Userhome);
