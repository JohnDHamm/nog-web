import { combineReducers } from 'redux';

import UserReducer from './reducer_user';
import UserPatternsReducer from './reducer_user_patterns';
import NogTypes from './reducer_nog_types';
import CurrentPattern from './reducer_current_pattern';
// import DefaultColorPalette from './reducer_default_color_palette';
// import CustomColorPalette from './reducer_custom_color_palette';
import CurrentColorPalette from './reducer_current_color_palette';
import SelectedColor from './reducer_selected_color';
import Values from './reducer_values';


const rootReducer = combineReducers({
	user: UserReducer,
	userPatterns: UserPatternsReducer,
	nogTypes: NogTypes,
	currentPattern: CurrentPattern,
	// defaultColorPalette: DefaultColorPalette,
	// customColorPalette: CustomColorPalette,
	currentColorPalette: CurrentColorPalette,
	selectedColor: SelectedColor,
	values: Values
});

export default rootReducer;
