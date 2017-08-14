import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PatternInfo from './patternInfo';
import InstancePlaybackSnowflake from './instance_playback_snowflake';
import ButtonText from './button_text';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from 'material-ui/Slider';

class PlaybackSnowflake extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	displayInstance: 0,
    	speedChanged: false
    };
  }

  componentWillMount() {
  	// console.log("this.props.currentPattern", this.props.currentPattern);
  	const defaultSpeed = this.props.currentPattern.defaultSpeed;
  	this.setState({ sliderStart: defaultSpeed });
  	this.setState({ sliderLabel: defaultSpeed });
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
  	value !== this.state.sliderStart ?
  		this.setState({speedChanged: true}) : this.setState({speedChanged: false});
  	this.setState({ sliderLabel: value });
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
			sliderContainer: {
				width: 400,
				height: 70,
				position: 'absolute',
				bottom: 20,
				left: 'calc(50% - 200px)'
			},
			labelText: {
				fontSize: 20,
				color: `${values.nogGrayText}`,
				position: 'absolute',
				top: 10
			},
			slider: {
				width: '100%',
				position: 'absolute',
				bottom: 0
			},
			stopBtn: {
				position: 'absolute',
				bottom: 25,
				left: 'calc(50% - 330px)'
			},
			saveSpeedBtn: {
				position: 'absolute',
				bottom: 25,
				left: 'calc(50% + 210px)'
			}
		};
		const currentInstanceSize = 540;
		const currentInstanceTopMargin = 20;

		return(
			<MuiThemeProvider>
				<div style={styles.root}>

					<InstancePlaybackSnowflake
						instanceNumber={this.state.displayInstance}
						instanceSize={currentInstanceSize}
						instanceLocation={{
							top: currentInstanceTopMargin,
							left: `calc(50% - ${currentInstanceSize / 2}px`}}
					/>

					<div style={styles.sliderContainer}>
						<div style={{ ...styles.labelText,
							left: `calc(${this.state.sliderLabel}% - 12px)`}}>
							{this.state.sliderLabel}
						</div>
						<div style={styles.slider}>
							<Slider
								value={this.state.slider}
								defaultValue={this.state.sliderStart}
								min={1}
			          max={100}
			          step={1}
			          onChange={this.handleSlider.bind(this)}
			          sliderStyle={{marginBottom: 10, marginTop: 10}} />
						</div>
					</div>

					{this.state.speedChanged &&
						<div style={styles.saveSpeedBtn}>
							<ButtonText
								label={'Save New Default Speed'}
								color={`${values.nogGrayText}`}
								bgColor={`${values.nogBackground}`} />
						</div>
					}
					<div style={styles.stopBtn}>
						<Link to={`/pattern-snowflake/${this.props.currentPattern._id}`} >
							<ButtonText
								label={'Stop Playback'}
								color={`${values.nogGrayText}`}
								bgColor={`${values.nogBackground}`} />
						</Link>
					</div>
				</div>
			</MuiThemeProvider>
		)
	}
}

function mapStateToProps({ currentPattern, values }) {
	return { currentPattern, values };
}

export default connect(mapStateToProps)(PlaybackSnowflake);
