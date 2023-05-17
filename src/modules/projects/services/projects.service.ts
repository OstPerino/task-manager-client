import $api from "@/api";
import endPoints from "@/modules/projects/services/projects.end-points";
import boardsEndPoints from "@/modules/boards/services/boards.end-points";

// TODO: Добавить три мока для этих запросов
export async function getProjects() {
  return $api.get(endPoints.projects);
}

export async function createProject(data: any) {
  return $api.post(endPoints.projects);
}

export async function getCurrentProject(projectId: number) {
  return $api.get(`${endPoints.currentProject}/${projectId}`);
}