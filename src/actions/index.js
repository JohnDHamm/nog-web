export const GET_USER_PATTERNS = 'get_user_patterns';
export const GET_NOG_TYPES = 'get_nog_types';
export const SET_CURRENT_PATTERN = 'set_current_pattern';

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
