import { useAppStore } from "../../store";
import { Router } from "vue-router";

const menu = {
	title: 'Домашняя страница',
	name: 'home',
	icon: 'mdi-home',
	url: '/'
};

function register(router: Router) {
	router.addRoute({
		path: '/',
		name: 'home',
		component: () => import(`./Home.vue`),
	});
}

export function bootstrapHome(router: Router) {
	const appStore = useAppStore();
	appStore.setMenuItem(menu);
	register(router);
}