import axios from 'axios';
import CONSTANTS from '../constants';
/* eslint-disable default case, no-unused-vars*/
/* eslint-disable default case, no-console*/

const state = {
	loggedIn: (window.localStorage.getItem('loginStatus')=="true") || false
};

const getters = {
	loggedIn: state => state.loggedIn
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
			commit('register', response.data);
			return response.data;
		} catch (e) {
			throw e;
		}
	}
};

const mutations = {
	loggedIn: (state, tokenValue) => {
		window.localStorage.setItem('authenticated', tokenValue.token);
		window.localStorage.setItem('loginStatus', true);
		state.loggedIn = true;
	},
	register: (state, tokenValue) => {
		window.localStorage.setItem('authenticated', tokenValue.token);
		window.localStorage.setItem('loginStatus', true);
		state.loggedIn = true;
	},
	logout: state => (state.loggedIn = false)
};
export default {
	state,
	actions,
	mutations,
	getters
};
