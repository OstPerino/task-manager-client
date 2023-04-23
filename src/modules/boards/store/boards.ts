import { defineStore } from "pinia";
import { getBoards } from "@/modules/boards/services/boards.service";

export const useBoardsStore = defineStore("boards", {
  state: () => {
    return {
      boards: [],
    };
  },
  actions: {
    async setBoards(data: any) {
      try {
        const response = await getBoards(data);
        this.boards = response.data;
      } catch (e: any) {
        return e.response;
      }
    },
  },
});