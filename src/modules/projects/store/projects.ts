import { defineStore } from "pinia";

export const useProjectsStore = defineStore("Projects", {
  state: () => {
    return {
      projects: []
    }
  },
  actions: {
    setProjects() {

    },
  }
})