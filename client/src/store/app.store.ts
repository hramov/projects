import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
				state: () => ({
								appTitle: 'Проекты ГВЦ',
								pageTitle: 'Домашняя страница',
				}),
})