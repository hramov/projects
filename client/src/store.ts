import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
	state: () => ({
		appTitle: 'Проекты ГВЦ',
		pageTitle: 'Домашняя страница',
		menu: [],
		adminMenu: [],
		snackbars: [],
		snackbarShown: false,
	}),
	
	actions: {
		setMenuItem(item) {
			if (Array.isArray(item)) {
				this.menu.push(...item);
			} else {
				this.menu.push(item);
			}
		},
		setAdminMenuItem(item) {
			if (Array.isArray(item)) {
				this.adminMenu.push(...item);
			} else {
				this.adminMenu.push(item);
			}
		},
		showSnackbar(message) {
			this.snackbarShown = true;
			this.snackbars.push(message);
		},
		calcMargin(i) {
			return (i*60) + 'px'
		},
		hide(i){
			this.snackbars.splice(i,1);
		}
	}
})