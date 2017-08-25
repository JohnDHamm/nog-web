import React, { Component } from 'react';

class NavigateNextBtn extends Component {

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
				width: btnHeight * 100 / 175,
				backgroundImage: 'url(../src/img/nav/nav_nextBtn.png)',
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

export default NavigateNextBtn;
