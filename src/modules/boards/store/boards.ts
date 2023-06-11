import { defineStore } from "pinia";
import {
  getBoards,
  getCurrentBoard,
} from "@/modules/boards/services/boards.service";
import { IBoard } from "@/modules/boards/types/types";
import { Undefinable } from "@/types";

export const useBoardsStore = defineStore("boards", {
  state: () => {
    return {
      boards: [],
      currentBoard: undefined as Undefinable<IBoard>,
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
        this.currentBoard = response.data;
      } catch (e: any) {
        return e.response;
      }
    },
  },
});
