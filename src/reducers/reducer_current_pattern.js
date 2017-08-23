import { SET_CURRENT_PATTERN, UPDATE_DEFAULT_SPEED, UPDATE_NUM_INSTANCES } from '../actions';

export default function (state={}, action) {
	switch (action.type) {
		case SET_CURRENT_PATTERN:
			return action.payload;
		case UPDATE_DEFAULT_SPEED:
			return { ...state, defaultSpeed: action.payload };
		case UPDATE_NUM_INSTANCES:
			console.log("action.payload", action.payload);
			return { ...state, numInstances: action.payload };
		default:
			return state;
	}
}
