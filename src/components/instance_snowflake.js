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
		const containerSize = 420;
		const halfContainer = containerSize / 2;
		const lightDia = containerSize * (20 / 420);
		const lightOffset = lightDia / 2;
		const styles = {
			root: {
				position: 'absolute',
				top: 100,
				left: `calc(50% - ${halfContainer}px)`,
			},
			container: {
				position: 'relative',
				width: `${containerSize}`,
				height: `${containerSize}`,
				backgroundImage: 'url(../src/img/snowflake_currentInstance_bgImage.png',
				backgroundSize: '100% 100%'
			},
			light: {
				width: `${lightDia}`,
				height: `${lightDia}`,
				borderRadius: '50%',
				border: `1px solid ${values.nogGrayText}`,
				position: 'absolute'
			},
			lightColor_0: {
				left: `calc(50% - ${lightOffset}px)`,
				top: '36%',
				backgroundColor: this.getColor(`${instance.lightsColor[0]}`)
			},
			lightColor_1: {
				top: '13%',
				left: '38.2%',
				backgroundColor: this.getColor(`${instance.lightsColor[1]}`)
			},
			lightColor_2: {
				top: '1.7%',
				left: `calc(50% - ${lightOffset}px)`,
				backgroundColor: this.getColor(`${instance.lightsColor[2]}`)
			},
			lightColor_3: {
				top: '13%',
				right: '38%',
				backgroundColor: this.getColor(`${instance.lightsColor[3]}`)
			},
			lightColor_4: {
				top: '25.3%',
				right: '34.6%',
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
				top: `calc(50% - ${lightOffset}px)`,
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
			lightColor_13: {
				bottom: 93,
				right: 95,
				backgroundColor: this.getColor(`${instance.lightsColor[13]}`)
			},
			lightColor_14: {
				bottom: 106,
				right: 146,
				backgroundColor: this.getColor(`${instance.lightsColor[14]}`)
			},
			lightColor_15: {
				bottom: 150,
				left: `calc(50% - ${lightOffset}px)`,
				backgroundColor: this.getColor(`${instance.lightsColor[15]}`)
			},
			lightColor_16: {
				bottom: 55,
				right: 160,
				backgroundColor: this.getColor(`${instance.lightsColor[16]}`)
			},
			lightColor_17: {
				bottom: 7,
				left: `calc(50% - ${lightOffset}px)`,
				backgroundColor: this.getColor(`${instance.lightsColor[17]}`)
			},
			lightColor_18: {
				bottom: 55,
				left: 160,
				backgroundColor: this.getColor(`${instance.lightsColor[18]}`)
			},
			lightColor_19: {
				bottom: 106,
				left: 146,
				backgroundColor: this.getColor(`${instance.lightsColor[19]}`)
			},
			lightColor_20: {
				bottom: 175,
				left: 157,
				backgroundColor: this.getColor(`${instance.lightsColor[20]}`)
			},
			lightColor_21: {
				bottom: 93,
				left: 94,
				backgroundColor: this.getColor(`${instance.lightsColor[21]}`)
			},
			lightColor_22: {
				bottom: 103,
				left: 32,
				backgroundColor: this.getColor(`${instance.lightsColor[22]}`)
			},
			lightColor_23: {
				bottom: 162,
				left: 54,
				backgroundColor: this.getColor(`${instance.lightsColor[23]}`)
			},
			lightColor_24: {
				bottom: `calc(50% - ${lightOffset}px)`,
				left: 92,
				backgroundColor: this.getColor(`${instance.lightsColor[24]}`)
			},
			lightColor_25: {
				top: 175,
				left: 156,
				backgroundColor: this.getColor(`${instance.lightsColor[25]}`)
			},
			lightColor_26: {
				top: 162,
				left: 54,
				backgroundColor: this.getColor(`${instance.lightsColor[26]}`)
			},
			lightColor_27: {
				top: 103,
				left: 32,
				backgroundColor: this.getColor(`${instance.lightsColor[27]}`)
			},
			lightColor_28: {
				top: 93,
				left: 94,
				backgroundColor: this.getColor(`${instance.lightsColor[28]}`)
			},
			lightColor_29: {
				top: 106,
				left: 146,
				backgroundColor: this.getColor(`${instance.lightsColor[29]}`)
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
					<div style={{ ...styles.light, ...styles.lightColor_13 }} />
					<div style={{ ...styles.light, ...styles.lightColor_14 }} />
					<div style={{ ...styles.light, ...styles.lightColor_15 }} />
					<div style={{ ...styles.light, ...styles.lightColor_16 }} />
					<div style={{ ...styles.light, ...styles.lightColor_17 }} />
					<div style={{ ...styles.light, ...styles.lightColor_18 }} />
					<div style={{ ...styles.light, ...styles.lightColor_19 }} />
					<div style={{ ...styles.light, ...styles.lightColor_20 }} />
					<div style={{ ...styles.light, ...styles.lightColor_21 }} />
					<div style={{ ...styles.light, ...styles.lightColor_22 }} />
					<div style={{ ...styles.light, ...styles.lightColor_23 }} />
					<div style={{ ...styles.light, ...styles.lightColor_24 }} />
					<div style={{ ...styles.light, ...styles.lightColor_25 }} />
					<div style={{ ...styles.light, ...styles.lightColor_26 }} />
					<div style={{ ...styles.light, ...styles.lightColor_27 }} />
					<div style={{ ...styles.light, ...styles.lightColor_28 }} />
					<div style={{ ...styles.light, ...styles.lightColor_29 }} />
				</div>
			</div>
		);
	}
}

function mapStateToProps({ currentPattern, currentColorPalette, values }) {
	return { currentPattern, currentColorPalette, values };
}

export default connect(mapStateToProps)(InstanceSnowflake);
