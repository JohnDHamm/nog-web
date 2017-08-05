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
				top: 100,
				left: 'calc(50% - 210px)',
				// backgroundColor: '#000'
			},
			container: {
				position: 'relative',
				width: 420,
				height: 420,
				backgroundImage: 'url(../src/img/snowflake_instance_v01.png',
				backgroundSize: '100% 100%'
			},
			light: {
				width: 20,
				height: 20,
				borderRadius: '50%',
				border: '1px solid #333',
				position: 'absolute'
			},
			lightColor_1: {
				top: 7,
				left: 200,
				backgroundColor: this.getColor(`${instance.lightsColor[0]}`)
			},
			lightColor_2: {
				bottom: 5,
				right: 5,
				backgroundColor: this.getColor(`${instance.lightsColor[1]}`)
			},
			lightColor_3: {
				bottom: 5,
				left: 5,
				backgroundColor: this.getColor(`${instance.lightsColor[2]}`)
			},
		};


		return (
			<div style={styles.root}>
				<div style={styles.container}>
					<div style={{ ...styles.light, ...styles.lightColor_1 }} />
					<div style={{ ...styles.light, ...styles.lightColor_2 }} />
					<div style={{ ...styles.light, ...styles.lightColor_3 }} />
				</div>
			</div>
		);
	}
}

function mapStateToProps({ currentPattern, currentColorPalette, values }) {
	return { currentPattern, currentColorPalette, values };
}

export default connect(mapStateToProps)(InstanceSnowflake);
