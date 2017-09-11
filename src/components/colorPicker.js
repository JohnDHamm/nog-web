import hexToHsl from 'hex-to-hsl';
import hslToHex from '@davidmarkclements/hsl-to-hex';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateCurrentColorPalette } from '../actions';

import ButtonText from './button_text';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from 'material-ui/Slider';


class ColorPicker extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	// colorHasChanged: false
    };
  }

	getColor(colNum) {
		const { currentColorPalette } = this.props;
		return currentColorPalette[colNum].colorVal;
	}

  componentWillMount() {
		const { selectedColorNum } = this.props;
		//get color val (hex) from selectedColorNum
		const colorHex = this.getColor(selectedColorNum);
		//convert hex to hsl
		const colorHsl = hexToHsl(colorHex);
		this.setState({hueSlider: colorHsl[0], valueSlider: colorHsl[2]})
  }

  updatePalette() {
  	const newHex = hslToHex(this.state.hueSlider, 100, this.state.valueSlider);
  	const newObj = {
  		colorNum: this.props.selectedColorNum,
  		colorVal: newHex
  	}
  	this.props.updateCurrentColorPalette(newObj);
  	//save to db?
  }

  handleHueSlider(event, value) {
  	// this.setState({ colorHasChanged: true });
  	this.setState({hueSlider: value});
  	this.updatePalette();
  }

  handleValueSlider(event, value) {
  	// this.setState({ colorHasChanged: true });
  	this.setState({valueSlider: value});
  	this.updatePalette();
  }


	render() {
		const styles = {
			root: {
			},
			sliderContainer: {
				width: 240,
			},
			rangeDiv: {
				width: '100%',
				height: 10,
			},
			hueRange: {
				background: 'linear-gradient(90deg, #F00, #FF0, #0F0, #0FF, #00F, #F0F, #F00)'
			},
			slider: {
				width: '100%',
			},
			valueRange:{
				background: `linear-gradient(90deg, #000, hsl(${this.state.hueSlider}, 100%, 50%), #FFF)`
			},
			saveColorBtn: {
				position: 'absolute',
				bottom: 25,
				left: 'calc(50% + 210px)'
			}
		};

		return(
			<MuiThemeProvider>
				<div style={styles.root}>
					<div style={styles.sliderContainer}>
						<div style={{...styles.rangeDiv, ...styles.hueRange}} />
						<div style={styles.slider}>
							<Slider
								value={this.state.hueSlider}
								defaultValue={this.state.hueSlider}
								min={0}
			          max={360}
			          step={1}
			          onChange={this.handleHueSlider.bind(this)}
		          	sliderStyle={{marginBottom: 10, marginTop: 0}}
			         />
						</div>
						<div style={{...styles.rangeDiv, ...styles.valueRange}} />
						<div style={styles.slider}>
							<Slider
								value={this.state.valueSlider}
								defaultValue={this.state.valueSlider}
								min={0}
			          max={100}
			          step={1}
			          onChange={this.handleValueSlider.bind(this)}
		          	sliderStyle={{marginBottom: 10, marginTop: 0}}
			         />
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		)
	}
}

function mapStateToProps({ values, currentColorPalette }) {
	return { values, currentColorPalette };
}

export default connect(mapStateToProps, { updateCurrentColorPalette })(ColorPicker);
