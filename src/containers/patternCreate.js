import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { postNewPattern } from '../actions';

import ButtonText from '../components/button_text';


class PatternCreate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			patternName: '',
			patternDesc: '',
			// nogTypeId: '',
			newPatternUrl: ''
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
        "#FF7700",
        "#77FF00",
        "#00FF77",
        "#0077FF",
        "#7700FF",
        "#FF0077",
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
			console.log("result", res);
			const nogTypeName = 'snowflake';
			this.props.history.push(`/pattern-${nogTypeName}/${res.data._id}`);
			// this.setState({newPatternUrl: `/pattern-${nogTypeName}/${res.data._id}`});
			// console.log("this.state.newPatternUrl", this.state.newPatternUrl);
			// this.props.history.push('/');
		});
	}


	render() {
		const { values } = this.props;

		return (
			<div className="container">
				<h2>Pattern Create</h2>
				<div>
					<input
						placeholder={"Name"}
						value={this.state.patternName}
						onChange={ event => this.checkUniqueName(event.target.value)} />
				</div>
				<div>
					<textarea
						placeholder={"Description"}
						value={this.state.patternDesc}
						onChange={ event => this.updateDesc(event.target.value)} />
				</div>
				<div onClick={this.createPattern}>
					<ButtonText
						label={"Create New Pattern"}
						color={values.nogGreen}
						/>
				</div>

			</div>
		);
	}
}

function mapStateToProps({ values, user, userPatterns, nogTypes }) {
	return { values, user, userPatterns, nogTypes };
}

export default withRouter(connect(mapStateToProps, {postNewPattern})(PatternCreate));


				// <Link
				// 	to={this.state.newPatternUrl}
				// 	style={{textDecoration: 'none'}} >
				// 	<ButtonText
				// 		label={`Go To ${this.state.patternName}`}
				// 		color={values.nogRed}
				// 		/>
				// </Link>
