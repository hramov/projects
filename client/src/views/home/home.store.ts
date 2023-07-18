import { defineStore } from "pinia";
import { Api } from "../../api/api";

export const useProjectStore = defineStore('home', {
	state: () => ({
		instance: new Api(),
	}),
	
	actions: {},
})