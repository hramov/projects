import {createRouter, createWebHistory, RouteLocationRaw} from 'vue-router';
import { pages } from "./config/config";
import { useUserStore } from "./store/user.store";

export class ConfigRouterItem {
				id: number;
				url: string;
				title: string;
				name: string;
}

export interface VueRouterItem {
				path: string,
				name: string,
				component: () => Promise<any>,
}

export async function openLink(link: RouteLocationRaw) {
				return router.push(link)
}

function makeRoutes(): Array<VueRouterItem> {
				return pages.map((item: ConfigRouterItem) => ({
												path: item.url,
												name: item.name,
												component: () => import(`./views/${item.name}/${item.name.charAt(0).toUpperCase() + item.name.slice(1)}.vue`),
								})
				)
}

const routes = [
				{
						path: '/login',
						name: 'login',
								component: () => import(`./views/auth/Login.vue`),
				},
				{
								path: '/register',
								name: 'register',
								component: () => import(`./views/auth/Register.vue`),
				},
				{
								path: '/account',
								name: 'account',
								component: () => import(`./views/account/Account.vue`),
				},
				...makeRoutes(),
];

export const router = createRouter({
				history: createWebHistory(),
				routes,
});

router.beforeEach((to) => {
				const userStore = useUserStore();
				if (to.path !== '/login') {
								if (!userStore.user.id) {
												openLink('/login');
								}
				}
});