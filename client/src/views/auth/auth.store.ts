import { defineStore } from "pinia";
import { Api } from "../../api/api";

export const useProjectStore = defineStore('project', {
	state: () => ({
		instance: new Api(),
	}),
	
	actions: {
	},
})