// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCurrentPattern, setCurrentLights } from '../actions';

import PatternInfo from './patternInfo';
import SingleColorPalette from './singleColorPalette';
import MultiColorPalette from './multiColorPalette';
import InstanceSnowflake from './instance_snowflake';
import InstanceCurrentSnowflake from './instance_current_snowflake';
import NavigateNextBtn from './navigate_nextBtn';
import NavigatePrevBtn from './navigate_prevBtn';

import ButtonPlayback from './button_playback';

class PatternSnowflake extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	numInstances: 4,
    	displayArray: [ null, null, null, 0, 1, 2, 3 ]
    };
    this.navNext = this.navNext.bind(this);
    this.navPrev = this.navPrev.bind(this);
  }

	componentWillMount() {
		const { id } = this.props.match.params;
		// console.log("selected pattern:", this.props.userPatterns[id]);
		this.props.setCurrentPattern(this.props.userPatterns[id]);
		this.setState({numInstances: this.props.userPatterns[id].instances.length});
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
		// console.log("this.props.currentPattern", this.props.currentPattern);
		const { values } = this.props;
		const styles = {
			root: {
				backgroundColor: `${values.nogBackground}`,
				height: 'calc(100vh - 56px)',
				position: 'relative'
			}
		};
		const instanceDisplayArray = this.state.displayArray;
		const currentInstanceSize = 400;
		const currentInstanceTopMargin = 120;

		return (
			<div style={styles.root}>
				<PatternInfo
					name={pattern.name}
					description={pattern.description}
					defaultSpeed={pattern.defaultSpeed} />

				{pattern.singleColor ? (<SingleColorPalette />) : (<MultiColorPalette />)}

				{instanceDisplayArray[0] !== null && <InstanceSnowflake
					instanceNumber={instanceDisplayArray[0]}
					instanceSize={currentInstanceSize / 8}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize * 7 / 16),
						left: `calc(50% - ${currentInstanceSize * 1.375}px - 40px`}} />}
				{instanceDisplayArray[1] !== null && <InstanceSnowflake
					instanceNumber={instanceDisplayArray[1]}
					instanceSize={currentInstanceSize / 4}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize * 3 / 8),
						left: `calc(50% - ${currentInstanceSize * 1.25}px - 40px`}} />}
				{instanceDisplayArray[2] !== null && <InstanceSnowflake
					instanceNumber={instanceDisplayArray[2]}
					instanceSize={currentInstanceSize / 2}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize / 4),
						left: `calc(50% - ${currentInstanceSize}px - 40px`}} />}

				{instanceDisplayArray[2] !== null &&
					<div onClick={this.navPrev}>
						<NavigatePrevBtn
							btnHeight={currentInstanceSize / 6}
							btnLocation={{
								top: `calc(${currentInstanceTopMargin}px + ${currentInstanceSize * 2.5 / 6}px)`,
								left: `calc(50% - ${currentInstanceSize / 2}px - ${currentInstanceSize / 6 * 100 / 175}px - 2px)`
							}} />
					</div>
				}

				{instanceDisplayArray[3] !== null && <InstanceCurrentSnowflake
					instanceNumber={instanceDisplayArray[3]}
					instanceSize={currentInstanceSize}
					instanceLocation={{
						top: currentInstanceTopMargin,
						left: `calc(50% - ${currentInstanceSize / 2}px`}} />}

				{instanceDisplayArray[4] !== null &&
					<div onClick={this.navNext}>
						<NavigateNextBtn
							btnHeight={currentInstanceSize / 6}
							btnLocation={{
								top: `calc(${currentInstanceTopMargin}px + ${currentInstanceSize * 2.5 / 6}px)`,
								left: `calc(50% + ${currentInstanceSize / 2 + 2}px)`
							}} />
					</div>
				}

				{instanceDisplayArray[4] !== null && <InstanceSnowflake
					instanceNumber={instanceDisplayArray[4]}
					instanceSize={currentInstanceSize / 2}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize / 4),
						left: `calc(50% + ${currentInstanceSize / 2}px + 40px`}} />}
				{instanceDisplayArray[5] !== null && <InstanceSnowflake
					instanceNumber={instanceDisplayArray[5]}
					instanceSize={currentInstanceSize / 4}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize * 3 / 8),
						left: `calc(50% + ${currentInstanceSize}px + 40px`}} />}
				{instanceDisplayArray[6] !== null && <InstanceSnowflake
					instanceNumber={instanceDisplayArray[6]}
					instanceSize={currentInstanceSize / 8}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize * 7 / 16),
						left: `calc(50% + ${currentInstanceSize * 1.25}px + 40px`}} />}
				<Link to={'/playback-snowflake/598b5104172824a3e8d0dcc1'}>
					<ButtonPlayback />
				</Link>
			</div>
		);
	}
}


function mapStateToProps({ userPatterns, currentPattern, values }) {
	return { userPatterns, currentPattern, values };
}

export default connect(mapStateToProps, { setCurrentPattern, setCurrentLights })(PatternSnowflake);
