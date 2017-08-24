import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateCurrentLights, updateNumInstances } from '../actions';

import InstanceSnowflake from './instance_snowflake';
import InstanceCurrentSnowflake from './instance_current_snowflake';
import NavigateNextBtn from './navigate_nextBtn';
import NavigatePrevBtn from './navigate_prevBtn';
import ButtonText from './button_text';

class EditPatternSnowflakeMC extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	displayArray: [ null, null, null, 0, 1, 2, 3 ]
    };
    this.navNext = this.navNext.bind(this);
    this.navPrev = this.navPrev.bind(this);
    this.addInstance = this.addInstance.bind(this);
    this.deleteInstance = this.deleteInstance.bind(this);
  }

	componentWillMount() {
		// console.log("editing...");
	}

	updateDisplayArray(newCurrentNum, numInstances) {
		const newArray = [newCurrentNum];
		for ( let i = 1; i < 4; i ++ ) {
			newCurrentNum + i < numInstances ? newArray.push(newCurrentNum + i) : newArray.push(null);
			newCurrentNum - i > -1 ? newArray.unshift(newCurrentNum - i) : newArray.unshift(null);
		}
		this.setState({ displayArray: newArray });
	}

	navNext() {
		this.updateDisplayArray(this.state.displayArray[4], this.props.currentPattern.numInstances)
	}

	navPrev() {
		this.updateDisplayArray(this.state.displayArray[2], this.props.currentPattern.numInstances)
	}


	addInstance() {
		const currentInstNum = this.state.displayArray[3];
		const changedLights = Object.assign({}, this.props.currentLights);
		const newNumInstances = this.props.currentPattern.numInstances + 1;
		this.props.updateNumInstances(newNumInstances);
		//shift after instances from end of instances going backward
		for (let i = newNumInstances - 1; i > currentInstNum + 1; i-- ) {
			for (let lightNum = 0; lightNum < 30; lightNum ++ ) {
				changedLights[lightNum][i] = {
					instanceNum: i,
					colorNum: changedLights[lightNum][i - 1].colorNum
				}
			}
		}
		//set new instance to "blank" color
		for ( let lightNum = 0; lightNum < 30; lightNum ++ ) {
			changedLights[lightNum][currentInstNum + 1].colorNum = 7;
		}
		this.props.updateCurrentLights(changedLights);
		this.updateDisplayArray(this.state.displayArray[4], newNumInstances);
	}

	deleteInstance() {
		const currInstNum = this.state.displayArray[3];
		const prevNumInstances = this.props.currentPattern.numInstances;
		// console.log("prevNumInstances", prevNumInstances);
		const changedLights = Object.assign({}, this.props.currentLights);
		for ( let i = currInstNum; i < prevNumInstances - 1; i++ ) {
			for (let lightNum = 0; lightNum < 30; lightNum ++ ) {
				changedLights[lightNum][i].colorNum = changedLights[lightNum][i + 1].colorNum;
				}
		}
		console.log("changedLights", changedLights);
		// for (let lightNum = 0; lightNum < 30; lightNum ++ ) {


		//update numInstances n store

	}



	render() {
		const { values, currentInstanceSize, currentInstanceTopMargin } = this.props;
		const optionBtnWidth = 150,
			optionBtnLeft = 'calc(50% + 100px)';
		const styles = {
			root: {
				position: 'relative'
			},
			addBtn: {
				position: 'absolute',
				width: optionBtnWidth,
				top: currentInstanceTopMargin + currentInstanceSize -40,
				left: optionBtnLeft
			},
			deleteBtn: {
				position: 'absolute',
				width: optionBtnWidth,
				top: currentInstanceTopMargin + currentInstanceSize -10,
				left: optionBtnLeft
			}
		};


		return(
			<div style={styles.root}>

				{this.state.displayArray[0] !== null && <InstanceSnowflake
					instanceNumber={this.state.displayArray[0]}
					instanceSize={currentInstanceSize / 8}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize * 7 / 16),
						left: `calc(50% - ${currentInstanceSize * 1.375}px - 40px`}} />}
				{this.state.displayArray[1] !== null && <InstanceSnowflake
					instanceNumber={this.state.displayArray[1]}
					instanceSize={currentInstanceSize / 4}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize * 3 / 8),
						left: `calc(50% - ${currentInstanceSize * 1.25}px - 40px`}} />}
				{this.state.displayArray[2] !== null && <InstanceSnowflake
					instanceNumber={this.state.displayArray[2]}
					instanceSize={currentInstanceSize / 2}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize / 4),
						left: `calc(50% - ${currentInstanceSize}px - 40px`}} />}

				{this.state.displayArray[2] !== null &&
					<div onClick={this.navPrev}>
						<NavigatePrevBtn
							btnHeight={currentInstanceSize / 6}
							btnLocation={{
								top: `calc(${currentInstanceTopMargin}px + ${currentInstanceSize * 2.5 / 6}px)`,
								left: `calc(50% - ${currentInstanceSize / 2}px - ${currentInstanceSize / 6 * 100 / 175}px - 2px)`
							}} />
					</div>
				}

				{this.state.displayArray[3] !== null && <InstanceCurrentSnowflake
					instanceNumber={this.state.displayArray[3]}
					instanceSize={currentInstanceSize}
					instanceLocation={{
						top: currentInstanceTopMargin,
						left: `calc(50% - ${currentInstanceSize / 2}px`}} />}

				{this.state.displayArray[4] !== null &&
					<div onClick={this.navNext}>
						<NavigateNextBtn
							btnHeight={currentInstanceSize / 6}
							btnLocation={{
								top: `calc(${currentInstanceTopMargin}px + ${currentInstanceSize * 2.5 / 6}px)`,
								left: `calc(50% + ${currentInstanceSize / 2 + 2}px)`
							}} />
					</div>
				}

				{this.state.displayArray[4] !== null && <InstanceSnowflake
					instanceNumber={this.state.displayArray[4]}
					instanceSize={currentInstanceSize / 2}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize / 4),
						left: `calc(50% + ${currentInstanceSize / 2}px + 40px`}} />}
				{this.state.displayArray[5] !== null && <InstanceSnowflake
					instanceNumber={this.state.displayArray[5]}
					instanceSize={currentInstanceSize / 4}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize * 3 / 8),
						left: `calc(50% + ${currentInstanceSize}px + 40px`}} />}
				{this.state.displayArray[6] !== null && <InstanceSnowflake
					instanceNumber={this.state.displayArray[6]}
					instanceSize={currentInstanceSize / 8}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize * 7 / 16),
						left: `calc(50% + ${currentInstanceSize * 1.25}px + 40px`}} />}
				<div
					style={styles.addBtn}
					onClick={this.addInstance} >
					<ButtonText
						label={'Add Instance'}
						color={values.nogGrayText}
						bgColor={'#000'} />
				</div>
				<div
					style={styles.deleteBtn}
					onClick={this.deleteInstance} >
					<ButtonText
						label={'Delete Instance'}
						color={values.nogGrayText}
						bgColor={'#000'} />
				</div>
			</div>
		);
	}
}

function mapStateToProps({ currentPattern, currentLights, values }) {
	return { currentPattern, currentLights, values };
}

export default connect(mapStateToProps, { updateCurrentLights, updateNumInstances })(EditPatternSnowflakeMC);

