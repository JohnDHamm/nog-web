// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setCurrentPattern } from '../actions';

import PatternInfo from './patternInfo';
import InstanceSnowflake from './instance_snowflake';

class PlaybackSnowflake extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	displayInstance: 0,
    	displaySpeed: 1
    };
  }

  componentDidMount() {
  	console.log("hello");
  	const defaultSpeed = this.props.currentPattern.defaultSpeed;
  	const speed = this.setSpeed(defaultSpeed);
  	console.log("speed", speed);
		this.setState({displaySpeed: speed})
  	const intervalId = setInterval(this.timer.bind(this), speed);
  	this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
  	clearInterval(this.state.intervalId);
  }

  setSpeed(speed) {
  	if ( speed > 50 ) {
  		return ( 101 - speed ) * 10.1;
  	}
  	return (51 - speed) * 30.3 + 505;
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
			}
		};
		const currentInstanceSize = 560;
		const currentInstanceTopMargin = 20;

		return(
			<div style={styles.root}>
				<PatternInfo
					name={pattern.name}
					description={pattern.description}
					defaultSpeed={pattern.defaultSpeed} />
				<InstanceSnowflake
					instanceNumber={this.state.displayInstance}
					instanceSize={currentInstanceSize}
					instanceLocation={{
						top: currentInstanceTopMargin,
						left: `calc(50% - ${currentInstanceSize / 2}px`}} />
			</div>
		)
	}
}

function mapStateToProps({ userPatterns, currentPattern, values }) {
	return { userPatterns, currentPattern, values };
}

export default connect(mapStateToProps, { setCurrentPattern })(PlaybackSnowflake);
