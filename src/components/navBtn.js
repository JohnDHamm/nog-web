import React, { Component } from 'react';

class NavBtn extends Component {

	render() {
		const { btnHeight, btnLocation, btnType } = this.props;
		let btnWidthConverter;
		switch (btnType) {
			case 'startBtn':
				btnWidthConverter = 156;
				break;
			case 'endBtn':
				btnWidthConverter = 156;
				break;
			default:
				btnWidthConverter = 100;
		};

		const styles = {
			root: {
				position: 'absolute',
				top: btnLocation.top,
				left: btnLocation.left,
				cursor: 'pointer'
			},
			arrow: {
				height: btnHeight,
				width: btnHeight * btnWidthConverter / 175,
				backgroundImage: `url(../src/img/nav/nav_${btnType}.png)`,
				backgroundSize: '100% 100%'
			}
		};

		return(
			<div style={styles.root}>
				<div style={styles.arrow} />
			</div>
		);
	}
}

export default NavBtn;
