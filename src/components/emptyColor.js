import React, { Component } from 'react';

import values from '../styles/values';

class EmptyColor extends Component {

	render() {
		const styles = {
			root: {
				width: 40,
				height: 40,
				borderRadius: '50%',
				marginLeft: 5,
				border: `1px dotted ${values.nogGrayText}`,
				backgroundColor: `${values.nogBackground}`,
				cursor: 'pointer'
			},
			plus: {
				color: `${values.nogGrayText}`,
				fontSize: 25,
				textAlign: 'center',
				margin: '0 auto'
			}
		};

		return (
			<div style={styles.root}>
				<p style={styles.plus}>+</p>
			</div>
		);
	}
}

export default EmptyColor;
