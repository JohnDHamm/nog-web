import React, { Component } from 'react';
import { connect } from 'react-redux';

import values from '../styles/values';

class NewPatternCard extends Component {

	render() {
		const styles = {
			root: {
				position: 'relative',
				height: 115,
				marginTop: 30,
				border: `4px dashed ${values.nogGreen}`,
				borderRadius: 5,
				backgroundColor: '#FFF',
				boxShadow: '0 2px 2px 0 rgba(0,0,0,.5)'
			},
			plus: {
				position: 'absolute',
				top: 'calc(50% - 25px)',
				left: 'calc(50% - 25px)',
				width: 50,
				height: 50,
				backgroundImage: 'url(../src/img/patternNewBtn.png)',
				backgroundSize: '100% 100%'
			}
		};

		return (
			<div style={styles.root}>
				<div style={styles.plus}>
				</div>
			</div>
		);
	}
}

export default NewPatternCard;
