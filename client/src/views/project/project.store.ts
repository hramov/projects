import { defineStore } from "pinia";
import { Api } from "../../api/api";
import { useAppStore } from "../../store";

type CreateProject = {
	title: string;
	manager_id: number;
}

export const useProjectStore = defineStore('project', {
	state: () => ({
		projects: [],
		project: {},
		instance: new Api(),
		appStore: useAppStore(),
	}),
	
	actions: {
		async getProjects() {
			try {
				this.projects = await this.instance.get('/project');
			} catch(err) {
				this.appStore.showSnackbar({
					color: 'red',
					text: 'Не могу загрузить проекты'
				});
			}
			
		},
		async getProject(id: number) {
			const resp = await this.instance.get('/project/' + id);
			this.project = resp.data;
		},
		async saveProject(project: CreateProject) {
			try {
				const result = await this.instance.post('/project', project);
				this.appStore.showSnackbar({
					color: 'green',
					text: 'Проект успешно создан!'
				});
				return result;
			} catch(err ) {
				this.appStore.showSnackbar({
					color: 'red',
					text: 'Не могу создать проект'
				});
			}
		}
	},
})