import { defineStore } from "pinia";
import { Api } from "../api/api";

type CreateProject = {
	title: string;
	manager_id: number;
}

export const useProjectStore = defineStore('project', {
	state: () => ({
		projects: [],
		project: {},
		instance: new Api(),
	}),
	
	actions: {
		async getProjects() {
			this.projects = await this.instance.get('/project');
		},
		async getProject(id: number) {
			const resp = await this.instance.get('/project/' + id);
			this.project = resp.data;
		},
		saveProject(project: CreateProject) {
			console.log(project);
			return this.instance.post('/project', project);
		}
	},
})