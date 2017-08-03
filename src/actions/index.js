export const GET_USER_PATTERNS = 'get_user_patterns';

import axios from 'axios';


export const ROOT_URL = 'https://nog-server.herokuapp.com/api';

export function getUserPatterns(id) {
	const request = axios.get(`${ROOT_URL}/userpatterns/${id}`);
	return {
		type: GET_USER_PATTERNS,
		payload: request
	}
}
