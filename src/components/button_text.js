import React, { Component } from 'react';

class ButtonText extends Component {
	render() {
		const { color, bgColor, label } = this.props;
		const styles = {
			root: {
				cursor: 'pointer',
				border: `1px solid ${this.props.color}`,
				borderRadius: 3,
				backgroundColor: `${this.props.bgColor}`
			},
			label: {
				color: `${this.props.color}`,
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

export default ButtonText;
