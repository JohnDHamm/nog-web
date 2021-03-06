import React, { Component } from 'react';
import { connect } from 'react-redux';

class SingleColorPalette extends Component {

	render() {
		const { currentPattern } = this.props;
		const styles = {
			root: {
				marginTop: 20,
				marginRight: 20,
				position: 'absolute',
				top: 0,
				right: 0,
				width: 60,
				height: 60,
				borderRadius: '50%',
				border: '1px solid #333',
				backgroundColor: `${currentPattern.defaultColor}`
			}
		};

		return (
			<div style={styles.root}>
			</div>
		);
	}
}

function mapStateToProps({ currentPattern }) {
	return { currentPattern };
}

export default connect(mapStateToProps)(SingleColorPalette);
