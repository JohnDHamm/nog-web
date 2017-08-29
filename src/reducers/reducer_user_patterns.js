import { GET_USER_PATTERNS, ADD_USER_PATTERN } from '../actions';
import _ from 'lodash';

export default function (state={}, action) {
	switch (action.type) {
		case GET_USER_PATTERNS:
			return _.mapKeys(action.payload.data, '_id');
		case ADD_USER_PATTERN:
			return {...state, [action.payload._id]: action.payload};
		default:
			return state;
	}
}
