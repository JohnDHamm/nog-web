import React, { Component } from 'react';

import values from '../styles/values';

class ButtonFillLights extends Component {
	render() {
		const { btnSize, fillColor } = this.props;
		const circleDia = btnSize / 3.5;
		const styles = {
			root: {
				height: btnSize,
				width: btnSize,
				cursor: 'pointer',
				border: `1px solid ${values.nogGrayText}`,
				borderRadius: 3,
				position: 'relative',
				backgroundColor: '#000'
			},
			circle: {
				position: 'absolute',
				width: circleDia,
				height: circleDia,
				backgroundColor: fillColor,
				border: `1px solid ${values.nogDarkGray}`,
				borderRadius: '50%'
			}
		};

		return (
			<div style={styles.root}>
				<div style={ Object.assign({}, styles.circle, {
					top: circleDia / 4,
					left: (btnSize / 2) - (circleDia / 2) - 1} ) }>
				</div>
				<div style={ Object.assign({}, styles.circle, {
					top: (btnSize / 2) - (circleDia / 2) - 1,
					left: circleDia / 4} ) }>
				</div>
				<div style={ Object.assign({}, styles.circle, {
					top: (btnSize / 2) - (circleDia / 2) - 1,
					right: circleDia / 4} ) }>
				</div>
				<div style={ Object.assign({}, styles.circle, {
					bottom: circleDia / 4,
					left: (btnSize / 2) - (circleDia / 2) - 1} ) }>
				</div>
			</div>
		);
	}
}

export default ButtonFillLights;
