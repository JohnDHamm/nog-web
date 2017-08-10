import React, { Component } from 'react';

class ButtonPlayback extends Component {
	render() {
		const styles = {
			root: {
				border: '2px solid green',
				position: 'absolute',
				left: '50%',
				bottom: 20
			},
			button: {
				color: 'green',
				fontSize: 25
			}
		};



		return (
			<div style={styles.root}>
				<div style={styles.button}>
					PLAY
				</div>
			</div>
		);
	}

}

export default ButtonPlayback;
