import React, { Component } from 'react';

class ButtonPlayback extends Component {
	render() {
		const { btnSize } = this.props;
		const styles = {
			root: {
				height: btnSize,
				width: btnSize,
				cursor: 'pointer'
			},
			button: {
				width: '100%',
				height: '100%',
				backgroundImage: 'url(../src/img/playbackBtn.png',
				backgroundSize: '100% 100%'
			}
		};

		return (
			<div style={styles.root}>
				<div style={styles.button}>
				</div>
			</div>
		);
	}
}

export default ButtonPlayback;
