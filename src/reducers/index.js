import { combineReducers } from 'redux';

import UserReducer from './reducer_user';
import UserPatternsReducer from './reducer_user_patterns';

const rootReducer = combineReducers({
	user: UserReducer,
	userPatterns: UserPatternsReducer
});

export default rootReducer;
