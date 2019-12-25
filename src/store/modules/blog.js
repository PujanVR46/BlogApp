import axios from 'axios';
import CONSTANTS from '../constants';
/* eslint-disable default case, no-unused-vars */
/* eslint-disable default case, no-console */
const state = {
	blogData: [],
	allBlogData: [],
	blogDetail: {},
	updatedData: {}
};

const getters = {
	blogData: state => state.blogData,
	allBlogData: state => state.allBlogData
};

const actions = {
	async fetchBlogData({ commit }) {
		try {
			const config = {
				headers: {
					Authorization: 'Bearer ' + window.localStorage.getItem('authenticated')
				}
			};
			const response = await axios.get(`${CONSTANTS.baseUrl}/api/v1/blogs`, config);
			commit('userBlogData', response.data);
		} catch (e) {
			throw e;
		}
	},

	async addBlog({ commit }, data) {
		try {
			const config = {
				headers: {
					Authorization: 'Bearer ' + window.localStorage.getItem('authenticated')
				}
			};
			const response = await axios.post(`${CONSTANTS.baseUrl}/api/v1/blogs`, data, config);
			commit('addBlogData', response.data);
			return;
		} catch (e) {
			throw e;
		}
	},
	async editBlog({ commit }, data) {
		try {
			const config = {
				headers: {
					Authorization: 'Bearer ' + window.localStorage.getItem('authenticated')
				}
			};
			const response = await axios.put(`${CONSTANTS.baseUrl}/api/v1/blogs/${data.id}`, data, config);
			commit('updateData', response.data);
			console.log(response.data, 'res');
			return;
		} catch (e) {
			throw e;
		}
	},
	async deleteBlog({ commit }, id) {
		const config = {
			headers: {
				Authorization: 'Bearer ' + window.localStorage.getItem('authenticated')
			}
		};
		await axios.delete(`${CONSTANTS.baseUrl}/api/v1/blogs/${id}`, config);
		commit('removeBlog', id);
	},
	async fetchAllBlog({ commit }) {
		try {
			const response = await axios.get(`${CONSTANTS.baseUrl}/api/v1/allblogs`);
			commit('allBlogData', response.data);
		} catch (e) {
			throw e;
		}
	}
};

const mutations = {
	userBlogData: (state, blogData) => (state.blogData = blogData),
	addBlogData: (state, blogData) => state.blogData.push(blogData),
	updateData: (state, updatedData) => {
		const index = state.blogData.findIndex(each => each.id === updatedData.id);
		if (index != -1) {
			state.blogData.splice(index, 1, updatedData);
		}
	},
	removeBlog: (state, id) => {
		const index = state.blogData.findIndex(each => each.id === id);
		state.blogData.splice(index, 1);
	},
	allBlogData: (state, allBlogData) => (state.allBlogData = allBlogData)
};

export default {
	state,
	actions,
	mutations,
	getters
};
