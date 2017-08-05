import React, { Component } from 'react';
import { connect } from 'react-redux';

class MultiColorPalette extends Component {

	render() {
		const { currentPattern, values } = this.props;
		const defaultColors = values.defaultPaletteColors;
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
			default_1: {
				backgroundColor: `${defaultColors[0]}`
			},
			default_2: {
				backgroundColor: `${defaultColors[1]}`
			},
			default_3: {
				backgroundColor: `${defaultColors[2]}`
			},
			default_4: {
				backgroundColor: `${defaultColors[3]}`
			},
			default_5: {
				backgroundColor: `${defaultColors[4]}`
			},
			default_6: {
				backgroundColor: `${defaultColors[5]}`
			},
			default_7: {
				backgroundColor: `${defaultColors[6]}`
			},
			default_8: {
				backgroundColor: `${defaultColors[7]}`
			},
			custom_1: {
				backgroundColor: `${currentPattern.customColors[0]}`
			},
			custom_2: {
				backgroundColor: `${currentPattern.customColors[1]}`
			},
			custom_3: {
				backgroundColor: `${currentPattern.customColors[2]}`
			},
			custom_4: {
				backgroundColor: `${currentPattern.customColors[3]}`
			},
			custom_5: {
				backgroundColor: `${currentPattern.customColors[4]}`
			},
			custom_6: {
				backgroundColor: `${currentPattern.customColors[5]}`
			},
			custom_7: {
				backgroundColor: `${currentPattern.customColors[6]}`
			},
			custom_8: {
				backgroundColor: `${currentPattern.customColors[7]}`
			},
		};

		return (
			<div style={styles.root}>
				<div style={styles.paletteRow}>
					<div style={{ ...styles.circle, ...styles.default_1 }}>
					</div>
					<div style={{ ...styles.circle, ...styles.default_2 }}>
					</div>
					<div style={{ ...styles.circle, ...styles.default_3 }}>
					</div>
					<div style={{ ...styles.circle, ...styles.default_4 }}>
					</div>
					<div style={{ ...styles.circle, ...styles.default_5 }}>
					</div>
					<div style={{ ...styles.circle, ...styles.default_6 }}>
					</div>
					<div style={{ ...styles.circle, ...styles.default_7 }}>
					</div>
					<div style={{ ...styles.circle, ...styles.default_8 }}>
					</div>
				</div>
				<div style={styles.paletteRow}>
					<div style={{ ...styles.circle, ...styles.custom_1 }}>
					</div>
					<div style={{ ...styles.circle, ...styles.custom_2 }}>
					</div>
					<div style={{ ...styles.circle, ...styles.custom_3 }}>
					</div>
					<div style={{ ...styles.circle, ...styles.custom_4 }}>
					</div>
					<div style={{ ...styles.circle, ...styles.custom_5 }}>
					</div>
					<div style={{ ...styles.circle, ...styles.custom_6 }}>
					</div>
					<div style={{ ...styles.circle, ...styles.custom_7 }}>
					</div>
					<div style={{ ...styles.circle, ...styles.custom_8 }}>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ currentPattern, values }) {
	return { currentPattern, values };
}

export default connect(mapStateToProps)(MultiColorPalette);
