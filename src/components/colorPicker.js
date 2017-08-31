import React, { Component } from 'react';
import { connect } from 'react-redux';

import ButtonText from './button_text';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from 'material-ui/Slider';


class ColorPicker extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	hueSliderStart: 1,
    	valueSliderStart: 50
    };
  }

  componentWillMount() {
  	// console.log("this.props.currentPattern", this.props.currentPattern);
  	// this.setState({ sliderLabel: defaultSpeed });
  }

  componentWillUnmount() {
  }

  handleHueSlider(event, value) {
  	console.log("hue ", value);
  }

  handleValueSlider(event, value) {
  	console.log("value ", value);
  }


	render() {
		const pattern = this.props.currentPattern;
		const { values } = this.props;
		const styles = {
			root: {
				// backgroundColor: `${values.nogBackground}`,
				// height: 'calc(100vh - 56px)',
				// position: 'relative'
			},
			sliderContainer: {
				width: 320,
				// height: 70,
				// position: 'absolute',
				// bottom: 20,
				// left: 'calc(50% - 200px)'
			},
			hueRange: {
				width: '100%',
				height: 20,
				background: 'linear-gradient(90deg, #F00, #0F0)'
			},
			hueSlider: {
				width: '100%',
				// position: 'absolute',
				// bottom: 0
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
						<div style={styles.hueRange} />

						<div style={styles.slider}>
							<Slider
								value={this.state.hueSlider}
								defaultValue={this.state.hueSliderStart}
								min={1}
			          max={768}
			          step={1}
			          onChange={this.handleHueSlider.bind(this)}
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
