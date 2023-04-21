import $api from "@/api";
import endPoints from "@/modules/projects/services/endPoints";

// TODO: Добавить три мока для этих запросов
export async function getPosts() {
  return $api.get(endPoints.mainUrl);
}

export async function getOneProject(data: any) {
  return $api.get(`${endPoints.mainUrl}/${data.projectId}`);
}

export async function createProject(data: any) {
  return $api.post(endPoints.mainUrl);
}
