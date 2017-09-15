import React, { Component } from 'react';

import values from '../styles/values';

class PatternInfo extends Component {

	render() {
		const { name, description, defaultSpeed } = this.props;
		const styles = {
			label: {
				color: `${values.nogGrayText}`
			},
			text: {
				color: "#FFF"
			}
		};

		return (
			<div>
				<div>
					<span style={styles.label}>pattern: </span><span style={styles.text}>{name}</span>
				</div>
				<div>
					<span style={styles.label}>description: </span><span style={styles.text}>{description}</span>
				</div>
				<div>
					<span style={styles.label}>default speed: </span><span style={styles.text}>{defaultSpeed}</span>
				</div>
			</div>
		);
	}
}

export default PatternInfo;
