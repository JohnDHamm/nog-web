// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setCurrentPattern } from '../actions';

import PatternInfo from './patternInfo';

class PatternSnowflake extends Component {

	componentWillMount() {
		const { id } = this.props.match.params;
		// console.log("selected pattern:", this.props.userPatterns[id]);
		this.props.setCurrentPattern(this.props.userPatterns[id]);
	}

	render() {
		const pattern = this.props.currentPattern;
		const { values } = this.props;
		const styles = {
			root: {
				backgroundColor: `${values.nogBackground}`,
				height: '100vh',
				position: 'relative'
			}
		}

		return (
			<div style={styles.root}>
				<PatternInfo
					name={pattern.name}
					description={pattern.description}
					defaultSpeed={pattern.defaultSpeed} />
			</div>
		);
	}
}


function mapStateToProps({ userPatterns, currentPattern, values }) {
	return { userPatterns, currentPattern, values };
}

export default connect(mapStateToProps, { setCurrentPattern })(PatternSnowflake);
