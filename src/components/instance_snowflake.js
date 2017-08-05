import React, { Component } from 'react';
import { connect } from 'react-redux';

class InstanceSnowflake extends Component {

	render() {
		const { currentPattern, values } = this.props;
		const styles = {
			root: {
				position: 'absolute',
				top: '50%',
				left: '50%',
				backgroundColor: '#333'
			},
			light: {
				width: 20,
				height: 20,
				borderRadius: '50%',
				border: '1px solid #333',
			},
			lightColor_1: {
				backgroundColor: `${currentPattern.}`
			}
		};

		return (
			<div style={styles.root}>
			</div>
		);
	}
}

function mapStateToProps({ currentPattern, values }) {
	return { currentPattern, values };
}

export default connect(mapStateToProps)(InstanceSnowflake);
