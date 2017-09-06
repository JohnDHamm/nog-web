import _ from 'lodash';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import EmptyColor from './emptyColor';
import ColorPicker from './colorPicker';

import { setSelectedColor } from '../actions';

import { checkEmptyObj } from '../helpers/checkEmptyObj';

class MultiColorPalette extends Component {

	componentWillMount() {
		const { setSelectedColor } = this.props;
		// this.props.setCurrentColorPalette(currentPattern.customColors);
		if (checkEmptyObj(this.props.selectedColor)) setSelectedColor(0);
	}

	componentDidMount() {
		//testing if component remounts when color picker updates a color in store
		console.log("MC color palette mounted");
	}

	selectColor(colorNum) {
		this.props.setSelectedColor(colorNum);
		// console.log("selected color #", colorNum);
	}

	pickColor(colorNum) {
		console.log("select a color for #", colorNum);
		//color picker component?
	}

	getStyles() {
		const { values } = this.props;
		return {
			selected: {
				width: 60,
				height: 60,
				borderRadius: '50%',
				marginLeft: 5,
				border: `3px solid ${values.nogBackground}`,
				boxShadow: '0px 0px 0px 1px white'
			},
			unselected: {
				width: 40,
				height: 40,
				borderRadius: '50%',
				marginLeft: 5,
				border: '1px solid #333'
			}
		}
	}

	renderDefaultColors() {
		const { colorPalette, selectedColor } = this.props;
		console.log("colorPalette", colorPalette);
		const currentColorNum = this.props.selectedColor.selectedColor;
		const styles = this.getStyles();

		let defaultColorPalette = colorPalette;
		for ( let i = 8; i < 16; i++) {
			defaultColorPalette = _.omit(defaultColorPalette, i);
		}

		return _.map(defaultColorPalette, color => {
			if (color.colorNum === currentColorNum) {
				return (
					<div
						onClick={() => this.selectColor(color.colorNum)}
						key={color.colorNum}
						style={ Object.assign({}, styles.selected, {backgroundColor: color.colorVal} ) } />
				)
			} else {
				return (
					<div
						onClick={() => this.selectColor(color.colorNum)}
						key={color.colorNum}
						style={ Object.assign({}, styles.unselected, {backgroundColor: color.colorVal} ) } />
				)
			}
		})
	}

	renderCustomColors() {
		const { colorPalette, selectedColor } = this.props;
		const currentColorNum = this.props.selectedColor.selectedColor;
		const styles = this.getStyles();

		let customColorPalette = colorPalette;
		for ( let i = 0; i < 8; i++) {
			customColorPalette = _.omit(customColorPalette, i);
		}

		return _.map(customColorPalette, color => {
			if (color.colorVal === 'empty') {
				return(
					<div
						onClick={() => this.pickColor(color.colorNum)}
						key={color.colorNum}
					>
						<EmptyColor />
					</div>
				)
			} else if (color.colorNum === currentColorNum) {
				return (
					<div
						onClick={() => this.selectColor(color.colorNum)}
						key={color.colorNum}
						style={Object.assign({}, styles.selected, {backgroundColor: color.colorVal} ) } />
				)
			} else {
				return (
					<div
						onClick={() => this.selectColor(color.colorNum)}
						key={color.colorNum}
						style={Object.assign({}, styles.unselected, {backgroundColor: color.colorVal} ) } />
				)
			}
		})
	}

	render() {
		const { selectedColor } = this.props;
		const styles = {
			root: {
				marginTop: 20,
				marginRight: 20,
				position: 'absolute',
				top: 0,
				right: 0,
			},
			paletteRow: {
				marginBottom: 7,
				display: 'flex'
			},
			colorPicker: {
				display: 'flex',
				justifyContent: 'center'
			}
		};

		return (
			<div style={styles.root}>
				<div style={styles.paletteRow}>
					{this.renderDefaultColors()}
				</div>
				<div style={styles.paletteRow}>
					{this.renderCustomColors()}
				</div>
				{selectedColor.selectedColor > 7 &&
					<div style={styles.colorPicker}>
						<ColorPicker
							selectedColorNum={selectedColor.selectedColor}/>
					</div>
				}
			</div>
		);
	}
}

function mapStateToProps({ selectedColor, values }) {
	return { selectedColor, values };
}

export default connect(mapStateToProps, { setSelectedColor })(MultiColorPalette);
