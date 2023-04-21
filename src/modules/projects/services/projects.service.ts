import $api from "@/api";
import endPoints from "@/modules/projects/services/projects.end-points";

// TODO: Добавить три мока для этих запросов
export async function getProjects() {
  return $api.get(endPoints.mainUrl);
}

export async function getProject(data: any) {
  return $api.get(`${endPoints.mainUrl}/${data.projectId}`);
}

export async function createProject(data: any) {
  return $api.post(endPoints.mainUrl);
}
