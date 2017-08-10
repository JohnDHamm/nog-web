import React, { Component } from 'react';

class ButtonPlayback extends Component {
	render() {
		const styles = {
			root: {
				// border: '2px solid green',
				position: 'absolute',
				height: 70,
				width: 70,
				left: 'calc(50% - 35px)',
				bottom: 30
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
