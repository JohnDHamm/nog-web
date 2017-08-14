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

	handlePlayBtn() {
		console.log("clicked play btn");
		this.setState({showPlayer: true});
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
						<div onClick={() => this.handlePlayBtn()}>
							<ButtonPlayback />
						</div>
					</div>
				}

				{this.state.showPlayer && <PlaybackSnowflake />}
			</div>
		);
	}
}


function mapStateToProps({ userPatterns, currentPattern, values }) {
	return { userPatterns, currentPattern, values };
}

export default connect(mapStateToProps, { setCurrentPattern, setCurrentLights })(PatternSnowflake);
