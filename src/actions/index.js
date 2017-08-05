export const GET_USER_PATTERNS = 'get_user_patterns';
export const GET_NOG_TYPES = 'get_nog_types';
export const SET_CURRENT_PATTERN = 'set_current_pattern';
export const SET_CURRENT_COLOR_PALETTE = 'set_current_color_palette';

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

export function setCurrentColorPalette(customColorsArray) {
	const defaultPaletteColors = ['#FF0000', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF', '#FFFFFF','#000000'];
	const	currentColorPalette = defaultPaletteColors.concat(customColorsArray);
	return {
		type: SET_CURRENT_COLOR_PALETTE,
		payload: currentColorPalette
	}
}
