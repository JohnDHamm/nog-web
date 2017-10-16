import React, { Component } from 'react';

import values from '../styles/values';

class PatternInfo extends Component {

	truncDesc(desc) {
		if (!desc) return;
		return (desc.length > 37) ? desc.slice(0, 36) + "..." : desc;
	}

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
					<span style={styles.label}>description: </span><span style={styles.text}>{this.truncDesc(description)}</span>
				</div>
				<div>
					<span style={styles.label}>default speed: </span><span style={styles.text}>{defaultSpeed}</span>
				</div>
			</div>
		);
	}
}

export default PatternInfo;
