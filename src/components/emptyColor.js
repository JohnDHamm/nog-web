import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmptyColor extends Component {

	render() {
		const { values } = this.props;
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

function mapStateToProps({ values }) {
	return { values };
}

export default connect(mapStateToProps)(EmptyColor);
