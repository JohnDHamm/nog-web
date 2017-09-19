import React, { Component } from 'react';

import values from '../styles/values';

class ButtonCopyLights extends Component {
	render() {
		const { btnSize, type } = this.props;
		const circleDia = btnSize / 2.5;
		const rootBorderColor = (type === 'paste_disabled') ? values.nogDisabled : values.nogGrayText;
		const paste1BorderColor = (type === 'paste_disabled') ? values.nogDisabled : values.nogGreen;
		const paste2BorderColor = (type === 'paste_disabled') ? values.nogDisabled : values.nogGreen;
		const paste2BgColor = (type === 'paste_disabled') ? values.nogDisabled : values.nogGreen;
		const styles = {
			root: {
				height: btnSize,
				width: btnSize,
				cursor: (type !== 'paste_disabled') ? 'pointer' : 'default',
				border: `1px solid ${rootBorderColor}`,
				borderRadius: 3,
				position: 'relative',
				backgroundColor: '#000'
			},
			circle: {
				position: 'absolute',
				width: circleDia,
				height: circleDia,
				borderRadius: '50%'
			},
			copy1: {
				border: `1px solid ${values.nogDarkGray}`,
			},
			copy2: {
				border: `1px solid ${values.nogGreen}`,
				backgroundColor: '#000'
			},
			paste1: {
				border: `1px solid ${paste1BorderColor}`
			},
			paste2: {
				border: `1px solid ${paste2BorderColor}`,
				backgroundColor: paste2BgColor
			}
		};

		return (
			<div style={styles.root}>
				{type === 'copy' &&
					<div>
						<div style={ Object.assign({}, styles.circle, styles.copy1, {
							top: (btnSize / 2) - (circleDia / 2) - 1,
							left: (btnSize / 2) - (circleDia / 2) - 5} ) }>
						</div>
						<div style={ Object.assign({}, styles.circle, styles.copy2, {
							top: (btnSize / 2) - (circleDia / 2) - 1,
							left: (btnSize / 2) - (circleDia / 2) + 3} ) }>
						</div>
					</div>
				}
				{type !== 'copy' &&
					<div>
						<div style={ Object.assign({}, styles.circle, styles.paste1, {
							top: (btnSize / 2) - (circleDia / 2) - 1,
							left: (btnSize / 2) - (circleDia / 2) - 5} ) }>
						</div>
						<div style={ Object.assign({}, styles.circle, styles.paste2, {
							top: (btnSize / 2) - (circleDia / 2) - 1,
							left: (btnSize / 2) - (circleDia / 2) + 3} ) }>
						</div>
					</div>
				}
			</div>
		);
	}
}

export default ButtonCopyLights;
