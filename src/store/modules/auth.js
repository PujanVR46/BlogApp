import axios from 'axios';
import CONSTANTS from '../constants';
/* eslint-disable default case, no-unused-vars */
const state = {
	tokenValue: ''
};

const getters = {
	token: state => state.tokenValue
};

const actions = {
	async login({ commit }, data) {
		try {
			const response = await axios.post(`${CONSTANTS.baseUrl}/api/v1/auth/login`, data);
			commit('loggedIn', response.data);
			return response.data;
		} catch (e) {
			throw e;
		}
	},

	async register({ commit }, data) {
		try {
			const response = await axios.post(`${CONSTANTS.baseUrl}/api/v1/auth/register`, data);
			return response.data;
		} catch (e) {
			throw e;
		}
	}
};

const mutations = {
	loggedIn: (state, tokenValue) => (state.tokenValue = tokenValue.token),
	logout: state => (state.tokenValue = '')
};
export default {
	state,
	actions,
	mutations,
	getters
};
