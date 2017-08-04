import React, { Component } from 'react';
import { connect } from 'react-redux';

class PatternInfo extends Component {

	render() {
		const { name, description, defaultSpeed, values } = this.props;
		const styles = {
			root: {
				paddingTop: 20,
				paddingLeft: 20,
				position: 'absolute',
				top: 0,
				left: 0
			},
			label: {
				color: `${values.nogGrayText}`
			},
			text: {
				color: "#FFF"
			}
		};

		return (
			<div style={styles.root}>
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

function mapStateToProps({ values }) {
	return { values };
}

export default connect(mapStateToProps)(PatternInfo);