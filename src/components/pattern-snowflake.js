// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setCurrentPattern } from '../actions';

import PatternInfo from './patternInfo';
import SingleColorPalette from './singleColorPalette';
import MultiColorPalette from './multiColorPalette';
import InstanceSnowflake from './instance_snowflake';
import NavigateNextBtn from './navigate_nextBtn';
import NavigatePrevBtn from './navigate_prevBtn';

class PatternSnowflake extends Component {

	componentWillMount() {
		const { id } = this.props.match.params;
		console.log("selected pattern:", this.props.userPatterns[id]);
		this.props.setCurrentPattern(this.props.userPatterns[id]);
	}

	render() {
		const pattern = this.props.currentPattern;
		// const defaultColor = pattern.defaultColor;
		const { values } = this.props;
		const styles = {
			root: {
				backgroundColor: `${values.nogBackground}`,
				height: 'calc(100vh - 56px)',
				position: 'relative'
			}
		};
		const instanceDisplay = [3, 2, 1, 0, 1, 2, 3];
		const currentInstanceSize = 400;
		const currentInstanceTopMargin = 120;

		return (
			<div style={styles.root}>
				<PatternInfo
					name={pattern.name}
					description={pattern.description}
					defaultSpeed={pattern.defaultSpeed} />

				{pattern.singleColor ? (<SingleColorPalette />) : (<MultiColorPalette />)}

				{instanceDisplay[0] !== null && <InstanceSnowflake
					instanceNumber={instanceDisplay[0]}
					instanceSize={currentInstanceSize / 8}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize * 7 / 16),
						left: `calc(50% - ${currentInstanceSize * 1.375}px - 40px`}} />}
				{instanceDisplay[1] !== null && <InstanceSnowflake
					instanceNumber={instanceDisplay[1]}
					instanceSize={currentInstanceSize / 4}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize * 3 / 8),
						left: `calc(50% - ${currentInstanceSize * 1.25}px - 40px`}} />}
				{instanceDisplay[2] !== null && <InstanceSnowflake
					instanceNumber={instanceDisplay[2]}
					instanceSize={currentInstanceSize / 2}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize / 4),
						left: `calc(50% - ${currentInstanceSize}px - 40px`}} />}

				<NavigatePrevBtn
					btnHeight={currentInstanceSize / 6}
					btnLocation={{
						top: `calc(${currentInstanceTopMargin}px + ${currentInstanceSize * 2.5 / 6}px)`,
						left: `calc(50% - ${currentInstanceSize / 2}px - ${currentInstanceSize / 6 * 100 / 175}px - 2px)`
					}} />
				{instanceDisplay[3] !== null && <InstanceSnowflake
					instanceNumber={instanceDisplay[3]}
					instanceSize={currentInstanceSize}
					instanceLocation={{
						top: currentInstanceTopMargin,
						left: `calc(50% - ${currentInstanceSize / 2}px`}} />}
				<NavigateNextBtn
					btnHeight={currentInstanceSize / 6}
					btnLocation={{
						top: `calc(${currentInstanceTopMargin}px + ${currentInstanceSize * 2.5 / 6}px)`,
						left: `calc(50% + ${currentInstanceSize / 2 + 2}px)`
					}} />

				{instanceDisplay[4] !== null && <InstanceSnowflake
					instanceNumber={instanceDisplay[4]}
					instanceSize={currentInstanceSize / 2}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize / 4),
						left: `calc(50% + ${currentInstanceSize / 2}px + 40px`}} />}
				{instanceDisplay[5] !== null && <InstanceSnowflake
					instanceNumber={instanceDisplay[5]}
					instanceSize={currentInstanceSize / 4}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize * 3 / 8),
						left: `calc(50% + ${currentInstanceSize}px + 40px`}} />}
				{instanceDisplay[6] !== null && <InstanceSnowflake
					instanceNumber={instanceDisplay[6]}
					instanceSize={currentInstanceSize / 8}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize * 7 / 16),
						left: `calc(50% + ${currentInstanceSize * 1.25}px + 40px`}} />}
			</div>
		);
	}
}


function mapStateToProps({ userPatterns, currentPattern, values }) {
	return { userPatterns, currentPattern, values };
}

export default connect(mapStateToProps, { setCurrentPattern })(PatternSnowflake);
