import axios from "axios";

import { pathToGetBranches } from "@/helpers/editGithubUrl"

export const $githubApi = axios.create({
  headers: {
    Authorization: `Bearer ${process.env.VUE_APP_GITHUB_API_TOKEN}`,
  }
})

export async function getBranches(url: string | undefined) {
  const getUrlForBranches = pathToGetBranches(url);

  if (!getUrlForBranches) {
    return;
  }

  return $githubApi.get(getUrlForBranches);
}