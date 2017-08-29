import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserPatternCard extends Component {

	render() {
		const { values, name, description, nogType, singleColor } = this.props;
		const iconUrl = `url(../src/img/patternIcons/patternIcon-${nogType}.png)`;
		const styles = {
			root: {
				position: 'relative'
			},
			nogIcon: {
				position: 'absolute',
				top: -25,
				left: -25,
				width: 50,
				height: 50,
				backgroundImage: iconUrl,
				backgroundSize: '100% 100%'
			},
			card: {
				height: 115,
				marginTop: 30,
				border: `4px solid ${values.nogGreen}`,
				borderRadius: 5,
				backgroundColor: '#FFF',
				overflow: 'hidden',
				boxShadow: '0 2px 2px 0 rgba(0,0,0,.5)'
			},
			name: {
				paddingTop: 5,
				paddingLeft: 25,
				color: `${values.nogRed}`,
				fontSize: 25,
				lineHeight: 1
			},
			description: {
				paddingTop: 5,
				paddingLeft: 25,
				paddingRight: 5,
				color: `${values.nogGrayText}`,
				fontSize: 15,
				lineHeight: 1,
				textOverflow: 'ellipsis',
				fontStyle: 'italic'
			}
		};

		return (
			<div style={styles.root}>
				<div style={styles.nogIcon}>
				</div>
				<div style={styles.card}>
					<div style={styles.name}>
						{name}
					</div>
					<div style={styles.description}>
						{description}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ values }) {
	return { values };
}

export default connect(mapStateToProps)(UserPatternCard);
