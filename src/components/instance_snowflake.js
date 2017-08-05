import React, { Component } from 'react';
import { connect } from 'react-redux';

class InstanceSnowflake extends Component {

	getColor(colNum) {
		const { currentColorPalette } = this.props;
		return currentColorPalette[colNum];
	}

	render() {
		const { currentPattern, currentColorPalette, values } = this.props;
		const instance = currentPattern.instances[0];
		// console.log("instance", instance);
		const styles = {
			root: {
				position: 'absolute',
				top: '50%',
				left: '50%',
				backgroundColor: '#333'
			},
			light: {
				width: 20,
				height: 20,
				borderRadius: '50%',
				border: '1px solid #333',
			},
			lightColor_1: {
				backgroundColor: this.getColor(`${instance.lightsColor[0]}`)
			},
			lightColor_2: {
				backgroundColor: this.getColor(`${instance.lightsColor[1]}`)
			},
			lightColor_3: {
				backgroundColor: this.getColor(`${instance.lightsColor[2]}`)
			},
		};


		return (
			<div style={styles.root}>
				<div style={{ ...styles.light, ...styles.lightColor_1 }}>
				</div>
				<div style={{ ...styles.light, ...styles.lightColor_2 }}>
				</div>
				<div style={{ ...styles.light, ...styles.lightColor_3 }}>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ currentPattern, currentColorPalette, values }) {
	return { currentPattern, currentColorPalette, values };
}

export default connect(mapStateToProps)(InstanceSnowflake);
