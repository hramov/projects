import { Router } from "vue-router";

function register (router: Router) {
	router.addRoute({
		path: '/login/',
		name: 'login',
		component: () => import(`./pages/Login.vue`),
	});
	router.addRoute({
		path: '/register/',
		name: 'register',
		component: () => import(`./pages/Register.vue`),
	});
}

export function bootstrapAuth(router: Router) {
	register(router);
}