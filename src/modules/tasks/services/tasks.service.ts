import $api from "@/api";
import tasksEndPoints from "@/modules/tasks/services/tasks.end-points";

export async function getTasks(boardId: number) {
  return $api.get(`${tasksEndPoints.getTasks}/${boardId}`);
}

export async function changeStatus(taskId: number, status: string) {
  return $api.patch(`${tasksEndPoints.getTasks}/${taskId}`, { status: status });
}