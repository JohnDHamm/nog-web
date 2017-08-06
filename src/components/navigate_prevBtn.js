import React, { Component } from 'react';
import { connect } from 'react-redux';

class NavigatePrevBtn extends Component {

	render() {
		const { values, btnHeight, btnLocation } = this.props;
		const styles = {
			root: {
				position: 'absolute',
				top: btnLocation.top,
				left: btnLocation.left,
			},
			arrow: {
				height: btnHeight,
				width: btnHeight * 100 / 175,
				backgroundImage: 'url(../src/img/nav_PrevBtn.png)',
				backgroundSize: '100% 100%'
			}
		};


		return(
			<div style={styles.root}>
				<div style={styles.arrow} />
			</div>



		);
	}
}

function mapStateToProps({ values }) {
	return { values };
}

export default connect(mapStateToProps)(NavigatePrevBtn);
