import React, { Component } from 'react';
import { connect } from 'react-redux';

class ButtonText extends Component {
	render() {
		const { color, bgColor, label } = this.props;
		const styles = {
			root: {
				cursor: 'pointer',
				border: `1px solid ${this.props.color}`,
				borderRadius: 3,
				backGroundColor: `${this.props.bgColor}`
			},
			label: {
				color: `${this.props.color}`,
				// fontSize: 20,
				paddingLeft: 5,
				paddingRight: 5
			}
		};

		return (
			<div style={styles.root}>
				<div style={styles.label}>
					{label}
				</div>
			</div>
		);
	}
}

function mapStateToProps({ values }) {
	return { values };
}

export default connect(mapStateToProps)(ButtonText)
