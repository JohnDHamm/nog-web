export const GET_USER_PATTERNS = 'get_user_patterns';
export const GET_NOG_TYPES = 'get_nog_types';
export const SET_CURRENT_PATTERN = 'set_current_pattern';
export const UPDATE_LIGHT = 'update_light';
export const SET_CURRENT_COLOR_PALETTE = 'set_current_color_palette';
export const SET_SELECTED_COLOR = 'set_selected_color';
export const SET_LIGHTS = 'set_lights';
export const UPDATE_DEFAULT_SPEED = 'update_default_speed';
export const UPDATE_INSTANCES = 'update_instances';
export const UPDATE_NUM_INSTANCES = 'update_num_instances';
export const CREATE_NEW_PATTERN = 'create_new_pattern';

import axios from 'axios';

// export const ROOT_URL = 'https://nog-server.herokuapp.com/api';
export const ROOT_URL = 'http://localhost:3000/api';

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
	const newPattern = {};
	newPattern._id = pattern._id;
	newPattern.name = pattern.name;
	newPattern.description = pattern.description;
	newPattern.defaultSpeed = pattern.defaultSpeed;
	newPattern.defaultColor = pattern.defaultColor;
	newPattern.customColors = pattern.customColors;
	newPattern.singleColor = pattern.singleColor;
	newPattern.numInstances = pattern.instances.length;
	return {
		type: SET_CURRENT_PATTERN,
		payload: newPattern
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
	return {
		type: SET_CURRENT_COLOR_PALETTE,
		payload: currentColorPalette
	}
}

export function setCurrentLights(currentPattern) {
	let currentLights = {};
	for (let lightNum = 0; lightNum < 30; lightNum++) {
		let instanceArray = [];
		for (let i = 0; i < currentPattern.instances.length; i++) {
			let thisInstanceObj = {};
			thisInstanceObj.instanceNum = i;
			thisInstanceObj.colorNum = currentPattern.instances[i].lightsColor[lightNum];
			instanceArray.push(thisInstanceObj);
		}
		currentLights[lightNum] = _.mapKeys(instanceArray, 'instanceNum');
	}
	return {
		type: SET_LIGHTS,
		payload: currentLights
	}
}

export function setSelectedColor(colorNum) {
	const selColObj = { selectedColor: colorNum }
	return {
		type: SET_SELECTED_COLOR,
		payload: selColObj
	}
}

export function updateLight(obj) {
	return {
		type: UPDATE_LIGHT,
		payload: obj
	}
}

export function updateDefaultSpeed(obj, callback) {
	const request = axios.patch(`${ROOT_URL}/userpattern`, obj)
		.then(() => callback());
	return {
		type: UPDATE_DEFAULT_SPEED,
		payload: obj.defaultSpeed
	}
}

export function saveLights(obj, callback) {
	const request = axios.patch(`${ROOT_URL}/userpattern`, obj)
		.then((res) => callback(res));
	return {
		type: UPDATE_INSTANCES,
		payload: obj
	}
}

export function updateCurrentLights(obj) {
	return {
		type: SET_LIGHTS,
		payload: obj
	}
}

export function updateNumInstances(num) {
	return {
		type: UPDATE_NUM_INSTANCES,
		payload: num
	}
}

export function postNewPattern(obj, callback) {
	const request = axios.post(`${ROOT_URL}/createpattern`, obj)
		.then((res) => callback(res));
	return {
		type: CREATE_NEW_PATTERN, //need to update state.userPatterns?
		payload: request
	}
}
