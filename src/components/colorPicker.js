import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  componentWillMount() {
		const { selectedColorNum } = this.props;
		console.log("selectedColorNum", selectedColorNum);
		//get color val (hex) from selectedColorNum
		//convert hex to hsl
		//setState({hueSlider: , valueSlider: })

  	this.setState({hueSlider: 125, valueSlider: 50})
  }

  componentWillUnmount() {
  }

  handleHueSlider(event, value) {
  	// this.setState({ colorHasChanged: true });
  	this.setState({hueSlider: value});
  	// console.log("this.state", this.state);
  	//update store: currentColorPalette? after convert from hsl to hex
  	//save to db?
  }

  handleValueSlider(event, value) {
  	// this.setState({ colorHasChanged: true });
  	this.setState({valueSlider: value});
  	//update store: currentColorPalette? after convert from hsl to hex
  	//save to db?
  }


	render() {
		const pattern = this.props.currentPattern;
		const { values, selectedColorNum } = this.props;
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

function mapStateToProps({ currentPattern, values }) {
	return { currentPattern, values };
}

export default connect(mapStateToProps)(ColorPicker);
