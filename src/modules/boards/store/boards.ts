import { defineStore } from "pinia";
import {getBoards, getCurrentBoard} from "@/modules/boards/services/boards.service";

export const useBoardsStore = defineStore("boards", {
  state: () => {
    return {
      boards: [],
      currentBoard: null
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
    async setCurrentBoard(boardId: number) {
      try {
        const response = await getCurrentBoard(boardId);
        console.log(response);
        this.currentBoard = response.data;
      } catch (e: any) {
        return e.response;
      }
    }
  },
});
