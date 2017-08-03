import { combineReducers } from 'redux';

import UserReducer from './reducer_user';
import UserPatternsReducer from './reducer_user_patterns';
import NogTypes from './reducer_nog_types';

const rootReducer = combineReducers({
	user: UserReducer,
	userPatterns: UserPatternsReducer,
	nogTypes: NogTypes
});

export default rootReducer;
