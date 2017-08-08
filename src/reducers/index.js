import { combineReducers } from 'redux';

import UserReducer from './reducer_user';
import UserPatternsReducer from './reducer_user_patterns';
import NogTypes from './reducer_nog_types';
import CurrentPattern from './reducer_current_pattern';
import CurrentLights from './reducer_current_lights';
import CurrentColorPalette from './reducer_current_color_palette';
import SelectedColor from './reducer_selected_color';
import Values from './reducer_values';


const rootReducer = combineReducers({
	user: UserReducer,
	userPatterns: UserPatternsReducer,
	nogTypes: NogTypes,
	currentPattern: CurrentPattern,
	currentLights: CurrentLights,
	currentColorPalette: CurrentColorPalette,
	selectedColor: SelectedColor,
	values: Values
});

export default rootReducer;
