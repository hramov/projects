import { useAppStore } from "../../store";
import { Router } from "vue-router";

const menu = {
	title: 'Проекты',
	name: 'project',
	icon: 'mdi-folder',
	url: '/project'
};

function register (router: Router) {
	router.addRoute({
		path: '/project/',
		name: 'project',
		component: () => import(`./Project.vue`),
	});
	router.addRoute({
		path: '/project/:id',
		name: 'single-project',
		component: () => import(`./pages/SingleProject.vue`),
	});
}

export function bootstrapProject(router: Router) {
	const appStore = useAppStore();
	appStore.setMenuItem(menu);
	register(router);
}