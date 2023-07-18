import {createRouter, createWebHistory, RouteLocationRaw} from 'vue-router';

export async function openLink(link: RouteLocationRaw) {
	return router.push(link)
}

export const router = createRouter({
	history: createWebHistory(),
	routes: [],
});