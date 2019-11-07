import axios from 'axios';
import CONSTANTS from '../constants';
/* eslint-disable default case, no-unused-vars */
/* eslint-disable default case, no-console */
const state = {
	blogData: [],
	allBlogData: [],
	blogDetail: {}
};

const getters = {
	blogData: state => state.blogData,
	allBlogData: state => state.allBlogData,
	blogDetail: state => state.blogDetail
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
			commit('blogData', response.data);
		} catch (e) {
			throw e;
		}
	},

	async fetchBlogDetail({ commit }, id) {
		try {
			const config = {
				headers: {
					Authorization: 'Bearer ' + window.localStorage.getItem('authenticated')
				}
			};
			const response = await axios.get(`${CONSTANTS.baseUrl}/api/v1/blogs/${id}`, config);
			commit('blogDetail', response.data);
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
	blogData: (state, blogData) => (state.blogData = blogData),
	addBlogData: (state, blogData) => state.blogData.push(blogData),
	removeBlog: (state, id) => (state.blogData = state.blogData.filter(each => each.id !== id)),
	allBlogData: (state, allBlogData) => (state.allBlogData = allBlogData),
	blogDetail: (state, blogDetail) => (state.blogDetail = blogDetail)
};
export default {
	state,
	actions,
	mutations,
	getters
};
