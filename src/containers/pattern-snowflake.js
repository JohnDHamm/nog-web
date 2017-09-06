// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCurrentPattern, setCurrentLights, setCurrentColorPalette, saveLights } from '../actions';

import PatternInfo from '../components/patternInfo';
import SingleColorPalette from '../components/singleColorPalette';
import MultiColorPalette from '../components/multiColorPalette';
import EditPatternSnowflakeMC from '../components/editPattern_snowflake_mc';
import PlaybackSnowflake from '../components/playback_snowflake';

import ButtonPlayback from '../components/button_playback';
import ButtonText from '../components/button_text';

class PatternSnowflake extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	showPlayer: false
    }
  }

	componentWillMount() {
		const { id } = this.props.match.params;
		// console.log("selected pattern:", this.props.userPatterns[id]);
		this.props.setCurrentPattern(this.props.userPatterns[id]);
		this.props.setCurrentLights(this.props.userPatterns[id]);
		this.props.setCurrentColorPalette(this.props.userPatterns[id].customColors);
	}

	componentDidMount() {
		// console.log("this.props", this.props);
	}

	savePattern() { //saves lights(instances) only currently
		// console.log("saving:", this.props.currentPattern);
		// console.log("this.props.currentLights", this.props.currentLights);
		const numInstances = this.props.currentPattern.numInstances;
		const newArrayToSave = [];
		for( let instNum = 0; instNum < numInstances; instNum++ ) {
			const newObj = {};
			newObj.instanceNum = instNum;
			newObj.lightsColor = [];
			for ( let lightNum = 0; lightNum < 30; lightNum++) {
				// console.log("this.props", this.props);
				newObj.lightsColor.push(this.props.currentLights[lightNum][instNum].colorNum);
			}
			newArrayToSave.push(newObj);
		}
		// console.log("newArrayToSave", newArrayToSave);
		const updateObj = {
			_id: this.props.currentPattern._id,
			instances: newArrayToSave
		}
		this.props.saveLights(updateObj, (res) => {
			// console.log("res", res);
		})
	}

	render() {
		console.log("render this.props from pattern-snowflake container", this.props);
		const pattern = this.props.currentPattern;
		// console.log("this.props.currentPattern", this.props.currentPattern);
		const { values } = this.props;
		const currentInstanceTopMargin = 120;
		const currentInstanceSize = 400;
		const styles = {
			root: {
				backgroundColor: `${values.nogBackground}`,
				height: 'calc(100vh - 56px)',
				position: 'relative'
			},
			info: {
				position: 'absolute',
				top: 20,
				left: 20
			},
			playbackBtn: {
				position: 'absolute',
				left: 'calc(50% - 35px)',
				top: currentInstanceTopMargin + currentInstanceSize + 46
			},
			stopBtn: {
				position: 'absolute',
				bottom: 25,
				left: 'calc(50% - 330px)'
			},
			saveBtn: {
				position: 'absolute',
				top: currentInstanceTopMargin + currentInstanceSize + 10,
				left: `calc(50% - 60px)`
			}
		};

		return (
			<div style={styles.root}>
				{!this.state.showPlayer &&
					<div>
						<div style={styles.info}>
							<PatternInfo
								name={pattern.name}
								description={pattern.description}
								defaultSpeed={pattern.defaultSpeed} />
						</div>

						{pattern.singleColor ? (
							<SingleColorPalette />) :
							(<MultiColorPalette
								colorPalette={this.props.currentColorPalette} />)
						}

						<EditPatternSnowflakeMC
							currentInstanceSize={currentInstanceSize}
							currentInstanceTopMargin={currentInstanceTopMargin} />

						<div
							style={styles.playbackBtn}
							onClick={() => this.setState({showPlayer: true})}>
							<ButtonPlayback
								btnSize={70}
							/>
						</div>
						<div
							style={styles.saveBtn}
							onClick={this.savePattern.bind(this)}>
							<ButtonText
								label={'Save Changes'}
								color={values.nogRed}
								bgColor={values.nogBackground} />
						</div>
					</div>
				}

				{this.state.showPlayer &&
					<div >
						<PlaybackSnowflake
							playbackInstanceSize={540}
							playbackInstanceTopMargin={20}
						/>

						<div
							style={styles.stopBtn}
							onClick={() => this.setState({showPlayer: false})} >
							<ButtonText
								label={'Stop Playback'}
								color={`${values.nogGrayText}`}
								bgColor={`${values.nogBackground}`} />
						</div>
					</div>
				}
			</div>
		);
	}
}


function mapStateToProps({ userPatterns, currentPattern, currentLights, currentColorPalette, values }) {
	return { userPatterns, currentPattern, currentLights, currentColorPalette, values };
}

export default connect(mapStateToProps, { setCurrentPattern, setCurrentLights, setCurrentColorPalette, saveLights })(PatternSnowflake);
