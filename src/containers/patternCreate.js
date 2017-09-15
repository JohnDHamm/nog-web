import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { postNewPattern, addUserPattern } from '../actions';

import values from '../styles/values';

import ButtonText from '../components/button_text';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class PatternCreate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			patternName: '',
			patternDesc: '',
			// nogTypeId: '',
		}
		this.createPattern = this.createPattern.bind(this);
	}

	componentWillMount() {

	}

	checkUniqueName(patternName) {
		this.setState({patternName});
		//if patternName already exists, display warning
		// this.setState({patternName}, () => console.log("patternName", this.state.patternName));
	}

	updateDesc(patternDesc) {
		this.setState({patternDesc});
	}

	createPattern() {
		const newPatternObj = {
			name: this.state.patternName,
			description: this.state.patternDesc,
			userId: '598246abbee2c891bd2cedc8',
			defaultSpeed: 50,
			defaultColor: '',
			customColors: [
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty"],
	    nogTypeId: "59923ed22459120fac1d656d",
	    published: false,
	    singleColor: false,
	    instances: [
	    	{instanceNum: 0,
	    		lightsColor: [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]},
	    	{instanceNum: 1,
	    		lightsColor: [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]},
	    	{instanceNum: 2,
	    		lightsColor: [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]},
	    	{instanceNum: 3,
	    		lightsColor: [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]},
	    	]
		}
		this.props.postNewPattern(newPatternObj, (res) => {
			this.props.addUserPattern(res.data);
			const nogTypeName = 'snowflake';
			this.props.history.push(`/pattern-${nogTypeName}/${res.data._id}`);
		});
	}


	render() {
		const styles = {
			title: {
				marginTop: 20
			},
			createBtn: {
				marginTop: 25
			}
		}

		return (
			<MuiThemeProvider>
				<div className="container">
					<h2 className="text-center" style={styles.title}>Pattern Create</h2>
					<div className="row justify-content-center">
						<div className="col-12 col-md-6">
							<TextField
								id="text-field-controlled"
								floatingLabelText="Give your pattern a unique name"
								fullWidth={true}
								value={this.state.patternName}
								onChange={ event => this.checkUniqueName(event.target.value)}
							/>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-12 col-md-6">
							<TextField
								id="text-field-controlled"
								floatingLabelText="Give your pattern a description"
								fullWidth={true}
								multiLine={true}
					      rows={2}
								value={this.state.patternDesc}
								onChange={ event => this.updateDesc(event.target.value)}
							/>
						</div>
					</div>
					<div className="row justify-content-center">
						<RaisedButton
							style={styles.createBtn}
							label="Create Pattern"
							labelColor={values.nogGreen}
							onClick={this.createPattern}
							/>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

function mapStateToProps({ user, userPatterns, nogTypes }) {
	return { user, userPatterns, nogTypes };
}

export default withRouter(connect(mapStateToProps, {postNewPattern, addUserPattern })(PatternCreate));
