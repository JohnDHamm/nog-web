import React, { Component } from 'react';
import { connect } from 'react-redux';

import values from '../styles/values';

import { snowflakeLightLocations } from '../helpers/snowflakeLightLocations';

class InstancePlaybackSnowflake extends Component {

	getColor(colNum) {
		const { currentColorPalette } = this.props;
		return currentColorPalette[colNum].colorVal;
	}

	createNewLightsObj(currentLights, instanceNumber) {
		const newArray = [];
		for (let i = 0; i < 30; i++) {
			let newObj = {};
			newObj.lightNum = i;
			newObj.lightColor = this.getColor(currentLights[i][instanceNumber].colorNum);
			newArray.push(newObj);
		};
		return _.mapKeys(newArray, 'lightNum');
	}

	renderLights() {
		const { currentLights, instanceNumber, instanceSize } = this.props;
		const lightsObj = this.createNewLightsObj(currentLights, instanceNumber);

		const containerSize = instanceSize,
			lightDia = containerSize * (20 / 420),
			lightOffset = lightDia / 2,
			lightBorderSize = containerSize < 210 ? 0 : 1;
		const lightLocations = snowflakeLightLocations(lightOffset);

		const styles = {
			lightCircle: {
				width: lightDia,
				height: lightDia,
				borderRadius: '50%',
				border: `${lightBorderSize}px solid ${values.nogGrayText}`,
				position: 'absolute'
			}
		}

		return _.map(lightsObj, light => {
			return (
				<div
					key={light.lightNum}
					style={{ ...styles.lightCircle,
						backgroundColor: light.lightColor,
						left: lightLocations[light.lightNum].left,
						top: lightLocations[light.lightNum].top,
						right: lightLocations[light.lightNum].right,
						bottom: lightLocations[light.lightNum].bottom
					}} />
			);
		})
	}

	render() {
		const { instanceNumber, instanceSize, instanceLocation } = this.props;
		const containerSize = instanceSize;
		const styles = {
			root: {
				position: 'absolute',
				top: instanceLocation.top,
				left: instanceLocation.left,
			},
			container: {
				position: 'relative',
				width: containerSize,
				height: containerSize,
				backgroundImage: 'url(../src/img/snowflake/snowflake_playback_bgImage.png',
				backgroundSize: '100% 100%'
			},
			labelDiv: {
				position: 'absolute',
				width: instanceSize / 8,
				top: `calc(50% - ${instanceSize / 15}px)`,
				left: `calc(50% - ${instanceSize / 16}px)`,
			},
			labelText: {
				textAlign: 'center',
				fontSize: instanceSize / 11,
				color: `${values.nogGreen}`
			}
		};

		return (
			<div style={styles.root}>
				<div style={styles.container}>
					<div style={styles.labelDiv}>
						<div style={styles.labelText}>
							{instanceNumber + 1}
						</div>
					</div>
					{this.renderLights()}
				</div>
			</div>
		);
	}
}

function mapStateToProps({ currentColorPalette, currentLights }) {
	return { currentColorPalette, currentLights };
}

export default connect(mapStateToProps)(InstancePlaybackSnowflake);
