import React, { Component } from 'react';

class NavigateEndBtn extends Component {

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
				width: btnHeight * 156 / 175,
				backgroundImage: 'url(../src/img/nav_endBtn.png)',
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

export default NavigateEndBtn;
