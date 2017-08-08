export const GET_USER_PATTERNS = 'get_user_patterns';
export const GET_NOG_TYPES = 'get_nog_types';
export const SET_CURRENT_PATTERN = 'set_current_pattern';
export const UPDATE_PATTERN = 'update_pattern';
// export const SET_CUSTOM_COLOR_PALETTE = 'set_custom_color_palette';
export const SET_CURRENT_COLOR_PALETTE = 'set_current_color_palette';
export const SET_SELECTED_COLOR = 'set_selected_color';

import axios from 'axios';


export const ROOT_URL = 'https://nog-server.herokuapp.com/api';

export function getUserPatterns(id) {
	const request = axios.get(`${ROOT_URL}/userpatterns/${id}`);
	return {
		type: GET_USER_PATTERNS,
		payload: request
	}
}

export function getNogTypes() {
	const request = axios.get(`${ROOT_URL}/nogtypes`);
	return {
		type: GET_NOG_TYPES,
		payload: request
	}
}

export function setCurrentPattern(pattern) {
	return {
		type: SET_CURRENT_PATTERN,
		payload: pattern
	}
}

export function setCustomColorPalette(customColorsArray) {

	const newCustomArray = [];
	customColorsArray.forEach((color, index) => {
		let newObj = {};
		newObj.colorNum = index + 8;
		newObj.colorVal = color;
		newCustomArray.push(newObj);
	})
	// const	concatArray = defaultPaletteColors.concat(newCustomArray);
	const customColorPalette = _.mapKeys(newCustomArray, 'colorNum');
	console.log("customColorPalette", customColorPalette);

	return {
		type: SET_CUSTOM_COLOR_PALETTE,
		payload: customColorPalette
	}
}

export function setCurrentColorPalette(customColorsArray) {
	const defaultPalette = [
		{colorNum: 0, colorVal: '#FF0000'},
		{colorNum: 1, colorVal: '#FFFF00'},
		{colorNum: 2, colorVal: '#00FF00'},
		{colorNum: 3, colorVal: '#00FFFF'},
		{colorNum: 4, colorVal: '#0000FF'},
		{colorNum: 5, colorVal: '#FF00FF'},
		{colorNum: 6, colorVal: '#FFFFFF'},
		{colorNum: 7, colorVal: '#000000'}
	];
	const newCustomArray = [];
	customColorsArray.forEach((color, index) => {
		let newObj = {};
		newObj.colorNum = index + 8;
		newObj.colorVal = color;
		newCustomArray.push(newObj);
	})
	const	concatArray = defaultPalette.concat(newCustomArray);
	const currentColorPalette = _.mapKeys(concatArray, 'colorNum');
	console.log("currentColorPalette", currentColorPalette);
	return {
		type: SET_CURRENT_COLOR_PALETTE,
		payload: currentColorPalette
	}

}



export function setSelectedColor(colorNum) {
	const selColObj = { selectedColor: colorNum }
	return {
		type: SET_SELECTED_COLOR,
		payload: selColObj
	}
}

export function updatePattern(obj) {
	return {
		type: UPDATE_PATTERN,
		payload: obj
	}
}
