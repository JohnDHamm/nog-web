// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCurrentPattern, setCurrentLights } from '../actions';

import PatternInfo from './patternInfo';
import SingleColorPalette from './singleColorPalette';
import MultiColorPalette from './multiColorPalette';
import EditPatternSnowflakeMC from './editPattern_snowflake_mc';
import PlaybackSnowflake from './playback_snowflake';

import ButtonPlayback from './button_playback';
import ButtonText from './button_text';

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
	}

	render() {
		// console.log("this.props", this.props);
		const pattern = this.props.currentPattern;
		// console.log("this.props.currentPattern", this.props.currentPattern);
		const { values } = this.props;
		const styles = {
			root: {
				backgroundColor: `${values.nogBackground}`,
				height: 'calc(100vh - 56px)',
				position: 'relative'
			},
			playbackBtn: {
				position: 'absolute',
				left: 'calc(50% - 35px)',
				bottom: 30
			},
			stopBtn: {
				position: 'absolute',
				bottom: 25,
				left: 'calc(50% - 330px)'
			}
		};

		return (
			<div style={styles.root}>
				{!this.state.showPlayer &&
					<div>
						<PatternInfo
							name={pattern.name}
							description={pattern.description}
							defaultSpeed={pattern.defaultSpeed} />

						{pattern.singleColor ? (<SingleColorPalette />) : (<MultiColorPalette />)}

						<EditPatternSnowflakeMC
							currentInstanceSize={400}
							currentInstanceTopMargin={120} />

						<div
							style={styles.playbackBtn}
							onClick={() => this.setState({showPlayer: true})}>
							<ButtonPlayback
								btnSize={70}
							/>
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


function mapStateToProps({ userPatterns, currentPattern, values }) {
	return { userPatterns, currentPattern, values };
}

export default connect(mapStateToProps, { setCurrentPattern, setCurrentLights })(PatternSnowflake);
