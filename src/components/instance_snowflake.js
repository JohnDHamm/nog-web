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
			lightColor_0: {
				left: 200,
				top: 150,
				backgroundColor: this.getColor(`${instance.lightsColor[0]}`)
			},
			lightColor_1: {
				top: 55,
				left: 160,
				backgroundColor: this.getColor(`${instance.lightsColor[1]}`)
			},
			lightColor_2: {
				top: 7,
				left: 200,
				backgroundColor: this.getColor(`${instance.lightsColor[2]}`)
			},
			lightColor_3: {
				top: 55,
				right: 160,
				backgroundColor: this.getColor(`${instance.lightsColor[3]}`)
			},
			lightColor_4: {
				top: 106,
				right: 146,
				backgroundColor: this.getColor(`${instance.lightsColor[4]}`)
			},
			lightColor_5: {
				top: 175,
				right: 157,
				backgroundColor: this.getColor(`${instance.lightsColor[5]}`)
			},
			lightColor_6: {
				top: 93,
				right: 95,
				backgroundColor: this.getColor(`${instance.lightsColor[6]}`)
			},
			lightColor_7: {
				top: 103,
				right: 33,
				backgroundColor: this.getColor(`${instance.lightsColor[7]}`)
			},
			lightColor_8: {
				top: 162,
				right: 55,
				backgroundColor: this.getColor(`${instance.lightsColor[8]}`)
			},
			lightColor_9: {
				top: 200,
				right: 93,
				backgroundColor: this.getColor(`${instance.lightsColor[9]}`)
			},
			lightColor_10: {
				bottom: 175,
				right: 157,
				backgroundColor: this.getColor(`${instance.lightsColor[10]}`)
			},
			lightColor_11: {
				bottom: 162,
				right: 55,
				backgroundColor: this.getColor(`${instance.lightsColor[11]}`)
			},
			lightColor_12: {
				bottom: 103,
				right: 33,
				backgroundColor: this.getColor(`${instance.lightsColor[12]}`)
			},
		};


		return (
			<div style={styles.root}>
				<div style={styles.container}>
					<div style={{ ...styles.light, ...styles.lightColor_0 }} />
					<div style={{ ...styles.light, ...styles.lightColor_1 }} />
					<div style={{ ...styles.light, ...styles.lightColor_2 }} />
					<div style={{ ...styles.light, ...styles.lightColor_3 }} />
					<div style={{ ...styles.light, ...styles.lightColor_4 }} />
					<div style={{ ...styles.light, ...styles.lightColor_5 }} />
					<div style={{ ...styles.light, ...styles.lightColor_6 }} />
					<div style={{ ...styles.light, ...styles.lightColor_7 }} />
					<div style={{ ...styles.light, ...styles.lightColor_8 }} />
					<div style={{ ...styles.light, ...styles.lightColor_9 }} />
					<div style={{ ...styles.light, ...styles.lightColor_10 }} />
					<div style={{ ...styles.light, ...styles.lightColor_11 }} />
					<div style={{ ...styles.light, ...styles.lightColor_12 }} />
				</div>
			</div>
		);
	}
}

function mapStateToProps({ currentPattern, currentColorPalette, values }) {
	return { currentPattern, currentColorPalette, values };
}

export default connect(mapStateToProps)(InstanceSnowflake);
