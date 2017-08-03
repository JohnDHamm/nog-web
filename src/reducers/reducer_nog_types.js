import { GET_NOG_TYPES } from '../actions';
import _ from 'lodash';

export default function (state={}, action) {
	switch (action.type) {
		case GET_NOG_TYPES:
			return _.mapKeys(action.payload.data, '_id');
		default:
			return state;
	}
}
