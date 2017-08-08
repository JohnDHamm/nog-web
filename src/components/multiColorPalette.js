import React, { Component } from 'react';
import { connect } from 'react-redux';

import EmptyColor from './emptyColor';

import { setCurrentColorPalette, setSelectedColor } from '../actions';

class MultiColorPalette extends Component {

	componentWillMount() {
		const { currentPattern, setSelectedColor } = this.props;
		const customColors = currentPattern.customColors;
		this.props.setCurrentColorPalette(customColors);
		this.props.setSelectedColor(0);
	}

	selectColor(colorNum) {
		this.props.setSelectedColor(colorNum);
		console.log("selected color #", colorNum);
	}

	pickColor(colorNum) {
		console.log("select a color for #", colorNum);
		//color picker component?
	}

	renderDefaultColors() {
		const { defaultColorPalette, selectedColor, values } = this.props;
		const currentColorNum = this.props.selectedColor.selectedColor;

		return _.map(defaultColorPalette, color => {
			if (color.colorNum === currentColorNum) {
				return (
					<div
						onClick={() => this.selectColor(color.colorNum)}
						key={color.colorNum}
						style={{
							width: 60,
							height: 60,
							borderRadius: '50%',
							marginLeft: 5,
							border: `3px solid ${values.nogBackground}`,
							boxShadow: '0px 0px 0px 1px white',
							backgroundColor: color.colorVal
						}} />
				)
			} else {
				return (
					<div
						onClick={() => this.selectColor(color.colorNum)}
						key={color.colorNum}
						style={{
							width: 40,
							height: 40,
							borderRadius: '50%',
							marginLeft: 5,
							border: '1px solid #333',
							backgroundColor: color.colorVal
						}} />
				)
			}
		})
	}

	renderCustomColors() {
		const { customColorPalette, selectedColor, values } = this.props;
		// const customPaletteColors = {
		// 	8: {colorNum: 8, colorVal: '#FF0000'},
		// 	9: {colorNum: 9, colorVal: '#FFFF00'},
		// 	10: {colorNum: 10, colorVal: '#00FF00'},
		// 	11: {colorNum: 11, colorVal: '#00FFFF'},
		// 	12: {colorNum: 12, colorVal: '#0000FF'},
		// 	13: {colorNum: 13, colorVal: '#FF00FF'},
		// 	14: {colorNum: 14, colorVal: 'empty'},
		// 	15: {colorNum: 15, colorVal: 'empty'}
		// };

		// const customColorsArray = currentColorPalette.slice(8, 16);
		// const newArray = [];
		// customColorsArray.forEach((color, index) => {
		// 	let newObj = {};
		// 	newObj.colorNum = index + 8;
		// 	newObj.color = color;
		// 	newArray.push(newObj);
		// })
		// const customColorsObj = _.mapKeys(newArray, 'colorNum');
		const currentColorNum = this.props.selectedColor.selectedColor;

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
						style={{
							width: 60,
							height: 60,
							borderRadius: '50%',
							marginLeft: 5,
							border: `3px solid ${values.nogBackground}`,
							boxShadow: '0px 0px 0px 1px white',
							backgroundColor: color.colorVal
						}} />
				)
			} else {
				return (
					<div
						onClick={() => this.selectColor(color.colorNum)}
						key={color.colorNum}
						style={{
							width: 40,
							height: 40,
							borderRadius: '50%',
							marginLeft: 5,
							border: '1px solid #333',
							backgroundColor: color.colorVal
						}} />
				)
			}
		})
	}

	render() {
		const { values } = this.props;
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
			</div>
		);
	}
}

function mapStateToProps({ currentPattern, defaultColorPalette, customColorPalette, selectedColor, values }) {
	return { currentPattern, defaultColorPalette, customColorPalette, selectedColor, values };
}

export default connect(mapStateToProps, { setCurrentColorPalette, setSelectedColor })(MultiColorPalette);
