import $api from "@/api";

export async function getBoards(data: any) {
  return $api.get(`/boards/${data.projectId}`);
}