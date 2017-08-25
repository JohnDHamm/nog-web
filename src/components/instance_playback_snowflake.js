import React, { Component } from 'react';
import { connect } from 'react-redux';

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
		const { currentLights, values, instanceNumber, instanceSize } = this.props;
		const lightsObj = this.createNewLightsObj(currentLights, instanceNumber);

		const containerSize = instanceSize,
			lightDia = containerSize * (20 / 420),
			lightOffset = lightDia / 2,
			lightBorderSize = containerSize < 210 ? 0 : 1;
		const lightLocations = [
			{ lightNum: 0,
				top: '36%',
				left: `calc(50% - ${lightOffset}px)`,
			},
			{ lightNum: 1,
				top: '13%',
				left: '38.2%',
			},
			{ lightNum: 2,
				top: '1.7%',
				left: `calc(50% - ${lightOffset}px)`,
			},
			{ lightNum: 3,
				top: '13%',
				right: '38%',
			},
			{ lightNum: 4,
				top: '25.3%',
				right: '34.6%',
			},
			{ lightNum: 5,
				top: '41.7%',
				right: '37.4%',
			},
			{ lightNum: 6,
				top: '22.1%',
				right: '22.6%',
			},
			{ lightNum: 7,
				top: '24.55%',
				right: '7.65%',
			},
			{ lightNum: 8,
				top: '38.6%',
				right: '13%',
			},
			{ lightNum: 9,
				top: `calc(50% - ${lightOffset}px)`,
				right: '22.05%',
			},
			{ lightNum: 10,
				bottom: '41.7%',
				right: '37.4%',
			},
			{ lightNum: 11,
				bottom: '38.6%',
				right: '13%',
			},
			{ lightNum: 12,
				bottom: '24.62%',
				right: '7.65%',
			},
			{ lightNum: 13,
				bottom: '22.1%',
				right: '22.6%',
			},
			{ lightNum: 14,
				bottom: '25.3%',
				right: '34.6%',
			},
			{ lightNum: 15,
				bottom: '36%',
				left: `calc(50% - ${lightOffset}px)`,
			},
			{ lightNum: 16,
				bottom: '13%',
				right: '38%',
			},
			{ lightNum: 17,
				bottom: '1.7%',
				left: `calc(50% - ${lightOffset}px)`,
			},
			{ lightNum: 18,
				bottom: '13%',
				left: '38%',
			},
			{ lightNum: 19,
				bottom: '25.3%',
				left: '34.8%',
			},
			{ lightNum: 20,
				bottom: '41.7%',
				left: '37.4%',
			},
			{ lightNum: 21,
				bottom: '22.1%',
				left: '22.6%',
			},
			{ lightNum: 22,
				bottom: '24.62%',
				left: '7.65%',
			},
			{ lightNum: 23,
				bottom: '38.6%',
				left: '13%',
			},
			{ lightNum: 24,
				bottom: `calc(50% - ${lightOffset}px)`,
				left: '22.05%',
			},
			{ lightNum: 25,
				top: '41.7%',
				left: '37.4%',
			},
			{ lightNum: 26,
				top: '38.6%',
				left: '13%',
			},
			{ lightNum: 27,
				top: '24.62%',
				left: '7.65%',
			},
			{ lightNum: 28,
				top: '22.1%',
				left: '22.6%',
			},
			{ lightNum: 29,
				top: '25.3%',
				left: '34.8%',
			}
		]

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
		const { values, instanceNumber, instanceSize, instanceLocation } = this.props;
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
				width: this.props.instanceSize / 8,
				// border: '1px dotted green',
				top: `calc(50% - ${this.props.instanceSize / 15}px)`,
				left: `calc(50% - ${this.props.instanceSize / 16}px)`,
			},
			labelText: {
				textAlign: 'center',
				fontSize: this.props.instanceSize / 11,
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

function mapStateToProps({ currentColorPalette, currentLights, values }) {
	return { currentColorPalette, currentLights, values };
}

export default connect(mapStateToProps)(InstancePlaybackSnowflake);
