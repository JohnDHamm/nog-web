import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUserPatterns } from '../actions';

import UserPatternCard from '../components/userPattern_card';
import NewPatternCard from '../components/newPattern_card';

class Userhome extends Component {

	componentWillMount() {
		const { id } = this.props.match.params;
		this.props.getUserPatterns(id);
	}

	getNogName(nogId) {
		return this.props.nogTypes[nogId].name
	}

	renderPatterns() {
		return _.map(this.props.userPatterns, pattern => {
			let nogTypeName = this.getNogName(pattern.nogTypeId);
			return (
				<div className="col-lg-3 col-md-4 col-sm-6 col-8 offset-2 offset-sm-0" key={pattern._id} >
					<Link
						to={`/pattern-${nogTypeName}/${pattern._id}`}
						style={{textDecoration: 'none'}} >
						<UserPatternCard
							name={pattern.name}
							description={pattern.description}
							nogType={nogTypeName}
							singleColor={pattern.singleColor}
						/>
					</Link>
				</div>
			)
		})
	}

	render() {
		const { user } = this.props.user;
		const { userPatterns, nogTypes } = this.props;
		const styles = {
			title: {
				marginTop: 20
			}
		}

		return (
			<div className="container">
				<h2 className="text-center" style={styles.title}>{ user.name }'s patterns:</h2>
				<div className="row">
					{this.renderPatterns()}
					<div className="col-lg-3 col-md-4 col-sm-6 col-8 offset-2 offset-sm-0">
						<Link
							to={'/pattern-create'}
							style={{textDecoration: 'none'}} >
							<NewPatternCard />
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ user, userPatterns, nogTypes }) {
	return { user, userPatterns, nogTypes };
}

export default connect(mapStateToProps, { getUserPatterns })(Userhome);
