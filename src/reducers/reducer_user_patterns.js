import { GET_USER_PATTERNS } from '../actions';
import _ from 'lodash';

export default function (state={}, action) {
	switch (action.type) {
		case GET_USER_PATTERNS:
			return _.mapKeys(action.payload.data, '_id');
		default:
			return state;
	}
}