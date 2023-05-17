import { defineStore } from "pinia";
import {
  getCurrentProject,
  getProjects,
} from "@/modules/projects/services/projects.service";

export const useProjectsStore = defineStore("projects", {
  state: () => {
    return {
      projects: [],
      currentProject: null,
    };
  },
  actions: {
    async setProjects() {
      try {
        const response = await getProjects();
        this.projects = response.data;
        console.log(response);
      } catch (e: any) {
        return e.response;
      }
    },
    async setCurrentProject(projectId: number) {
      try {
        const response = await getCurrentProject(+projectId);
        this.currentProject = response.data;
        console.log(response);
      } catch (e: any) {
        return e.reponse;
      }
    },
  },
});
