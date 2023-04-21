import { defineStore } from "pinia";
import { getProjects } from "@/modules/projects/services/projects.service";

export const useProjectsStore = defineStore("projects", {
  state: () => {
    return {
      projects: [],
    };
  },
  actions: {
    async setProjects() {
      try {
        const response = await getProjects();
        this.projects = response.data;
      } catch (e: any) {
        return e.response;
      }
    },
  },
});
