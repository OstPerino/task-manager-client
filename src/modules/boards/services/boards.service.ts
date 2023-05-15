import $api from "@/api";
import boardsEndPoints from "@/modules/boards/services/boards.end-points";

export async function getBoards(data: any) {
  return $api.get(`${boardsEndPoints.getBoards}/${data.projectId}`);
}

export async function getCurrentBoard(boardId: number) {
  return $api.get(`${boardsEndPoints.currentBoard}/${boardId}`)
}