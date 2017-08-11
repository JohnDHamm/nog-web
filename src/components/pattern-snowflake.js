// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCurrentPattern, setCurrentLights } from '../actions';

import PatternInfo from './patternInfo';
import SingleColorPalette from './singleColorPalette';
import MultiColorPalette from './multiColorPalette';
// import InstanceSnowflake from './instance_snowflake';
// import InstanceCurrentSnowflake from './instance_current_snowflake';
// import NavigateNextBtn from './navigate_nextBtn';
// import NavigatePrevBtn from './navigate_prevBtn';
import EditPatternSnowflakeMC from './editPattern_snowflake_mc';

import ButtonPlayback from './button_playback';

class PatternSnowflake extends Component {

	constructor(props) {
    super(props);
    // this.state = {
    // 	numInstances: 4,
    // 	displayArray: [ null, null, null, 0, 1, 2, 3 ]
    // };
    // this.navNext = this.navNext.bind(this);
    // this.navPrev = this.navPrev.bind(this);
  }

	componentWillMount() {
		const { id } = this.props.match.params;
		console.log("selected pattern:", this.props.userPatterns[id]);
		this.props.setCurrentPattern(this.props.userPatterns[id]);
		// this.setState({numInstances: this.props.userPatterns[id].instances.length});
		this.props.setCurrentLights(this.props.userPatterns[id]);
	}

	navNext() {
		const nextInstance = !this.state.displayArray[6] ? null : this.state.displayArray[6] === this.state.numInstances - 1 ? null : this.state.displayArray[6] + 1;
		const newArray = this.state.displayArray;
		newArray.push(nextInstance);
		newArray.shift();
		this.setState({displayArray: newArray})
	}

	navPrev() {
		const prevInstance = this.state.displayArray[0] ? this.state.displayArray[0] - 1 : null;
		const newArray = this.state.displayArray;
		newArray.unshift(prevInstance);
		newArray.pop();
		this.setState({displayArray: newArray})
	}

	render() {
		// console.log("this.props", this.props);
		const pattern = this.props.currentPattern;
		console.log("this.props.currentPattern", this.props.currentPattern);
		const { values } = this.props;
		const styles = {
			root: {
				backgroundColor: `${values.nogBackground}`,
				height: 'calc(100vh - 56px)',
				position: 'relative'
			}
		};
		// const instanceDisplayArray = this.state.displayArray;
		// const currentInstanceSize = 400;
		// const currentInstanceTopMargin = 120;

		return (
			<div style={styles.root}>
				<PatternInfo
					name={pattern.name}
					description={pattern.description}
					defaultSpeed={pattern.defaultSpeed} />

				{pattern.singleColor ? (<SingleColorPalette />) : (<MultiColorPalette />)}

				<EditPatternSnowflakeMC
					currentInstanceSize={400}
					currentInstanceTopMargin={120} />

				<ButtonPlayback />
			</div>
		);
	}
}


function mapStateToProps({ userPatterns, currentPattern, values }) {
	return { userPatterns, currentPattern, values };
}

export default connect(mapStateToProps, { setCurrentPattern, setCurrentLights })(PatternSnowflake);
