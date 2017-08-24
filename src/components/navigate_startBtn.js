import React, { Component } from 'react';

class NavigateStartBtn extends Component {

	render() {
		const { btnHeight, btnLocation } = this.props;
		const styles = {
			root: {
				position: 'absolute',
				top: btnLocation.top,
				left: btnLocation.left,
				cursor: 'pointer'
			},
			arrow: {
				height: btnHeight,
				width: btnHeight * 154 / 175,
				backgroundImage: 'url(../src/img/nav_startBtn.png)',
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

export default NavigateStartBtn;
