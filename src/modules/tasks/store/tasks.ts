import { defineStore } from "pinia";
import { getTasks } from "@/modules/tasks/services/tasks.service";
import { TaskStatus } from "@/types/enums";
import { Task } from "@/modules/tasks/types/types";

export const useTasksStore = defineStore("tasks", {
  state: () => {
    return {
      tasks: [],
      notAllowed: [],
      notStarted: [],
      active: [],
      done: [],
    };
  },
  actions: {
    async setTasks() {
      try {
        const response = await getTasks();
        this.tasks = response.data;
        this.notStarted = this.tasks.filter(
          (item: Task) => item.status === TaskStatus.NOT_STARTED
        );
        this.notAllowed = this.tasks.filter(
          (item: Task) => item.status === TaskStatus.NOT_ALLOWED
        );
        this.active = this.tasks.filter(
          (item: Task) => item.status === TaskStatus.ACTIVE
        );
        this.done = this.tasks.filter(
          (item: Task) => item.status === TaskStatus.DONE
        );
      } catch (e: any) {
        return e.response;
      }
    },
  },
});
