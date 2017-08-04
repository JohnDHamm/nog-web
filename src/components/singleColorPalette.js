import React, { Component } from 'react';
import { connect } from 'react-redux';

class SingleColorPalette extends Component {

	render() {
		const { currentPattern, values } = this.props;
		const styles = {
			root: {
				marginTop: 20,
				marginRight: 20,
				position: 'absolute',
				top: 0,
				right: 0,
				width: 70,
				height: 70,
				borderRadius: '50%',
				border: '1px solid white',
				backgroundColor: `${currentPattern.defaultColor}`
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

export default connect(mapStateToProps)(SingleColorPalette);
