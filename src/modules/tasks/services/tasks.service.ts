import $api from "@/api";
import tasksEndPoints from "@/modules/tasks/services/tasks.end-points";

export async function getTasks() {
  return $api.get(tasksEndPoints.getTasks);
}

export async function changeStatus() {
  return $api.patch(tasksEndPoints.getTasks);
}