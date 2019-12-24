import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import blog from './modules/blog';
// import createPersistedState from 'vuex-persistedstate';
// import * as Cookies from 'js-cookie';

Vue.use(Vuex);

export default new Vuex.Store({
	// plugins: [
	// 	createPersistedState()],
	modules: {
		auth,
		blog
	}
});
