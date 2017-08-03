import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setCurrentPattern } from '../actions';

class PatternSnowflake extends Component {

	componentWillMount() {
		const { id } = this.props.match.params;
		console.log("selected pattern:", this.props.userPatterns[id]);
		this.props.setCurrentPattern(this.props.userPatterns[id]);
	}

	render() {
		const pattern = this.props.currentPattern
		return (
			<div>
				<h3>Pattern: {pattern.name}</h3>
				<h4>description: {pattern.description}</h4>
			</div>
		);
	}
}


function mapStateToProps({ userPatterns, currentPattern }) {
	return { userPatterns, currentPattern };
}

export default connect(mapStateToProps, { setCurrentPattern })(PatternSnowflake);
