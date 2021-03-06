import _ from 'lodash';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateCurrentLights, updateNumInstances, updateLight } from '../actions';

import values from '../styles/values';
import Snowflake from '../components/snowflake';
import NavBtn from '../components/navBtn';
import ButtonText from '../components/button_text';
import ButtonFillLights from '../components/button_fillLights';
import ButtonCopyLights from '../components/button_copyLights';

class EditPatternSnowflakeMC extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	displayArray: [ null, null, null, 0, 1, 2, 3 ],
    	copiedInstance: [],
    	showPasteOption: false
    };
    this.navStart = this.navStart.bind(this);
    this.navPrev = this.navPrev.bind(this);
    this.navNext = this.navNext.bind(this);
    this.navEnd = this.navEnd.bind(this);
    this.copyInstance = this.copyInstance.bind(this);
    this.pasteInstance = this.pasteInstance.bind(this);
    this.addInstance = this.addInstance.bind(this);
    this.deleteInstance = this.deleteInstance.bind(this);
    this.fillAll = this.fillAll.bind(this);
    this.clearAll = this.clearAll.bind(this);

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
		this.updateDisplayArray(this.state.displayArray[4], this.props.currentPattern.numInstances);
	}

	navPrev() {
		this.updateDisplayArray(this.state.displayArray[2], this.props.currentPattern.numInstances);
	}

	navStart() {
		this.updateDisplayArray(0, this.props.currentPattern.numInstances);
	}

	navEnd() {
		this.updateDisplayArray(this.props.currentPattern.numInstances - 1, this.props.currentPattern.numInstances);
	}


	addInstance() {
		const currentInstNum = this.state.displayArray[3];
		const changedLights = Object.assign({}, this.props.currentLights);
		const newNumInstances = this.props.currentPattern.numInstances + 1;
		this.props.updateNumInstances(newNumInstances);
		if (currentInstNum === newNumInstances - 2) {
			for ( let lightNum = 0; lightNum < 30; lightNum ++ ) {
				changedLights[lightNum][currentInstNum + 1] = {
					instanceNum: currentInstNum + 1,
					colorNum: 7
				};
			}
			this.props.updateCurrentLights(changedLights);
			this.updateDisplayArray(currentInstNum + 1, newNumInstances);
		} else {
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
	}

	deleteInstance() {
		const currentInstNum = this.state.displayArray[3];
		const newNumInstances = this.props.currentPattern.numInstances - 1;
		this.props.updateNumInstances(newNumInstances);
		const changedLights = Object.assign({}, this.props.currentLights);
		if (currentInstNum === newNumInstances ) {
			for (let lightNum = 0; lightNum < 30; lightNum ++ ) {
				changedLights[lightNum] = _.omit(changedLights[lightNum], newNumInstances);
			}
			this.props.updateCurrentLights(changedLights);
			this.updateDisplayArray(currentInstNum - 1, newNumInstances);
		} else {
			for ( let i = currentInstNum; i < newNumInstances; i++ ) {
				for (let lightNum = 0; lightNum < 30; lightNum ++ ) {
					changedLights[lightNum][i].colorNum = changedLights[lightNum][i + 1].colorNum;
					}
			}
			for (let lightNum = 0; lightNum < 30; lightNum ++ ) {
				changedLights[lightNum] = _.omit(changedLights[lightNum], newNumInstances);
			}
			this.props.updateCurrentLights(changedLights);
			this.updateDisplayArray(currentInstNum, newNumInstances);
		}
	}

	updateAllLights(colorNum) {
		const instNum = this.state.displayArray[3];
		for (let lightNum = 0; lightNum < 30; lightNum ++) {
			const obj = Object.assign({}, this.props.currentLights[lightNum]);
			obj.lightNum = lightNum;
			obj[instNum] = {
				'instanceNum': instNum,
				'colorNum': colorNum
			}
			this.props.updateLight(obj);
		}
	}

	fillAll() {
		const fillColorNum = this.props.selectedColor.selectedColor;
		this.updateAllLights(fillColorNum);
	}

	clearAll() {
		//colorNum 7 is black/'off'
		this.updateAllLights(7);
	}

	copyInstance() {
		const instNum = this.state.displayArray[3];
		const copiedLightsArray = [];
		for (let lightNum = 0; lightNum < 30; lightNum ++ ) {
			copiedLightsArray.push(this.props.currentLights[lightNum][instNum].colorNum)
		}
		this.setState({
			copiedInstance: copiedLightsArray,
			showPasteOption: true
		})
	}

	pasteInstance() {
		const instNum = this.state.displayArray[3];
		for (let lightNum = 0; lightNum < 30; lightNum ++ ) {
			const obj = Object.assign({}, this.props.currentLights[lightNum]);
			obj.lightNum = lightNum;
			obj[instNum] = {
				'instanceNum': instNum,
				'colorNum': this.state.copiedInstance[lightNum]
			};
			this.props.updateLight(obj);
		}
	}


	render() {
		const { currentInstanceSize, currentInstanceTopMargin } = this.props;
		const currentColor = this.props.currentColorPalette[this.props.selectedColor.selectedColor].colorVal;
		const optionBtnSize = 35,
			optionBtnTop = currentInstanceTopMargin + currentInstanceSize + 15,
			optionBtnWidth = 150,
			optionBtnLeft = 'calc(50% + 120px)';
		const styles = {
			root: {
				position: 'relative'
			},
			deleteBtn: {
				position: 'absolute',
				backgroundImage: 'url("../src/img/delete_instance.svg")',
				width: optionBtnSize,
				height: optionBtnSize,
				top: optionBtnTop,
				left: `calc(50% - ${optionBtnSize * 3}px - 12.5px)`,
				cursor: 'pointer'
			},
			copyBtn: {
				position: 'absolute',
				top: optionBtnTop,
				left: `calc(50% - ${optionBtnSize * 2}px - 7.5px)`
			},
			pasteBtn: {
				position: 'absolute',
				top: optionBtnTop,
				left: `calc(50% - ${optionBtnSize}px - 2.5px)`
			},
			fillAllBtn: {
				position: 'absolute',
				top: optionBtnTop,
				left: `calc(50% + 2.5px)`
			},
			clearAllBtn: {
				position: 'absolute',
				top: optionBtnTop,
				left: `calc(50% + ${optionBtnSize}px + 7.5px)`
			},
			addBtn: {
				position: 'absolute',
				backgroundImage: 'url("../src/img/add_instance.svg")',
				width: optionBtnSize,
				height: optionBtnSize,
				top: optionBtnTop,
				left: `calc(50% + ${optionBtnSize * 2}px + 12.5px)`,
				cursor: 'pointer'
			}
		};


		return(
			<div style={styles.root}>

				{this.state.displayArray[0] !== null &&
					<div onClick={this.navStart}>
						<NavBtn
							btnType={'startBtn'}
							btnHeight={currentInstanceSize / 12}
							btnLocation={{
								top: `calc(${currentInstanceTopMargin}px + ${currentInstanceSize * 9 / 16}px + 20px)`,
								left: `calc(50% - ${currentInstanceSize * 1.34375}px - 40px`
							}} />
					</div>
				}

				{this.state.displayArray[0] !== null &&
				<Snowflake
					instanceType={'other'}
					instanceNumber={this.state.displayArray[0]}
					instanceSize={currentInstanceSize / 8}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize * 7 / 16),
						left: `calc(50% - ${currentInstanceSize * 1.375}px - 40px`}} />}
				{this.state.displayArray[1] !== null &&
				<Snowflake
					instanceType={'other'}
					instanceNumber={this.state.displayArray[1]}
					instanceSize={currentInstanceSize / 4}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize * 3 / 8),
						left: `calc(50% - ${currentInstanceSize * 1.25}px - 40px`}} />}
				{this.state.displayArray[2] !== null &&
				<Snowflake
					instanceType={'other'}
					instanceNumber={this.state.displayArray[2]}
					instanceSize={currentInstanceSize / 2}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize / 4),
						left: `calc(50% - ${currentInstanceSize}px - 40px`}} />}

				{this.state.displayArray[2] !== null &&
					<div onClick={this.navPrev}>
						<NavBtn
							btnType={'prevBtn'}
							btnHeight={currentInstanceSize / 6}
							btnLocation={{
								top: `calc(${currentInstanceTopMargin}px + ${currentInstanceSize * 2.5 / 6}px)`,
								left: `calc(50% - ${currentInstanceSize / 2}px - ${currentInstanceSize / 6 * 100 / 175}px - 2px)`
							}} />
					</div>
				}

				<Snowflake
					instanceType={'current'}
					instanceNumber={this.state.displayArray[3]}
					instanceSize={currentInstanceSize}
					instanceLocation={{
						top: currentInstanceTopMargin,
						left: `calc(50% - ${currentInstanceSize / 2}px`}} />

				{this.state.displayArray[4] !== null &&
					<div onClick={this.navNext}>
						<NavBtn
							btnType={'nextBtn'}
							btnHeight={currentInstanceSize / 6}
							btnLocation={{
								top: `calc(${currentInstanceTopMargin}px + ${currentInstanceSize * 2.5 / 6}px)`,
								left: `calc(50% + ${currentInstanceSize / 2 + 2}px)`
							}} />
					</div>
				}

				{this.state.displayArray[4] !== null &&
				<Snowflake
					instanceType={'other'}
					instanceNumber={this.state.displayArray[4]}
					instanceSize={currentInstanceSize / 2}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize / 4),
						left: `calc(50% + ${currentInstanceSize / 2}px + 40px`}} />}
				{this.state.displayArray[5] !== null &&
				<Snowflake
					instanceType={'other'}
					instanceNumber={this.state.displayArray[5]}
					instanceSize={currentInstanceSize / 4}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize * 3 / 8),
						left: `calc(50% + ${currentInstanceSize}px + 40px`}} />}
				{this.state.displayArray[6] !== null &&
				<Snowflake
					instanceType={'other'}
					instanceNumber={this.state.displayArray[6]}
					instanceSize={currentInstanceSize / 8}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize * 7 / 16),
						left: `calc(50% + ${currentInstanceSize * 1.25}px + 40px`}} />}

				{this.state.displayArray[6] !== null &&
					<div onClick={this.navEnd}>
						<NavBtn
							btnType={'endBtn'}
							btnHeight={currentInstanceSize / 12}
							btnLocation={{
								top: `calc(${currentInstanceTopMargin}px + ${currentInstanceSize * 9 / 16}px + 20px)`,
								left: `calc(50% + ${currentInstanceSize * 1.28125}px + 40px`
							}} />
					</div>
				}

				<div
					style={styles.deleteBtn}
					onClick={this.deleteInstance} >
				</div>
				<div
					style={styles.copyBtn}
					onClick={this.copyInstance} >
					<ButtonCopyLights
						type={'copy'}
						btnSize={optionBtnSize} />
				</div>
				{this.state.showPasteOption ? (
						<div
							style={styles.pasteBtn}
							onClick={this.pasteInstance} >
							<ButtonCopyLights
								type={'paste'}
								btnSize={optionBtnSize} />
						</div>
					) : (
						<div style={styles.pasteBtn}>
							<ButtonCopyLights
								type={'paste_disabled'}
								btnSize={optionBtnSize} />
						</div>
					)
				}
				<div
					style={styles.fillAllBtn}
					onClick={this.fillAll} >
					<ButtonFillLights
						btnSize={optionBtnSize}
						fillColor={currentColor} />
				</div>
				<div
					style={styles.clearAllBtn}
					onClick={this.clearAll} >
					<ButtonFillLights
						btnSize={optionBtnSize}
						fillColor={'#000'} />
				</div>
				<div
					style={styles.addBtn}
					onClick={this.addInstance} >
				</div>
			</div>
		);
	}
}

function mapStateToProps({ currentPattern, currentLights, selectedColor, currentColorPalette }) {
	return { currentPattern, currentLights, selectedColor, currentColorPalette };
}

export default connect(mapStateToProps, { updateCurrentLights, updateNumInstances, updateLight })(EditPatternSnowflakeMC);

