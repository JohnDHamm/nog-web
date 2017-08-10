// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setCurrentPattern } from '../actions';

import PatternInfo from './patternInfo';
import InstancePlaybackSnowflake from './instance_playback_snowflake';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from 'material-ui/Slider';

class PlaybackSnowflake extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	displayInstance: 0
    };
  }

  componentWillMount() {
  	const defaultSpeed = this.props.currentPattern.defaultSpeed;
  	this.setState({ sliderStart: defaultSpeed });
  	const intervalId = setInterval(this.timer.bind(this), this.calcSpeed(defaultSpeed));
  	this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
  	clearInterval(this.state.intervalId);
  }

  calcSpeed(speed) {
  	return speed > 50 ? ( 101 - speed ) * 10.1 : (51 - speed) * 30.3 + 505;
  }

  handleSlider(event, value) {
  	clearInterval(this.state.intervalId);
  	const intervalId = setInterval(this.timer.bind(this), this.calcSpeed(value));
  	this.setState({intervalId: intervalId});
  }

  timer() {
  	this.state.displayInstance < this.props.currentPattern.instances.length - 1 ? this.setState({displayInstance: this.state.displayInstance + 1}) : this.setState({displayInstance: 0})
  }

	render() {
		const pattern = this.props.currentPattern;
		const { values } = this.props;
		const styles = {
			root: {
				backgroundColor: `${values.nogBackground}`,
				height: 'calc(100vh - 56px)',
				position: 'relative'
			},
			slider: {
				width: 500,
				position: 'absolute',
				bottom: 20,
				left: 'calc(50% - 250px'
			}
		};
		const currentInstanceSize = 560;
		const currentInstanceTopMargin = 20;

		return(
			<MuiThemeProvider>
				<div style={styles.root}>
					<PatternInfo
						name={pattern.name}
						description={pattern.description}
						defaultSpeed={pattern.defaultSpeed} />
					<InstancePlaybackSnowflake
						instanceNumber={this.state.displayInstance}
						instanceSize={currentInstanceSize}
						instanceLocation={{
							top: currentInstanceTopMargin,
							left: `calc(50% - ${currentInstanceSize / 2}px`}} />
					<div style={styles.slider}>
						<Slider
							value={this.state.slider}
							defaultValue={this.state.sliderStart}
							min={1}
		          max={100}
		          step={1}
		          onChange={this.handleSlider.bind(this)} />
					</div>
				</div>
			</MuiThemeProvider>
		)
	}
}

function mapStateToProps({ userPatterns, currentPattern, values }) {
	return { userPatterns, currentPattern, values };
}

export default connect(mapStateToProps, { setCurrentPattern })(PlaybackSnowflake);
