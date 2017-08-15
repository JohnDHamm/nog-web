import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import InstanceSnowflake from './instance_snowflake';
import InstanceCurrentSnowflake from './instance_current_snowflake';
import NavigateNextBtn from './navigate_nextBtn';
import NavigatePrevBtn from './navigate_prevBtn';


class EditPatternSnowflakeMC extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	numInstances: 4,
    	displayArray: [ null, null, null, 0, 1, 2, 3 ]
    };
    this.navNext = this.navNext.bind(this);
    this.navPrev = this.navPrev.bind(this);
  }

	componentWillMount() {
		this.setState({numInstances: this.props.currentPattern.instances.length});
		// console.log("editing...");
	}


	navNext() {
		const nextInstance = !this.state.displayArray[6] ? null : this.state.displayArray[6] === this.state.numInstances - 1 ? null : this.state.displayArray[6] + 1;
		const newArray = this.state.displayArray;
		newArray.push(nextInstance);
		newArray.shift();
		this.setState({displayArray: newArray})
	}

	navPrev() {
		const prevInstance = this.state.displayArray[0] ? this.state.displayArray[0] - 1 : null;
		const newArray = this.state.displayArray;
		newArray.unshift(prevInstance);
		newArray.pop();
		this.setState({displayArray: newArray})
	}

	render() {
		const { values, currentInstanceSize, currentInstanceTopMargin } = this.props;
		const styles = {
			root: {
				position: 'relative'
			}
		};

		const instanceDisplayArray = this.state.displayArray;

		return(
			<div style={styles.root}>

				{instanceDisplayArray[0] !== null && <InstanceSnowflake
					instanceNumber={instanceDisplayArray[0]}
					instanceSize={currentInstanceSize / 8}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize * 7 / 16),
						left: `calc(50% - ${currentInstanceSize * 1.375}px - 40px`}} />}
				{instanceDisplayArray[1] !== null && <InstanceSnowflake
					instanceNumber={instanceDisplayArray[1]}
					instanceSize={currentInstanceSize / 4}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize * 3 / 8),
						left: `calc(50% - ${currentInstanceSize * 1.25}px - 40px`}} />}
				{instanceDisplayArray[2] !== null && <InstanceSnowflake
					instanceNumber={instanceDisplayArray[2]}
					instanceSize={currentInstanceSize / 2}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize / 4),
						left: `calc(50% - ${currentInstanceSize}px - 40px`}} />}

				{instanceDisplayArray[2] !== null &&
					<div onClick={this.navPrev}>
						<NavigatePrevBtn
							btnHeight={currentInstanceSize / 6}
							btnLocation={{
								top: `calc(${currentInstanceTopMargin}px + ${currentInstanceSize * 2.5 / 6}px)`,
								left: `calc(50% - ${currentInstanceSize / 2}px - ${currentInstanceSize / 6 * 100 / 175}px - 2px)`
							}} />
					</div>
				}

				{instanceDisplayArray[3] !== null && <InstanceCurrentSnowflake
					instanceNumber={instanceDisplayArray[3]}
					instanceSize={currentInstanceSize}
					instanceLocation={{
						top: currentInstanceTopMargin,
						left: `calc(50% - ${currentInstanceSize / 2}px`}} />}

				{instanceDisplayArray[4] !== null &&
					<div onClick={this.navNext}>
						<NavigateNextBtn
							btnHeight={currentInstanceSize / 6}
							btnLocation={{
								top: `calc(${currentInstanceTopMargin}px + ${currentInstanceSize * 2.5 / 6}px)`,
								left: `calc(50% + ${currentInstanceSize / 2 + 2}px)`
							}} />
					</div>
				}

				{instanceDisplayArray[4] !== null && <InstanceSnowflake
					instanceNumber={instanceDisplayArray[4]}
					instanceSize={currentInstanceSize / 2}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize / 4),
						left: `calc(50% + ${currentInstanceSize / 2}px + 40px`}} />}
				{instanceDisplayArray[5] !== null && <InstanceSnowflake
					instanceNumber={instanceDisplayArray[5]}
					instanceSize={currentInstanceSize / 4}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize * 3 / 8),
						left: `calc(50% + ${currentInstanceSize}px + 40px`}} />}
				{instanceDisplayArray[6] !== null && <InstanceSnowflake
					instanceNumber={instanceDisplayArray[6]}
					instanceSize={currentInstanceSize / 8}
					instanceLocation={{
						top: currentInstanceTopMargin + (currentInstanceSize * 7 / 16),
						left: `calc(50% + ${currentInstanceSize * 1.25}px + 40px`}} />}
			</div>
		);
	}
}

function mapStateToProps({ currentPattern, values }) {
	return { currentPattern, values };
}

export default connect(mapStateToProps)(EditPatternSnowflakeMC);

