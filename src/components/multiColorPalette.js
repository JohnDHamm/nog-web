import React, { Component } from 'react';
import { connect } from 'react-redux';

import EmptyColor from './emptyColor';

import { setCurrentColorPalette } from '../actions';

class MultiColorPalette extends Component {

	componentWillMount() {
		const { currentPattern } = this.props;
		const customColors = currentPattern.customColors;
		this.props.setCurrentColorPalette(customColors);
	}

	checkEmptyColor(color) {
		return color === 'empty' ? true : false;
	}

	render() {
		const { currentPattern, currentColorPalette, values } = this.props;
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
			circle: {
				width: 40,
				height: 40,
				borderRadius: '50%',
				marginLeft: 5,
				border: '1px solid #333',
			},
			selectedColorCircle: {
				width: 60,
				height: 60,
				borderRadius: '50%',
				marginLeft: 5,
				border: `3px solid ${values.nogBackground}`,
				boxShadow: '0px 0px 0px 1px white'
			},
			default_1: {
				backgroundColor: `${currentColorPalette[0]}`
			},
			default_2: {
				backgroundColor: `${currentColorPalette[1]}`
			},
			default_3: {
				backgroundColor: `${currentColorPalette[2]}`
			},
			default_4: {
				backgroundColor: `${currentColorPalette[3]}`
			},
			default_5: {
				backgroundColor: `${currentColorPalette[4]}`
			},
			default_6: {
				backgroundColor: `${currentColorPalette[5]}`
			},
			default_7: {
				backgroundColor: `${currentColorPalette[6]}`
			},
			default_8: {
				backgroundColor: `${currentColorPalette[7]}`
			},
			custom_1: {
				backgroundColor: `${currentColorPalette[8]}`
			},
			custom_2: {
				backgroundColor: `${currentColorPalette[9]}`
			},
			custom_3: {
				backgroundColor: `${currentColorPalette[10]}`
			},
			custom_4: {
				backgroundColor: `${currentColorPalette[11]}`
			},
			custom_5: {
				backgroundColor: `${currentColorPalette[12]}`
			},
			custom_6: {
				backgroundColor: `${currentColorPalette[13]}`
			},
			custom_7: {
				backgroundColor: `${currentColorPalette[14]}`
			},
			custom_8: {
				backgroundColor: `${currentColorPalette[15]}`
			},
		};

		return (
			<div style={styles.root}>
				<div style={styles.paletteRow}>
					<div style={{ ...styles.circle, ...styles.default_1 }} />
					<div style={{ ...styles.circle, ...styles.default_2 }} />
					<div style={{ ...styles.circle, ...styles.default_3 }} />
					<div style={{ ...styles.circle, ...styles.default_4 }} />
					<div style={{ ...styles.circle, ...styles.default_5 }} />
					<div style={{ ...styles.circle, ...styles.default_6 }} />
					<div style={{ ...styles.circle, ...styles.default_7 }} />
					<div style={{ ...styles.circle, ...styles.default_8 }} />
				</div>
				<div style={styles.paletteRow}>
					{ this.checkEmptyColor(currentColorPalette[8]) ? (<EmptyColor />) : (
						<div style={{ ...styles.circle, ...styles.custom_1 }} />) }
					{ this.checkEmptyColor(currentColorPalette[9]) ? (<EmptyColor />) : (
						<div style={{ ...styles.circle, ...styles.custom_2 }} />) }
					{ this.checkEmptyColor(currentColorPalette[10]) ? (<EmptyColor />) : (
						<div style={{ ...styles.circle, ...styles.custom_3 }} />) }
					{ this.checkEmptyColor(currentColorPalette[11]) ? (<EmptyColor />) : (
						<div style={{ ...styles.circle, ...styles.custom_4 }} />) }
					{ this.checkEmptyColor(currentColorPalette[12]) ? (<EmptyColor />) : (
						<div style={{ ...styles.selectedColorCircle, ...styles.custom_5 }} />) }
					{ this.checkEmptyColor(currentColorPalette[13]) ? (<EmptyColor />) : (
						<div style={{ ...styles.circle, ...styles.custom_6 }} />) }
					{ this.checkEmptyColor(currentColorPalette[14]) ? (<EmptyColor />) : (
						<div style={{ ...styles.circle, ...styles.custom_7 }} />) }
					{ this.checkEmptyColor(currentColorPalette[15]) ? (<EmptyColor />) : (
						<div style={{ ...styles.circle, ...styles.custom_8 }} />) }
				</div>
			</div>
		);
	}
}

function mapStateToProps({ currentPattern, currentColorPalette, values }) {
	return { currentPattern, currentColorPalette, values };
}

export default connect(mapStateToProps, { setCurrentColorPalette })(MultiColorPalette);
