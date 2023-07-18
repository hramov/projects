import { useAppStore } from "../../store";
import { Router } from "vue-router";

const menu = [
	{
		title: 'Общие настройки',
		name: 'common',
		icon: 'mdi-cog-outline',
		url: '/common'
	},
	{
		title: 'Пользователи',
		name: 'users',
		icon: 'mdi-account-group',
		url: '/users'
	},
	{
		title: 'Роли',
		name: 'roles',
		icon: 'mdi-security',
		url: '/roles'
	},
	{
		title: 'Словари',
		name: 'dictionaries',
		icon: 'mdi-book-alphabet',
		url: '/dictionaries'
	},
];

function register (router: Router) {
	router.addRoute({
		path: '/common/',
		name: 'common',
		component: () => import(`./pages/Common.vue`),
	});
	router.addRoute({
		path: '/users/',
		name: 'users',
		component: () => import(`./pages/Users.vue`),
	});
	router.addRoute({
		path: '/roles/',
		name: 'roles',
		component: () => import(`./pages/Roles.vue`),
	});
	router.addRoute({
		path: '/dictionaries/',
		name: 'dictionaries',
		component: () => import(`./pages/Dictionaries.vue`),
	});
}

export function bootstrapAdmin(router: Router) {
	const appStore = useAppStore();
	appStore.setAdminMenuItem(menu);
	register(router);
}