import Vue from 'vue';
import VueRouter from 'vue-router';
import StartPage from '../components/StartPage.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import BlogAdd from '../components/BlogAdd.vue';
import BlogView from '../components/BlogView.vue';
import BlogDetail from '../components/BlogDetail.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'startpage',
		component: StartPage
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '/register',
		name: 'register',
		component: Register
	},
	{
		path: '/blog-add',
		name: 'blogadd',
		component: BlogAdd
	},
	{
		path: '/blog-view',
		name: 'blogview',
		component: BlogView
	},
	{
		path: '/blog-view/:id',
		name: 'blogdetail',
		component: BlogDetail
	}
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

export default router;
